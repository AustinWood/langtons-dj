// Interface.Slider = function(params){
//
// 	if (this instanceof Interface.Slider){
//
// 		this.tone = params.tone;
//
// 		/**
// 		 *  the name
// 		 */
// 		var name = params.name ? params.name : this.tone ? this.tone.toString() : "";
//
// 		/**
// 		 *  callback functions
// 		 */
// 		this.start = params.start;
//
// 		this.end = params.end;
//
// 		this.drag = params.drag;
//
// 		/**
// 		 *  the axis indicator
// 		 */
// 		this.axis = params.axis || "x";
//
// 		if (!params.element){
//
// 			this.container = $("<div>", {
// 				"class" : "Slider "+this.axis,
// 			}).appendTo(params.parent || "#Content");
//
// 			this.element = $("<div>", {
// 				"class" : "Dragger",
// 				"id" : name
// 			}).appendTo(this.container)
// 				.on("dragMove", this._ondrag.bind(this))
// 				.on("touchstart mousedown", this._onstart.bind(this))
// 				.on("dragEnd touchend mouseup", this._onend.bind(this));
//
// 			this.name = $("<div>", {
// 				"id" : "Name",
// 				"text" : name
// 			}).appendTo(this.element);
//
// 			this.element.draggabilly({
// 				"axis" : this.axis,
// 				"containment": this.container.get(0)
// 			});
// 		} else {
// 			this.element = params.element;
//
// 			this.container = params.container;
// 		}
//
// 		this.axisIndicator = $("<div>", {
// 			"id" : this.axis + "Axis",
// 			"class" : "Axis"
// 		}).appendTo(this.container);
//
// 		/**
// 		 *  the initial value / position
// 		 */
// 		this.parameter = params.param || false;
// 		//default values
// 		this.min = typeof params.min === "undefined" ? 0 : params.min;
// 		this.max = typeof params.max === "undefined" ? 1 : params.max;
// 		this.exp = typeof params.exp === "undefined" ? 1 : params.exp;
// 		if (params.options){
// 			this.options = params.options;
// 			this.min = 0;
// 			this.max = this.options.length - 1;
// 			this.exp = params.exp || 1;
// 		}
//
// 		/**
// 		 *  cache some measurements for later
// 		 */
// 		this.halfSize = this.element.width() / 2;
//
// 		this.maxAxis = this.axis === "x" ? "width" : "height";
// 		this.posAxis = this.axis === "x" ? "left" : "top";
// 		this.oppositeAxis = this.axis === "x" ? "top" : "left";
//
// 		/**
// 		 *  initial value
// 		 */
// 		if (this.parameter || typeof params.value !== "undefined"){
//
// 			var paramValue = typeof params.value !== "undefined" ? params.value : this.tone.get(this.parameter);
//
// 			this.value(paramValue);
// 		}
//
// 	} else {
// 		return new Interface.Slider(params);
// 	}
// };
//
// Interface.Slider.prototype.value = function(val){
// 	var maxSize = this.container[this.maxAxis]() - this.element[this.maxAxis]();
// 	//y gets inverted
// 	if (this.axis === "y"){
// 		maxSize = this.container[this.maxAxis]() - maxSize;
// 	}
//
// 	if (val.hasOwnProperty(this.parameter)){
// 		val = val[this.parameter];
// 	}
//
// 	if (this.options){
// 		val = this.options.indexOf(val);
// 	}
//
// 	var pos = (val - this.min) / (this.max - this.min);
// 	pos = Math.pow(pos, 1 / this.exp) * (maxSize );
// 	this.element.css(this.posAxis, pos);
//
// 	if (this.options){
// 		this._setParam(this.options[val]);
// 	}
// };
//
//
// Interface.Slider.prototype._ondrag = function(e, pointer){
// 	if (typeof this.top === "undefined"){
// 		this.top = this.container.offset().top;
// 		this.left = this.container.offset().left;
// 	}
//
// 	var normPos;
// 	if (this.axis === "x"){
// 		var xVal = Math.max((pointer.pageX - this.left), 0);
// 		normPos =  xVal / (this.container.width());
// 	}  else {
// 		var yVal = Math.max((pointer.pageY - this.top ), 0);
// 		normPos =  yVal / (this.container.height());
// 		normPos = 1 - normPos;
// 	}
// 	normPos = Math.pow(normPos, this.exp);
//
// 	var result = normPos * (this.max - this.min) + this.min;
//
// 	result = Math.max(Math.min(this.max, result), this.min);
//
// 	var value = result;
//
// 	if (this.options){
// 		value = this.options[Math.round(result)];
// 	}
//
// 	if (this.drag){
// 		this.drag(value);
// 	}
//
// 	this._setParam(value);
// };
//
// Interface.Slider.prototype._onstart = function(e){
// 	e.preventDefault();
// 	if (this.start){
// 		this.start();
// 	}
// };
//
// Interface.Slider.prototype._onend = function(){
// 	if (this.end){
// 		this.end();
// 	}
// };
//
// Interface.Slider.prototype._setParam = function(value){
// 	if (this.parameter && this.tone){
// 		this.tone.set(this.parameter, value);
// 	}
// };
