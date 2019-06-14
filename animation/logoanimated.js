(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"logoanimated_atlas_", frames: [[700,379,318,333],[0,0,380,342],[700,0,313,377],[382,0,316,380],[296,382,185,232],[483,382,81,109],[0,344,294,379],[296,714,406,157]]}
];


// symbols:



(lib.Image = function() {
	this.initialize(ss["logoanimated_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Asset2 = function() {
	this.initialize(ss["logoanimated_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["logoanimated_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["logoanimated_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["logoanimated_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["logoanimated_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["logoanimated_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(ss["logoanimated_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Text_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_6();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text_Layer_1, null, null);


(lib.Ellipse_3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3263,0.3263);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ellipse_3_Layer_1, null, null);


(lib.Ellipse_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3263,0.3263);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ellipse_2_Layer_1, null, null);


(lib.Ellipse_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3263,0.3263);

	this.instance_1 = new lib.CachedTexturedBitmap_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0.5,0.3263,0.3263);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ellipse_1_Layer_1, null, null);


(lib.Boomerang_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Asset2();
	this.instance.parent = this;
	this.instance.setTransform(0,89.05,0.5222,0.5191,0,-22.0282,-26.6586);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Boomerang_Layer_1, null, null);


(lib.Arrow_Final_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(0,63.8,0.4892,0.4943,0,-19.9174,-24.2132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Arrow_Final_Layer_1, null, null);


(lib.Text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Text_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(101.5,39.3,1,1,0,0,0,101.5,39.3);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text, new cjs.Rectangle(0,0,203,78.5), null);


(lib.Scene_1_Text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.instance = new lib.Text();
	this.instance.parent = this;
	this.instance.setTransform(-233.1,688.9,1,1,0,0,0,101.5,39.1);
	this.instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({x:537.85,y:789.75,visible:true},0).wait(1).to({regY:39.3,x:537.5,y:782.75},0).wait(1).to({x:537.1,y:775.1},0).wait(1).to({x:536.75,y:767},0).wait(1).to({x:536.3,y:758.4},0).wait(1).to({x:535.9,y:749.35},0).wait(1).to({x:535.45,y:739.85},0).wait(1).to({x:534.95,y:729.85},0).wait(1).to({x:534.45,y:719.4},0).wait(1).to({x:533.9,y:708.45},0).wait(1).to({x:533.4,y:697.05},0).wait(1).to({x:532.8,y:685.2},0).wait(1).to({x:532.2,y:672.85},0).wait(1).to({x:531.6,y:660.05},0).wait(1).to({x:530.95,y:646.75},0).wait(1).to({x:530.3,y:633},0).wait(1).to({x:529.65,y:618.75},0).wait(1).to({x:528.95,y:604.1},0).wait(1).to({x:528.2,y:588.95},0).wait(1).to({x:527.45,y:573.3},0).wait(1).to({x:526.7,y:557.2},0).wait(1).to({x:525.9,y:540.65},0).wait(1).to({x:525.1,y:523.6},0).wait(1).to({x:524.25,y:506.1},0).wait(1).to({x:523.45,y:489.15},0).wait(115));

}).prototype = p = new cjs.MovieClip();


(lib.Ellipse3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Ellipse_3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(13.2,17.8,1,1,0,0,0,13.2,17.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ellipse3, new cjs.Rectangle(0,0,26.5,35.6), null);


(lib.Ellipse2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Ellipse_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(30.2,37.9,1,1,0,0,0,30.2,37.9);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ellipse2, new cjs.Rectangle(0,0,60.4,75.7), null);


(lib.Ellipse1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Ellipse_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(51.6,62,1,1,0,0,0,51.6,62);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ellipse1, new cjs.Rectangle(0,0,103.1,124), null);


(lib.Boomerang = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Boomerang_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(122,126.8,1,1,0,0,0,122,126.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Boomerang, new cjs.Rectangle(0,0,244,253.6), null);


(lib.ArrowFinal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Arrow_Final_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(99,109.3,1,1,0,0,0,99,109.3);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ArrowFinal, new cjs.Rectangle(0,0,198,218.6), null);


(lib.Target_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Ellipse3();
	this.instance.parent = this;
	this.instance.setTransform(87.75,94.25,1.3753,1.5321,0,0,0,13.3,17.8);

	this.instance_1 = new lib.Ellipse2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(84.7,94.15,1.3753,1.5321,0,0,0,30.3,37.9);

	this.instance_2 = new lib.Ellipse1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(78.3,94.25,1.3753,1.5321,0,0,0,51.6,62);

	this.instance_3 = new lib.CachedTexturedBitmap_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.5,-0.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Target_Layer_1, null, null);


(lib.Target = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Target_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(74.3,94.3,1,1,0,0,0,74.3,94.3);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Target, new cjs.Rectangle(-0.5,-0.7,149.7,190), null);


(lib.Scene_1_Target = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Target
	this.instance = new lib.Target();
	this.instance.parent = this;
	this.instance.setTransform(505.5,355.7,1,1,0,0,0,74.4,94.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({x:510.4},0).wait(1).to({x:505.5},0).wait(1).to({x:510.4},0).wait(1).to({x:505.5},0).wait(136));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Boomerang = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Boomerang
	this.instance = new lib.Boomerang();
	this.instance.parent = this;
	this.instance.setTransform(-296.4,422.85,1,1,0,0,0,122,126.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:20.8696,x:-276.85,y:406.9},0).wait(1).to({rotation:41.7391,x:-256.8,y:391.6},0).wait(1).to({rotation:62.6087,x:-236.35,y:376.8},0).wait(1).to({rotation:83.4783,x:-215.65,y:362.4},0).wait(1).to({rotation:104.3478,x:-194.65,y:348.35},0).wait(1).to({rotation:125.2174,x:-173.5,y:334.55},0).wait(1).to({rotation:146.087,x:-152.1,y:321},0).wait(1).to({rotation:166.9565,x:-130.5,y:307.8},0).wait(1).to({rotation:187.8261,x:-108.75,y:294.85},0).wait(1).to({rotation:208.6957,x:-86.8,y:282.1},0).wait(1).to({rotation:229.5652,x:-64.85,y:269.75},0).wait(1).to({rotation:250.4348,x:-42.55,y:257.6},0).wait(1).to({rotation:271.3043,x:-20.2,y:245.8},0).wait(1).to({rotation:292.1739,x:2.3,y:234.2},0).wait(1).to({rotation:313.0435,x:24.95,y:223.05},0).wait(1).to({rotation:333.913,x:47.85,y:212.2},0).wait(1).to({rotation:354.7826,x:70.9,y:201.7},0).wait(1).to({rotation:375.6522,x:94,y:191.65},0).wait(1).to({rotation:396.5217,x:117.45,y:182.05},0).wait(1).to({rotation:417.3913,x:141,y:172.95},0).wait(1).to({rotation:438.2609,x:164.75,y:164.4},0).wait(1).to({rotation:459.1304,x:188.75,y:156.5},0).wait(1).to({rotation:480,x:213,y:149.3},0).wait(1).to({rotation:500.8696,x:237.45,y:143.05},0).wait(1).to({rotation:521.7391,x:261.25,y:137.95},0).wait(1).to({rotation:542.6087,x:286.45,y:136.95},0).wait(1).to({rotation:563.4783,x:312.2,y:137.35},0).wait(1).to({rotation:584.3478,x:337.65,y:138.6},0).wait(1).to({rotation:605.2174,x:362.95,y:140.85},0).wait(1).to({rotation:626.087,x:388.2,y:144.15},0).wait(1).to({rotation:646.9565,x:413.25,y:148.75},0).wait(1).to({rotation:667.8261,x:433.95,y:153.4},0).wait(1).to({rotation:688.6957,x:462.25,y:155.85},0).wait(1).to({rotation:709.5652,x:487.95,y:157.15},0).wait(1).to({rotation:730.4348,x:513.45,y:157.9},0).wait(1).to({rotation:751.3043,x:538.75,y:158.3},0).wait(1).to({rotation:772.1739,x:564.05,y:158.15},0).wait(1).to({rotation:793.0435,x:589.25,y:157.7},0).wait(1).to({rotation:813.913,x:614.55,y:156.8},0).wait(1).to({rotation:834.7826,x:639.8,y:155.5},0).wait(1).to({rotation:855.6522,x:664.95,y:153.85},0).wait(1).to({rotation:876.5217,x:690.2,y:151.7},0).wait(1).to({rotation:897.3913,x:715.4,y:149.15},0).wait(1).to({rotation:918.2609,x:739.15,y:146.65},0).wait(1).to({rotation:939.1304,x:765.3,y:146.4},0).wait(1).to({rotation:960,x:790.9,y:147.9},0).wait(1).to({rotation:980.8696,x:816.2,y:151},0).wait(1).to({rotation:1001.7391,x:841.1,y:155.75},0).wait(1).to({rotation:1022.6087,x:865.3,y:162.85},0).wait(1).to({rotation:1043.4783,x:888.3,y:173.55},0).wait(1).to({rotation:1064.3478,x:906.65,y:190.9},0).wait(1).to({rotation:1085.2174,x:910.6,y:214.15},0).wait(1).to({rotation:1106.087,x:902.55,y:237.8},0).wait(1).to({rotation:1126.9565,x:894.35,y:262.7},0).wait(1).to({rotation:1147.8261,x:887,y:287.45},0).wait(1).to({rotation:1168.6957,x:880.75,y:312.2},0).wait(1).to({rotation:1189.5652,x:877.45,y:338.6},0).wait(1).to({rotation:1210.4348,x:863.15,y:347.35},0).wait(1).to({rotation:1231.3043,x:835.15,y:353.15},0).wait(1).to({rotation:1252.1739,x:809.9,y:357.5},0).wait(1).to({rotation:1273.0435,x:784.7,y:361.35},0).wait(1).to({rotation:1293.913,x:759.55,y:365.05},0).wait(1).to({rotation:1314.7826,x:734.45,y:368.6},0).wait(1).to({rotation:1335.6522,x:709.3,y:371.95},0).wait(1).to({rotation:1356.5217,x:684.2,y:375.25},0).wait(1).to({rotation:1377.3913,x:659.05,y:378.55},0).wait(1).to({rotation:1398.2609,x:633.8,y:381.7},0).wait(1).to({rotation:1419.1304,x:607.55,y:385.05},0).wait(1).to({rotation:1440,x:584.15,y:388.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Boom_Final = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Boom_Final
	this.instance = new lib.ArrowFinal();
	this.instance.parent = this;
	this.instance.setTransform(594.3,380.75,1,1,0,0,0,99,109.3);
	this.instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({y:370.8,visible:true},0).wait(140));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.LogoAnimated = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_7 = function() {
		playSound("boomerangwav");
	}
	this.frame_66 = function() {
		playSound("BounceSoundBiblecom12678623wav");
	}
	this.frame_209 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(59).call(this.frame_66).wait(143).call(this.frame_209).wait(1));

	// Text_obj_
	this.Text = new lib.Scene_1_Text();
	this.Text.name = "Text";
	this.Text.parent = this;
	this.Text.setTransform(-233.1,689.1,1,1,0,0,0,-233.1,689.1);
	this.Text.depth = 0;
	this.Text.isAttachedToCamera = 0
	this.Text.isAttachedToMask = 0
	this.Text.layerDepth = 0
	this.Text.layerIndex = 0
	this.Text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Text).wait(72).to({regX:212.4,regY:639.5,x:212.4,y:639.5},0).wait(138));

	// Boom_Final_obj_
	this.Boom_Final = new lib.Scene_1_Boom_Final();
	this.Boom_Final.name = "Boom_Final";
	this.Boom_Final.parent = this;
	this.Boom_Final.setTransform(594.3,380.7,1,1,0,0,0,594.3,380.7);
	this.Boom_Final.depth = 0;
	this.Boom_Final.isAttachedToCamera = 0
	this.Boom_Final.isAttachedToMask = 0
	this.Boom_Final.layerDepth = 0
	this.Boom_Final.layerIndex = 1
	this.Boom_Final.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Boom_Final).wait(210));

	// Boomerang_obj_
	this.Boomerang = new lib.Scene_1_Boomerang();
	this.Boomerang.name = "Boomerang";
	this.Boomerang.parent = this;
	this.Boomerang.setTransform(-296.4,422.9,1,1,0,0,0,-296.4,422.9);
	this.Boomerang.depth = 0;
	this.Boomerang.isAttachedToCamera = 0
	this.Boomerang.isAttachedToMask = 0
	this.Boomerang.layerDepth = 0
	this.Boomerang.layerIndex = 2
	this.Boomerang.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Boomerang).wait(1).to({regX:317.1,regY:265.8,x:317.1,y:265.8},0).wait(68).to({_off:true},1).wait(140));

	// Target_obj_
	this.Target = new lib.Scene_1_Target();
	this.Target.name = "Target";
	this.Target.parent = this;
	this.Target.setTransform(505.4,355.8,1,1,0,0,0,505.4,355.8);
	this.Target.depth = 0;
	this.Target.isAttachedToCamera = 0
	this.Target.isAttachedToMask = 0
	this.Target.layerDepth = 0
	this.Target.layerIndex = 3
	this.Target.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Target).wait(210));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(93.6,384.2,939.9,455.50000000000006);
// library properties:
lib.properties = {
	id: '140989201BC719429E01A65394907658',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/logoanimated_atlas_.png", id:"logoanimated_atlas_"},
		{src:"sounds/boomerangwav.mp3", id:"boomerangwav"},
		{src:"sounds/BounceSoundBiblecom12678623wav.mp3", id:"BounceSoundBiblecom12678623wav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['140989201BC719429E01A65394907658'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;