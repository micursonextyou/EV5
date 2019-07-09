//uso hamer para el control de lo drag and drop



$(function(){

});
var newjuegos;
var Candys=function(){
  var Game = function() {
////////////////////////////////////////////////////////////////////////
  	this.inicio = function(size, base, ui) {
  		this.base = base;
  		this.ui = ui;
  		this.tamaOri = size;
  		this.tamano = this.tamaOriOri;
  		this.altura = base.height() / this.tamaOri;
  		this.nivel = [];
  		this.tipoDulces = 4;
  		this.llenar = true;
  		this.switchEnd = true;
  		this.playerControl = false;
  		this.funaleatoria();
  		this.drawNewLevel();
  		this.score = 0;



  		setTimeout($.proxy(this.comprobarlineas, this), 1000);
  	};
///////////////////////////////////////////////////////////////////////
this.GameControl = function(play) {
  if (play) {
    this.playerControl = true;
    //this.DraggableEvent();
  } else {
    this.playerControl = false;
    //base.find('.row').hammer().off('swipeleft swiperight swipeup swipedown');
  }
};

//////////////////////////////////////////////////////////////////////

this.DraggableEvent = function() {
  var that = this;
  var position;

  this.base.hammer().on('dragleft dragright dragup dragdown', '.row', function(event) {
    event.gesture.preventDefault();
     position = +$(this).attr('data-id');

    if (position !== undefined) {
      that.moviminetos(position, event.type);
      event.gesture.stopDetect();
      return;
    }
  });
};

/////////////////////////////////////////////////////////////////////

this.moviminetos = function(position, direction) {
  switch(direction) {
    case "dragleft":
      if (position % this.tamaOri !== 0) {
        this.MoverDulces(this.base.find('.row[data-id='+position+']'), position, this.base.find('.row[data-id='+(position - 1)+']'), position - 1);
    }
    break;

    case "dragright":
      if (position % this.tamaOri !== this.tamaOri - 1) {
        this.MoverDulces(this.base.find('.row[data-id='+position+']'), position, this.base.find('.row[data-id='+(position + 1)+']'), position + 1);
      }
    break;

    case "dragup":
      this.MoverDulces(this.base.find('.row[data-id='+position+']'), position, this.base.find('.row[data-id='+(position - this.tamaOri)+']'), position - this.tamaOri);
    break;

    case "dragdown":
      this.MoverDulces(this.base.find('.row[data-id='+position+']'), position, this.base.find('.row[data-id='+(position + this.tamaOri)+']'), position + this.tamaOri);
    break;
  }
};
///////////////////////////////////////////////////////////////////////////////

this.MoverDulces = function(a, aID, b, bID) {

  //console.log("switch: ", aID, bID);

  if (this.switchEnd && a !== undefined && b !== undefined && aID >= 0 && bID >= 0 && aID <= this.size && bID <= this.size) {

    var that = this;
    var aTop = a.css('top');
    var aLeft = a.css('left');
    var bTop = b.css('top');
    var bLeft = b.css('left');
    var aType = this.level[aID];
    var bType = this.level[bID];

    this.switchEnd = false;

    this.level[aID] = bType;
    this.level[bID] = aType;

    this.comboUpdate(0);

    //console.log("a&b types: ", bType, aType);

    a.attr('data-id', bID).animate({
      top: bTop,
      left: bLeft
    }, 250);

    b.attr('data-id', aID).animate({
      top: aTop,
      left: aLeft
    }, 250, function() {
      that.switchEnd = true;
      that.comprobarlineas();
    });
  }
};


///////////////////////////////////////////////////////////////////////

this.funaleatoria = function() {
  var i;
  for (i = 0; i < this.size; i++) {
    this.level[i] = Math.round(Math.random() * this.tipoDulces );
  }
};
////////////////////////////////////////////////////////////////////////
this.nuevoLevel = function() {
  var i;
  var row = $(document.createElement('div'));
  var lines = -1;

  $('.row').remove();

  for (i = 0; i < this.tamano; i++) {

    if (i % this.tamaOri === 0) {
      lines++;
    }

    row.css({
      top: lines * this.altura,
      left: i % this.tamaOri * this.altura,
      height: this.altura,
      width: this.altura
    }).attr({
      "class": 'type-' + this.level[i] + ' row',
      "data-id": i
    });

    this.base.append(row.clone());
  }

  this.lines = lines + 1;
  this.itemByLine = this.tamano / this.lines;

  this.DraggableEvent();
  this.GameControl(true);
};


////////////////77//////////////////////////////////////////////////

this.comprobarlineas = function() {
  var k;
  var counter = 0;

  //reset
  this.base.find('.row').removeClass('.glow');

  for (k = 0; k < this.tamano; k++) {
    counter = counter + this.dulcesalrededor(this.level[k], k);
  }

  if (counter === this.tamano) {
    this.GameControl(true);
    return true;
  } else {
    this.GameControl(false);
    return false;
  }
};
////////////////////////////////////////////////////////////////////////////////

this.dulcesalrededor = function(gemType, position) {
  var flag = false;

  if ( this.level[position - 1] === gemType && this.level[position + 1] === gemType && (position + 1) % this.lines !== 0 && position % this.lines ){
    this.eliminarDulce([position, position - 1, position + 1]);
  } else {
    flag = true;
  }

  if ( this.level[position - this.itemByLine] === gemType && this.level[position + this.
    itemByLine] === gemType ){
    this.eliminarDulce([position - this.itemByLine, position, position + this.itemByLine]);
  } else {
    flag = true;
  }

  if (flag) {
    return 1;
  } else {
    return 0;
  }
};
////////////////////////////////////////////////////////////////////////////////

this.eliminarDulce = function(gemsToRemove) {
  var i;

  for (i = 0; i < gemsToRemove.length; i++) {
    this.level[gemsToRemove[i]] = 0;
    this.animarEliminar(gemsToRemove[i]);
  }
};
////////////////////////////////////////////////////////////////////////////////
this.animarEliminar = function(position) {
  var that = this;

  var difference = this.altura / 2;

  this.base.find('.row[data-id='+position+']')
  .attr('data-id', false)
  .addClass('glow').animate({ opacity: 0.4},500)
  .animate({ opacity: 1},500)
  .animate({
    marginTop: difference,
    marginLeft: difference,
    height: 0,
    width: 0
  }, 500, function() {
    $(this).remove();
    that.scoreUpdate(100);
  });

  if (that.fillEnd) {
    that.comboUpdate(1);
    that.fillHoles();
  }
};

////////////////////////////////////////////////////////////////////////////////
};
