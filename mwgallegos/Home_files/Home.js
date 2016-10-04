// Created by iWeb 3.0.4 local-build-20151109

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,1047),url:'Home_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Home_files/stroke_1.png'},{rect:new IWRect(5,-5,807,10),url:'Home_files/stroke_2.png'},{rect:new IWRect(812,-5,11,10),url:'Home_files/stroke_3.png'},{rect:new IWRect(812,5,11,1047),url:'Home_files/stroke_4.png'},{rect:new IWRect(812,1052,11,10),url:'Home_files/stroke_5.png'},{rect:new IWRect(5,1052,807,10),url:'Home_files/stroke_6.png'},{rect:new IWRect(-5,1052,10,10),url:'Home_files/stroke_7.png'}],new IWSize(818,1057))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_files/HomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
