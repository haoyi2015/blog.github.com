define("echarts/chart/heatmap",["require","./base","../layer/heatmap","../config","../util/ecData","zrender/tool/util","zrender/tool/color","zrender/shape/Image","../chart"],function(t){function e(t,e,a,o,r){i.call(this,t,e,a,o,r),this.refresh(o)}var i=t("./base"),a=t("../layer/heatmap"),o=t("../config"),r=(t("../util/ecData"),t("zrender/tool/util")),n=(t("zrender/tool/color"),t("zrender/shape/Image"));return o.heatmap={zlevel:0,z:2,clickable:!0},e.prototype={type:o.CHART_TYPE_HEATMAP,refresh:function(t){this.clear(),t&&(this.option=t,this.series=t.series),this._init()},_init:function(){var t=this.series;this.backupShapeList();for(var e=t.length,i=0;e>i;++i)if(t[i].type===o.CHART_TYPE_HEATMAP){t[i]=this.reformOption(t[i]);var r=new a(t[i]),h=r.getCanvas(t[i].data,this.zr.getWidth(),this.zr.getHeight()),s=new n({position:[0,0],scale:[1,1],hoverable:this.option.hoverable,style:{x:0,y:0,image:h,width:h.width,height:h.height}});this.shapeList.push(s)}this.addShapeList()}},r.inherits(e,i),t("../chart").define("heatmap",e),e}),define("echarts/layer/heatmap",["require"],function(){function t(t){if(this.option=t,t)for(var i in e)this.option[i]=void 0!==t[i]?t[i]:e[i];else this.option=e}var e={blurSize:30,gradientColors:["blue","cyan","lime","yellow","red"],minAlpha:.05,valueScale:1,opacity:1},i=20,a=256;return t.prototype={getCanvas:function(t,e,o){var r=this._getBrush(),n=this._getGradient(),h=i+this.option.blurSize,s=document.createElement("canvas");s.width=e,s.height=o;for(var l=s.getContext("2d"),d=t.length,g=0;d>g;++g){var p=t[g],c=p[0],u=p[1],f=p[2],v=Math.min(1,Math.max(f*this.option.valueScale||this.option.minAlpha,this.option.minAlpha));l.globalAlpha=v,l.drawImage(r,c-h,u-h)}for(var m=l.getImageData(0,0,s.width,s.height),C=m.data,d=C.length/4;d--;){var b=4*d+3,v=C[b]/256,_=Math.floor(v*(a-1));C[b-3]=n[4*_],C[b-2]=n[4*_+1],C[b-1]=n[4*_+2],C[b]*=this.option.opacity}return l.putImageData(m,0,0),s},_getBrush:function(){if(!this._brushCanvas){this._brushCanvas=document.createElement("canvas");var t=i+this.option.blurSize,e=2*t;this._brushCanvas.width=e,this._brushCanvas.height=e;var a=this._brushCanvas.getContext("2d");a.shadowOffsetX=e,a.shadowBlur=this.option.blurSize,a.shadowColor="black",a.beginPath(),a.arc(-t,t,i,0,2*Math.PI,!0),a.closePath(),a.fill()}return this._brushCanvas},_getGradient:function(){if(!this._gradientPixels){var t=a,e=document.createElement("canvas");e.width=1,e.height=t;for(var i=e.getContext("2d"),o=i.createLinearGradient(0,0,0,t),r=this.option.gradientColors.length,n=0;r>n;++n)"string"==typeof this.option.gradientColors[n]?o.addColorStop((n+1)/r,this.option.gradientColors[n]):o.addColorStop(this.option.gradientColors[n].offset,this.option.gradientColors[n].color);i.fillStyle=o,i.fillRect(0,0,1,t),this._gradientPixels=i.getImageData(0,0,1,t).data}return this._gradientPixels}},t}),define("echarts/layer/heatmap",["require"],function(){function t(t){if(this.option=t,t)for(var i in e)this.option[i]=void 0!==t[i]?t[i]:e[i];else this.option=e}var e={blurSize:30,gradientColors:["blue","cyan","lime","yellow","red"],minAlpha:.05,valueScale:1,opacity:1},i=20,a=256;return t.prototype={getCanvas:function(t,e,o){var r=this._getBrush(),n=this._getGradient(),h=i+this.option.blurSize,s=document.createElement("canvas");s.width=e,s.height=o;for(var l=s.getContext("2d"),d=t.length,g=0;d>g;++g){var p=t[g],c=p[0],u=p[1],f=p[2],v=Math.min(1,Math.max(f*this.option.valueScale||this.option.minAlpha,this.option.minAlpha));l.globalAlpha=v,l.drawImage(r,c-h,u-h)}for(var m=l.getImageData(0,0,s.width,s.height),C=m.data,d=C.length/4;d--;){var b=4*d+3,v=C[b]/256,_=Math.floor(v*(a-1));C[b-3]=n[4*_],C[b-2]=n[4*_+1],C[b-1]=n[4*_+2],C[b]*=this.option.opacity}return l.putImageData(m,0,0),s},_getBrush:function(){if(!this._brushCanvas){this._brushCanvas=document.createElement("canvas");var t=i+this.option.blurSize,e=2*t;this._brushCanvas.width=e,this._brushCanvas.height=e;var a=this._brushCanvas.getContext("2d");a.shadowOffsetX=e,a.shadowBlur=this.option.blurSize,a.shadowColor="black",a.beginPath(),a.arc(-t,t,i,0,2*Math.PI,!0),a.closePath(),a.fill()}return this._brushCanvas},_getGradient:function(){if(!this._gradientPixels){var t=a,e=document.createElement("canvas");e.width=1,e.height=t;for(var i=e.getContext("2d"),o=i.createLinearGradient(0,0,0,t),r=this.option.gradientColors.length,n=0;r>n;++n)"string"==typeof this.option.gradientColors[n]?o.addColorStop((n+1)/r,this.option.gradientColors[n]):o.addColorStop(this.option.gradientColors[n].offset,this.option.gradientColors[n].color);i.fillStyle=o,i.fillRect(0,0,1,t),this._gradientPixels=i.getImageData(0,0,1,t).data}return this._gradientPixels}},t});