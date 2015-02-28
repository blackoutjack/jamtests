
JAM.startProfile('load');
function smitsNode2JSON(node$$2) {
  var childJSON = [];
  var leaves = 0;
  var i$$3 = 0;
  for (;i$$3 < node$$2.children.length;i$$3++) {
    var j = smitsNode2JSON(node$$2.children[i$$3]);
    childJSON.push(j);
    leaves += j.data.leaf;
    leaves += j.data.leaves;
  }
  var that$$1 = node$$2;
  var sampleid = "";
  if (childJSON.length !== 0) {
    return {"id":node$$2.id, "name":node$$2.name, "data":{"leaves":leaves, "leaf":0, "len":node$$2.len, "$type":"circle", "$dim":5, "$color":"#fff"}, "children":childJSON};
  } else {
    node$$2.name = node$$2.name.replace(/_/g, " ");
    var sampleArray = node$$2.name.split(" ");
    if (sampleArray.length > 1) {
      sampleid = sampleArray[1];
    }
    var name$$31 = sampleArray[0];
    var nodeJSON = {"id":node$$2.id, "name":node$$2.name, "data":{"leaves":0, "leaf":1, "len":node$$2.len, "$height":20, "$type":"none", "sampleid":sampleid, "name":name$$31}, "children":childJSON};
    return nodeJSON;
  }
}
function phylogenyExplorer_init() {
  function search(step$$1) {
    var searchString = searchBtn.value;
    var len;
    var root = st.graph.getNode(st.root);
    if (result.length > 0) {
      len = result.length;
      pos = nextStep(pos, step$$1, len);
      var prevElem = st.labels.getLabel(result[nextStep(pos, -1 * step$$1, len)].id);
      prevElem.style.backgroundColor = "";
    }
    if (searchString && prevSearch !== searchString) {
      result = [];
      prevSearch = searchString;
      root.eachSubgraph(function(node$$14) {
        var name$$34 = node$$14.name;
        var pattern$$1 = new RegExp(searchString, "i");
        if (name$$34.match(pattern$$1)) {
          result.push(node$$14);
        }
      });
      pos = nextStep(undefined, step$$1, len);
    } else {
      if (searchString === "") {
        result = [];
      }
    }
    if (result.length > 0) {
      var shownNode = result[pos];
      if (!shownNode.exist) {
        root.collapsed = true;
        st.nodesExpCol(root);
        st.computePositions(root, "");
        st.plot();
      }
      var canvas$$1 = st.canvas;
      var oy = canvas$$1.translateOffsetY;
      var xTranslate = 0;
      var yTranslate = -oy;
      st.canvas.translate(xTranslate, yTranslate);
      var element$$2 = st.labels.getLabel(result[pos].id);
      element$$2.style.backgroundColor = "yellow";
      jQuery(element$$2).click();
    }
  }
  var initial = {codeBase:"../..", width:550, height:800, alignName:true, lateralise:false, levelsToShow:10, branchMultiplier:1, tree:"((Replace:0.007667365048364433,(this:0.005369261896034483,(with:0.011621228506591308,your:2.100100506802205E-6):0.0027929350821030707):0.012281999999150084):0.0400709772514759,(((own:0.0012025949078822151,phylogeny:0.0024332420478173633):0.006421131153429474,(in:0.008984623535641459,(newick:0.0012074724370825796,form:0.004013224017395373):0.003744210327868966):0.00542385295016945):0.023689622298502563,(tree:0.036702751435909745,((take:0.002448206437464337,care:0.0024347868455663196):0.001504447318880206,(to:0.0023787045835393372,(remove:2.100100506802205E-6,quotes_and_other_html_special_characters:0.01728824049672087):0.010690121488212884):6.006911375427831E-4):0.005347250770554118):0.014788598652250115):0.0400709772514759);", 
  character:{"Replace":{"modelled annual mean moisture index":[.6837124164], "modelled annual mean rad":[17.1466667213], "modelled annual mean temp":[16.0416993341], "modelled annual precipitation":[1039.2849673203], "modelled clpk 1 1000 g clay":[18998.3660130718], "modelled erosional":[85.9191176471], "modelled highest period moisture index":[.8894836614], "modelled highest period radiation":[25.3393464394], "modelled hydraulic conductivity ksat":[157.4640522876], "modelled isothermality":[.4932352942], 
  "modelled lowest period moisture index":[.3231372576], "modelled lowest period radiation":[9.081829987], "modelled max temp warmest period":[28.0827450671], "modelled mean diurnal range":[11.3729411867], "modelled mean moisture index coldest quarter":[.8600326849], "modelled mean moisture index highest quarter MI":[.8941764697], "modelled mean moisture index lowest quater MI":[.3734836587], "modelled mean moisture index warmest quarter":[.4585424874], "modelled mean temp coldest quarter":[10.5782352927], 
  "modelled mean temp driest quater":[15.4166012935], "modelled mean temp warmer quarter":[20.968431512], "modelled mean temp wettest quarter":[15.8052941168], "modelled min temp coldest period":[4.1385621225], "modelled moisture index seasonality":[33.0339869281], "modelled phos":[.0438125788], "modelled precipitation coldets quarter":[255.5509803922], "modelled precipitation driest period":[5.322875817], "modelled precipitation driest quarter":[143.0516339869], "modelled precipitation seasonality":[39.0823529412], 
  "modelled precipitation warmest quarter":[292.9124183007], "modelled precipitation wettest period":[36.9261437908], "modelled precipitation wettest quarter":[423.4202614379], "modelled radiation coldest quarter":[10.6616340562], "modelled radiation driest quarter":[17.4772549498], "modelled radiation seasonality":[33.0607843137], "modelled radiation warmest quarter":[22.9215031792], "modelled radiation wettest quarter":[15.7764050234], "modelled relief":[64.9002548406], "modelled ridgetopflat":[1.964869281], 
  "modelled rockalklty":[4.9215686275], "modelled rockgrainsz":[4.1215686275], "modelled rockhardness":[5.8725490196], "modelled rocknutrnt":[4.7078431373], "modelled roughness":[19.0273797546], "modelled sapk 1 1000 g sand":[64840.3594771241], "modelled slope":[4.4690577426], "modelled soildepth":[.9153594758], "modelled solpawhc":[107.6281045752], "modelled temperature annual range":[23.24398698], "modelled temperature seasonality":[1.4140000156], "modelled thpk 1 1000 g thickness":[292.831372549], 
  "modelled twi":[5.5785338397], "modelled valleybottom":[8.4109477124], "modelled whpk 1 1000 g water cap":[44557.6633986928], "raw annual mean moisture index":[1E-7], "raw annual mean rad":[19], "raw annual mean temp":[21.5], "raw annual precipitation":[1111], "raw clpk 1 1000 g clay":[18E3], "raw erosional":[100], "raw highest period moisture index":[1], "raw highest period radiation":[25.5], "raw hydraulic conductivity ksat":[200], "raw lowest period moisture index":[0], "raw lowest period radiation":[14], 
  "raw max temp warmest period":[30], "raw mean diurnal range":[9], "raw mean moisture index coldest quarter":[0], "raw mean moisture index highest quarter MI":[.5], "raw mean moisture index lowest quater MI":[0], "raw mean moisture index warmest quarter":[0], "raw mean temp coldest quarter":[17], "raw mean temp driest quater":[18.5], "raw mean temp warmer quarter":[24.5], "raw mean temp wettest quarter":[24.5], "raw min temp coldest period":[11], "raw moisture index seasonality":[57], "raw precipitation coldets quarter":[82], 
  "raw precipitation driest period":[0], "raw precipitation driest quarter":[61], "raw precipitation seasonality":[99.5], "raw precipitation warmest quarter":[574.5], "raw precipitation wettest period":[72.5], "raw precipitation wettest quarter":[716], "raw radiation coldest quarter":[15.5], "raw radiation driest quarter":[19], "raw radiation seasonality":[18.5], "raw radiation warmest quarter":[22], "raw radiation wettest quarter":[19], "raw relief":[125], "raw ridgetopflat":[0], "raw rockalklty":[4], 
  "raw rockgrainsz":[8], "raw rockhardness":[7], "raw rocknutrnt":[4], "raw roughness":[11], "raw sapk 1 1000 g sand":[63E3], "raw slope":[6], "raw soildepth":[1], "raw solpawhc":[177], "raw temperature annual range":[18], "raw temperature seasonality":[1], "raw thpk 1 1000 g thickness":[295.5], "raw twi":[5.5], "raw valleybottom":[0]}, "this":{"modelled annual mean moisture index":[.6050000191], "modelled annual mean rad":[19.6500005722], "modelled annual mean temp":[21.75], "modelled annual precipitation":[1111], 
  "modelled clpk 1 1000 g clay":[18E3], "modelled erosional":[100], "modelled highest period moisture index":[1], "modelled highest period radiation":[26.1500005722], "modelled hydraulic conductivity ksat":[200], "modelled isothermality":[.5150000155], "modelled lowest period moisture index":[.1199999973], "modelled lowest period radiation":[14.3499999046], "modelled max temp warmest period":[30.1999998093], "modelled mean diurnal range":[9.6500000954], "modelled mean moisture index coldest quarter":[.5400000066], 
  "modelled mean moisture index highest quarter MI":[.9950000048], "modelled mean moisture index lowest quater MI":[.1750000007], "modelled mean moisture index warmest quarter":[.7150000036], "modelled mean temp coldest quarter":[17.4500007629], "modelled mean temp driest quater":[18.8999996185], "modelled mean temp warmer quarter":[25.1499996185], "modelled mean temp wettest quarter":[24.8500003815], "modelled min temp coldest period":[11.5999999046], "modelled moisture index seasonality":[57], 
  "modelled phos":[.0198370004], "modelled precipitation coldets quarter":[82], "modelled precipitation driest period":[0], "modelled precipitation driest quarter":[61], "modelled precipitation seasonality":[99.5], "modelled precipitation warmest quarter":[574.5], "modelled precipitation wettest period":[72.5], "modelled precipitation wettest quarter":[716], "modelled radiation coldest quarter":[15.9499998093], "modelled radiation driest quarter":[19.1999998093], "modelled radiation seasonality":[18.5], 
  "modelled radiation warmest quarter":[22.3999996185], "modelled radiation wettest quarter":[19.6000003815], "modelled relief":[125.4036026001], "modelled ridgetopflat":[0], "modelled rockalklty":[4], "modelled rockgrainsz":[8], "modelled rockhardness":[7], "modelled rocknutrnt":[4], "modelled roughness":[11.5456476212], "modelled sapk 1 1000 g sand":[63E3], "modelled slope":[6.512172699], "modelled soildepth":[1.25], "modelled solpawhc":[177], "modelled temperature annual range":[18.6500005722], 
  "modelled temperature seasonality":[1.0499999523], "modelled thpk 1 1000 g thickness":[295.5], "modelled twi":[5.6324121952], "modelled valleybottom":[0], "modelled whpk 1 1000 g water cap":[5E4], "raw annual mean moisture index":[0], "raw annual mean rad":[19], "raw annual mean temp":[21.75], "raw annual precipitation":[1107], "raw clpk 1 1000 g clay":[19E3], "raw erosional":[100], "raw highest period moisture index":[1], "raw highest period radiation":[25.25], "raw hydraulic conductivity ksat":[250], 
  "raw lowest period moisture index":[0], "raw lowest period radiation":[14], "raw max temp warmest period":[30], "raw mean diurnal range":[8.5], "raw mean moisture index coldest quarter":[0], "raw mean moisture index highest quarter MI":[.25], "raw mean moisture index lowest quater MI":[0], "raw mean moisture index warmest quarter":[0], "raw mean temp coldest quarter":[17.5], "raw mean temp driest quater":[18.75], "raw mean temp warmer quarter":[24.75], "raw mean temp wettest quarter":[24.75], "raw min temp coldest period":[11.5], 
  "raw moisture index seasonality":[61.5], "raw precipitation coldets quarter":[74.5], "raw precipitation driest period":[0], "raw precipitation driest quarter":[55], "raw precipitation seasonality":[103.75], "raw precipitation warmest quarter":[608.75], "raw precipitation wettest period":[75.75], "raw precipitation wettest quarter":[731.5], "raw radiation coldest quarter":[15.25], "raw radiation driest quarter":[19], "raw radiation seasonality":[18.25], "raw radiation warmest quarter":[21.5], "raw radiation wettest quarter":[19], 
  "raw relief":[162], "raw ridgetopflat":[0], "raw rockalklty":[4], "raw rockgrainsz":[8], "raw rockhardness":[7], "raw rocknutrnt":[4], "raw roughness":[15.5], "raw sapk 1 1000 g sand":[61500], "raw slope":[7.5], "raw soildepth":[1], "raw solpawhc":[183], "raw temperature annual range":[17.5], "raw temperature seasonality":[1], "raw thpk 1 1000 g thickness":[285.25], "raw twi":[4.75], "raw valleybottom":[0]}, "with":{"modelled annual mean moisture index":[.9200000167], "modelled annual mean rad":[16.8999996185], 
  "modelled annual mean temp":[19.3999996185], "modelled annual precipitation":[1778], "modelled clpk 1 1000 g clay":[14E3], "modelled erosional":[100], "modelled highest period moisture index":[1], "modelled highest period radiation":[22.8999996185], "modelled hydraulic conductivity ksat":[300], "modelled isothermality":[.4900000095], "modelled lowest period moisture index":[.7300000191], "modelled lowest period radiation":[10.8000001907], "modelled max temp warmest period":[27.7999992371], "modelled mean diurnal range":[9.5], 
  "modelled mean moisture index coldest quarter":[1], "modelled mean moisture index highest quarter MI":[1], "modelled mean moisture index lowest quater MI":[.75], "modelled mean moisture index warmest quarter":[.9200000167], "modelled mean temp coldest quarter":[14.6000003815], "modelled mean temp driest quater":[16.1000003815], "modelled mean temp warmer quarter":[23.5], "modelled mean temp wettest quarter":[23.1000003815], "modelled min temp coldest period":[8.1999998093], "modelled moisture index seasonality":[12], 
  "modelled phos":[.0327499993], "modelled precipitation coldets quarter":[258], "modelled precipitation driest period":[11], "modelled precipitation driest quarter":[211], "modelled precipitation seasonality":[46], "modelled precipitation warmest quarter":[670], "modelled precipitation wettest period":[66], "modelled precipitation wettest quarter":[730], "modelled radiation coldest quarter":[12.8999996185], "modelled radiation driest quarter":[16.2999992371], "modelled radiation seasonality":[24], 
  "modelled radiation warmest quarter":[20.1000003815], "modelled radiation wettest quarter":[18.2999992371], "modelled relief":[178.5762023926], "modelled ridgetopflat":[0], "modelled rockalklty":[5], "modelled rockgrainsz":[3], "modelled rockhardness":[4], "modelled rocknutrnt":[4], "modelled roughness":[72.862159729], "modelled sapk 1 1000 g sand":[69E3], "modelled slope":[10.0389699936], "modelled soildepth":[1], "modelled solpawhc":[169], "modelled temperature annual range":[19.5], "modelled temperature seasonality":[1.2000000477], 
  "modelled thpk 1 1000 g thickness":[599], "modelled twi":[2.5513501167], "modelled valleybottom":[0], "modelled whpk 1 1000 g water cap":[117E3], "raw annual mean moisture index":[0], "raw annual mean rad":[16], "raw annual mean temp":[19], "raw annual precipitation":[1778], "raw clpk 1 1000 g clay":[14E3], "raw erosional":[100], "raw highest period moisture index":[1], "raw highest period radiation":[22], "raw hydraulic conductivity ksat":[300], "raw lowest period moisture index":[0], "raw lowest period radiation":[10], 
  "raw max temp warmest period":[27], "raw mean diurnal range":[9], "raw mean moisture index coldest quarter":[1], "raw mean moisture index highest quarter MI":[1], "raw mean moisture index lowest quater MI":[0], "raw mean moisture index warmest quarter":[0], "raw mean temp coldest quarter":[14], "raw mean temp driest quater":[16], "raw mean temp warmer quarter":[23], "raw mean temp wettest quarter":[23], "raw min temp coldest period":[8], "raw moisture index seasonality":[12], "raw precipitation coldets quarter":[258], 
  "raw precipitation driest period":[11], "raw precipitation driest quarter":[211], "raw precipitation seasonality":[46], "raw precipitation warmest quarter":[670], "raw precipitation wettest period":[66], "raw precipitation wettest quarter":[730], "raw radiation coldest quarter":[12], "raw radiation driest quarter":[16], "raw radiation seasonality":[24], "raw radiation warmest quarter":[20], "raw radiation wettest quarter":[18], "raw relief":[178], "raw ridgetopflat":[0], "raw rockalklty":[5], "raw rockgrainsz":[3], 
  "raw rockhardness":[4], "raw rocknutrnt":[4], "raw roughness":[72], "raw sapk 1 1000 g sand":[69E3], "raw slope":[10], "raw soildepth":[1], "raw solpawhc":[169], "raw temperature annual range":[19], "raw temperature seasonality":[1], "raw thpk 1 1000 g thickness":[599], "raw twi":[2], "raw valleybottom":[0]}, "your":{"modelled annual mean moisture index":[.8323181818], "modelled annual mean rad":[17.9524242387], "modelled annual mean temp":[19.2898482727], "modelled annual precipitation":[1888.3636363636], 
  "modelled clpk 1 1000 g clay":[25214.7727272727], "modelled erosional":[92.8787878788], "modelled highest period moisture index":[.998939395], "modelled highest period radiation":[24.5178788503], "modelled hydraulic conductivity ksat":[205.6212121212], "modelled isothermality":[.5086363656], "modelled lowest period moisture index":[.4447727201], "modelled lowest period radiation":[12.1872727221], "modelled max temp warmest period":[28.0525757327], "modelled mean diurnal range":[9.485757533], "modelled mean moisture index coldest quarter":[.8951666693], 
  "modelled mean moisture index highest quarter MI":[.9978787867], "modelled mean moisture index lowest quater MI":[.5378636367], "modelled mean moisture index warmest quarter":[.8636969721], "modelled mean temp coldest quarter":[14.951212141], "modelled mean temp driest quater":[16.7531818144], "modelled mean temp warmer quarter":[22.9656060132], "modelled mean temp wettest quarter":[22.5318182165], "modelled min temp coldest period":[9.4287879063], "modelled moisture index seasonality":[25.9621212121], 
  "modelled phos":[.0453631317], "modelled precipitation coldets quarter":[235.6090909091], "modelled precipitation driest period":[6.7242424242], "modelled precipitation driest quarter":[167.2409090909], "modelled precipitation seasonality":[68.203030303], "modelled precipitation warmest quarter":[790.2136363636], "modelled precipitation wettest period":[88.2606060606], "modelled precipitation wettest quarter":[970.5196969697], "modelled radiation coldest quarter":[14.1262121605], "modelled radiation driest quarter":[17.7987878742], 
  "modelled radiation seasonality":[21.6636363636], "modelled radiation warmest quarter":[20.8286361521], "modelled radiation wettest quarter":[18.6671213323], "modelled relief":[151.1616860035], "modelled ridgetopflat":[0], "modelled rockalklty":[4.7151515152], "modelled rockgrainsz":[5.5742424242], "modelled rockhardness":[6.2560606061], "modelled rocknutrnt":[4.5742424242], "modelled roughness":[14.6029429806], "modelled sapk 1 1000 g sand":[54667.803030303], "modelled slope":[8.4508264353], "modelled soildepth":[1.1122727402], 
  "modelled solpawhc":[155.3090909091], "modelled temperature annual range":[18.6489395503], "modelled temperature seasonality":[1.0938939283], "modelled thpk 1 1000 g thickness":[301.3257575758], "modelled twi":[5.6370893103], "modelled valleybottom":[7.1212121212], "modelled whpk 1 1000 g water cap":[51557.1969696969], "raw annual mean moisture index":[0], "raw annual mean rad":[17.6111111111], "raw annual mean temp":[18.5], "raw annual precipitation":[1925.8333333333], "raw clpk 1 1000 g clay":[26833.3333333333], 
  "raw erosional":[94.4444444444], "raw highest period moisture index":[.9444444444], "raw highest period radiation":[24.1111111111], "raw hydraulic conductivity ksat":[196.1111111111], "raw lowest period moisture index":[0], "raw lowest period radiation":[11.8333333333], "raw max temp warmest period":[27.4444444444], "raw mean diurnal range":[9.2777777778], "raw mean moisture index coldest quarter":[.3888888889], "raw mean moisture index highest quarter MI":[.9444444444], "raw mean moisture index lowest quater MI":[0], 
  "raw mean moisture index warmest quarter":[.0555555556], "raw mean temp coldest quarter":[14.1111111111], "raw mean temp driest quater":[15.8888888889], "raw mean temp warmer quarter":[22.1666666667], "raw mean temp wettest quarter":[21.7222222222], "raw min temp coldest period":[8.5555555556], "raw moisture index seasonality":[24.3333333333], "raw precipitation coldets quarter":[238.8888888889], "raw precipitation driest period":[6.5], "raw precipitation driest quarter":[169.1666666667], "raw precipitation seasonality":[69.4444444444], 
  "raw precipitation warmest quarter":[812.7222222222], "raw precipitation wettest period":[91.2777777778], "raw precipitation wettest quarter":[998.7222222222], "raw radiation coldest quarter":[13.6666666667], "raw radiation driest quarter":[17.1666666667], "raw radiation seasonality":[21.3333333333], "raw radiation warmest quarter":[20.3333333333], "raw radiation wettest quarter":[18.2777777778], "raw relief":[163.1111111111], "raw ridgetopflat":[0], "raw rockalklty":[4.3888888889], "raw rockgrainsz":[5.5], 
  "raw rockhardness":[6.0555555556], "raw rocknutrnt":[4.4444444444], "raw roughness":[11.8888888889], "raw sapk 1 1000 g sand":[52583.3333333333], "raw slope":[8.5], "raw soildepth":[.8333333333], "raw solpawhc":[156.6666666667], "raw temperature annual range":[18.6111111111], "raw temperature seasonality":[.6111111111], "raw thpk 1 1000 g thickness":[272.0555555556], "raw twi":[5.0555555556], "raw valleybottom":[5.5555555556]}, "own":{"modelled annual mean moisture index":[.9350000024], "modelled annual mean rad":[18.0500001907], 
  "modelled annual mean temp":[20.1999998093], "modelled annual precipitation":[2948], "modelled clpk 1 1000 g clay":[42E3], "modelled erosional":[100], "modelled highest period moisture index":[1], "modelled highest period radiation":[25.0500001907], "modelled hydraulic conductivity ksat":[300], "modelled isothermality":[.5400000215], "modelled lowest period moisture index":[.5549999774], "modelled lowest period radiation":[12.4000000954], "modelled max temp warmest period":[28.6499996185], "modelled mean diurnal range":[9.4500002861], 
  "modelled mean moisture index coldest quarter":[1], "modelled mean moisture index highest quarter MI":[1], "modelled mean moisture index lowest quater MI":[.7350000143], "modelled mean moisture index warmest quarter":[.9200000167], "modelled mean temp coldest quarter":[16.4500007629], "modelled mean temp driest quater":[19.4000005722], "modelled mean temp warmer quarter":[23.4000005722], "modelled mean temp wettest quarter":[22.6499996185], "modelled min temp coldest period":[11.3000001907], "modelled moisture index seasonality":[14], 
  "modelled phos":[.0769999996], "modelled precipitation coldets quarter":[428.5], "modelled precipitation driest period":[12.5], "modelled precipitation driest quarter":[247], "modelled precipitation seasonality":[68.5], "modelled precipitation warmest quarter":[1054], "modelled precipitation wettest period":[131], "modelled precipitation wettest quarter":[1492], "modelled radiation coldest quarter":[14.75], "modelled radiation driest quarter":[19.6499996185], "modelled radiation seasonality":[20], 
  "modelled radiation warmest quarter":[20.75], "modelled radiation wettest quarter":[18.0500001907], "modelled relief":[93.9310970306], "modelled ridgetopflat":[0], "modelled rockalklty":[6], "modelled rockgrainsz":[4], "modelled rockhardness":[7], "modelled rocknutrnt":[6], "modelled roughness":[4.0198574662], "modelled sapk 1 1000 g sand":[44E3], "modelled slope":[5.4142469168], "modelled soildepth":[1.1000000238], "modelled solpawhc":[171], "modelled temperature annual range":[17.4000005722], 
  "modelled temperature seasonality":[.9499999881], "modelled thpk 1 1000 g thickness":[150], "modelled twi":[5.4885058403], "modelled valleybottom":[0], "modelled whpk 1 1000 g water cap":[33E3], "raw annual mean moisture index":[0], "raw annual mean rad":[18], "raw annual mean temp":[20], "raw annual precipitation":[3017.6666666667], "raw clpk 1 1000 g clay":[42E3], "raw erosional":[100], "raw highest period moisture index":[1], "raw highest period radiation":[25], "raw hydraulic conductivity ksat":[300], 
  "raw lowest period moisture index":[0], "raw lowest period radiation":[12], "raw max temp warmest period":[28], "raw mean diurnal range":[9], "raw mean moisture index coldest quarter":[1], "raw mean moisture index highest quarter MI":[1], "raw mean moisture index lowest quater MI":[0], "raw mean moisture index warmest quarter":[0], "raw mean temp coldest quarter":[16], "raw mean temp driest quater":[19], "raw mean temp warmer quarter":[23], "raw mean temp wettest quarter":[22], "raw min temp coldest period":[11], 
  "raw moisture index seasonality":[13.6666666667], "raw precipitation coldets quarter":[437], "raw precipitation driest period":[12.6666666667], "raw precipitation driest quarter":[252.3333333333], "raw precipitation seasonality":[68.6666666667], "raw precipitation warmest quarter":[1077.3333333333], "raw precipitation wettest period":[134.3333333333], "raw precipitation wettest quarter":[1531], "raw radiation coldest quarter":[14], "raw radiation driest quarter":[19], "raw radiation seasonality":[20], 
  "raw radiation warmest quarter":[20], "raw radiation wettest quarter":[18], "raw relief":[113], "raw ridgetopflat":[0], "raw rockalklty":[6], "raw rockgrainsz":[4], "raw rockhardness":[7], "raw rocknutrnt":[6], "raw roughness":[4.6666666667], "raw sapk 1 1000 g sand":[44E3], "raw slope":[6.3333333333], "raw soildepth":[1], "raw solpawhc":[165.6666666667], "raw temperature annual range":[17], "raw temperature seasonality":[0], "raw thpk 1 1000 g thickness":[150], "raw twi":[5.3333333333], "raw valleybottom":[0]}, 
  "phylogeny":{"modelled annual mean moisture index":[.8325000107], "modelled annual mean rad":[18.5249996185], "modelled annual mean temp":[20.9250001907], "modelled annual precipitation":[2179.25], "modelled clpk 1 1000 g clay":[35250], "modelled erosional":[100], "modelled highest period moisture index":[1], "modelled highest period radiation":[25.2750000954], "modelled hydraulic conductivity ksat":[250], "modelled isothermality":[.5450000167], "modelled lowest period moisture index":[.3475000001], 
  "modelled lowest period radiation":[13.3499999046], "modelled max temp warmest period":[29.2249999046], "modelled mean diurnal range":[9.5], "modelled mean moisture index coldest quarter":[.8774999976], "modelled mean moisture index highest quarter MI":[1], "modelled mean moisture index lowest quater MI":[.4975000024], "modelled mean moisture index warmest quarter":[.8824999928], "modelled mean temp coldest quarter":[17.125], "modelled mean temp driest quater":[19.0499997139], "modelled mean temp warmer quarter":[24.0749998093], 
  "modelled mean temp wettest quarter":[23.5500001907], "modelled min temp coldest period":[11.75], "modelled moisture index seasonality":[28.5], "modelled phos":[.0491249994], "modelled precipitation coldets quarter":[234.25], "modelled precipitation driest period":[5.5], "modelled precipitation driest quarter":[157.75], "modelled precipitation seasonality":[79], "modelled precipitation warmest quarter":[919.25], "modelled precipitation wettest period":[108.75], "modelled precipitation wettest quarter":[1209.25], 
  "modelled radiation coldest quarter":[15.4999997616], "modelled radiation driest quarter":[18.9500002861], "modelled radiation seasonality":[18.75], "modelled radiation warmest quarter":[21], "modelled radiation wettest quarter":[18.4499998093], "modelled relief":[191.561460495], "modelled ridgetopflat":[0], "modelled rockalklty":[4.5], "modelled rockgrainsz":[4.5], "modelled rockhardness":[6.5], "modelled rocknutrnt":[5.5], "modelled roughness":[11.7312440872], "modelled sapk 1 1000 g sand":[46500], 
  "modelled slope":[10.01773417], "modelled soildepth":[1.2000000179], "modelled solpawhc":[164.5], "modelled temperature annual range":[17.4500000477], "modelled temperature seasonality":[.9424999952], "modelled thpk 1 1000 g thickness":[195.25], "modelled twi":[7.2423673272], "modelled valleybottom":[0], "modelled whpk 1 1000 g water cap":[35500], "raw annual mean moisture index":[0], "raw annual mean rad":[18], "raw annual mean temp":[20.5], "raw annual precipitation":[2179.25], "raw clpk 1 1000 g clay":[35250], 
  "raw erosional":[100], "raw highest period moisture index":[1], "raw highest period radiation":[25], "raw hydraulic conductivity ksat":[250], "raw lowest period moisture index":[0], "raw lowest period radiation":[13], "raw max temp warmest period":[28.5], "raw mean diurnal range":[9], "raw mean moisture index coldest quarter":[.75], "raw mean moisture index highest quarter MI":[1], "raw mean moisture index lowest quater MI":[0], "raw mean moisture index warmest quarter":[0], "raw mean temp coldest quarter":[16.75], 
  "raw mean temp driest quater":[18.75], "raw mean temp warmer quarter":[23.75], "raw mean temp wettest quarter":[23], "raw min temp coldest period":[11], "raw moisture index seasonality":[28.5], "raw precipitation coldets quarter":[234.25], "raw precipitation driest period":[5.5], "raw precipitation driest quarter":[157.75], "raw precipitation seasonality":[79], "raw precipitation warmest quarter":[919.25], "raw precipitation wettest period":[108.75], "raw precipitation wettest quarter":[1209.25], 
  "raw radiation coldest quarter":[15.25], "raw radiation driest quarter":[18.75], "raw radiation seasonality":[18.75], "raw radiation warmest quarter":[20.75], "raw radiation wettest quarter":[18], "raw relief":[191], "raw ridgetopflat":[0], "raw rockalklty":[4.5], "raw rockgrainsz":[4.5], "raw rockhardness":[6.5], "raw rocknutrnt":[5.5], "raw roughness":[11.25], "raw sapk 1 1000 g sand":[46500], "raw slope":[9.5], "raw soildepth":[1], "raw solpawhc":[164.5], "raw temperature annual range":[17], 
  "raw temperature seasonality":[.25], "raw thpk 1 1000 g thickness":[195.25], "raw twi":[6.75], "raw valleybottom":[0]}, "in":{"modelled annual mean moisture index":[.8511999941], "modelled annual mean rad":[17.7549997139], "modelled annual mean temp":[20.1320000076], "modelled annual precipitation":[2004.6], "modelled clpk 1 1000 g clay":[24337.5], "modelled erosional":[100], "modelled highest period moisture index":[1], "modelled highest period radiation":[24.4609998512], "modelled hydraulic conductivity ksat":[230], 
  "modelled isothermality":[.519799999], "modelled lowest period moisture index":[.4349999921], "modelled lowest period radiation":[11.9399999428], "modelled max temp warmest period":[28.5809999847], "modelled mean diurnal range":[9.3529999971], "modelled mean moisture index coldest quarter":[.9477999979], "modelled mean moisture index highest quarter MI":[1], "modelled mean moisture index lowest quater MI":[.5399000007], "modelled mean moisture index warmest quarter":[.8883000004], "modelled mean temp coldest quarter":[16.0029999352], 
  "modelled mean temp driest quater":[17.4470001602], "modelled mean temp warmer quarter":[23.6520002556], "modelled mean temp wettest quarter":[23.2579998207], "modelled min temp coldest period":[10.5970001769], "modelled moisture index seasonality":[24.44], "modelled phos":[.0236599989], "modelled precipitation coldets quarter":[229.2], "modelled precipitation driest period":[8.44], "modelled precipitation driest quarter":[170.66], "modelled precipitation seasonality":[66.77], "modelled precipitation warmest quarter":[871.37], 
  "modelled precipitation wettest period":[92.64], "modelled precipitation wettest quarter":[1050.83], "modelled radiation coldest quarter":[14.0290001678], "modelled radiation driest quarter":[17.2499999809], "modelled radiation seasonality":[21.92], "modelled radiation warmest quarter":[20.4790001106], "modelled radiation wettest quarter":[18.3959999466], "modelled relief":[180.825651741], "modelled ridgetopflat":[0], "modelled rockalklty":[4.92], "modelled rockgrainsz":[6.22], "modelled rockhardness":[6.34], 
  "modelled rocknutrnt":[4.34], "modelled roughness":[41.1613443279], "modelled sapk 1 1000 g sand":[52267.5], "modelled slope":[10.5619576693], "modelled soildepth":[1.3479999959], "modelled solpawhc":[183.33], "modelled temperature annual range":[17.9670000267], "modelled temperature seasonality":[1.0439999992], "modelled thpk 1 1000 g thickness":[226.16], "modelled twi":[5.7365186501], "modelled valleybottom":[1.0625], "modelled whpk 1 1000 g water cap":[35632.5], "raw annual mean moisture index":[0], 
  "raw annual mean rad":[17], "raw annual mean temp":[18.8571428571], "raw annual precipitation":[1932.7142857143], "raw clpk 1 1000 g clay":[23678.5714285714], "raw erosional":[100], "raw highest period moisture index":[1], "raw highest period radiation":[24.1428571429], "raw hydraulic conductivity ksat":[242.8571428571], "raw lowest period moisture index":[0], "raw lowest period radiation":[11], "raw max temp warmest period":[27.4285714286], "raw mean diurnal range":[9], "raw mean moisture index coldest quarter":[.4285714286], 
  "raw mean moisture index highest quarter MI":[1], "raw mean moisture index lowest quater MI":[0], "raw mean moisture index warmest quarter":[0], "raw mean temp coldest quarter":[14.5714285714], "raw mean temp driest quater":[16], "raw mean temp warmer quarter":[22.5714285714], "raw mean temp wettest quarter":[22.1428571429], "raw min temp coldest period":[9.2857142857], "raw moisture index seasonality":[23.5714285714], "raw precipitation coldets quarter":[226.2857142857], "raw precipitation driest period":[8.4285714286], 
  "raw precipitation driest quarter":[171.4285714286], "raw precipitation seasonality":[64.8571428571], "raw precipitation warmest quarter":[833.5714285714], "raw precipitation wettest period":[89], "raw precipitation wettest quarter":[1003.5714285714], "raw radiation coldest quarter":[13.1428571429], "raw radiation driest quarter":[16.4285714286], "raw radiation seasonality":[22.8571428571], "raw radiation warmest quarter":[20.2857142857], "raw radiation wettest quarter":[17.8571428571], "raw relief":[182.5714285714], 
  "raw ridgetopflat":[0], "raw rockalklty":[4], "raw rockgrainsz":[4.8571428571], "raw rockhardness":[5.1428571429], "raw rocknutrnt":[3.7142857143], "raw roughness":[29.7142857143], "raw sapk 1 1000 g sand":[54535.7142857143], "raw slope":[10.1428571429], "raw soildepth":[1], "raw solpawhc":[188.7142857143], "raw temperature annual range":[18], "raw temperature seasonality":[.4285714286], "raw thpk 1 1000 g thickness":[253.4285714286], "raw twi":[4.8571428571], "raw valleybottom":[0]}, "newick":{"modelled annual mean moisture index":[.8419692351], 
  "modelled annual mean rad":[15.4089230904], "modelled annual mean temp":[11.7830769011], "modelled annual precipitation":[1282.2246153846], "modelled clpk 1 1000 g clay":[21682.3076923077], "modelled erosional":[98.4807692308], "modelled highest period moisture index":[.9973846157], "modelled highest period radiation":[24.0646153729], "modelled hydraulic conductivity ksat":[180.3692307692], "modelled isothermality":[.4703076909], "modelled lowest period moisture index":[.48273846], "modelled lowest period radiation":[7.0495384554], 
  "modelled max temp warmest period":[23.5836921927], "modelled mean diurnal range":[10.2701538335], "modelled mean moisture index coldest quarter":[.9867076942], "modelled mean moisture index highest quarter MI":[.9953846163], "modelled mean moisture index lowest quater MI":[.5702769235], "modelled mean moisture index warmest quarter":[.6286461528], "modelled mean temp coldest quarter":[6.664307713], "modelled mean temp driest quater":[12.2307692], "modelled mean temp warmer quarter":[16.8929231204], 
  "modelled mean temp wettest quarter":[11.9966153483], "modelled min temp coldest period":[1.7335384761], "modelled moisture index seasonality":[22.3753846154], "modelled phos":[.0354398355], "modelled precipitation coldets quarter":[316.5815384615], "modelled precipitation driest period":[13.1261538462], "modelled precipitation driest quarter":[212.48], "modelled precipitation seasonality":[25.9846153846], "modelled precipitation warmest quarter":[333.4307692308], "modelled precipitation wettest period":[39.5076923077], 
  "modelled precipitation wettest quarter":[446.7507692308], "modelled radiation coldest quarter":[8.8353845684], "modelled radiation driest quarter":[17.0212307989], "modelled radiation seasonality":[39.0307692308], "modelled radiation warmest quarter":[21.3784615619], "modelled radiation wettest quarter":[14.3270768371], "modelled relief":[156.8749819389], "modelled ridgetopflat":[.2884615385], "modelled rockalklty":[4.6646153846], "modelled rockgrainsz":[4.6615384615], "modelled rockhardness":[5.8615384615], 
  "modelled rocknutrnt":[4.5569230769], "modelled roughness":[9.5328148233], "modelled sapk 1 1000 g sand":[58780.7692307692], "modelled slope":[9.5631930516], "modelled soildepth":[1.0756923059], "modelled solpawhc":[151.4553846154], "modelled temperature annual range":[21.8473846553], "modelled temperature seasonality":[1.4144307659], "modelled thpk 1 1000 g thickness":[278.2092307692], "modelled twi":[4.8256355231], "modelled valleybottom":[.4807692308], "modelled whpk 1 1000 g water cap":[45223.0769230769], 
  "raw annual mean moisture index":[.0083333333], "raw annual mean rad":[15], "raw annual mean temp":[11.5], "raw annual precipitation":[1295.7833333333], "raw clpk 1 1000 g clay":[22614.5833333333], "raw erosional":[98.5166666667], "raw highest period moisture index":[.9583333333], "raw highest period radiation":[23.625], "raw hydraulic conductivity ksat":[181.4166666667], "raw lowest period moisture index":[0], "raw lowest period radiation":[6.7916666667], "raw max temp warmest period":[23.2833333333], 
  "raw mean diurnal range":[9.8083333333], "raw mean moisture index coldest quarter":[.6333333333], "raw mean moisture index highest quarter MI":[.8583333333], "raw mean moisture index lowest quater MI":[.0083333333], "raw mean moisture index warmest quarter":[.0083333333], "raw mean temp coldest quarter":[6.4], "raw mean temp driest quater":[11.8333333333], "raw mean temp warmer quarter":[16.6], "raw mean temp wettest quarter":[11.9], "raw min temp coldest period":[1.75], "raw moisture index seasonality":[22.375], 
  "raw precipitation coldets quarter":[312.6666666667], "raw precipitation driest period":[13.0083333333], "raw precipitation driest quarter":[212.0583333333], "raw precipitation seasonality":[26.6833333333], "raw precipitation warmest quarter":[347.1833333333], "raw precipitation wettest period":[40.8166666667], "raw precipitation wettest quarter":[460.0583333333], "raw radiation coldest quarter":[8.4333333333], "raw radiation driest quarter":[16.5416666667], "raw radiation seasonality":[38.6916666667], 
  "raw radiation warmest quarter":[20.8916666667], "raw radiation wettest quarter":[13.8916666667], "raw relief":[157], "raw ridgetopflat":[.1], "raw rockalklty":[4.4083333333], "raw rockgrainsz":[4.6083333333], "raw rockhardness":[5.8], "raw rocknutrnt":[4.35], "raw roughness":[9.5166666667], "raw sapk 1 1000 g sand":[57129.1666666667], "raw slope":[9.1583333333], "raw soildepth":[.6083333333], "raw solpawhc":[151.35], "raw temperature annual range":[21.4333333333], "raw temperature seasonality":[.9416666667], 
  "raw thpk 1 1000 g thickness":[279.0416666667], "raw twi":[4.5416666667], "raw valleybottom":[.6083333333]}, "form":{"modelled annual mean moisture index":[.9756666799], "modelled annual mean rad":[12.0000000954], "modelled annual mean temp":[8.4266665936], "modelled annual precipitation":[1407.3333333333], "modelled clpk 1 1000 g clay":[24058.3333333333], "modelled erosional":[99.1666666667], "modelled highest period moisture index":[1], "modelled highest period radiation":[20.980000178], "modelled hydraulic conductivity ksat":[166.6666666667], 
  "modelled isothermality":[.4939999938], "modelled lowest period moisture index":[.8756666621], "modelled lowest period radiation":[3.9166666349], "modelled max temp warmest period":[18.3566667557], "modelled mean diurnal range":[8.6166667461], "modelled mean moisture index coldest quarter":[1], "modelled mean moisture index highest quarter MI":[1], "modelled mean moisture index lowest quater MI":[.9139999986], "modelled mean moisture index warmest quarter":[.9393333415], "modelled mean temp coldest quarter":[4.6199999571], 
  "modelled mean temp driest quater":[12.2033334096], "modelled mean temp warmer quarter":[12.313333416], "modelled mean temp wettest quarter":[6.9966665745], "modelled min temp coldest period":[1.009999985], "modelled moisture index seasonality":[4.4], "modelled phos":[.0296393858], "modelled precipitation coldets quarter":[405], "modelled precipitation driest period":[18.4333333333], "modelled precipitation driest quarter":[267.1666666667], "modelled precipitation seasonality":[17.3666666667], 
  "modelled precipitation warmest quarter":[272.2], "modelled precipitation wettest period":[36.7], "modelled precipitation wettest quarter":[425.8333333333], "modelled radiation coldest quarter":[5.6500000318], "modelled radiation driest quarter":[17.3266669591], "modelled radiation seasonality":[50.7666666667], "modelled radiation warmest quarter":[18.4133333206], "modelled radiation wettest quarter":[11.630000035], "modelled relief":[187.601335907], "modelled ridgetopflat":[0], "modelled rockalklty":[5.8], 
  "modelled rockgrainsz":[5.0333333333], "modelled rockhardness":[5.7666666667], "modelled rocknutrnt":[5.7666666667], "modelled roughness":[11.1428800742], "modelled sapk 1 1000 g sand":[54641.6666666666], "modelled slope":[12.2245521386], "modelled soildepth":[1.0466666738], "modelled solpawhc":[160.1666666667], "modelled temperature annual range":[17.3433331172], "modelled temperature seasonality":[1.0673333148], "modelled thpk 1 1000 g thickness":[322.6333333333], "modelled twi":[5.1204978943], 
  "modelled valleybottom":[.8333333333], "modelled whpk 1 1000 g water cap":[53558.3333333333], "raw annual mean moisture index":[.0909090909], "raw annual mean rad":[11.7272727273], "raw annual mean temp":[7.9090909091], "raw annual precipitation":[1400], "raw clpk 1 1000 g clay":[25386.3636363636], "raw erosional":[99.3636363636], "raw highest period moisture index":[1], "raw highest period radiation":[20.8181818182], "raw hydraulic conductivity ksat":[172.7272727273], "raw lowest period moisture index":[.0909090909], 
  "raw lowest period radiation":[3.8181818182], "raw max temp warmest period":[18.0909090909], "raw mean diurnal range":[8.2727272727], "raw mean moisture index coldest quarter":[1], "raw mean moisture index highest quarter MI":[1], "raw mean moisture index lowest quater MI":[.0909090909], "raw mean moisture index warmest quarter":[.0909090909], "raw mean temp coldest quarter":[4.2727272727], "raw mean temp driest quater":[11.9090909091], "raw mean temp warmer quarter":[11.9090909091], "raw mean temp wettest quarter":[6.2727272727], 
  "raw min temp coldest period":[.6363636364], "raw moisture index seasonality":[4.5454545455], "raw precipitation coldets quarter":[404.1818181818], "raw precipitation driest period":[18], "raw precipitation driest quarter":[264.1818181818], "raw precipitation seasonality":[17.6363636364], "raw precipitation warmest quarter":[269], "raw precipitation wettest period":[36.3636363636], "raw precipitation wettest quarter":[423.1818181818], "raw radiation coldest quarter":[5.0909090909], "raw radiation driest quarter":[17.1818181818], 
  "raw radiation seasonality":[50.5454545455], "raw radiation warmest quarter":[18.0909090909], "raw radiation wettest quarter":[11], "raw relief":[214.8181818182], "raw ridgetopflat":[0], "raw rockalklty":[5.8181818182], "raw rockgrainsz":[4.9090909091], "raw rockhardness":[5.8181818182], "raw rocknutrnt":[5.8181818182], "raw roughness":[11.5454545455], "raw sapk 1 1000 g sand":[52431.8181818182], "raw slope":[13], "raw soildepth":[.7272727273], "raw solpawhc":[167.5454545455], "raw temperature annual range":[16.9090909091], 
  "raw temperature seasonality":[.8181818182], "raw thpk 1 1000 g thickness":[308.6363636364], "raw twi":[4.3636363636], "raw valleybottom":[.5454545455]}, "tree":{"modelled annual mean moisture index":[.2800000012], "modelled annual mean rad":[22.1500005722], "modelled annual mean temp":[26.4499998093], "modelled annual precipitation":[732], "modelled clpk 1 1000 g clay":[41500], "modelled erosional":[100], "modelled highest period moisture index":[.9199999869], "modelled highest period radiation":[26.8000001907], 
  "modelled hydraulic conductivity ksat":[65], "modelled isothermality":[.5400000215], "modelled lowest period moisture index":[.0049999999], "modelled lowest period radiation":[17], "modelled max temp warmest period":[38.5], "modelled mean diurnal range":[14.9500002861], "modelled mean moisture index coldest quarter":[.0299999993], "modelled mean moisture index highest quarter MI":[.8199999928], "modelled mean moisture index lowest quater MI":[.0099999998], "modelled mean moisture index warmest quarter":[.2599999979], 
  "modelled mean temp coldest quarter":[21], "modelled mean temp driest quater":[23.25], "modelled mean temp warmer quarter":[30.5], "modelled mean temp wettest quarter":[29.3500003815], "modelled min temp coldest period":[10.7999997139], "modelled moisture index seasonality":[120], "modelled phos":[.0149999997], "modelled precipitation coldets quarter":[14], "modelled precipitation driest period":[0], "modelled precipitation driest quarter":[0], "modelled precipitation seasonality":[126], "modelled precipitation warmest quarter":[239.5], 
  "modelled precipitation wettest period":[52], "modelled precipitation wettest quarter":[546], "modelled radiation coldest quarter":[18.8500003815], "modelled radiation driest quarter":[21.9499998093], "modelled radiation seasonality":[13.5], "modelled radiation warmest quarter":[25.25], "modelled radiation wettest quarter":[22.4000005722], "modelled relief":[98.6766052246], "modelled ridgetopflat":[0], "modelled rockalklty":[5.5], "modelled rockgrainsz":[4.5], "modelled rockhardness":[4.5], "modelled rocknutrnt":[5], 
  "modelled roughness":[17.0805878639], "modelled sapk 1 1000 g sand":[37E3], "modelled slope":[5.9404842854], "modelled soildepth":[1.0000000298], "modelled solpawhc":[117.5], "modelled temperature annual range":[27.75], "modelled temperature seasonality":[1.2549999952], "modelled thpk 1 1000 g thickness":[150], "modelled twi":[8.5943181515], "modelled valleybottom":[0], "modelled whpk 1 1000 g water cap":[20500], "raw annual mean moisture index":[0], "raw annual mean rad":[22], "raw annual mean temp":[26], 
  "raw annual precipitation":[732], "raw clpk 1 1000 g clay":[41500], "raw erosional":[100], "raw highest period moisture index":[0], "raw highest period radiation":[26], "raw hydraulic conductivity ksat":[65], "raw lowest period moisture index":[0], "raw lowest period radiation":[16.5], "raw max temp warmest period":[38], "raw mean diurnal range":[14.5], "raw mean moisture index coldest quarter":[0], "raw mean moisture index highest quarter MI":[0], "raw mean moisture index lowest quater MI":[0], 
  "raw mean moisture index warmest quarter":[0], "raw mean temp coldest quarter":[20.5], "raw mean temp driest quater":[22.5], "raw mean temp warmer quarter":[30], "raw mean temp wettest quarter":[29], "raw min temp coldest period":[10.5], "raw moisture index seasonality":[120], "raw precipitation coldets quarter":[14], "raw precipitation driest period":[0], "raw precipitation driest quarter":[0], "raw precipitation seasonality":[126], "raw precipitation warmest quarter":[239.5], "raw precipitation wettest period":[52], 
  "raw precipitation wettest quarter":[546], "raw radiation coldest quarter":[18.5], "raw radiation driest quarter":[21.5], "raw radiation seasonality":[13.5], "raw radiation warmest quarter":[25], "raw radiation wettest quarter":[22], "raw relief":[98], "raw ridgetopflat":[0], "raw rockalklty":[5.5], "raw rockgrainsz":[4.5], "raw rockhardness":[4.5], "raw rocknutrnt":[5], "raw roughness":[16.5], "raw sapk 1 1000 g sand":[37E3], "raw slope":[5.5], "raw soildepth":[.5], "raw solpawhc":[117.5], "raw temperature annual range":[27], 
  "raw temperature seasonality":[1], "raw thpk 1 1000 g thickness":[150], "raw twi":[8], "raw valleybottom":[0]}, "take":{"modelled annual mean moisture index":[.7365444446], "modelled annual mean rad":[17.1275078493], "modelled annual mean temp":[16.1311112493], "modelled annual precipitation":[1255.8687301587], "modelled clpk 1 1000 g clay":[21822.0634920634], "modelled erosional":[91.9027777778], "modelled highest period moisture index":[.9502539679], "modelled highest period radiation":[24.715031606], 
  "modelled hydraulic conductivity ksat":[152.3], "modelled isothermality":[.4938333283], "modelled lowest period moisture index":[.3612952372], "modelled lowest period radiation":[9.6579523886], "modelled max temp warmest period":[27.2970475527], "modelled mean diurnal range":[10.9151110977], "modelled mean moisture index coldest quarter":[.8659396845], "modelled mean moisture index highest quarter MI":[.9381000012], "modelled mean moisture index lowest quater MI":[.4386444416], "modelled mean moisture index warmest quarter":[.5990571438], 
  "modelled mean temp coldest quarter":[11.0153809807], "modelled mean temp driest quater":[14.1643810366], "modelled mean temp warmer quarter":[21.0059206676], "modelled mean temp wettest quarter":[18.1127459956], "modelled min temp coldest period":[5.1418412599], "modelled moisture index seasonality":[31.663015873], "modelled phos":[.0397253511], "modelled precipitation coldets quarter":[243.0065079365], "modelled precipitation driest period":[7.4119047619], "modelled precipitation driest quarter":[158.4253968254], 
  "modelled precipitation seasonality":[45.0196825397], "modelled precipitation warmest quarter":[418.6682539683], "modelled precipitation wettest period":[49.3933333333], "modelled precipitation wettest quarter":[535.4804761905], "modelled radiation coldest quarter":[11.5418730642], "modelled radiation driest quarter":[16.7123016274], "modelled radiation seasonality":[30.5920634921], "modelled radiation warmest quarter":[21.9849682202], "modelled radiation wettest quarter":[17.2387459149], "modelled relief":[97.2765801426], 
  "modelled ridgetopflat":[.6339285714], "modelled rockalklty":[4.7514285714], "modelled rockgrainsz":[4.3793650794], "modelled rockhardness":[5.7], "modelled rocknutrnt":[4.7347619048], "modelled roughness":[13.9966933051], "modelled sapk 1 1000 g sand":[61094.5238095238], "modelled slope":[6.4187526792], "modelled soildepth":[.9957460357], "modelled solpawhc":[125.65], "modelled temperature annual range":[22.1440794706], "modelled temperature seasonality":[1.3577285743], "modelled thpk 1 1000 g thickness":[276.8314285714], 
  "modelled twi":[6.0713178382], "modelled valleybottom":[5.5426587302], "modelled whpk 1 1000 g water cap":[41211.3919047619], "raw annual mean moisture index":[0], "raw annual mean rad":[16.0625], "raw annual mean temp":[15.203125], "raw annual precipitation":[1208.296875], "raw clpk 1 1000 g clay":[20792.96875], "raw erosional":[90.5625], "raw highest period moisture index":[.703125], "raw highest period radiation":[23.421875], "raw hydraulic conductivity ksat":[141.09375], "raw lowest period moisture index":[0], 
  "raw lowest period radiation":[8.8125], "raw max temp warmest period":[25.828125], "raw mean diurnal range":[10.046875], "raw mean moisture index coldest quarter":[.40625], "raw mean moisture index highest quarter MI":[.640625], "raw mean moisture index lowest quater MI":[0], "raw mean moisture index warmest quarter":[.015625], "raw mean temp coldest quarter":[10.265625], "raw mean temp driest quater":[13.1875], "raw mean temp warmer quarter":[19.796875], "raw mean temp wettest quarter":[16.9375], 
  "raw min temp coldest period":[4.53125], "raw moisture index seasonality":[29.625], "raw precipitation coldets quarter":[232.109375], "raw precipitation driest period":[7.28125], "raw precipitation driest quarter":[157.328125], "raw precipitation seasonality":[42.140625], "raw precipitation warmest quarter":[401.015625], "raw precipitation wettest period":[45.546875], "raw precipitation wettest quarter":[506.40625], "raw radiation coldest quarter":[10.625], "raw radiation driest quarter":[15.6875], 
  "raw radiation seasonality":[29.78125], "raw radiation warmest quarter":[20.71875], "raw radiation wettest quarter":[16.421875], "raw relief":[100.15625], "raw ridgetopflat":[.484375], "raw rockalklty":[4.109375], "raw rockgrainsz":[3.84375], "raw rockhardness":[5.1875], "raw rocknutrnt":[4], "raw roughness":[13.9375], "raw sapk 1 1000 g sand":[57734.375], "raw slope":[6.078125], "raw soildepth":[.5], "raw solpawhc":[116.21875], "raw temperature annual range":[21.03125], "raw temperature seasonality":[.90625], 
  "raw thpk 1 1000 g thickness":[267.40625], "raw twi":[5.46875], "raw valleybottom":[4.953125]}, "care":{"modelled annual mean moisture index":[.7523631571], "modelled annual mean rad":[15.7872632313], "modelled annual mean temp":[14.148368388], "modelled annual precipitation":[1072.0410526316], "modelled clpk 1 1000 g clay":[20124.6052631579], "modelled erosional":[85.6052631579], "modelled highest period moisture index":[.9810842105], "modelled highest period radiation":[24.9694211327], "modelled hydraulic conductivity ksat":[130.0578947368], 
  "modelled isothermality":[.4845000008], "modelled lowest period moisture index":[.323263157], "modelled lowest period radiation":[7.2001579207], "modelled max temp warmest period":[25.3658948326], "modelled mean diurnal range":[10.2003158394], "modelled mean moisture index coldest quarter":[.9645894769], "modelled mean moisture index highest quarter MI":[.9754421075], "modelled mean moisture index lowest quater MI":[.4105263146], "modelled mean moisture index warmest quarter":[.4492105245], "modelled mean temp coldest quarter":[9.284631582], 
  "modelled mean temp driest quater":[15.7744210745], "modelled mean temp warmer quarter":[18.8259999486], "modelled mean temp wettest quarter":[13.4179999638], "modelled min temp coldest period":[4.3915789415], "modelled moisture index seasonality":[34.51], "modelled phos":[.0319927152], "modelled precipitation coldets quarter":[293.6242105263], "modelled precipitation driest period":[7.7615789474], "modelled precipitation driest quarter":[158.1031578947], "modelled precipitation seasonality":[32.4805263158], 
  "modelled precipitation warmest quarter":[240.0526315789], "modelled precipitation wettest period":[34.3584210526], "modelled precipitation wettest quarter":[384.7031578947], "modelled radiation coldest quarter":[9.1081578742], "modelled radiation driest quarter":[19.6293685346], "modelled radiation seasonality":[39.0931578947], "modelled radiation warmest quarter":[22.166210543], "modelled radiation wettest quarter":[13.3475263033], "modelled relief":[74.8392543699], "modelled ridgetopflat":[4.1447368421], 
  "modelled rockalklty":[4.9478947368], "modelled rockgrainsz":[4.0494736842], "modelled rockhardness":[5.6621052632], "modelled rocknutrnt":[4.4805263158], "modelled roughness":[17.1395764974], "modelled sapk 1 1000 g sand":[60505.3947368421], "modelled slope":[4.8369444082], "modelled soildepth":[.9438947287], "modelled solpawhc":[110.2721052632], "modelled temperature annual range":[20.8948948519], "modelled temperature seasonality":[1.3039000004], "modelled thpk 1 1000 g thickness":[270.7410526316], 
  "modelled twi":[5.8377228775], "modelled valleybottom":[11.2171052632], "modelled whpk 1 1000 g water cap":[38992.5510526315], "raw annual mean moisture index":[0], "raw annual mean rad":[14.5428571429], "raw annual mean temp":[12.8285714286], "raw annual precipitation":[1000.6], "raw clpk 1 1000 g clay":[18821.4285714286], "raw erosional":[77.6], "raw highest period moisture index":[.7714285714], "raw highest period radiation":[23.1428571429], "raw hydraulic conductivity ksat":[122.2857142857], 
  "raw lowest period moisture index":[0], "raw lowest period radiation":[6.4571428571], "raw max temp warmest period":[23.5142857143], "raw mean diurnal range":[9.2], "raw mean moisture index coldest quarter":[.4285714286], "raw mean moisture index highest quarter MI":[.7428571429], "raw mean moisture index lowest quater MI":[0], "raw mean moisture index warmest quarter":[0], "raw mean temp coldest quarter":[8.3714285714], "raw mean temp driest quater":[14.3428571429], "raw mean temp warmer quarter":[17.3428571429], 
  "raw mean temp wettest quarter":[12.3428571429], "raw min temp coldest period":[3.6], "raw moisture index seasonality":[32.3428571429], "raw precipitation coldets quarter":[272.2571428571], "raw precipitation driest period":[7.2285714286], "raw precipitation driest quarter":[149.8], "raw precipitation seasonality":[30.2857142857], "raw precipitation warmest quarter":[235.7714285714], "raw precipitation wettest period":[32.0857142857], "raw precipitation wettest quarter":[363.1714285714], "raw radiation coldest quarter":[8.2571428571], 
  "raw radiation driest quarter":[18], "raw radiation seasonality":[37], "raw radiation warmest quarter":[20.4285714286], "raw radiation wettest quarter":[12.1714285714], "raw relief":[73.2285714286], "raw ridgetopflat":[4.2571428571], "raw rockalklty":[4.2], "raw rockgrainsz":[3.6571428571], "raw rockhardness":[4.6], "raw rocknutrnt":[3.8], "raw roughness":[15.9714285714], "raw sapk 1 1000 g sand":[55707.1428571429], "raw slope":[4.4], "raw soildepth":[.3142857143], "raw solpawhc":[99.3714285714], 
  "raw temperature annual range":[19.4857142857], "raw temperature seasonality":[.8857142857], "raw thpk 1 1000 g thickness":[256.2285714286], "raw twi":[5.7428571429], "raw valleybottom":[9.3714285714]}, "to":{"modelled annual mean moisture index":[.3124999981], "modelled annual mean rad":[19.4000000954], "modelled annual mean temp":[17.6749999523], "modelled annual precipitation":[369.5], "modelled clpk 1 1000 g clay":[16375], "modelled erosional":[57.8125], "modelled highest period moisture index":[.7574999928], 
  "modelled highest period radiation":[28.8750004768], "modelled hydraulic conductivity ksat":[200], "modelled isothermality":[.484999992], "modelled lowest period moisture index":[.0299999993], "modelled lowest period radiation":[9.7249999046], "modelled max temp warmest period":[33.1500005722], "modelled mean diurnal range":[13.2000000477], "modelled mean moisture index coldest quarter":[.7025000006], "modelled mean moisture index highest quarter MI":[.7099999934], "modelled mean moisture index lowest quater MI":[.044999999], 
  "modelled mean moisture index warmest quarter":[.0574999992], "modelled mean temp coldest quarter":[11.5250000954], "modelled mean temp driest quater":[21.6499996185], "modelled mean temp warmer quarter":[24.25], "modelled mean temp wettest quarter":[12.1749999523], "modelled min temp coldest period":[5.6000000238], "modelled moisture index seasonality":[90.25], "modelled phos":[.0180416674], "modelled precipitation coldets quarter":[160.25], "modelled precipitation driest period":[0], "modelled precipitation driest quarter":[28.75], 
  "modelled precipitation seasonality":[59.75], "modelled precipitation warmest quarter":[48.75], "modelled precipitation wettest period":[15], "modelled precipitation wettest quarter":[174.5], "modelled radiation coldest quarter":[12.2000000477], "modelled radiation driest quarter":[27.0499997139], "modelled radiation seasonality":[34.75], "modelled radiation warmest quarter":[26.0750002861], "modelled radiation wettest quarter":[11.0250000954], "modelled relief":[10.535130471], "modelled ridgetopflat":[0], 
  "modelled rockalklty":[5], "modelled rockgrainsz":[5.5], "modelled rockhardness":[5.5], "modelled rocknutrnt":[3.75], "modelled roughness":[1.172922425], "modelled sapk 1 1000 g sand":[68250], "modelled slope":[.6775645409], "modelled soildepth":[.875], "modelled solpawhc":[120], "modelled temperature annual range":[27.5250000954], "modelled temperature seasonality":[1.7350000143], "modelled thpk 1 1000 g thickness":[277.75], "modelled twi":[7.6787025928], "modelled valleybottom":[35.9375], "modelled whpk 1 1000 g water cap":[23578.75], 
  "raw annual mean moisture index":[0], "raw annual mean rad":[18.6666666667], "raw annual mean temp":[16.5], "raw annual precipitation":[378], "raw clpk 1 1000 g clay":[14916.6666666667], "raw erosional":[69.5], "raw highest period moisture index":[0], "raw highest period radiation":[28.5], "raw hydraulic conductivity ksat":[233.3333333333], "raw lowest period moisture index":[0], "raw lowest period radiation":[9.1666666667], "raw max temp warmest period":[31.6666666667], "raw mean diurnal range":[12.5], 
  "raw mean moisture index coldest quarter":[0], "raw mean moisture index highest quarter MI":[0], "raw mean moisture index lowest quater MI":[0], "raw mean moisture index warmest quarter":[0], "raw mean temp coldest quarter":[10.8333333333], "raw mean temp driest quater":[21.1666666667], "raw mean temp warmer quarter":[23], "raw mean temp wettest quarter":[11.6666666667], "raw min temp coldest period":[5], "raw moisture index seasonality":[89.1666666667], "raw precipitation coldets quarter":[161.6666666667], 
  "raw precipitation driest period":[0], "raw precipitation driest quarter":[33.1666666667], "raw precipitation seasonality":[59], "raw precipitation warmest quarter":[47.8333333333], "raw precipitation wettest period":[15], "raw precipitation wettest quarter":[176.3333333333], "raw radiation coldest quarter":[11.5], "raw radiation driest quarter":[26.5], "raw radiation seasonality":[35.1666666667], "raw radiation warmest quarter":[25.6666666667], "raw radiation wettest quarter":[10.3333333333], 
  "raw relief":[12.3333333333], "raw ridgetopflat":[0], "raw rockalklty":[4.1666666667], "raw rockgrainsz":[5], "raw rockhardness":[6], "raw rocknutrnt":[3.8333333333], "raw roughness":[1], "raw sapk 1 1000 g sand":[71500], "raw slope":[.3333333333], "raw soildepth":[.5], "raw solpawhc":[122.6666666667], "raw temperature annual range":[26.3333333333], "raw temperature seasonality":[1.1666666667], "raw thpk 1 1000 g thickness":[315.8333333333], "raw twi":[6.6666666667], "raw valleybottom":[29]}, "remove":{"modelled annual mean moisture index":[], 
  "modelled annual mean rad":[], "modelled annual mean temp":[], "modelled annual precipitation":[], "modelled clpk 1 1000 g clay":[], "modelled erosional":[], "modelled highest period moisture index":[], "modelled highest period radiation":[], "modelled hydraulic conductivity ksat":[], "modelled isothermality":[], "modelled lowest period moisture index":[], "modelled lowest period radiation":[], "modelled max temp warmest period":[], "modelled mean diurnal range":[], "modelled mean moisture index coldest quarter":[], 
  "modelled mean moisture index highest quarter MI":[], "modelled mean moisture index lowest quater MI":[], "modelled mean moisture index warmest quarter":[], "modelled mean temp coldest quarter":[], "modelled mean temp driest quater":[], "modelled mean temp warmer quarter":[], "modelled mean temp wettest quarter":[], "modelled min temp coldest period":[], "modelled moisture index seasonality":[], "modelled phos":[], "modelled precipitation coldets quarter":[], "modelled precipitation driest period":[], 
  "modelled precipitation driest quarter":[], "modelled precipitation seasonality":[], "modelled precipitation warmest quarter":[], "modelled precipitation wettest period":[], "modelled precipitation wettest quarter":[], "modelled radiation coldest quarter":[], "modelled radiation driest quarter":[], "modelled radiation seasonality":[], "modelled radiation warmest quarter":[], "modelled radiation wettest quarter":[], "modelled relief":[], "modelled ridgetopflat":[], "modelled rockalklty":[], "modelled rockgrainsz":[], 
  "modelled rockhardness":[], "modelled rocknutrnt":[], "modelled roughness":[], "modelled sapk 1 1000 g sand":[], "modelled slope":[], "modelled soildepth":[], "modelled solpawhc":[], "modelled temperature annual range":[], "modelled temperature seasonality":[], "modelled thpk 1 1000 g thickness":[], "modelled twi":[], "modelled valleybottom":[], "modelled whpk 1 1000 g water cap":[], "raw annual mean moisture index":[0], "raw annual mean rad":[16], "raw annual mean temp":[13.8333333333], "raw annual precipitation":[683.8333333333], 
  "raw clpk 1 1000 g clay":[9833.3333333333], "raw erosional":[67.1666666667], "raw highest period moisture index":[.6666666667], "raw highest period radiation":[26], "raw hydraulic conductivity ksat":[266.6666666667], "raw lowest period moisture index":[0], "raw lowest period radiation":[6.1666666667], "raw max temp warmest period":[25.1666666667], "raw mean diurnal range":[10], "raw mean moisture index coldest quarter":[0], "raw mean moisture index highest quarter MI":[.6666666667], "raw mean moisture index lowest quater MI":[0], 
  "raw mean moisture index warmest quarter":[0], "raw mean temp coldest quarter":[9.5], "raw mean temp driest quater":[18.1666666667], "raw mean temp warmer quarter":[18.5], "raw mean temp wettest quarter":[9.6666666667], "raw min temp coldest period":[5], "raw moisture index seasonality":[61.3333333333], "raw precipitation coldets quarter":[267.8333333333], "raw precipitation driest period":[0], "raw precipitation driest quarter":[84.1666666667], "raw precipitation seasonality":[46], "raw precipitation warmest quarter":[85.6666666667], 
  "raw precipitation wettest period":[24.5], "raw precipitation wettest quarter":[272.8333333333], "raw radiation coldest quarter":[8.3333333333], "raw radiation driest quarter":[24], "raw radiation seasonality":[43.6666666667], "raw radiation warmest quarter":[23.6666666667], "raw radiation wettest quarter":[7.8333333333], "raw relief":[29.6666666667], "raw ridgetopflat":[0], "raw rockalklty":[4.3333333333], "raw rockgrainsz":[4.3333333333], "raw rockhardness":[2.1666666667], "raw rocknutrnt":[2.1666666667], 
  "raw roughness":[21.6666666667], "raw sapk 1 1000 g sand":[81666.6666666667], "raw slope":[1.5], "raw soildepth":[.6666666667], "raw solpawhc":[124.8333333333], "raw temperature annual range":[20.1666666667], "raw temperature seasonality":[1], "raw thpk 1 1000 g thickness":[597.3333333333], "raw twi":[8.8333333333], "raw valleybottom":[6.1666666667]}, "quotes_and_other_html_special_characters":{"modelled annual mean moisture index":[.7600000054], "modelled annual mean rad":[17.4749999046], "modelled annual mean temp":[17.6499996185], 
  "modelled annual precipitation":[1174], "modelled clpk 1 1000 g clay":[36312.5], "modelled erosional":[75], "modelled highest period moisture index":[.962500006], "modelled highest period radiation":[24.5249996185], "modelled hydraulic conductivity ksat":[200], "modelled isothermality":[.5150000006], "modelled lowest period moisture index":[.400000006], "modelled lowest period radiation":[10.2999997139], "modelled max temp warmest period":[28.25], "modelled mean diurnal range":[11.6499998569], 
  "modelled mean moisture index coldest quarter":[.9274999946], "modelled mean moisture index highest quarter MI":[.9399999976], "modelled mean moisture index lowest quater MI":[.4825000018], "modelled mean moisture index warmest quarter":[.6875], "modelled mean temp coldest quarter":[12.5], "modelled mean temp driest quater":[13.875], "modelled mean temp warmer quarter":[22.2500004768], "modelled mean temp wettest quarter":[21.8999996185], "modelled min temp coldest period":[5.5750000477], "modelled moisture index seasonality":[25.25], 
  "modelled phos":[.0735000009], "modelled precipitation coldets quarter":[186.5], "modelled precipitation driest period":[5.75], "modelled precipitation driest quarter":[144.5], "modelled precipitation seasonality":[45.5], "modelled precipitation warmest quarter":[452], "modelled precipitation wettest period":[45.75], "modelled precipitation wettest quarter":[509.5], "modelled radiation coldest quarter":[12.1000001431], "modelled radiation driest quarter":[15.5250000954], "modelled radiation seasonality":[27.5], 
  "modelled radiation warmest quarter":[21.7000002861], "modelled radiation wettest quarter":[19.7750000954], "modelled relief":[77.4553109407], "modelled ridgetopflat":[0], "modelled rockalklty":[4.75], "modelled rockgrainsz":[3], "modelled rockhardness":[4.5], "modelled rocknutrnt":[4.75], "modelled roughness":[16.6225522161], "modelled sapk 1 1000 g sand":[43625], "modelled slope":[4.8600849956], "modelled soildepth":[1.1749999821], "modelled solpawhc":[159.5], "modelled temperature annual range":[22.6749997139], 
  "modelled temperature seasonality":[1.3325000107], "modelled thpk 1 1000 g thickness":[219], "modelled twi":[10.4112542868], "modelled valleybottom":[28.125], "modelled whpk 1 1000 g water cap":[35500], "raw annual mean moisture index":[0], "raw annual mean rad":[17.4], "raw annual mean temp":[17.4], "raw annual precipitation":[1239.4], "raw clpk 1 1000 g clay":[37300], "raw erosional":[90], "raw highest period moisture index":[.6], "raw highest period radiation":[24.2], "raw hydraulic conductivity ksat":[220], 
  "raw lowest period moisture index":[0], "raw lowest period radiation":[10.6], "raw max temp warmest period":[28], "raw mean diurnal range":[11], "raw mean moisture index coldest quarter":[0], "raw mean moisture index highest quarter MI":[.6], "raw mean moisture index lowest quater MI":[0], "raw mean moisture index warmest quarter":[0], "raw mean temp coldest quarter":[12.8], "raw mean temp driest quater":[14.2], "raw mean temp warmer quarter":[22], "raw mean temp wettest quarter":[21.6], "raw min temp coldest period":[5.8], 
  "raw moisture index seasonality":[26.6], "raw precipitation coldets quarter":[177.4], "raw precipitation driest period":[4.6], "raw precipitation driest quarter":[135.6], "raw precipitation seasonality":[52.8], "raw precipitation warmest quarter":[497.4], "raw precipitation wettest period":[52.4], "raw precipitation wettest quarter":[579.6], "raw radiation coldest quarter":[12.2], "raw radiation driest quarter":[15.8], "raw radiation seasonality":[25.8], "raw radiation warmest quarter":[21.2], 
  "raw radiation wettest quarter":[19.2], "raw relief":[81.6], "raw ridgetopflat":[0], "raw rockalklty":[4.6], "raw rockgrainsz":[3], "raw rockhardness":[4.8], "raw rocknutrnt":[5], "raw roughness":[15.4], "raw sapk 1 1000 g sand":[42950], "raw slope":[4.6], "raw soildepth":[.8], "raw solpawhc":[160.8], "raw temperature annual range":[21.6], "raw temperature seasonality":[1], "raw thpk 1 1000 g thickness":[227.8], "raw twi":[10.4], "raw valleybottom":[13.6]}}};
  function clickHandler() {
    var JSCompiler_object_inline_x_80;
    var JSCompiler_object_inline_y_81;
    switch(this.id) {
      case "north":
        JSCompiler_object_inline_x_80 = 0, JSCompiler_object_inline_y_81 = 10, true;
        break;
      case "west":
        JSCompiler_object_inline_x_80 = -10, JSCompiler_object_inline_y_81 = 0, true;
        break;
      case "east":
        JSCompiler_object_inline_x_80 = 10, JSCompiler_object_inline_y_81 = 0, true;
        break;
      case "south":
        JSCompiler_object_inline_x_80 = 0, JSCompiler_object_inline_y_81 = -10, true;
    }
    var canvas = st.canvas;
    canvas.translate(JSCompiler_object_inline_x_80, JSCompiler_object_inline_y_81);
  }
  function zoomHandler() {
    var scroll;
    switch(this.id) {
      case "zoomIN":
        scroll = +1;
        break;
      case "zoomOUT":
        scroll = -1;
    }
    st.zoom(scroll);
  }
  function nextStep(pos$$2, step, length$$11) {
    if (typeof pos$$2 === "undefined") {
      return step > 0 ? 0 : length$$11 - 1;
    }
    var i$$4 = (pos$$2 + step) % length$$11;
    return i$$4 < 0 ? length$$11 + i$$4 : i$$4;
  }
  function keyHandler(e$$4) {
    var ENTER = 13;
    var shift = e$$4.shiftKey;
    if (shift && e$$4.keyCode === ENTER) {
      search(-1);
      if (e$$4.preventDefault) {
        e$$4.preventDefault();
      }
      return false;
    } else {
      if (e$$4.keyCode === ENTER) {
        search(1);
        if (e$$4.preventDefault) {
          e$$4.preventDefault();
        }
        return false;
      }
    }
  }
  var config = {injectInto:"infovis", width:800, height:600, offsetX:0, align:"left", alignName:false, lateralise:true, branchLength:true, branchMultiplier:1, duration:1E3, fps:10, transition:$jit.Trans.Quart.easeInOut, levelDistance:20, levelsToShow:Number.MAX_VALUE, constrained:false, firstCharacter:"Raceme_length_median", Navigation:{enable:true, panning:"avoid nodes", zooming:50}, Tips:{enable:true, onShow:function(div, node$$4) {
    var url$$2 = "";
    var key$$15;
    var i$$6;
    var char;
    var html$$2 = "";
    var name$$32 = "";
    var index$$39;
    if (node$$4.data.leaf) {
      name$$32 = "<h3>" + node$$4.name + "</h3>";
      url$$2 = '<img class="tipImage" src="http://biocache.ala.org.au/ws/density/map?q=' + node$$4.name.split(/\s+/).join("+") + '"/>';
    }
    var result$$1 = [];
    for (index$$39 in st.config.selectedCharacters) {
      key$$15 = st.config.selectedCharacters[index$$39];
      char = node$$4.data.character[key$$15];
      html$$2 = "<strong>" + key$$15 + "</strong>: ";
      if (typeof char === "undefined" || char.length === 0 || typeof char[0] === "undefined") {
        html$$2 += "&mdash;";
      } else {
        if (typeof char[0] !== "number") {
          html$$2 += char.join(",");
        } else {
          html$$2 += char[0].toFixed(4);
        }
      }
      result$$1.push(html$$2);
    }
    div.innerHTML = name$$32 + result$$1.join("<br/>") + url$$2;
  }}, Node:{height:40, width:20, type:"circle", dim:5, color:"#aaa", overridable:true, align:"left"}, Canvas:{background:{color:"#EEF2F7"}}, Edge:{type:"line", color:"#000", overridable:true, lineWidth:2}, Events:{enable:true, type:"Native", onMouseEnter:function(node$$5, event$$1, e$$5) {
    st.canvas.element.style.cursor = "pointer";
    st.tips.config.onShow(st.tips.tip, node$$5);
    st.tips.setTooltipPosition($jit.util.event.getPos(e$$5));
  }, onMouseLeave:function() {
    st.canvas.element.style.cursor = "";
    st.tips.hide(true);
  }, onClick:function(node$$6, eventInfo, e$$6) {
    var leafs;
    if (node$$6) {
      selectedClade = [];
      var expand = $jit.id("expand");
      var pos$$3 = st.labels.getLabel(node$$6.id);
      var setRoot = $jit.id("setRoot");
      var rotate = $jit.id("rotate");
      var select = $jit.id("selectClade");
      var loc = parseInt(pos$$3.style.left.replace(/px/, ""), 10) + 100;
      var locy = parseInt(pos$$3.style.top.replace(/px/, ""), 10) + 40;
      if (setRoot.checked) {
        var id$$1 = node$$6.id;
        st.setRoot(id$$1, "animate");
        st.root = id$$1;
      }
      if (rotate.checked) {
        st.computePositions(st.graph.getNode(st.root), "start");
        if (typeof node$$6.data.rotate === "undefined") {
          node$$6.data.rotate = false;
        }
        node$$6.data.rotate = !node$$6.data.rotate;
        st.computePositions(st.graph.getNode(st.root), "end");
        st.fx.animate({modes:["linear", "node-property:alpha"], onComplete:function() {
        }});
      }
      if (expand.checked) {
        st.setCollapsed(node$$6);
        var level$$7 = st.nodesExpCol(node$$6);
        if (level$$7) {
          st.zoomIndex = level$$7;
        }
        st.computePositions(st.graph.getNode(st.root), "");
        st.plot();
      }
      if (select.checked) {
        st.clickedNode = node$$6;
        node$$6.eachSubgraph(function(elem$$2) {
          if (elem$$2.data.leaf) {
            if (leafs) {
              leafs += "<li>" + elem$$2.name + "</li>";
            } else {
              leafs = "<li>" + elem$$2.name + "</li>";
            }
            selectedClade.push(elem$$2);
          }
        });
        popup$$1.style.display = "inline";
        popup$$1.style.top = locy + "px";
        popup$$1.style.left = loc + "px";
        popupText.innerHTML = st.config.presentClade(selectedClade);
        st.config.onPresentClade();
        st.plot();
      }
    }
  }}, presentClade:function(clade) {
    var tmpl = st.config.tmpl;
    var nodeList = [];
    var node$$7;
    var html$$3;
    var split;
    var i$$7 = 0;
    for (;i$$7 < clade.length & i$$7 < 30;i$$7++) {
      node$$7 = {};
      node$$7.name = clade[i$$7].name;
      nodeList.push(node$$7);
    }
    if (tmpl) {
      tmpl = _.template(tmpl);
      html$$3 = tmpl({nodeList:nodeList});
    } else {
    }
    return html$$3;
  }, onPresentClade:function() {
    $("a.thumbImage1").colorbox({iframe:true, width:"80%", height:"80%"});
  }, tmpl:"<ul><% _.each(nodeList , function( value ) { %> <li> <%= value.name %> </li> <% }); %> </ul>", Tips:{enable:true, onShow:function(div$$1, node$$8) {
    var url$$3 = "";
    var key$$16;
    var i$$8;
    var char$$1;
    var html$$4 = "";
    var name$$33 = "";
    var maptitle = "";
    var index$$40;
    if (!!node$$8.name) {
      url$$3 = '<img class="tipImage" src="http://biocache.ala.org.au/ws/density/map?q=' + node$$8.name.replace(" ", "+") + '"/>';
      maptitle = "<br/>ALA <strong>reported</strong> occurences";
      name$$33 = "<i>" + node$$8.name + "</i>";
    } else {
      name$$33 = " unnamed clade ";
    }
    name$$33 = name$$33 + "<strong> click</strong> for ";
    if (node$$8.data.leaf) {
      name$$33 = name$$33 + "for linked data";
    } else {
      name$$33 = "Part of " + name$$33;
      if (node$$8.length < 30) {
        name$$33 = name$$33 + "clade members";
      } else {
        name$$33 = name$$33 + "30 clade members";
      }
    }
    name$$33 = "<h3>" + name$$33 + "</h3>";
    var result$$2 = [];
    for (index$$40 in st.config.selectedCharacters) {
      key$$16 = st.config.selectedCharacters[index$$40];
      char$$1 = node$$8.data.character[key$$16];
      html$$4 = "<strong>" + key$$16 + "</strong>: ";
      if (typeof char$$1 === "undefined" || char$$1.length === 0 || typeof char$$1[0] === "undefined") {
        html$$4 += "&mdash;";
      } else {
        if (typeof char$$1[0] !== "number") {
          html$$4 += char$$1.join(",<br/>....");
        } else {
          html$$4 += char$$1[0].toFixed(4);
        }
      }
      result$$2.push(html$$4);
    }
    div$$1.innerHTML = name$$33 + result$$2.join("<br/>") + maptitle + url$$3;
  }}, onBeforeCompute:function(node$$9) {
    Log.write("loading " + node$$9.name);
  }, onAfterCompute:function(msg) {
    if (msg) {
      Log.write(msg);
    } else {
      Log.write("done");
    }
  }, onCreateLabel:function(label$$1, node$$10) {
    var char$$2;
    var list = st.config.selectedCharacters;
    var charTypeMapping = st.charTypeMapping;
    var i$$9;
    var values$$4;
    var div$$2;
    var colorCoding = st.colorCoding;
    var firstColor;
    var index$$41;
    var temp;
    var shape;
    label$$1.id = node$$10.id;
    label$$1.innerHTML = node$$10.name;
    label$$1.onclick = function() {
      var setRoot$$1 = $jit.id("setRoot");
      if (!setRoot$$1.checked) {
        st.controller.Events.onClick(node$$10);
      }
    };
    var style = label$$1.style;
    style.width = "auto";
    style.height = 17 + "px";
    style.cursor = "pointer";
    style.color = "#333";
    style.fontSize = "0.8em";
    style.textAlign = "left";
    style.paddingTop = "3px";
    style.display = "inline";
    style.color = node$$10.data.$color;
    var boxes = "";
    var first$$3 = st.config.firstCharacter;
    var shapes = ["box", "star", "triangle"];
    index$$41 = 0;
    boxes = "";
    i$$9 = 0;
    for (;i$$9 < list.length;i$$9 += 1) {
      char$$2 = list[i$$9];
      values$$4 = node$$10.data.character[char$$2];
      if (values$$4 && values$$4.length > 0 && typeof values$$4[0] !== "undefined") {
        if (charTypeMapping[char$$2] === st.config.typeEnum.quali) {
          temp = colorCoding[char$$2];
          value = values$$4[0];
          if (values$$4.length > 1) {
            value = "multiple";
          }
          shape = '<div class="' + temp[value].shape + '" style="float:left;background-color:' + temp[value].color + ';" title="' + char$$2 + " : " + values$$4.join(" , ") + '"></div>';
          if (i$$9 === 0) {
            firstColor = temp[value].color;
          }
        } else {
          if (charTypeMapping[char$$2] === st.config.typeEnum.quant) {
            temp = st.colorCodingQuali[char$$2];
            value = values$$4[0];
            index$$41 = st.findIndex(value, st.range[char$$2]);
            shape = '<div class="' + temp[index$$41].shape + '" style="float:left;background-color:' + temp[index$$41].color + ';" title="' + char$$2 + " : " + temp[index$$41].name + '"></div>';
            if (i$$9 === 0) {
              firstColor = st.config.quantColor[st.config.quantColor.length - 1];
            }
          }
        }
      } else {
        shape = '<div class="empty" style="float:left;background-color:;" title="empty"></div>';
      }
      if (first$$3 !== char$$2) {
        boxes += shape;
      } else {
        boxes = shape + boxes;
      }
    }
    if (label$$1) {
      if (!node$$10.data.leaf) {
        label$$1.innerHTML = boxes + '&nbsp;&nbsp;<div style="display:inline;color:' + firstColor + '">' + node$$10.data.leaves + " Taxa</div>";
      } else {
        label$$1.innerHTML = boxes + '&nbsp;&nbsp;<div style="display:inline;color:' + firstColor + '">' + node$$10.name + "</div>";
      }
    }
  }, onBeforePlotNode:function(node$$11) {
    var result$$3 = true;
    var char$$3;
    if (!node$$11.data.leaf) {
      var key$$17;
      for (key$$17 in st.config.selectedCharacters) {
        if (node$$11.data.characterConsistency.hasOwnProperty(key$$17)) {
          char$$3 = st.config.selectedCharacters[key$$17];
          result$$3 = result$$3 && node$$11.data.characterConsistency[char$$3];
        }
      }
    }
    if (!result$$3 && node$$11.data.$type !== "triangle") {
      node$$11.data.$type = "square";
    }
    if (node$$11.data.$type === "circle") {
      if (node$$11.data.rotate) {
        node$$11.data.$color = "purple";
      } else {
        node$$11.data.$color = "red";
      }
    } else {
      if (node$$11.data.$type === "square") {
        node$$11.data.$dim = 10;
        node$$11.data.$color = "red";
      }
    }
    if (node$$11.data.$type === "triangle") {
      node$$11.data.$dim = 15;
      node$$11.data.$color = "#EE9AA2";
    } else {
      if (node$$11.data.$type !== "square") {
        delete node$$11.data.$dim;
      }
    }
    if (st.root === node$$11.id) {
      node$$11.data.$color = "lightblue";
    }
  }, onBeforePlotLine:function(adj$$1) {
  }, onClick:function(node$$12, eventInfo$$1, e$$7) {
    if (node$$12) {
      var elem$$3 = document.getElementById("selected");
      if (node$$12.leaf) {
        elem$$3.innerHTML = node$$12.name;
      } else {
        elem$$3.innerHTML = "";
        node$$12.subGraph(function(n$$1) {
          if (n$$1.data.leaf) {
            elem$$3.innerHTML += n$$1.name + "<br/>";
          }
        });
      }
    }
  }, onPlaceLabel:function(dom, node$$13) {
    var alignName = $jit.id("alignName");
    if (node$$13.selected) {
      dom.style.display = "none";
    }
    if (!node$$13.data.leaf) {
      dom.style.display = "none";
    }
    dom.style.display = node$$13.data.display || "block";
    if (alignName.checked) {
      jQuery("#" + dom.id + " .quant").addClass("quantAlign");
    } else {
      jQuery("#" + dom.id + " .quant").removeClass("quantAlign");
    }
  }};
  var height$$9 = config.height;
  var width$$9 = config.width || 800;
  $jit.util.extend(config, initial);
  Nav.load(config);
  var html$$1;
  var rightContainer$$1 = $jit.id("right-jitcontainer");
  var popup$$1 = $jit.id("popup");
  var popupText = $jit.id("popup-text");
  settingsPage();
  var dataObject;
  var json$$1 = "";
  if (config.tree) {
    dataObject = new Smits.PhyloCanvas.NewickParse(config.tree);
  }
  if (typeof dataObject === "object") {
    json$$1 = smitsNode2JSON(dataObject.getRoot());
  }
  var selectedClade;
  var zoomIN = $jit.id("zoomIN");
  var zoomOUT = $jit.id("zoomOUT");
  var world = $jit.id("world");
  st = new $jit.Phylo(config);
  isLateralise = function() {
    return st.config.lateralise;
  };
  st.loadJSON(json$$1);
  st.compute();
  st.character = config.character || {};
  var legendElem$$1 = $jit.id("legend");
  if (st.character) {
    html$$1 = st.colorCharacter() || "";
    jQuery("#legendBody").html(html$$1);
    legendElem$$1.style.display = "inline";
    updateCharacter(st.characterList);
  } else {
    legendElem$$1.style.display = "none";
  }
  var north = $jit.id("north");
  var east = $jit.id("east");
  var west = $jit.id("west");
  var south = $jit.id("south");
  north.onmousedown = south.onmousedown = east.onmousedown = west.onmousedown = clickHandler;
  zoomIN.onclick = zoomOUT.onclick = zoomHandler;
  world.onclick = function() {
    st.fitScreen();
  };
  var result = [];
  var pos;
  var prevSearch;
  var searchBtn = $jit.id("searchString");
  if (searchBtn.addEventListener) {
    searchBtn.addEventListener("keydown", keyHandler, false);
  } else {
    if (searchBtn.attachEvent) {
      searchBtn.attachEvent("onkeydown", keyHandler);
    }
  }
  var next = $jit.id("next");
  var previous = $jit.id("previous");
  next.onclick = function() {
    search(1);
  };
  previous.onclick = function() {
    search(-1);
  };
  onClickAlign = function(alignName$$1) {
    if (alignName$$1.checked) {
      st.config.alignName = true;
      jQuery(".quant").addClass("quantAlign");
    } else {
      st.config.alignName = false;
      jQuery(".quant").removeClass("quantAlign");
    }
    st.plot();
  };
  onSetRoot = function(setRoot$$2) {
    if (setRoot$$2.value === "checked") {
      var id$$2 = st.clickedNode.id;
      st.setRoot(id$$2, "animate");
    }
  };
  onLateralise = function(lat) {
    if (lat.checked) {
      st.config.lateralise = true;
    } else {
      st.config.lateralise = false;
    }
    st.computePositions(st.graph.getNode(st.root), "");
    st.plot();
  };
  var animateDuration;
  onAnimate = function(animate$$1) {
    if (!animateDuration) {
      animateDuration = st.config.duration;
    }
    if (animate$$1.checked) {
      st.config.duration = animateDuration;
    } else {
      st.config.duration = 0;
    }
  };
  onRender = function(render) {
    var newickTree$$1 = $jit.id("newickTree").value;
    if (newickTree$$1) {
      var dataObject$$1 = new Smits.PhyloCanvas.NewickParse(newickTree$$1);
      var rootObject;
      var json$$2 = "";
      if (typeof dataObject$$1 === "object") {
        rootObject = dataObject$$1.getRoot(), json$$2 = smitsNode2JSON(rootObject);
        st.loadJSON(json$$2);
      }
      st.compute();
      st.config.initCharacter = false;
      var legendElem$$3 = $jit.id("legend");
      if (st.character) {
        html$$1 = st.colorCharacter() || "";
        jQuery("#legendBody").html(html$$1);
        legendElem$$3.style.display = "inline";
        updateCharacter(st.characterList);
      } else {
        legendElem$$3.style.display = "none";
      }
      st.onClick(st.root);
      st.fitScreen();
    }
  };
  onGetCharacter = function(char$$4) {
  };
  onBranchLength = function(checkbox) {
    st.config.branchLength = checkbox.checked;
    st.computePositions(st.graph.getNode(st.root), "");
    st.plot();
  };
  onBranchMultiply = function(value$$29) {
    st.config.branchMultiplier = value$$29;
    st.computePositions(st.graph.getNode(st.root), "");
    st.plot();
  };
  toggleScreen = function(elem$$4) {
    var style$$1 = jQuery("#right-jitcontainer")[0].style;
    style$$1.display = style$$1.display === "none" ? "" : "none";
    if (style$$1.display) {
      jQuery(elem$$4).removeClass("on");
    } else {
      jQuery(elem$$4).addClass("on");
    }
  };
  onSetCharacter = function() {
    var first$$inline_13;
    var second$$inline_14;
    var third$$inline_15;
    var value$$inline_16 = [];
    first$$inline_13 = jQuery("#firstCharacter").val();
    second$$inline_14 = jQuery("#secondCharacter").val();
    third$$inline_15 = jQuery("#thirdCharacter").val();
    first$$inline_13 && value$$inline_16.push(first$$inline_13);
    second$$inline_14 && value$$inline_16.push(second$$inline_14);
    third$$inline_15 && value$$inline_16.push(third$$inline_15);
    st.config.firstCharacter = first$$inline_13 || "";
    st.config.selectedCharacters = value$$inline_16;
    first$$inline_13 = typeof first$$inline_13 === "undefined" ? "" : first$$inline_13;
    second$$inline_14 = typeof second$$inline_14 === "undefined" ? "" : second$$inline_14;
    third$$inline_15 = typeof third$$inline_15 === "undefined" ? "" : third$$inline_15;
    app.navigate("character/" + first$$inline_13 + "/" + second$$inline_14 + "/" + third$$inline_15);
    var legendElem$$inline_18 = $jit.id("legend");
    var i$$inline_19;
    var node$$inline_20;
    var label$$inline_21;
    if (st.character) {
      html$$1 = st.colorCharacter() || "";
      jQuery("#legendBody").html(html$$1);
      legendElem$$inline_18.style.display = "inline";
    } else {
      legendElem$$inline_18.style.display = "none";
    }
    for (i$$inline_19 in st.graph.nodes) {
      if (st.graph.nodes.hasOwnProperty(i$$inline_19)) {
        node$$inline_20 = st.graph.nodes[i$$inline_19];
        label$$inline_21 = jQuery("#" + node$$inline_20.id)[0];
        label$$inline_21 && st.config.onCreateLabel(label$$inline_21, node$$inline_20);
      }
    }
    st.onClick(st.root);
    st.fitScreen();
  };
  var AppRouter = Backbone.Router.extend({routes:{"":"start", "character/*char":"characterSelection"}, start:function() {
    st.onClick(st.root);
    st.fitScreen();
  }, characterSelection:function(char$$5) {
    var chars = char$$5.split("/");
    var index$$42 = ["firstCharacter", "secondCharacter", "thirdCharacter"];
    var i$$10 = 0;
    for (;i$$10 < chars.length;i$$10++) {
      var ch = unescape(chars[i$$10]);
      var select$$1 = jQuery("#" + index$$42[i$$10])[0];
      var j$$1 = 0;
      for (;j$$1 < select$$1.options.length;j$$1++) {
        if (select$$1.options[j$$1].value === ch) {
          select$$1.selectedIndex = j$$1;
          break;
        }
      }
    }
    onSetCharacter();
  }});
  var app = new AppRouter;
  Backbone.history.start();
}
function init() {
  phylogenyExplorer_init();
}
var labelType;
var useGradients;
var nativeTextSupport;
var animate;
(function() {
  var ua = navigator.userAgent;
  var iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i);
  var typeOfCanvas = typeof HTMLCanvasElement;
  var nativeCanvasSupport = typeOfCanvas === "object" || typeOfCanvas === "function";
  var textSupport = nativeCanvasSupport && typeof document.createElement("canvas").getContext("2d").fillText === "function";
  labelType = !nativeCanvasSupport || textSupport && !iStuff ? "Native" : "HTML";
  nativeTextSupport = labelType === "Native";
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();
var Log = {elem:false, write:function(text$$7) {
  if (!this.elem) {
    this.elem = document.getElementById("log");
  }
  this.elem.innerHTML = text$$7;
}};
var Nav = {elem:false, load:function(opt) {
  function $E(props$$1) {
    var tag = "div";
    var elem$$1 = document.createElement(tag);
    var p;
    for (p in props$$1) {
      if (typeof props$$1[p] == "object") {
        $jit.util.extend(elem$$1[p], props$$1[p]);
      } else {
        elem$$1[p] = props$$1[p];
      }
    }
    return elem$$1;
  }
  opt.codeBase = "";
  var popupHTML = '<div id="popup-close" style="position:relative; width:100%; background-color:lightblue"><a href="#" onclick="this.parentNode.parentNode.style.display=\'none\';" onmouseover="this.style.cursor=\'pointer\';" class="ui-dialog-titlebar-close ui-corner-all" role="button"><span class="ui-icon ui-icon-closethick">close</span></a></div><div id="popup-text"></div>';
  var navHTML = '<div style="position:relative"><div id="panup" style="position: absolute; left: 13px; top: 4px; width: 18px; height: 18px; cursor: pointer;"><img id="north" src="' + opt.codeBase + 'resources/north-mini.png" /></div><div id="panleft" style="position: absolute; left: 4px; top: 22px; width: 18px; height: 18px; cursor: pointer;"><img id="west" src="' + opt.codeBase + 'resources/west-mini.png" /></div><div id="panright" style="position: absolute; left: 22px; top: 22px; width: 18px; height: 18px; cursor: pointer;"><img id="east" src="' + 
  opt.codeBase + 'resources/east-mini.png" /></div><div id="pandown" style="position: absolute; left: 13px; top: 40px; width: 18px; height: 18px; cursor: pointer;"><img id="south" src="' + opt.codeBase + 'resources/south-mini.png" /></div><div id="zoomout" style="position: absolute; left: 13px; top: 99px; width: 18px; height: 18px; cursor: pointer;"><img id="zoomOUT" src="' + opt.codeBase + 'resources/zoom-minus-mini.png" /></div><div id="zoomworld" style="position: absolute; left: 13px; top: 81px; width: 18px; height: 18px; cursor: pointer;"><img id="world" style="position: relative; width: 18px; height: 18px;" src="' + 
  opt.codeBase + 'resources/zoom-world-mini.png"></div><div id="zoomin" style="position: absolute; left: 13px; top: 63px; width: 18px; height: 18px; cursor: pointer;"><img id="zoomIN" src="' + opt.codeBase + 'resources/zoom-plus-mini.png" /></div><div style="position:absolute;left:-50px;top:123px;width:130px"> Status: <span id="log"></span></div></div>';
  var jitcontainer;
  var rightJitContainer;
  var centerJitContainer;
  var id = typeof opt.injectInto == "string" ? opt.injectInto : opt.injectInto.id;
  var infovis;
  var parent;
  var popup;
  var navigation;
  var menu;
  var border$$2;
  border$$2 = opt.width * 100 / 90;
  jitcontainer = $E({"id":"jitcontainer", "className":"clearfix roundedCorner", "style":{"position":"relative", "width":border$$2 + "px", "height":opt.height + 55 + border$$2 / 20 + "px"}});
  rightJitContainer = $E({"id":"right-jitcontainer", "className":"phylojivepadding", "style":{display:"none"}});
  centerJitContainer = $E({"id":"center-jitcontainer", "className":"phylojivepadding"});
  infovis = jQuery("#" + id)[0];
  parent = infovis.parentNode;
  parent.replaceChild(jitcontainer, infovis);
  centerJitContainer.appendChild(infovis);
  jitcontainer.appendChild(centerJitContainer);
  jitcontainer.appendChild(rightJitContainer);
  popup = $E({"id":"popup", "className":"", "style":{"color":"black", "display":"none", "border":"1px solid green", "background-color":"#B5D397", "position":"absolute", "left":"50px", "top":"90px", "overflow":"auto", "text-align":"left"}});
  jQuery(popup).html(popupHTML);
  centerJitContainer.appendChild(popup);
  jQuery(popup).resizable({maxHeight:450, maxWidth:350, minHeight:250, minWidth:170});
  jQuery(popup).draggable({handle:"#popup-close", containment:"#" + opt.injectInto});
  navigation = $E({"id":"navigationPanel", "style":{"left":opt.width - 50 + "px"}});
  jQuery(navigation).html(navHTML);
  jitcontainer.appendChild(navigation);
  menu = $E({"id":"jitmenubutton", "className":"menubutton"});
  jQuery(menu).click(function() {
    toggleScreen(this);
  });
  jitcontainer.appendChild(menu);
}};
var settingsPage;
var updateCharacter;
var onSetCharacter;
var onClickAlign;
var onSetRoot;
var onLateralise;
var isLateralise;
var onAnimate;
var onRender;
var onBranchLength;
var onBranchMultiply;
var onGetCharacter;
var st;
var toggleScreen;
updateCharacter = function(character) {
  if (!character) {
    return;
  }
  var options$$1 = "";
  var unselected = "";
  var i$$2;
  var name$$30;
  var selectedfirst = st.config.selectedCharacters[0] || false;
  var first$$1 = st.config.selectedCharacters[0] || false;
  var second = st.config.selectedCharacters[1] || false;
  var third = st.config.selectedCharacters[2] || false;
  var select1 = "";
  var select2 = "";
  var select3 = "";
  i$$2 = 0;
  for (;i$$2 < character.length;i$$2 += 1) {
    var opt1 = "";
    var opt2 = "";
    var opt3 = "";
    if (first$$1 !== false && first$$1 === character[i$$2]) {
      opt1 = 'selected="selected"';
    }
    if (second !== false && second === character[i$$2]) {
      opt2 = 'selected="selected"';
    }
    if (third !== false && third === character[i$$2]) {
      opt3 = 'selected="selected"';
    }
    name$$30 = character[i$$2].replace(/_/g, " ");
    select1 += "<option " + opt1 + ' value="' + character[i$$2] + '" >' + name$$30 + "</option>";
    select2 += "<option " + opt2 + ' value="' + character[i$$2] + '" >' + name$$30 + "</option>";
    select3 += "<option " + opt3 + ' value="' + character[i$$2] + '" >' + name$$30 + "</option>";
  }
  if (select2) {
    select2 = '<option value=""> Please select </option>' + select2;
  }
  if (select3) {
    select3 = '<option value=""> Please select </option>' + select3;
  }
  jQuery("#firstCharacter").html(select1);
  jQuery("#secondCharacter").html(select2);
  jQuery("#thirdCharacter").html(select3);
};
settingsPage = function() {
  var rightContainer = $jit.id("right-jitcontainer");
  rightContainer.innerHTML += '<div id="tabs"><ul><li><a href="#tabAction">Action</a></li><li><a href="#tabCharacter">Character</a></li><li><a href="#tabLegend">Legend</a></li><li><a href="#tabSearch">Search</a></li><li><a href="#tabInput">Input</a></li></ul>  <div id="tabCharacter"><h4>Select Character</h4><p><label>Select: </label><br/><label id="characterSelection">First Characters: <select id="firstCharacter" onChange="onSetCharacter ( )"> </select><br/>Second Chracter: <select id ="secondCharacter" onChange="onSetCharacter ( )"></select><br/>Third Chracter: <select id ="thirdCharacter" onChange="onSetCharacter ( )"></select></label></p></div><div id ="tabAction"><h4>Actions</h4><p><table><tr><td>Node Actions</td></tr><tr><td>Select</td><td><input id="selectClade" name="options" type="radio" checked /><tr><td>Expand / Collapse</td><td><div id="expandDiv"><input id = "expand" name="options" type="radio" /></div></td></tr><tr><td>Rotate</td><td><div id="rotateDiv"><input id = "rotate" name="options" type="radio" /></div></td></tr><tr><td>Set Root</td><td><input id = "setRoot" name="options" type = "radio" onclick = "onSetRoot ( this );"/></td></tr>\x3c!--<tr><td>Get Characters</td><td><input id = "character" name="options" type = "radio" onclick = "onGetCharacter ( this );"/></td></tr>--\x3e</table><br/><table><tr><td>Tree Actions</td></tr><tr><td>Align Names</td><td><div id="settings"><input id="alignName" type="checkbox"  onclick="onClickAlign ( this )"/></div></td></tr><tr><td>Ladderize</td><td><input id = "lateralise"  checked type = "checkbox" onclick = "onLateralise ( this );"/></td></tr><tr><td>Animate</td><td><input id="animate" type="checkbox" checked onClick = "onAnimate( this )"/></td></tr><tr><td>Branch Length</td><td><input id="branchLength" type="checkbox" checked onClick = "onBranchLength( this )"/></td></tr><tr><td>Length Multiplier</td><td><label><input id="branchMultiplier" name="multiply" type="radio" onClick = "onBranchMultiply( 0.1 )"/>x0.1</label> <label><input name="multiply" id="branchMultiplier" type="radio" onClick = "onBranchMultiply( 1 )"/>x1</label> <label><input id="branchMultiplier" name="multiply" type="radio" checked onClick = "onBranchMultiply( 5 )"/>x5</label></td></tr>\x3c!--<tr><td>Selected Nodes</td><td><div id="selected"></div></td></tr>--\x3e</table></p></div><div id="tabLegend"><h4>Legend</h4><p><table id ="legend"><tbody id = "legendBody"><tr><th>Legend:</th><td></td></tr></tbody></table></p></div><div id="tabSearch"><h4>Search</h4><p><table><tr><td>Search:</td><td><input id="searchString" type="text" size="15" /></td><tr><td></td><td><input class ="foswikiButton" type="submit" id="next" value="next"/><input type="submit" id="previous" class ="foswikiButton" value="previous"/></td></tr></table></p></div><div id="tabInput"><h4>Input Tree</h4><p><table><tr><td>Input Tree:</td><td><textarea id="newickTree" size="15"></textarea></td></tr><tr><td></td><td><input id="renderTree" type="submit" value="Render" onclick="onRender ( this )"/></td></tr></table></p></div></div>';
  jQuery("#tabs").tabs();
};
var phylojive = function() {
  var tree;
  var character$$1;
  return {drawTree:function(newickTree) {
    if (typeof newickTree === "undefined") {
      alert("tree is not defined.");
      return;
    }
    var json;
    var legendElem;
    Smits.NewickParse(newickTree);
    this.tree = Smits.getRoot().json();
    st.loadJSON(this.tree);
    st.compute();
    st.config.initCharacter = false;
    legendElem = $jit.id("legend");
    if (st.character) {
      html = st.colorCharacter() || "";
      jQuery("#legendBody").html(html);
      legendElem.style.display = "inline";
      updateCharacter(st.characterList);
    } else {
      legendElem.style.display = "none";
    }
    st.onClick(st.root);
    st.fitScreen();
  }, drawCharacter:function() {
  }};
}();
(function() {
  function $C(b$$2) {
    var a$$3 = 0;
    return new Complex(a$$3, b$$2);
  }
  function Complex(x$$60, y$$41) {
    this.x = x$$60 || 0;
    this.y = y$$41 || 0;
  }
  function $P() {
    var a$$2 = 0;
    var b$$1 = 0;
    return new Polar(a$$2, b$$1);
  }
  function Polar(theta, rho$$1) {
    this.theta = theta || 0;
    this.rho = rho$$1 || 0;
  }
  function Options() {
    var args = arguments;
    var i$$25 = 0;
    var l$$7 = args.length;
    var ans$$3 = {};
    for (;i$$25 < l$$7;i$$25++) {
      var opt$$4 = Options[args[i$$25]];
      if (opt$$4.$extend) {
        $$$1.extend(ans$$3, opt$$4);
      } else {
        ans$$3[args[i$$25]] = opt$$4;
      }
    }
    return ans$$3;
  }
  function Class(properties) {
    function klass$$3() {
      var key$$21;
      for (key$$21 in this) {
        if (typeof this[key$$21] != "function") {
          this[key$$21] = $$$1.unlink(this[key$$21]);
        }
      }
      this.constructor = klass$$3;
      if (Class.prototyping) {
        return this;
      }
      var instance = this.initialize ? this.initialize.apply(this, arguments) : this;
      this.$$family = "class";
      return instance;
    }
    properties = properties || {};
    var mutator;
    for (mutator in Class.Mutators) {
      if (!properties[mutator]) {
        continue;
      }
      properties = Class.Mutators[mutator](properties, properties[mutator]);
      delete properties[mutator];
    }
    $$$1.extend(klass$$3, this);
    klass$$3.constructor = Class;
    klass$$3.prototype = properties;
    return klass$$3;
  }
  function $$$1(d) {
    return document.getElementById(d);
  }
  this.$jit = function(w$$5) {
    w$$5 = w$$5 || window;
    var k;
    for (k in $jit) {
      if ($jit[k].$extend) {
        w$$5[k] = $jit[k];
      }
    }
  };
  $jit.version = "2.0.1";
  $$$1.empty = function() {
  };
  $$$1.extend = function(original, extended) {
    var key$$18;
    for (key$$18 in extended || {}) {
      original[key$$18] = extended[key$$18];
    }
    return original;
  };
  $$$1.lambda = function(value$$30) {
    return typeof value$$30 == "function" ? value$$30 : function() {
      return value$$30;
    };
  };
  $$$1.time = Date.now || function() {
    return +new Date;
  };
  $$$1.splat = function(obj$$16) {
    var type$$25 = $$$1.type(obj$$16);
    return type$$25 ? type$$25 != "array" ? [obj$$16] : obj$$16 : [];
  };
  $$$1.type = function(elem$$5) {
    var type$$26 = $$$1.type.s.call(elem$$5).match(/^\[object\s(.*)\]$/)[1].toLowerCase();
    if (type$$26 != "object") {
      return type$$26;
    }
    if (elem$$5 && elem$$5.$$family) {
      return elem$$5.$$family;
    }
    return elem$$5 && elem$$5.nodeName && elem$$5.nodeType == 1 ? "element" : type$$26;
  };
  $$$1.type.s = Object.prototype.toString;
  $$$1.each = function(iterable, fn) {
    var type$$27 = $$$1.type(iterable);
    if (type$$27 == "object") {
      var key$$19;
      for (key$$19 in iterable) {
        fn(iterable[key$$19], key$$19);
      }
    } else {
      var i$$11 = 0;
      var l = iterable.length;
      for (;i$$11 < l;i$$11++) {
        fn(iterable[i$$11], i$$11);
      }
    }
  };
  $$$1.indexOf = function(array$$9, item) {
    if (Array.indexOf) {
      return array$$9.indexOf(item);
    }
    var i$$12 = 0;
    var l$$1 = array$$9.length;
    for (;i$$12 < l$$1;i$$12++) {
      if (array$$9[i$$12] === item) {
        return i$$12;
      }
    }
    return -1;
  };
  $$$1.map = function(array$$10, f) {
    var ans = [];
    $$$1.each(array$$10, function(elem$$6, i$$13) {
      ans.push(f(elem$$6, i$$13));
    });
    return ans;
  };
  $$$1.reduce = function(array$$11, f$$1, opt$$1) {
    var l$$2 = array$$11.length;
    if (l$$2 == 0) {
      return opt$$1;
    }
    var acum = arguments.length == 3 ? opt$$1 : array$$11[--l$$2];
    for (;l$$2--;) {
      acum = f$$1(acum, array$$11[l$$2]);
    }
    return acum;
  };
  $$$1.merge = function() {
    var mix = {};
    var i$$14 = 0;
    var l$$3 = arguments.length;
    for (;i$$14 < l$$3;i$$14++) {
      var object = arguments[i$$14];
      if ($$$1.type(object) != "object") {
        continue;
      }
      var key$$20;
      for (key$$20 in object) {
        var op = object[key$$20];
        var mp = mix[key$$20];
        mix[key$$20] = mp && $$$1.type(op) == "object" && $$$1.type(mp) == "object" ? $$$1.merge(mp, op) : $$$1.unlink(op);
      }
    }
    return mix;
  };
  $$$1.unlink = function(object$$1) {
    var unlinked;
    switch($$$1.type(object$$1)) {
      case "object":
        unlinked = {};
        var p$$1;
        for (p$$1 in object$$1) {
          unlinked[p$$1] = $$$1.unlink(object$$1[p$$1]);
        }
        break;
      case "array":
        unlinked = [];
        var i$$15 = 0;
        var l$$4 = object$$1.length;
        for (;i$$15 < l$$4;i$$15++) {
          unlinked[i$$15] = $$$1.unlink(object$$1[i$$15]);
        }
        break;
      default:
        return object$$1;
    }
    return unlinked;
  };
  $$$1.zip = function() {
    if (arguments.length === 0) {
      return [];
    }
    var j$$2 = 0;
    var ans$$1 = [];
    var l$$5 = arguments.length;
    var ml = arguments[0].length;
    for (;j$$2 < ml;j$$2++) {
      var i$$16 = 0;
      var row = [];
      for (;i$$16 < l$$5;i$$16++) {
        row.push(arguments[i$$16][j$$2]);
      }
      ans$$1.push(row);
    }
    return ans$$1;
  };
  $$$1.rgbToHex = function(srcArray) {
    var array$$12;
    if (srcArray.length < 3) {
      return null;
    }
    if (srcArray.length == 4 && srcArray[3] == 0 && !array$$12) {
      return "transparent";
    }
    var hex = [];
    var i$$17 = 0;
    for (;i$$17 < 3;i$$17++) {
      var bit = (srcArray[i$$17] - 0).toString(16);
      hex.push(bit.length == 1 ? "0" + bit : bit);
    }
    return array$$12 ? hex : "#" + hex.join("");
  };
  $$$1.hexToRgb = function(hex$$1) {
    if (hex$$1.length != 7) {
      hex$$1 = hex$$1.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);
      hex$$1.shift();
      if (hex$$1.length != 3) {
        return null;
      }
      var rgb = [];
      var i$$18 = 0;
      for (;i$$18 < 3;i$$18++) {
        var value$$31 = hex$$1[i$$18];
        if (value$$31.length == 1) {
          value$$31 += value$$31;
        }
        rgb.push(parseInt(value$$31, 16));
      }
      return rgb;
    } else {
      hex$$1 = parseInt(hex$$1.slice(1), 16);
      return [hex$$1 >> 16, hex$$1 >> 8 & 255, hex$$1 & 255];
    }
  };
  $$$1.destroy = function(elem$$7) {
    $$$1.clean(elem$$7);
    if (elem$$7.parentNode) {
      elem$$7.parentNode.removeChild(elem$$7);
    }
    if (elem$$7.clearAttributes) {
      elem$$7.clearAttributes();
    }
  };
  $$$1.clean = function(elem$$8) {
    var ch$$1 = elem$$8.childNodes;
    var i$$19 = 0;
    var l$$6 = ch$$1.length;
    for (;i$$19 < l$$6;i$$19++) {
      $$$1.destroy(ch$$1[i$$19]);
    }
  };
  $$$1.addEvent = function(obj$$17, type$$28, fn$$1) {
    if (obj$$17.addEventListener) {
      obj$$17.addEventListener(type$$28, fn$$1, false);
    } else {
      obj$$17.attachEvent("on" + type$$28, fn$$1);
    }
  };
  $$$1.addEvents = function(obj$$18, typeObj) {
    var type$$29;
    for (type$$29 in typeObj) {
      $$$1.addEvent(obj$$18, type$$29, typeObj[type$$29]);
    }
  };
  $$$1.hasClass = function(obj$$19, klass) {
    return (" " + obj$$19.className + " ").indexOf(" " + klass + " ") > -1;
  };
  $$$1.addClass = function(obj$$20, klass$$1) {
    if (!$$$1.hasClass(obj$$20, klass$$1)) {
      obj$$20.className = obj$$20.className + " " + klass$$1;
    }
  };
  $$$1.removeClass = function(obj$$21, klass$$2) {
    obj$$21.className = obj$$21.className.replace(new RegExp("(^|\\s)" + klass$$2 + "(?:\\s|$)"), "$1");
  };
  $$$1.getPos = function(elem$$9) {
    function getOffsets(elem$$10) {
      var position = {x:0, y:0};
      for (;elem$$10 && !/^(?:body|html)$/i.test(elem$$10.tagName);) {
        position.x += elem$$10.offsetLeft;
        position.y += elem$$10.offsetTop;
        elem$$10 = elem$$10.offsetParent;
      }
      return position;
    }
    function getScrolls(elem$$11) {
      var position$$1 = {x:0, y:0};
      for (;elem$$11 && !/^(?:body|html)$/i.test(elem$$11.tagName);) {
        position$$1.x += elem$$11.scrollLeft;
        position$$1.y += elem$$11.scrollTop;
        elem$$11 = elem$$11.parentNode;
      }
      return position$$1;
    }
    var offset$$8 = getOffsets(elem$$9);
    var scroll$$1 = getScrolls(elem$$9);
    return {x:offset$$8.x - scroll$$1.x, y:offset$$8.y - scroll$$1.y};
  };
  $$$1.event = {get:function(e$$8, win) {
    win = win || window;
    return e$$8 || win.event;
  }, getWheel:function(e$$9) {
    return e$$9.wheelDelta ? e$$9.wheelDelta / 120 : -(e$$9.detail || 0) / 3;
  }, isRightClick:function(e$$10) {
    return e$$10.which == 3 || e$$10.button == 2;
  }, getPos:function(e$$11, win$$1) {
    win$$1 = win$$1 || window;
    e$$11 = e$$11 || win$$1.event;
    var doc = win$$1.document;
    doc = doc.documentElement || doc.body;
    if (e$$11.touches && e$$11.touches.length) {
      e$$11 = e$$11.touches[0];
    }
    var page = {x:e$$11.pageX || e$$11.clientX + doc.scrollLeft, y:e$$11.pageY || e$$11.clientY + doc.scrollTop};
    return page;
  }, stop:function(e$$12) {
    if (e$$12.stopPropagation) {
      e$$12.stopPropagation();
    }
    e$$12.cancelBubble = true;
    if (e$$12.preventDefault) {
      e$$12.preventDefault();
    } else {
      e$$12.returnValue = false;
    }
  }};
  $jit.util = $jit.id = $$$1;
  Class.Mutators = {Implements:function(self$$1, klasses) {
    $$$1.each($$$1.splat(klasses), function(klass$$4) {
      Class.prototyping = klass$$4;
      var instance$$1 = typeof klass$$4 == "function" ? new klass$$4 : klass$$4;
      var prop$$4;
      for (prop$$4 in instance$$1) {
        if (!(prop$$4 in self$$1)) {
          self$$1[prop$$4] = instance$$1[prop$$4];
        }
      }
      delete Class.prototyping;
    });
    return self$$1;
  }};
  $$$1.extend(Class, {inherit:function(object$$2, properties$$1) {
    var key$$22;
    for (key$$22 in properties$$1) {
      var override = properties$$1[key$$22];
      var previous$$1 = object$$2[key$$22];
      var type$$30 = $$$1.type(override);
      if (previous$$1 && type$$30 == "function") {
        if (override != previous$$1) {
          Class.override(object$$2, key$$22, override);
        }
      } else {
        if (type$$30 == "object") {
          object$$2[key$$22] = $$$1.merge(previous$$1, override);
        } else {
          object$$2[key$$22] = override;
        }
      }
    }
    return object$$2;
  }, override:function(object$$3, name$$35, method$$1) {
    function override$$1() {
      var previous$$2 = this.parent;
      this.parent = parent$$1 ? parent$$1[name$$35] : object$$3[name$$35];
      var value$$32 = method$$1.apply(this, arguments);
      this.parent = previous$$2;
      return value$$32;
    }
    var parent$$1 = Class.prototyping;
    if (parent$$1 && object$$3[name$$35] != parent$$1[name$$35]) {
      parent$$1 = null;
    }
    object$$3[name$$35] = override$$1;
  }});
  Class.prototype.implement = function() {
    var proto$$1 = this.prototype;
    $$$1.each(Array.prototype.slice.call(arguments || []), function(properties$$2) {
      Class.inherit(proto$$1, properties$$2);
    });
  };
  $jit.Class = Class;
  $jit.json = {prune:function(tree$$1, maxLevel) {
    this.each(tree$$1, function(elem$$12, i$$20) {
      if (i$$20 == maxLevel && elem$$12.children) {
        delete elem$$12.children;
        elem$$12.children = [];
      }
    });
  }, getParent:function(tree$$2, id$$3) {
    if (tree$$2.id == id$$3) {
      return false;
    }
    var ch$$2 = tree$$2.children;
    if (ch$$2 && ch$$2.length > 0) {
      var i$$21 = 0;
      for (;i$$21 < ch$$2.length;i$$21++) {
        if (ch$$2[i$$21].id == id$$3) {
          return tree$$2;
        } else {
          var ans$$2 = this.getParent(ch$$2[i$$21], id$$3);
          if (ans$$2) {
            return ans$$2;
          }
        }
      }
    }
    return false;
  }, getSubtree:function(tree$$3, id$$4) {
    if (tree$$3.id == id$$4) {
      return tree$$3;
    }
    var i$$22 = 0;
    var ch$$3 = tree$$3.children;
    for (;ch$$3 && i$$22 < ch$$3.length;i$$22++) {
      var t = this.getSubtree(ch$$3[i$$22], id$$4);
      if (t != null) {
        return t;
      }
    }
    return null;
  }, eachLevel:function(tree$$4, initLevel, toLevel, action) {
    if (initLevel <= toLevel) {
      action(tree$$4, initLevel);
      if (!tree$$4.children) {
        return;
      }
      var i$$23 = 0;
      var ch$$4 = tree$$4.children;
      for (;i$$23 < ch$$4.length;i$$23++) {
        this.eachLevel(ch$$4[i$$23], initLevel + 1, toLevel, action);
      }
    }
  }, each:function(tree$$5, action$$1) {
    this.eachLevel(tree$$5, 0, Number.MAX_VALUE, action$$1);
  }};
  $jit.Trans = {$extend:true, linear:function(p$$2) {
    return p$$2;
  }};
  var Trans = $jit.Trans;
  (function() {
    function makeTrans(transition) {
      var params;
      params = $$$1.splat(params);
      return $$$1.extend(transition, {easeIn:function(pos$$4) {
        return transition(pos$$4, params);
      }, easeOut:function(pos$$5) {
        return 1 - transition(1 - pos$$5, params);
      }, easeInOut:function(pos$$6) {
        return pos$$6 <= .5 ? transition(2 * pos$$6, params) / 2 : (2 - transition(2 * (1 - pos$$6), params)) / 2;
      }});
    }
    var transitions = {Pow:function(p$$3, x$$47) {
      return Math.pow(p$$3, x$$47[0] || 6);
    }, Expo:function(p$$4) {
      return Math.pow(2, 8 * (p$$4 - 1));
    }, Circ:function(p$$5) {
      return 1 - Math.sin(Math.acos(p$$5));
    }, Sine:function(p$$6) {
      return 1 - Math.sin((1 - p$$6) * Math.PI / 2);
    }, Back:function(p$$7, x$$48) {
      x$$48 = x$$48[0] || 1.618;
      return Math.pow(p$$7, 2) * ((x$$48 + 1) * p$$7 - x$$48);
    }, Bounce:function(p$$8) {
      var value$$33;
      var a = 0;
      var b = 1;
      for (;1;a += b, b /= 2) {
        if (p$$8 >= (7 - 4 * a) / 11) {
          value$$33 = b * b - Math.pow((11 - 6 * a - 11 * p$$8) / 4, 2);
          break;
        }
      }
      return value$$33;
    }, Elastic:function(p$$9, x$$49) {
      return Math.pow(2, 10 * --p$$9) * Math.cos(20 * p$$9 * Math.PI * (x$$49[0] || 1) / 3);
    }};
    $$$1.each(transitions, function(val, key$$23) {
      Trans[key$$23] = makeTrans(val);
    });
    $$$1.each(["Quad", "Cubic", "Quart", "Quint"], function(elem$$13, i$$24) {
      Trans[elem$$13] = makeTrans(function(p$$10) {
        return Math.pow(p$$10, [i$$24 + 2]);
      });
    });
  })();
  var Animation = new Class({initialize:function(options$$2) {
    this.setOptions(options$$2);
  }, setOptions:function(options$$3) {
    var opt$$2 = {duration:2500, fps:40, transition:Trans.Quart.easeInOut, compute:$$$1.empty, complete:$$$1.empty, link:"ignore"};
    this.opt = $$$1.merge(opt$$2, options$$3 || {});
    return this;
  }, step:function() {
    var time = $$$1.time();
    var opt$$3 = this.opt;
    if (time < this.time + opt$$3.duration) {
      var delta$$1 = opt$$3.transition((time - this.time) / opt$$3.duration);
      opt$$3.compute(delta$$1);
    } else {
      this.timer = clearInterval(this.timer);
      opt$$3.compute(1);
      opt$$3.complete();
    }
  }, start:function() {
    if (!this.check()) {
      return this;
    }
    this.time = 0;
    this.startTimer();
    return this;
  }, startTimer:function() {
    var that$$2 = this;
    var fps = this.opt.fps;
    if (this.timer) {
      return false;
    }
    this.time = $$$1.time() - this.time;
    this.timer = setInterval(function() {
      that$$2.step();
    }, Math.round(1E3 / fps));
    return true;
  }, pause:function() {
    this.stopTimer();
    return this;
  }, resume:function() {
    this.startTimer();
    return this;
  }, stopTimer:function() {
    if (!this.timer) {
      return false;
    }
    this.time = $$$1.time() - this.time;
    this.timer = clearInterval(this.timer);
    return true;
  }, check:function() {
    if (!this.timer) {
      return true;
    }
    if (this.opt.link == "cancel") {
      this.stopTimer();
      return true;
    }
    return false;
  }});
  Options.Canvas = {$extend:true, injectInto:"id", type:"2D", width:false, height:false, useCanvas:false, withLabels:true, background:false, Scene:{Lighting:{enable:false, ambient:[1, 1, 1], directional:{direction:{x:-100, y:-100, z:-100}, color:[.5, .3, .1]}}}};
  Options.Tree = {$extend:true, orientation:"left", subtreeOffset:8, siblingOffset:5, indent:10, multitree:false, align:"center"};
  Options.PhyloJive = {$extend:true, alignName:false, lateralise:false, collapsedXOffset:25, branchLength:true, levelDistance:40, branchMultiplier:1, initCharacter:false, firstCharacter:false, presentClade:$$$1.empty, onPresentClade:$$$1.empty, rangeCount:10, shapes:["box", "star", "square"], color:["BlueViolet", "Brown", "CadetBlue", "Coral", "CornflowerBlue", "Crimson", "DarkCyan", "DarkGoldenrod", "DarkGreen", "DarkKhaki", "DarkOlive Green", "DarkOrange", "DarkRed", "DarkSalmon", "DarkSlateBlue", 
  "DarkSlateGray", "DarkViolet", "DeepPink", "DimGray", "DodgerBlue"], typeEnum:{quant:0, quali:1}, quantColor:["#00FFFF", "#00DDFF", "#00BBFF", "#0099FF", "#0088FF", "#0077FF", "#0055FF", "#0044FF", "#0022FF", "#0000FF"], quantShape:"quant", selectedCharacters:[]};
  Options.Node = {$extend:false, overridable:false, type:"circle", color:"#ccb", alpha:1, dim:3, height:20, width:90, autoHeight:false, autoWidth:false, lineWidth:1, transform:true, align:"center", angularWidth:1, span:1, CanvasStyles:{}};
  Options.Edge = {$extend:false, overridable:false, type:"line", color:"#ccb", lineWidth:1, dim:15, alpha:1, epsilon:7, CanvasStyles:{}};
  Options.Fx = {$extend:true, fps:40, duration:2500, transition:$jit.Trans.Quart.easeInOut, clearCanvas:true};
  Options.Label = {$extend:false, overridable:false, type:"HTML", style:" ", size:10, family:"sans-serif", textAlign:"center", textBaseline:"alphabetic", color:"#fff"};
  Options.Tips = {$extend:false, enable:false, type:"auto", offsetX:20, offsetY:20, force:false, onShow:$$$1.empty, onHide:$$$1.empty};
  Options.NodeStyles = {$extend:false, enable:false, type:"auto", stylesHover:false, stylesClick:false};
  Options.Events = {$extend:false, enable:false, enableForEdges:false, type:"auto", onClick:$$$1.empty, onRightClick:$$$1.empty, onMouseMove:$$$1.empty, onMouseEnter:$$$1.empty, onMouseLeave:$$$1.empty, onDragStart:$$$1.empty, onDragMove:$$$1.empty, onDragCancel:$$$1.empty, onDragEnd:$$$1.empty, onTouchStart:$$$1.empty, onTouchMove:$$$1.empty, onTouchEnd:$$$1.empty, onMouseWheel:$$$1.empty};
  Options.Navigation = {$extend:false, enable:false, type:"auto", panning:false, zooming:false};
  Options.Controller = {$extend:true, onBeforeCompute:$$$1.empty, onAfterCompute:$$$1.empty, onCreateLabel:$$$1.empty, onPlaceLabel:$$$1.empty, onComplete:$$$1.empty, onBeforePlotLine:$$$1.empty, onAfterPlotLine:$$$1.empty, onBeforePlotNode:$$$1.empty, onAfterPlotNode:$$$1.empty, onBeforeRemoveNode:$$$1.empty, request:false};
  var ExtrasInitializer = {initialize:function(className, viz) {
    this.viz = viz;
    this.canvas = viz.canvas;
    this.config = viz.config[className];
    this.nodeTypes = viz.fx.nodeTypes;
    var type$$31 = this.config.type;
    this.dom = type$$31 == "auto" ? viz.config.Label.type != "Native" : type$$31 != "Native";
    this.labelContainer = this.dom && viz.labels.getLabelContainer();
    this.isEnabled() && this.initializePost();
  }, initializePost:$$$1.empty, setAsProperty:$$$1.lambda(false), isEnabled:function() {
    return this.config.enable;
  }, isLabel:function(e$$13, win$$2, group) {
    e$$13 = $$$1.event.get(e$$13, win$$2);
    var labelContainer = this.labelContainer;
    var target$$26 = e$$13.target || e$$13.srcElement;
    var related = e$$13.relatedTarget;
    if (group) {
      return related && related == this.viz.canvas.getCtx().canvas && !!target$$26 && this.isDescendantOf(target$$26, labelContainer);
    } else {
      return this.isDescendantOf(target$$26, labelContainer);
    }
  }, isDescendantOf:function(elem$$14, par) {
    for (;elem$$14 && elem$$14.parentNode;) {
      if (elem$$14.parentNode == par) {
        return elem$$14;
      }
      elem$$14 = elem$$14.parentNode;
    }
    return false;
  }};
  var EventsInterface = {onMouseUp:$$$1.empty, onMouseDown:$$$1.empty, onMouseMove:$$$1.empty, onMouseOver:$$$1.empty, onMouseOut:$$$1.empty, onMouseWheel:$$$1.empty, onTouchStart:$$$1.empty, onTouchMove:$$$1.empty, onTouchEnd:$$$1.empty, onTouchCancel:$$$1.empty};
  var MouseEventsManager = new Class({initialize:function(viz$$1) {
    this.viz = viz$$1;
    this.canvas = viz$$1.canvas;
    this.node = false;
    this.edge = false;
    this.registeredObjects = [];
    this.attachEvents();
  }, attachEvents:function() {
    function handleMouseWheel(e$$22, win$$11) {
      var event$$4 = $$$1.event.get(e$$22, win$$11);
      var wheel = $$$1.event.getWheel(event$$4);
      that$$3.handleEvent("MouseWheel", e$$22, win$$11, wheel);
    }
    var htmlCanvas = this.canvas.element;
    var that$$3 = this;
    htmlCanvas.oncontextmenu = $$$1.lambda(false);
    $$$1.addEvents(htmlCanvas, {"mouseup":function(e$$14, win$$3) {
      var event$$2 = $$$1.event.get(e$$14, win$$3);
      that$$3.handleEvent("MouseUp", e$$14, win$$3, that$$3.makeEventObject(e$$14, win$$3), $$$1.event.isRightClick(event$$2));
    }, "mousedown":function(e$$15, win$$4) {
      var event$$3 = $$$1.event.get(e$$15, win$$4);
      that$$3.handleEvent("MouseDown", e$$15, win$$4, that$$3.makeEventObject(e$$15, win$$4), $$$1.event.isRightClick(event$$3));
    }, "mousemove":function(e$$16, win$$5) {
      that$$3.handleEvent("MouseMove", e$$16, win$$5, that$$3.makeEventObject(e$$16, win$$5));
    }, "mouseover":function(e$$17, win$$6) {
      that$$3.handleEvent("MouseOver", e$$17, win$$6, that$$3.makeEventObject(e$$17, win$$6));
    }, "mouseout":function(e$$18, win$$7) {
      that$$3.handleEvent("MouseOut", e$$18, win$$7, that$$3.makeEventObject(e$$18, win$$7));
    }, "touchstart":function(e$$19, win$$8) {
      that$$3.handleEvent("TouchStart", e$$19, win$$8, that$$3.makeEventObject(e$$19, win$$8));
    }, "touchmove":function(e$$20, win$$9) {
      that$$3.handleEvent("TouchMove", e$$20, win$$9, that$$3.makeEventObject(e$$20, win$$9));
    }, "touchend":function(e$$21, win$$10) {
      that$$3.handleEvent("TouchEnd", e$$21, win$$10, that$$3.makeEventObject(e$$21, win$$10));
    }});
    if (!document.getBoxObjectFor && window.mozInnerScreenX == null) {
      $$$1.addEvent(htmlCanvas, "mousewheel", handleMouseWheel);
    } else {
      htmlCanvas.addEventListener("DOMMouseScroll", handleMouseWheel, false);
    }
  }, register:function(obj$$22) {
    this.registeredObjects.push(obj$$22);
  }, handleEvent:function() {
    var args$$1 = Array.prototype.slice.call(arguments);
    var type$$32 = args$$1.shift();
    var i$$26 = 0;
    var regs = this.registeredObjects;
    var l$$8 = regs.length;
    for (;i$$26 < l$$8;i$$26++) {
      regs[i$$26]["on" + type$$32].apply(regs[i$$26], args$$1);
    }
  }, makeEventObject:function(e$$23, win$$12) {
    var that$$4 = this;
    var graph = this.viz.graph;
    var fx = this.viz.fx;
    var ntypes = fx.nodeTypes;
    var etypes = fx.edgeTypes;
    return {pos:false, node:false, edge:false, contains:false, getNodeCalled:false, getEdgeCalled:false, getPos:function() {
      var canvas$$2 = that$$4.viz.canvas;
      var s$$2 = canvas$$2.getSize();
      var p$$11 = canvas$$2.getPos();
      var ox = canvas$$2.translateOffsetX;
      var oy$$1 = canvas$$2.translateOffsetY;
      var sx$$1 = canvas$$2.scaleOffsetX;
      var sy$$1 = canvas$$2.scaleOffsetY;
      var pos$$7 = $$$1.event.getPos(e$$23, win$$12);
      this.pos = {x:(pos$$7.x - p$$11.x - ox) * 1 / sx$$1, y:(pos$$7.y - p$$11.y - oy$$1) * 1 / sy$$1};
      return this.pos;
    }, getNode:function() {
      if (this.getNodeCalled) {
        return this.node;
      }
      this.getNodeCalled = true;
      var id$$5;
      for (id$$5 in graph.nodes) {
        var n$$2 = graph.nodes[id$$5];
        var geom = n$$2 && ntypes[n$$2.getData("type")];
        var contains = geom && geom.contains && geom.contains.call(fx, n$$2, this.getPos());
        if (contains) {
          this.contains = contains;
          return that$$4.node = this.node = n$$2;
        }
      }
      return that$$4.node = this.node = false;
    }, getEdge:function() {
      if (this.getEdgeCalled) {
        return this.edge;
      }
      this.getEdgeCalled = true;
      var hashset = {};
      var id$$6;
      for (id$$6 in graph.edges) {
        var edgeFrom = graph.edges[id$$6];
        hashset[id$$6] = true;
        var edgeId;
        for (edgeId in edgeFrom) {
          if (edgeId in hashset) {
            continue;
          }
          var e$$24 = edgeFrom[edgeId];
          var geom$$1 = e$$24 && etypes[e$$24.getData("type")];
          var contains$$1 = geom$$1 && geom$$1.contains && geom$$1.contains.call(fx, e$$24, this.getPos());
          if (contains$$1) {
            this.contains = contains$$1;
            return that$$4.edge = this.edge = e$$24;
          }
        }
      }
      return that$$4.edge = this.edge = false;
    }, getContains:function() {
      if (this.getNodeCalled) {
        return this.contains;
      }
      this.getNode();
      return this.contains;
    }};
  }});
  var Extras = {initializeExtras:function() {
    var mem = new MouseEventsManager(this);
    var that$$5 = this;
    $$$1.each(["NodeStyles", "Tips", "Navigation", "Events"], function(k$$1) {
      var obj$$23 = new Extras.Classes[k$$1](k$$1, that$$5);
      if (obj$$23.isEnabled()) {
        mem.register(obj$$23);
      }
      if (obj$$23.setAsProperty()) {
        that$$5[k$$1.toLowerCase()] = obj$$23;
      }
    });
  }};
  Extras.Classes = {};
  Extras.Classes.Events = new Class({Implements:[ExtrasInitializer, EventsInterface], initializePost:function() {
    this.fx = this.viz.fx;
    this.ntypes = this.viz.fx.nodeTypes;
    this.etypes = this.viz.fx.edgeTypes;
    this.hovered = false;
    this.pressed = false;
    this.touched = false;
    this.touchMoved = false;
    this.moved = false;
  }, setAsProperty:$$$1.lambda(true), onMouseUp:function(e$$25, win$$13, event$$5, isRightClick) {
    var evt$$8 = $$$1.event.get(e$$25, win$$13);
    if (!this.moved) {
      if (isRightClick) {
        this.config.onRightClick(this.hovered, event$$5, evt$$8);
      } else {
        this.config.onClick(this.pressed, event$$5, evt$$8);
      }
    }
    if (this.pressed) {
      if (this.moved) {
        this.config.onDragEnd(this.pressed, event$$5, evt$$8);
      } else {
        this.config.onDragCancel(this.pressed, event$$5, evt$$8);
      }
      this.pressed = this.moved = false;
    }
  }, onMouseOut:function(e$$26, win$$14, event$$6) {
    var evt$$9 = $$$1.event.get(e$$26, win$$14);
    var label$$2;
    if (this.dom && (label$$2 = this.isLabel(e$$26, win$$14, true))) {
      this.config.onMouseLeave(this.viz.graph.getNode(label$$2.id), event$$6, evt$$9);
      this.hovered = false;
      return;
    }
    var rt = evt$$9.relatedTarget;
    var canvasWidget = this.canvas.element;
    for (;rt && rt.parentNode;) {
      if (canvasWidget == rt.parentNode) {
        return;
      }
      rt = rt.parentNode;
    }
    if (this.hovered) {
      this.config.onMouseLeave(this.hovered, event$$6, evt$$9);
      this.hovered = false;
    }
  }, onMouseOver:function(e$$27, win$$15, event$$7) {
    var evt$$10 = $$$1.event.get(e$$27, win$$15);
    var label$$3;
    if (this.dom && (label$$3 = this.isLabel(e$$27, win$$15, true))) {
      this.hovered = this.viz.graph.getNode(label$$3.id);
      this.config.onMouseEnter(this.hovered, event$$7, evt$$10);
    }
  }, onMouseMove:function(e$$28, win$$16, event$$8) {
    var label$$4;
    var evt$$11 = $$$1.event.get(e$$28, win$$16);
    if (this.pressed) {
      this.moved = true;
      this.config.onDragMove(this.pressed, event$$8, evt$$11);
      return;
    }
    if (this.dom) {
      this.config.onMouseMove(this.hovered, event$$8, evt$$11);
    } else {
      if (this.hovered) {
        var hn = this.hovered;
        var geom$$2 = hn.nodeFrom ? this.etypes[hn.getData("type")] : this.ntypes[hn.getData("type")];
        var contains$$2 = geom$$2 && geom$$2.contains && geom$$2.contains.call(this.fx, hn, event$$8.getPos());
        if (contains$$2) {
          this.config.onMouseMove(hn, event$$8, evt$$11);
          return;
        } else {
          this.config.onMouseLeave(hn, event$$8, evt$$11);
          this.hovered = false;
        }
      }
      if (this.hovered = event$$8.getNode() || this.config.enableForEdges && event$$8.getEdge()) {
        this.config.onMouseEnter(this.hovered, event$$8, evt$$11);
      } else {
        this.config.onMouseMove(false, event$$8, evt$$11);
      }
    }
  }, onMouseWheel:function(e$$29, win$$17, delta$$2) {
    this.config.onMouseWheel(delta$$2, $$$1.event.get(e$$29, win$$17));
  }, onMouseDown:function(e$$30, win$$18, event$$9) {
    var evt$$12 = $$$1.event.get(e$$30, win$$18);
    var label$$5;
    if (this.dom) {
      if (label$$5 = this.isLabel(e$$30, win$$18)) {
        this.pressed = this.viz.graph.getNode(label$$5.id);
      }
    } else {
      this.pressed = event$$9.getNode() || this.config.enableForEdges && event$$9.getEdge();
    }
    this.pressed && this.config.onDragStart(this.pressed, event$$9, evt$$12);
  }, onTouchStart:function(e$$31, win$$19, event$$10) {
    var evt$$13 = $$$1.event.get(e$$31, win$$19);
    var label$$6;
    if (this.dom && (label$$6 = this.isLabel(e$$31, win$$19))) {
      this.touched = this.viz.graph.getNode(label$$6.id);
    } else {
      this.touched = event$$10.getNode() || this.config.enableForEdges && event$$10.getEdge();
    }
    this.touched && this.config.onTouchStart(this.touched, event$$10, evt$$13);
  }, onTouchMove:function(e$$32, win$$20, event$$11) {
    var evt$$14 = $$$1.event.get(e$$32, win$$20);
    if (this.touched) {
      this.touchMoved = true;
      this.config.onTouchMove(this.touched, event$$11, evt$$14);
    }
  }, onTouchEnd:function(e$$33, win$$21, event$$12) {
    var evt$$15 = $$$1.event.get(e$$33, win$$21);
    if (this.touched) {
      if (this.touchMoved) {
        this.config.onTouchEnd(this.touched, event$$12, evt$$15);
      } else {
        this.config.onTouchCancel(this.touched, event$$12, evt$$15);
      }
      this.touched = this.touchMoved = false;
    }
  }});
  Extras.Classes.Tips = new Class({Implements:[ExtrasInitializer, EventsInterface], initializePost:function() {
    if (document.body) {
      var tip = $$$1("_tooltip") || document.createElement("div");
      tip.id = "_tooltip";
      tip.className = "tip";
      $$$1.extend(tip.style, {position:"absolute", display:"none", zIndex:13E3});
      document.body.appendChild(tip);
      this.tip = tip;
      this.node = false;
    }
  }, setAsProperty:$$$1.lambda(true), onMouseOut:function(e$$34, win$$22) {
    var evt$$16 = $$$1.event.get(e$$34, win$$22);
    if (this.dom && this.isLabel(e$$34, win$$22, true)) {
      this.hide(true);
      return;
    }
    var rt$$1 = e$$34.relatedTarget;
    var canvasWidget$$1 = this.canvas.element;
    for (;rt$$1 && rt$$1.parentNode;) {
      if (canvasWidget$$1 == rt$$1.parentNode) {
        return;
      }
      rt$$1 = rt$$1.parentNode;
    }
    this.hide(false);
  }, onMouseOver:function(e$$35, win$$23) {
    var label$$7;
    if (this.dom && (label$$7 = this.isLabel(e$$35, win$$23, false))) {
      this.node = this.viz.graph.getNode(label$$7.id);
      this.config.onShow(this.tip, this.node, label$$7);
    }
  }, onMouseMove:function(e$$36, win$$24, opt$$5) {
    if (this.dom && this.isLabel(e$$36, win$$24)) {
      this.setTooltipPosition($$$1.event.getPos(e$$36, win$$24));
    }
    if (!this.dom) {
      var node$$15 = opt$$5.getNode();
      if (!node$$15) {
        this.hide(true);
        return;
      }
      if (this.config.force || !this.node || this.node.id != node$$15.id) {
        this.node = node$$15;
        this.config.onShow(this.tip, node$$15, opt$$5.getContains());
      }
      this.setTooltipPosition($$$1.event.getPos(e$$36, win$$24));
    }
  }, setTooltipPosition:function(pos$$8) {
    var tip$$1 = this.tip;
    var style$$2 = tip$$1.style;
    var cont = this.config;
    style$$2.display = "";
    var elem$$15 = document.compatMode === "CSS1Compat" && document.documentElement || document.body || document.documentElement;
    var JSCompiler_object_inline_width_82 = elem$$15.clientWidth;
    var JSCompiler_object_inline_height_83 = elem$$15.clientHeight;
    var JSCompiler_object_inline_x_84 = window.pageXOffset || document.documentElement && document.documentElement.scrollLeft || document.body && document.body.scrollLeft || 0;
    var JSCompiler_object_inline_y_85 = window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop || 0;
    var JSCompiler_object_inline_width_86 = tip$$1.offsetWidth;
    var JSCompiler_object_inline_height_87 = tip$$1.offsetHeight;
    var x$$50 = cont.offsetX;
    var y$$31 = cont.offsetY;
    style$$2.top = (pos$$8.y + JSCompiler_object_inline_height_87 + y$$31 > JSCompiler_object_inline_height_83 + JSCompiler_object_inline_y_85 ? pos$$8.y - JSCompiler_object_inline_height_87 - y$$31 : pos$$8.y + y$$31) + "px";
    style$$2.left = (pos$$8.x + JSCompiler_object_inline_width_86 + x$$50 > JSCompiler_object_inline_width_82 + JSCompiler_object_inline_x_84 ? pos$$8.x - JSCompiler_object_inline_width_86 - x$$50 : pos$$8.x + x$$50) + "px";
  }, hide:function(triggerCallback) {
    this.tip.style.display = "none";
    triggerCallback && this.config.onHide();
  }});
  Extras.Classes.NodeStyles = new Class({Implements:[ExtrasInitializer, EventsInterface], initializePost:function() {
    this.fx = this.viz.fx;
    this.types = this.viz.fx.nodeTypes;
    this.nStyles = this.config;
    this.nodeStylesOnHover = this.nStyles.stylesHover;
    this.nodeStylesOnClick = this.nStyles.stylesClick;
    this.hoveredNode = false;
    this.fx.nodeFxAnimation = new Animation;
    this.down = false;
    this.move = false;
  }, onMouseOut:function(e$$37, win$$25) {
    this.down = this.move = false;
    if (!this.hoveredNode) {
      return;
    }
    if (this.dom && this.isLabel(e$$37, win$$25, true)) {
      this.toggleStylesOnHover(this.hoveredNode, false);
    }
    var rt$$2 = e$$37.relatedTarget;
    var canvasWidget$$2 = this.canvas.element;
    for (;rt$$2 && rt$$2.parentNode;) {
      if (canvasWidget$$2 == rt$$2.parentNode) {
        return;
      }
      rt$$2 = rt$$2.parentNode;
    }
    this.toggleStylesOnHover(this.hoveredNode, false);
    this.hoveredNode = false;
  }, onMouseOver:function(e$$38, win$$26) {
    var label$$8;
    if (this.dom && (label$$8 = this.isLabel(e$$38, win$$26, true))) {
      var node$$16 = this.viz.graph.getNode(label$$8.id);
      if (node$$16.selected) {
        return;
      }
      this.hoveredNode = node$$16;
      this.toggleStylesOnHover(this.hoveredNode, true);
    }
  }, onMouseDown:function(e$$39, win$$27, event$$13, isRightClick$$1) {
    if (isRightClick$$1) {
      return;
    }
    var label$$9;
    if (this.dom && (label$$9 = this.isLabel(e$$39, win$$27))) {
      this.down = this.viz.graph.getNode(label$$9.id);
    } else {
      if (!this.dom) {
        this.down = event$$13.getNode();
      }
    }
    this.move = false;
  }, onMouseUp:function(e$$40, win$$28, event$$14, isRightClick$$2) {
    if (isRightClick$$2) {
      return;
    }
    if (!this.move) {
      this.onClick(event$$14.getNode());
    }
    this.down = this.move = false;
  }, getRestoredStyles:function(node$$17, type$$33) {
    var restoredStyles = {};
    var nStyles = this["nodeStylesOn" + type$$33];
    var prop$$5;
    for (prop$$5 in nStyles) {
      restoredStyles[prop$$5] = node$$17.styles["$" + prop$$5];
    }
    return restoredStyles;
  }, toggleStylesOnHover:function(node$$18, set) {
    if (this.nodeStylesOnHover) {
      this.toggleStylesOn("Hover", node$$18, set);
    }
  }, toggleStylesOnClick:function(node$$19, set$$1) {
    if (this.nodeStylesOnClick) {
      this.toggleStylesOn("Click", node$$19, set$$1);
    }
  }, toggleStylesOn:function(type$$34, node$$20, set$$2) {
    var viz$$2 = this.viz;
    var nStyles$$1 = this.nStyles;
    if (set$$2) {
      var that$$6 = this;
      if (!node$$20.styles) {
        node$$20.styles = $$$1.merge(node$$20.data, {});
      }
      var s$$3;
      for (s$$3 in this["nodeStylesOn" + type$$34]) {
        var $s = "$" + s$$3;
        if (!($s in node$$20.styles)) {
          node$$20.styles[$s] = node$$20.getData(s$$3);
        }
      }
      viz$$2.fx.nodeFx($$$1.extend({"elements":{"id":node$$20.id, "properties":that$$6["nodeStylesOn" + type$$34]}, transition:Trans.Quart.easeOut, duration:300, fps:40}, this.config));
    } else {
      var restoredStyles$$1 = this.getRestoredStyles(node$$20, type$$34);
      viz$$2.fx.nodeFx($$$1.extend({"elements":{"id":node$$20.id, "properties":restoredStyles$$1}, transition:Trans.Quart.easeOut, duration:300, fps:40}, this.config));
    }
  }, onClick:function(node$$21) {
    if (!node$$21) {
      return;
    }
    var nStyles$$2 = this.nodeStylesOnClick;
    if (!nStyles$$2) {
      return;
    }
    if (node$$21.selected) {
      this.toggleStylesOnClick(node$$21, false);
      delete node$$21.selected;
    } else {
      this.viz.graph.eachNode(function(n$$3) {
        if (n$$3.selected) {
          var s$$4;
          for (s$$4 in nStyles$$2) {
            n$$3.setData(s$$4, n$$3.styles["$" + s$$4], "end");
          }
          delete n$$3.selected;
        }
      });
      this.toggleStylesOnClick(node$$21, true);
      node$$21.selected = true;
      delete node$$21.hovered;
      this.hoveredNode = false;
    }
  }, onMouseMove:function(e$$41, win$$29, event$$15) {
    if (this.down) {
      this.move = true;
    }
    if (this.dom && this.isLabel(e$$41, win$$29)) {
      return;
    }
    var nStyles$$3 = this.nodeStylesOnHover;
    if (!nStyles$$3) {
      return;
    }
    if (!this.dom) {
      if (this.hoveredNode) {
        var geom$$3 = this.types[this.hoveredNode.getData("type")];
        var contains$$3 = geom$$3 && geom$$3.contains && geom$$3.contains.call(this.fx, this.hoveredNode, event$$15.getPos());
        if (contains$$3) {
          return;
        }
      }
      var node$$22 = event$$15.getNode();
      if (!this.hoveredNode && !node$$22) {
        return;
      }
      if (node$$22.hovered) {
        return;
      }
      if (node$$22 && !node$$22.selected) {
        this.fx.nodeFxAnimation.stopTimer();
        this.viz.graph.eachNode(function(n$$4) {
          if (n$$4.hovered && !n$$4.selected) {
            var s$$5;
            for (s$$5 in nStyles$$3) {
              n$$4.setData(s$$5, n$$4.styles["$" + s$$5], "end");
            }
            delete n$$4.hovered;
          }
        });
        node$$22.hovered = true;
        this.hoveredNode = node$$22;
        this.toggleStylesOnHover(node$$22, true);
      } else {
        if (this.hoveredNode && !this.hoveredNode.selected) {
          this.fx.nodeFxAnimation.stopTimer();
          this.toggleStylesOnHover(this.hoveredNode, false);
          delete this.hoveredNode.hovered;
          this.hoveredNode = false;
        }
      }
    }
  }});
  Extras.Classes.Navigation = new Class({Implements:[ExtrasInitializer, EventsInterface], initializePost:function() {
    this.pos = false;
    this.pressed = false;
  }, onMouseWheel:function(e$$42, win$$30, scroll$$2) {
    if (!this.config.zooming) {
      return;
    }
    $$$1.event.stop($$$1.event.get(e$$42, win$$30));
    var val$$1 = this.config.zooming / 1E3;
    var ans$$4 = 1 + scroll$$2 * val$$1;
    this.canvas.scale(ans$$4, ans$$4);
  }, onMouseDown:function(e$$43, win$$31, eventInfo$$2) {
    if (!this.config.panning) {
      return;
    }
    if (this.config.panning == "avoid nodes" && (this.dom ? this.isLabel(e$$43, win$$31) : eventInfo$$2.getNode())) {
      return;
    }
    this.pressed = true;
    this.pos = eventInfo$$2.getPos();
    var canvas$$3 = this.canvas;
    var ox$$1 = canvas$$3.translateOffsetX;
    var oy$$2 = canvas$$3.translateOffsetY;
    var sx$$2 = canvas$$3.scaleOffsetX;
    var sy$$2 = canvas$$3.scaleOffsetY;
    this.pos.x *= sx$$2;
    this.pos.x += ox$$1;
    this.pos.y *= sy$$2;
    this.pos.y += oy$$2;
  }, onMouseMove:function(e$$44, win$$32, eventInfo$$3) {
    if (!this.config.panning) {
      return;
    }
    if (!this.pressed) {
      return;
    }
    if (this.config.panning == "avoid nodes" && (this.dom ? this.isLabel(e$$44, win$$32) : eventInfo$$3.getNode())) {
      return;
    }
    var thispos = this.pos;
    var currentPos = eventInfo$$3.getPos();
    var canvas$$4 = this.canvas;
    var ox$$2 = canvas$$4.translateOffsetX;
    var oy$$3 = canvas$$4.translateOffsetY;
    var sx$$3 = canvas$$4.scaleOffsetX;
    var sy$$3 = canvas$$4.scaleOffsetY;
    currentPos.x *= sx$$3;
    currentPos.y *= sy$$3;
    currentPos.x += ox$$2;
    currentPos.y += oy$$3;
    var x$$51 = currentPos.x - thispos.x;
    var y$$32 = currentPos.y - thispos.y;
    this.pos = currentPos;
    this.canvas.translate(x$$51 * 1 / sx$$3, y$$32 * 1 / sy$$3);
  }, onMouseUp:function(e$$45, win$$33, eventInfo$$4, isRightClick$$3) {
    if (!this.config.panning) {
      return;
    }
    this.pressed = false;
  }});
  var Canvas;
  (function() {
    function $E$$1(tag$$1, props$$2) {
      var elem$$16 = document.createElement(tag$$1);
      var p$$12;
      for (p$$12 in props$$2) {
        if (typeof props$$2[p$$12] == "object") {
          $$$1.extend(elem$$16[p$$12], props$$2[p$$12]);
        } else {
          elem$$16[p$$12] = props$$2[p$$12];
        }
      }
      if (tag$$1 == "canvas" && !supportsCanvas && G_vmlCanvasManager) {
        elem$$16 = G_vmlCanvasManager.initElement(document.body.appendChild(elem$$16));
      }
      return elem$$16;
    }
    var canvasType = typeof HTMLCanvasElement;
    var supportsCanvas = canvasType == "object" || canvasType == "function";
    $jit.Canvas = Canvas = new Class({canvases:[], pos:false, element:false, labelContainer:false, translateOffsetX:0, translateOffsetY:0, scaleOffsetX:1, scaleOffsetY:1, initialize:function(viz$$3, opt$$6) {
      this.viz = viz$$3;
      this.opt = this.config = opt$$6;
      var id$$7 = $$$1.type(opt$$6.injectInto) == "string" ? opt$$6.injectInto : opt$$6.injectInto.id;
      var type$$35 = opt$$6.type;
      var idLabel = id$$7 + "-label";
      var wrapper = $$$1(id$$7);
      var width$$10 = opt$$6.width || wrapper.offsetWidth;
      var height$$10 = opt$$6.height || wrapper.offsetHeight;
      this.id = id$$7;
      var canvasOptions = {injectInto:id$$7, width:width$$10, height:height$$10};
      this.element = $E$$1("div", {"id":id$$7 + "-canvaswidget", "style":{"position":"relative", "width":width$$10 + "px", "height":height$$10 + "px"}});
      this.labelContainer = this.createLabelContainer(opt$$6.Label.type, idLabel, canvasOptions);
      this.canvases.push(new Canvas.Base[type$$35]({config:$$$1.extend({idSuffix:"-canvas"}, canvasOptions), plot:function(base$$1) {
        viz$$3.fx.plot();
      }, resize:function() {
        viz$$3.refresh();
      }}));
      var back = opt$$6.background;
      if (back) {
        var backCanvas = new Canvas.Background[back.type](viz$$3, $$$1.extend(back, canvasOptions));
        this.canvases.push(new Canvas.Base[type$$35](backCanvas));
      }
      var len$$1 = this.canvases.length;
      for (;len$$1--;) {
        this.element.appendChild(this.canvases[len$$1].canvas);
        if (len$$1 > 0) {
          this.canvases[len$$1].plot();
        }
      }
      this.element.appendChild(this.labelContainer);
      wrapper.appendChild(this.element);
      var timer = null;
      var that$$7 = this;
      $$$1.addEvent(window, "scroll", function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
          that$$7.getPos(true);
        }, 500);
      });
    }, getCtx:function(i$$27) {
      return this.canvases[i$$27 || 0].getCtx();
    }, getConfig:function() {
      return this.opt;
    }, getElement:function() {
      return this.element;
    }, getSize:function(i$$28) {
      return this.canvases[i$$28 || 0].getSize();
    }, resize:function(width$$11, height$$11) {
      this.getPos(true);
      this.translateOffsetX = this.translateOffsetY = 0;
      this.scaleOffsetX = this.scaleOffsetY = 1;
      var i$$29 = 0;
      var l$$9 = this.canvases.length;
      for (;i$$29 < l$$9;i$$29++) {
        this.canvases[i$$29].resize(width$$11, height$$11);
      }
      var style$$3 = this.element.style;
      style$$3.width = width$$11 + "px";
      style$$3.height = height$$11 + "px";
      if (this.labelContainer) {
        this.labelContainer.style.width = width$$11 + "px";
      }
    }, translate:function(x$$52, y$$33, disablePlot) {
      this.translateOffsetX += x$$52 * this.scaleOffsetX;
      this.translateOffsetY += y$$33 * this.scaleOffsetY;
      var i$$30 = 0;
      var l$$10 = this.canvases.length;
      for (;i$$30 < l$$10;i$$30++) {
        this.canvases[i$$30].translate(x$$52, y$$33, disablePlot);
      }
    }, scale:function(x$$53, y$$34, disablePlot$$1) {
      var px = this.scaleOffsetX * x$$53;
      var py = this.scaleOffsetY * y$$34;
      var dx$$4 = this.translateOffsetX * (x$$53 - 1) / px;
      var dy$$4 = this.translateOffsetY * (y$$34 - 1) / py;
      this.scaleOffsetX = px;
      this.scaleOffsetY = py;
      var i$$31 = 0;
      var l$$11 = this.canvases.length;
      for (;i$$31 < l$$11;i$$31++) {
        this.canvases[i$$31].scale(x$$53, y$$34, true);
      }
      this.translate(dx$$4, dy$$4, false);
    }, getZoom:function() {
      return new Complex(this.scaleOffsetX, this.scaleOffsetY);
    }, setZoom:function(x$$54, y$$35, disablePlot$$2) {
      var cur = this.getZoom();
      var px$$1 = x$$54 / cur.x;
      var py$$1 = y$$35 / cur.y;
      this.scale(px$$1, py$$1, disablePlot$$2);
    }, getPos:function(force) {
      if (force || !this.pos) {
        return this.pos = $$$1.getPos(this.element);
      }
      return this.pos;
    }, clear:function(i$$32) {
      this.canvases[i$$32 || 0].clear();
    }, path:function(type$$36, action$$2) {
      var ctx = this.canvases[0].getCtx();
      ctx.beginPath();
      action$$2(ctx);
      ctx[type$$36]();
      ctx.closePath();
    }, createLabelContainer:function(type$$37, idLabel$$1, dim) {
      var NS = "http://www.w3.org/2000/svg";
      if (type$$37 == "HTML" || type$$37 == "Native") {
        return $E$$1("div", {"id":idLabel$$1, "style":{"overflow":"visible", "position":"absolute", "top":0, "left":0, "width":dim.width + "px", "height":0}});
      } else {
        if (type$$37 == "SVG") {
          var svgContainer = document.createElementNS(NS, "svg:svg");
          svgContainer.setAttribute("width", dim.width);
          svgContainer.setAttribute("height", dim.height);
          var style$$4 = svgContainer.style;
          style$$4.position = "absolute";
          style$$4.left = style$$4.top = "0px";
          var labelContainer$$1 = document.createElementNS(NS, "svg:g");
          labelContainer$$1.setAttribute("width", dim.width);
          labelContainer$$1.setAttribute("height", dim.height);
          labelContainer$$1.setAttribute("x", 0);
          labelContainer$$1.setAttribute("y", 0);
          labelContainer$$1.setAttribute("id", idLabel$$1);
          svgContainer.appendChild(labelContainer$$1);
          return svgContainer;
        }
      }
    }});
    Canvas.Base = {};
    Canvas.Base["2D"] = new Class({translateOffsetX:0, translateOffsetY:0, scaleOffsetX:1, scaleOffsetY:1, initialize:function(viz$$4) {
      this.viz = viz$$4;
      this.opt = viz$$4.config;
      this.size = false;
      this.createCanvas();
      this.translateToCenter();
    }, createCanvas:function() {
      var opt$$7 = this.opt;
      var width$$12 = opt$$7.width;
      var height$$12 = opt$$7.height;
      this.canvas = $E$$1("canvas", {"id":opt$$7.injectInto + opt$$7.idSuffix, "width":width$$12, "height":height$$12, "style":{"position":"absolute", "top":0, "left":0, "width":width$$12 + "px", "height":height$$12 + "px"}});
    }, getCtx:function() {
      if (!this.ctx) {
        return this.ctx = this.canvas.getContext("2d");
      }
      return this.ctx;
    }, getSize:function() {
      if (this.size) {
        return this.size;
      }
      var canvas$$5 = this.canvas;
      return this.size = {width:canvas$$5.width, height:canvas$$5.height};
    }, translateToCenter:function(ps) {
      var size$$4 = this.getSize();
      var width$$13 = ps ? size$$4.width - ps.width - this.translateOffsetX * 2 : size$$4.width;
      height = ps ? size$$4.height - ps.height - this.translateOffsetY * 2 : size$$4.height;
      var ctx$$1 = this.getCtx();
      ps && ctx$$1.scale(1 / this.scaleOffsetX, 1 / this.scaleOffsetY);
    }, resize:function(width$$14, height$$13) {
      var size$$5 = this.getSize();
      var canvas$$6 = this.canvas;
      var styles = canvas$$6.style;
      this.size = false;
      canvas$$6.width = width$$14;
      canvas$$6.height = height$$13;
      styles.width = width$$14 + "px";
      styles.height = height$$13 + "px";
      if (!supportsCanvas) {
        this.translateToCenter(size$$5);
      } else {
        this.translateToCenter();
      }
      this.translateOffsetX = this.translateOffsetY = 0;
      this.scaleOffsetX = this.scaleOffsetY = 1;
      this.clear();
      this.viz.resize(width$$14, height$$13, this);
    }, translate:function(x$$55, y$$36, disablePlot$$3) {
      var sx$$4 = this.scaleOffsetX;
      var sy$$4 = this.scaleOffsetY;
      this.translateOffsetX += x$$55 * sx$$4;
      this.translateOffsetY += y$$36 * sy$$4;
      this.getCtx().translate(x$$55, y$$36);
      !disablePlot$$3 && this.plot();
    }, scale:function(x$$56, y$$37, disablePlot$$4) {
      this.scaleOffsetX *= x$$56;
      this.scaleOffsetY *= y$$37;
      this.getCtx().scale(x$$56, y$$37);
      !disablePlot$$4 && this.plot();
    }, clear:function() {
      var size$$6 = this.getSize();
      var ox$$3 = this.translateOffsetX;
      var oy$$4 = this.translateOffsetY;
      var sx$$5 = this.scaleOffsetX;
      var sy$$5 = this.scaleOffsetY;
      var x$$57 = (0 - ox$$3) * 1 / sx$$5;
      var y$$38 = (0 - oy$$4) * 1 / sy$$5;
      this.getCtx().clearRect(x$$57, y$$38, size$$6.width * 1 / sx$$5 + Math.abs(x$$57), size$$6.height * 1 / sy$$5 + Math.abs(y$$38));
    }, plot:function() {
      this.clear();
      this.viz.plot(this);
    }});
    Canvas.Background = {};
    Canvas.Background.Circles = new Class({initialize:function(viz$$5, options$$4) {
      this.viz = viz$$5;
      this.config = $$$1.merge({idSuffix:"-bkcanvas", levelDistance:100, numberOfCircles:6, CanvasStyles:{}, offset:0}, options$$4);
    }, resize:function(width$$15, height$$14, base$$2) {
      this.plot(base$$2);
    }, plot:function(base$$3) {
      var canvas$$7 = base$$3.canvas;
      var ctx$$2 = base$$3.getCtx();
      var conf = this.config;
      var styles$$1 = conf.CanvasStyles;
      var s$$6;
      for (s$$6 in styles$$1) {
        ctx$$2[s$$6] = styles$$1[s$$6];
      }
      var n$$5 = conf.numberOfCircles;
      var rho = conf.levelDistance;
      var i$$33 = 1;
      for (;i$$33 <= n$$5;i$$33++) {
        ctx$$2.beginPath();
        ctx$$2.arc(0, 0, rho * i$$33, 0, 2 * Math.PI, false);
        ctx$$2.stroke();
        ctx$$2.closePath();
      }
    }});
  })();
  $jit.Polar = Polar;
  Polar.prototype = {getc:function(simple) {
    return this.toComplex(simple);
  }, getp:function() {
    return this;
  }, set:function(v) {
    v = v.getp();
    this.theta = v.theta;
    this.rho = v.rho;
  }, setc:function(x$$58, y$$39) {
    this.rho = Math.sqrt(x$$58 * x$$58 + y$$39 * y$$39);
    this.theta = Math.atan2(y$$39, x$$58);
    if (this.theta < 0) {
      this.theta += Math.PI * 2;
    }
  }, setp:function(theta$$1, rho$$2) {
    this.theta = theta$$1;
    this.rho = rho$$2;
  }, clone:function() {
    return new Polar(this.theta, this.rho);
  }, toComplex:function(simple$$1) {
    var x$$59 = Math.cos(this.theta) * this.rho;
    var y$$40 = Math.sin(this.theta) * this.rho;
    if (simple$$1) {
      return {"x":x$$59, "y":y$$40};
    }
    return new Complex(x$$59, y$$40);
  }, add:function(polar) {
    return new Polar(this.theta + polar.theta, this.rho + polar.rho);
  }, scale:function(number) {
    return new Polar(this.theta, this.rho * number);
  }, equals:function(c) {
    return this.theta == c.theta && this.rho == c.rho;
  }, $add:function(polar$$1) {
    this.theta = this.theta + polar$$1.theta;
    this.rho += polar$$1.rho;
    return this;
  }, $madd:function(polar$$2) {
    this.theta = (this.theta + polar$$2.theta) % (Math.PI * 2);
    this.rho += polar$$2.rho;
    return this;
  }, $scale:function(number$$1) {
    this.rho *= number$$1;
    return this;
  }, isZero:function() {
    var almostZero = 1E-4;
    var abs = Math.abs;
    return abs(this.theta) < almostZero && abs(this.rho) < almostZero;
  }, interpolate:function(elem$$17, delta$$3) {
    function ch$$5(t$$1) {
      var a$$1 = t$$1 < 0 ? t$$1 % pi2 + pi2 : t$$1 % pi2;
      return a$$1;
    }
    var pi = Math.PI;
    var pi2 = pi * 2;
    var tt = this.theta;
    var et = elem$$17.theta;
    var sum;
    var diff = Math.abs(tt - et);
    if (diff == pi) {
      if (tt > et) {
        sum = ch$$5(et + (tt - pi2 - et) * delta$$3);
      } else {
        sum = ch$$5(et - pi2 + (tt - et) * delta$$3);
      }
    } else {
      if (diff >= pi) {
        if (tt > et) {
          sum = ch$$5(et + (tt - pi2 - et) * delta$$3);
        } else {
          sum = ch$$5(et - pi2 + (tt - (et - pi2)) * delta$$3);
        }
      } else {
        sum = ch$$5(et + (tt - et) * delta$$3);
      }
    }
    var r = (this.rho - elem$$17.rho) * delta$$3 + elem$$17.rho;
    return {"theta":sum, "rho":r};
  }};
  Polar.KER = $P();
  $jit.Complex = Complex;
  Complex.prototype = {getc:function() {
    return this;
  }, getp:function(simple$$2) {
    return this.toPolar(simple$$2);
  }, set:function(c$$1) {
    c$$1 = c$$1.getc(true);
    this.x = c$$1.x;
    this.y = c$$1.y;
  }, setc:function(x$$61, y$$42) {
    this.x = x$$61;
    this.y = y$$42;
  }, setp:function(theta$$2, rho$$3) {
    this.x = Math.cos(theta$$2) * rho$$3;
    this.y = Math.sin(theta$$2) * rho$$3;
  }, clone:function() {
    return new Complex(this.x, this.y);
  }, toPolar:function(simple$$3) {
    var rho$$4 = this.norm();
    var atan = Math.atan2(this.y, this.x);
    if (atan < 0) {
      atan += Math.PI * 2;
    }
    if (simple$$3) {
      return {"theta":atan, "rho":rho$$4};
    }
    return new Polar(atan, rho$$4);
  }, norm:function() {
    return Math.sqrt(this.squaredNorm());
  }, squaredNorm:function() {
    return this.x * this.x + this.y * this.y;
  }, add:function(pos$$9) {
    return new Complex(this.x + pos$$9.x, this.y + pos$$9.y);
  }, prod:function(pos$$10) {
    return new Complex(this.x * pos$$10.x - this.y * pos$$10.y, this.y * pos$$10.x + this.x * pos$$10.y);
  }, conjugate:function() {
    return new Complex(this.x, -this.y);
  }, scale:function(factor$$1) {
    return new Complex(this.x * factor$$1, this.y * factor$$1);
  }, equals:function(c$$2) {
    return this.x == c$$2.x && this.y == c$$2.y;
  }, $add:function(pos$$11) {
    this.x += pos$$11.x;
    this.y += pos$$11.y;
    return this;
  }, $prod:function(pos$$12) {
    var x$$62 = this.x;
    var y$$43 = this.y;
    this.x = x$$62 * pos$$12.x - y$$43 * pos$$12.y;
    this.y = y$$43 * pos$$12.x + x$$62 * pos$$12.y;
    return this;
  }, $conjugate:function() {
    this.y = -this.y;
    return this;
  }, $scale:function(factor$$2) {
    this.x *= factor$$2;
    this.y *= factor$$2;
    return this;
  }, $div:function(pos$$13) {
    var x$$63 = this.x;
    var y$$44 = this.y;
    var sq = pos$$13.squaredNorm();
    this.x = x$$63 * pos$$13.x + y$$44 * pos$$13.y;
    this.y = y$$44 * pos$$13.x - x$$63 * pos$$13.y;
    return this.$scale(1 / sq);
  }, isZero:function() {
    var almostZero$$1 = 1E-4;
    var abs$$1 = Math.abs;
    return abs$$1(this.x) < almostZero$$1 && abs$$1(this.y) < almostZero$$1;
  }};
  Complex.KER = $C(0);
  Complex.IM = $C(1);
  $jit.Graph = new Class({initialize:function(opt$$8, Node$$1, Edge, Label) {
    var innerOptions = {"klass":Complex, "Node":{}};
    this.Node = Node$$1;
    this.Edge = Edge;
    this.Label = Label;
    this.opt = $$$1.merge(innerOptions, opt$$8 || {});
    this.nodes = {};
    this.edges = {};
    var that$$8 = this;
    this.nodeList = {};
    var p$$13;
    for (p$$13 in Accessors) {
      that$$8.nodeList[p$$13] = function(p$$14) {
        return function() {
          var args$$2 = Array.prototype.slice.call(arguments);
          that$$8.eachNode(function(n$$6) {
            n$$6[p$$14].apply(n$$6, args$$2);
          });
        };
      }(p$$13);
    }
  }, getNode:function(id$$8) {
    if (this.hasNode(id$$8)) {
      return this.nodes[id$$8];
    }
    return false;
  }, get:function(id$$9) {
    return this.getNode(id$$9);
  }, getByName:function(name$$36) {
    var id$$10;
    for (id$$10 in this.nodes) {
      var n$$7 = this.nodes[id$$10];
      if (n$$7.name == name$$36) {
        return n$$7;
      }
    }
    return false;
  }, getAdjacence:function(id$$11, id2) {
    if (id$$11 in this.edges) {
      return this.edges[id$$11][id2];
    }
    return false;
  }, addNode:function(obj$$25) {
    if (!this.nodes[obj$$25.id]) {
      var edges = this.edges[obj$$25.id] = {};
      this.nodes[obj$$25.id] = new Graph.Node($$$1.extend({"id":obj$$25.id, "name":obj$$25.name, "data":$$$1.merge(obj$$25.data || {}, {}), "adjacencies":edges}, this.opt.Node), this.opt.klass, this.Node, this.Edge, this.Label);
    }
    return this.nodes[obj$$25.id];
  }, addAdjacence:function(obj$$26, obj2, data$$18) {
    if (!this.hasNode(obj$$26.id)) {
      this.addNode(obj$$26);
    }
    if (!this.hasNode(obj2.id)) {
      this.addNode(obj2);
    }
    obj$$26 = this.nodes[obj$$26.id];
    obj2 = this.nodes[obj2.id];
    if (!obj$$26.adjacentTo(obj2)) {
      var adjsObj = this.edges[obj$$26.id] = this.edges[obj$$26.id] || {};
      var adjsObj2 = this.edges[obj2.id] = this.edges[obj2.id] || {};
      adjsObj[obj2.id] = adjsObj2[obj$$26.id] = new Graph.Adjacence(obj$$26, obj2, data$$18, this.Edge, this.Label);
      return adjsObj[obj2.id];
    }
    return this.edges[obj$$26.id][obj2.id];
  }, removeNode:function(id$$12) {
    if (this.hasNode(id$$12)) {
      delete this.nodes[id$$12];
      var adjs = this.edges[id$$12];
      var to;
      for (to in adjs) {
        delete this.edges[to][id$$12];
      }
      delete this.edges[id$$12];
    }
  }, removeAdjacence:function(id1, id2$$1) {
    delete this.edges[id1][id2$$1];
    delete this.edges[id2$$1][id1];
  }, hasNode:function(id$$13) {
    return id$$13 in this.nodes;
  }, empty:function() {
    this.nodes = {};
    this.edges = {};
  }});
  var Graph = $jit.Graph;
  var Accessors;
  (function() {
    function removeDataInternal(prefix$$4, properties$$3) {
      prefix$$4 = "$" + (prefix$$4 ? prefix$$4 + "-" : "");
      var that$$9 = this;
      $$$1.each(properties$$3, function(prop$$8) {
        var pref = prefix$$4 + prop$$8;
        delete that$$9.data[pref];
        delete that$$9.endData[pref];
        delete that$$9.startData[pref];
      });
    }
    function setDataInternal(prefix$$3, prop$$7, value$$34, type$$39) {
      type$$39 = type$$39 || "current";
      prefix$$3 = "$" + (prefix$$3 ? prefix$$3 + "-" : "");
      var data$$20;
      if (type$$39 == "current") {
        data$$20 = this.data;
      } else {
        if (type$$39 == "start") {
          data$$20 = this.startData;
        } else {
          if (type$$39 == "end") {
            data$$20 = this.endData;
          }
        }
      }
      data$$20[prefix$$3 + prop$$7] = value$$34;
    }
    function getDataInternal(prefix$$2, prop$$6, type$$38, force$$1, prefixConfig) {
      var data$$19;
      type$$38 = type$$38 || "current";
      prefix$$2 = "$" + (prefix$$2 ? prefix$$2 + "-" : "");
      if (type$$38 == "current") {
        data$$19 = this.data;
      } else {
        if (type$$38 == "start") {
          data$$19 = this.startData;
        } else {
          if (type$$38 == "end") {
            data$$19 = this.endData;
          }
        }
      }
      var dollar = prefix$$2 + prop$$6;
      if (force$$1) {
        return data$$19[dollar];
      }
      if (!this.Config.overridable) {
        return prefixConfig[prop$$6] || 0;
      }
      return dollar in data$$19 ? data$$19[dollar] : dollar in this.data ? this.data[dollar] : prefixConfig[prop$$6] || 0;
    }
    Accessors = {getData:function(prop$$9, type$$40, force$$2) {
      return getDataInternal.call(this, "", prop$$9, type$$40, force$$2, this.Config);
    }, setData:function(prop$$10, value$$35, type$$41) {
      setDataInternal.call(this, "", prop$$10, value$$35, type$$41);
    }, setDataset:function(types, obj$$27) {
      types = $$$1.splat(types);
      var attr;
      for (attr in obj$$27) {
        var i$$34 = 0;
        var val$$2 = $$$1.splat(obj$$27[attr]);
        var l$$12 = types.length;
        for (;i$$34 < l$$12;i$$34++) {
          this.setData(attr, val$$2[i$$34], types[i$$34]);
        }
      }
    }, removeData:function() {
      removeDataInternal.call(this, "", Array.prototype.slice.call(arguments));
    }, getCanvasStyle:function(prop$$11, type$$42, force$$3) {
      return getDataInternal.call(this, "canvas", prop$$11, type$$42, force$$3, this.Config.CanvasStyles);
    }, setCanvasStyle:function(prop$$12, value$$36, type$$43) {
      setDataInternal.call(this, "canvas", prop$$12, value$$36, type$$43);
    }, setCanvasStyles:function(types$$1, obj$$28) {
      types$$1 = $$$1.splat(types$$1);
      var attr$$1;
      for (attr$$1 in obj$$28) {
        var i$$35 = 0;
        var val$$3 = $$$1.splat(obj$$28[attr$$1]);
        var l$$13 = types$$1.length;
        for (;i$$35 < l$$13;i$$35++) {
          this.setCanvasStyle(attr$$1, val$$3[i$$35], types$$1[i$$35]);
        }
      }
    }, removeCanvasStyle:function() {
      removeDataInternal.call(this, "canvas", Array.prototype.slice.call(arguments));
    }, getLabelData:function(prop$$13, type$$44, force$$4) {
      return getDataInternal.call(this, "label", prop$$13, type$$44, force$$4, this.Label);
    }, setLabelData:function(prop$$14, value$$37, type$$45) {
      setDataInternal.call(this, "label", prop$$14, value$$37, type$$45);
    }, setLabelDataset:function(types$$2, obj$$29) {
      types$$2 = $$$1.splat(types$$2);
      var attr$$2;
      for (attr$$2 in obj$$29) {
        var i$$36 = 0;
        var val$$4 = $$$1.splat(obj$$29[attr$$2]);
        var l$$14 = types$$2.length;
        for (;i$$36 < l$$14;i$$36++) {
          this.setLabelData(attr$$2, val$$4[i$$36], types$$2[i$$36]);
        }
      }
    }, removeLabelData:function() {
      removeDataInternal.call(this, "label", Array.prototype.slice.call(arguments));
    }};
  })();
  Graph.Node = new Class({initialize:function(opt$$9, klass$$5, Node$$2, Edge$$1, Label$$1) {
    var innerOptions$$1 = {"id":"", "name":"", "data":{}, "startData":{}, "endData":{}, "adjacencies":{}, "selected":false, "drawn":false, "exist":false, "angleSpan":{"begin":0, "end":0}, "pos":new klass$$5, "startPos":new klass$$5, "endPos":new klass$$5};
    $$$1.extend(this, $$$1.extend(innerOptions$$1, opt$$9));
    this.Config = this.Node = Node$$2;
    this.Edge = Edge$$1;
    this.Label = Label$$1;
  }, adjacentTo:function(node$$23) {
    return node$$23.id in this.adjacencies;
  }, getAdjacency:function(id$$14) {
    return this.adjacencies[id$$14];
  }, getPos:function(type$$46) {
    type$$46 = type$$46 || "current";
    if (type$$46 == "current") {
      return this.pos;
    } else {
      if (type$$46 == "end") {
        return this.endPos;
      } else {
        if (type$$46 == "start") {
          return this.startPos;
        }
      }
    }
  }, setPos:function(value$$38, type$$47) {
    type$$47 = type$$47 || "current";
    var pos$$14;
    if (type$$47 == "current") {
      pos$$14 = this.pos;
    } else {
      if (type$$47 == "end") {
        pos$$14 = this.endPos;
      } else {
        if (type$$47 == "start") {
          pos$$14 = this.startPos;
        }
      }
    }
    pos$$14.set(value$$38);
  }});
  Graph.Node.implement(Accessors);
  Graph.Adjacence = new Class({initialize:function(nodeFrom, nodeTo, data$$21, Edge$$2, Label$$2) {
    this.nodeFrom = nodeFrom;
    this.nodeTo = nodeTo;
    this.data = data$$21 || {};
    this.startData = {};
    this.endData = {};
    this.Config = this.Edge = Edge$$2;
    this.Label = Label$$2;
  }});
  Graph.Adjacence.implement(Accessors);
  Graph.Util = {filter:function(param$$3) {
    if (!param$$3 || !($$$1.type(param$$3) == "string")) {
      return function() {
        return true;
      };
    }
    var props$$3 = param$$3.split(" ");
    return function(elem$$18) {
      var i$$37 = 0;
      for (;i$$37 < props$$3.length;i$$37++) {
        if (elem$$18[props$$3[i$$37]]) {
          return false;
        }
      }
      return true;
    };
  }, getNode:function(graph$$1, id$$15) {
    return graph$$1.nodes[id$$15];
  }, eachNode:function(graph$$2, action$$3, flags$$1) {
    var filter = this.filter(flags$$1);
    var i$$38;
    for (i$$38 in graph$$2.nodes) {
      if (filter(graph$$2.nodes[i$$38])) {
        action$$3(graph$$2.nodes[i$$38]);
      }
    }
  }, each:function(graph$$3, action$$4, flags$$2) {
    this.eachNode(graph$$3, action$$4, flags$$2);
  }, eachAdjacency:function(node$$24, action$$5, flags$$3) {
    var adj$$2 = node$$24.adjacencies;
    var filter$$1 = this.filter(flags$$3);
    var id$$16;
    for (id$$16 in adj$$2) {
      var a$$4 = adj$$2[id$$16];
      if (filter$$1(a$$4)) {
        if (a$$4.nodeFrom != node$$24) {
          var tmp = a$$4.nodeFrom;
          a$$4.nodeFrom = a$$4.nodeTo;
          a$$4.nodeTo = tmp;
        }
        action$$5(a$$4, id$$16);
      }
    }
  }, computeLevels:function(graph$$4, id$$17, startDepth, flags$$4) {
    startDepth = startDepth || 0;
    var filter$$2 = this.filter(flags$$4);
    this.eachNode(graph$$4, function(elem$$19) {
      elem$$19._flag = false;
      elem$$19._depth = -1;
    }, flags$$4);
    var root$$1 = graph$$4.getNode(id$$17);
    root$$1._depth = startDepth;
    var queue = [root$$1];
    for (;queue.length != 0;) {
      var node$$25 = queue.pop();
      node$$25._flag = true;
      this.eachAdjacency(node$$25, function(adj$$3) {
        var n$$8 = adj$$3.nodeTo;
        if (n$$8._flag == false && filter$$2(n$$8)) {
          if (n$$8._depth < 0) {
            n$$8._depth = node$$25._depth + 1 + startDepth;
          }
          queue.unshift(n$$8);
        }
      }, flags$$4);
    }
  }, eachBFS:function(graph$$5, id$$18, action$$6, flags$$5) {
    var filter$$3 = this.filter(flags$$5);
    this.clean(graph$$5);
    var queue$$1 = [graph$$5.getNode(id$$18)];
    for (;queue$$1.length != 0;) {
      var node$$26 = queue$$1.pop();
      if (!node$$26) {
        return;
      }
      node$$26._flag = true;
      action$$6(node$$26, node$$26._depth);
      this.eachAdjacency(node$$26, function(adj$$4) {
        var n$$9 = adj$$4.nodeTo;
        if (n$$9._flag == false && filter$$3(n$$9)) {
          n$$9._flag = true;
          queue$$1.unshift(n$$9);
        }
      }, flags$$5);
    }
  }, eachLevel:function(node$$27, levelBegin, levelEnd, action$$7, flags$$6) {
    var d$$1 = node$$27._depth;
    var filter$$4 = this.filter(flags$$6);
    var that$$10 = this;
    var shouldContinue = true;
    levelEnd = levelEnd === false ? Number.MAX_VALUE - d$$1 : levelEnd;
    (function loopLevel(node$$28, levelBegin$$1, levelEnd$$1) {
      if (!shouldContinue) {
        return;
      }
      var d$$2 = node$$28._depth;
      var ret;
      if (d$$2 >= levelBegin$$1 && d$$2 <= levelEnd$$1 && filter$$4(node$$28)) {
        ret = action$$7(node$$28, d$$2);
      }
      if (typeof ret !== "undefined") {
        shouldContinue = ret;
      }
      if (shouldContinue && d$$2 < levelEnd$$1) {
        that$$10.eachAdjacency(node$$28, function(adj$$5) {
          var n$$10 = adj$$5.nodeTo;
          if (n$$10._depth > d$$2) {
            loopLevel(n$$10, levelBegin$$1, levelEnd$$1);
          }
        });
      }
    })(node$$27, levelBegin + d$$1, levelEnd + d$$1);
  }, eachSubgraph:function(node$$29, action$$8, flags$$7) {
    this.eachLevel(node$$29, 0, false, action$$8, flags$$7);
  }, eachSubnode:function(node$$30, action$$9, flags$$8) {
    this.eachLevel(node$$30, 1, 1, action$$9, flags$$8);
  }, anySubnode:function(node$$31, cond, flags$$9) {
    var flag$$1 = false;
    cond = cond || $$$1.lambda(true);
    var c$$3 = $$$1.type(cond) == "string" ? function(n$$11) {
      return n$$11[cond];
    } : cond;
    this.eachSubnode(node$$31, function(elem$$20) {
      if (c$$3(elem$$20)) {
        flag$$1 = true;
      }
    }, flags$$9);
    return flag$$1;
  }, getSubnodes:function(node$$32, level$$8, flags$$10) {
    var ans$$5 = [];
    var that$$11 = this;
    level$$8 = level$$8 || 0;
    var levelStart;
    var levelEnd$$2;
    if ($$$1.type(level$$8) == "array") {
      levelStart = level$$8[0];
      levelEnd$$2 = level$$8[1];
    } else {
      levelStart = level$$8;
      levelEnd$$2 = Number.MAX_VALUE - node$$32._depth;
    }
    this.eachLevel(node$$32, levelStart, levelEnd$$2, function(n$$12) {
      ans$$5.push(n$$12);
    }, flags$$10);
    return ans$$5;
  }, getParents:function(node$$33) {
    var ans$$6 = [];
    this.eachAdjacency(node$$33, function(adj$$6) {
      var n$$13 = adj$$6.nodeTo;
      if (n$$13._depth < node$$33._depth) {
        ans$$6.push(n$$13);
      }
    });
    return ans$$6;
  }, isDescendantOf:function(node$$34, id$$19) {
    if (node$$34.id == id$$19) {
      return true;
    }
    var pars = this.getParents(node$$34);
    var ans$$7 = false;
    var i$$39 = 0;
    for (;!ans$$7 && i$$39 < pars.length;i$$39++) {
      ans$$7 = ans$$7 || this.isDescendantOf(pars[i$$39], id$$19);
    }
    return ans$$7;
  }, clean:function(graph$$6) {
    this.eachNode(graph$$6, function(elem$$21) {
      elem$$21._flag = false;
    });
  }, getClosestNodeToOrigin:function(graph$$7, prop$$15, flags$$11) {
    return this.getClosestNodeToPos(graph$$7, Polar.KER, prop$$15, flags$$11);
  }, getClosestNodeToPos:function(graph$$8, pos$$15, prop$$16, flags$$12) {
    function distance(a$$5, b$$3) {
      var d1 = a$$5.x - b$$3.x;
      var d2 = a$$5.y - b$$3.y;
      return d1 * d1 + d2 * d2;
    }
    var node$$35 = null;
    prop$$16 = prop$$16 || "current";
    pos$$15 = pos$$15 && pos$$15.getc(true) || Complex.KER;
    this.eachNode(graph$$8, function(elem$$22) {
      node$$35 = node$$35 == null || distance(elem$$22.getPos(prop$$16).getc(true), pos$$15) < distance(node$$35.getPos(prop$$16).getc(true), pos$$15) ? elem$$22 : node$$35;
    }, flags$$12);
    return node$$35;
  }};
  $$$1.each(["get", "getNode", "each", "eachNode", "computeLevels", "eachBFS", "clean", "getClosestNodeToPos", "getClosestNodeToOrigin"], function(m) {
    Graph.prototype[m] = function() {
      return Graph.Util[m].apply(Graph.Util, [this].concat(Array.prototype.slice.call(arguments)));
    };
  });
  $$$1.each(["eachAdjacency", "eachLevel", "eachSubgraph", "eachSubnode", "anySubnode", "getSubnodes", "getParents", "isDescendantOf"], function(m$$1) {
    Graph.Node.prototype[m$$1] = function() {
      return Graph.Util[m$$1].apply(Graph.Util, [this].concat(Array.prototype.slice.call(arguments)));
    };
  });
  Graph.Op = {options:{type:"nothing", duration:2E3, hideLabels:true, fps:30}, initialize:function(viz$$6) {
    this.viz = viz$$6;
  }, removeNode:function(node$$36, opt$$10) {
    var viz$$7 = this.viz;
    var options$$5 = $$$1.merge(this.options, viz$$7.controller, opt$$10);
    var n$$14 = $$$1.splat(node$$36);
    var i$$40;
    var that$$12;
    var nodeObj;
    switch(options$$5.type) {
      case "nothing":
        i$$40 = 0;
        for (;i$$40 < n$$14.length;i$$40++) {
          options$$5.onBeforeRemoveNode(viz$$7.graph.getNode(n$$14[i$$40]));
          viz$$7.graph.removeNode(n$$14[i$$40]);
        }
        break;
      case "replot":
        this.removeNode(n$$14, {type:"nothing"});
        viz$$7.labels.clearLabels();
        viz$$7.refresh(true);
        break;
      case "fade:seq":
      ;
      case "fade":
        that$$12 = this;
        i$$40 = 0;
        for (;i$$40 < n$$14.length;i$$40++) {
          nodeObj = viz$$7.graph.getNode(n$$14[i$$40]);
          nodeObj.setData("alpha", 0, "end");
        }
        viz$$7.fx.animate($$$1.merge(options$$5, {modes:["node-property:alpha"], onComplete:function() {
          that$$12.removeNode(n$$14, {type:"nothing"});
          viz$$7.labels.clearLabels();
          viz$$7.reposition();
          viz$$7.fx.animate($$$1.merge(options$$5, {modes:["linear"]}));
        }}));
        break;
      case "fade:con":
        that$$12 = this;
        i$$40 = 0;
        for (;i$$40 < n$$14.length;i$$40++) {
          nodeObj = viz$$7.graph.getNode(n$$14[i$$40]);
          nodeObj.setData("alpha", 0, "end");
          nodeObj.ignore = true;
        }
        viz$$7.reposition();
        viz$$7.fx.animate($$$1.merge(options$$5, {modes:["node-property:alpha", "linear"], onComplete:function() {
          that$$12.removeNode(n$$14, {type:"nothing"});
          options$$5.onComplete && options$$5.onComplete();
        }}));
        break;
      case "iter":
        that$$12 = this;
        viz$$7.fx.sequence({condition:function() {
          return n$$14.length != 0;
        }, step:function() {
          that$$12.removeNode(n$$14.shift(), {type:"nothing"});
          viz$$7.labels.clearLabels();
        }, onComplete:function() {
          options$$5.onComplete && options$$5.onComplete();
        }, duration:Math.ceil(options$$5.duration / n$$14.length)});
        break;
      default:
        this.doError();
    }
  }, removeEdge:function(vertex, opt$$11) {
    var viz$$8 = this.viz;
    var options$$6 = $$$1.merge(this.options, viz$$8.controller, opt$$11);
    var v$$1 = $$$1.type(vertex[0]) == "string" ? [vertex] : vertex;
    var i$$41;
    var that$$13;
    var adj$$7;
    switch(options$$6.type) {
      case "nothing":
        i$$41 = 0;
        for (;i$$41 < v$$1.length;i$$41++) {
          viz$$8.graph.removeAdjacence(v$$1[i$$41][0], v$$1[i$$41][1]);
        }
        break;
      case "replot":
        this.removeEdge(v$$1, {type:"nothing"});
        viz$$8.refresh(true);
        break;
      case "fade:seq":
      ;
      case "fade":
        that$$13 = this;
        i$$41 = 0;
        for (;i$$41 < v$$1.length;i$$41++) {
          adj$$7 = viz$$8.graph.getAdjacence(v$$1[i$$41][0], v$$1[i$$41][1]);
          if (adj$$7) {
            adj$$7.setData("alpha", 0, "end");
          }
        }
        viz$$8.fx.animate($$$1.merge(options$$6, {modes:["edge-property:alpha"], onComplete:function() {
          that$$13.removeEdge(v$$1, {type:"nothing"});
          viz$$8.reposition();
          viz$$8.fx.animate($$$1.merge(options$$6, {modes:["linear"]}));
        }}));
        break;
      case "fade:con":
        that$$13 = this;
        i$$41 = 0;
        for (;i$$41 < v$$1.length;i$$41++) {
          adj$$7 = viz$$8.graph.getAdjacence(v$$1[i$$41][0], v$$1[i$$41][1]);
          if (adj$$7) {
            adj$$7.setData("alpha", 0, "end");
            adj$$7.ignore = true;
          }
        }
        viz$$8.reposition();
        viz$$8.fx.animate($$$1.merge(options$$6, {modes:["edge-property:alpha", "linear"], onComplete:function() {
          that$$13.removeEdge(v$$1, {type:"nothing"});
          options$$6.onComplete && options$$6.onComplete();
        }}));
        break;
      case "iter":
        that$$13 = this;
        viz$$8.fx.sequence({condition:function() {
          return v$$1.length != 0;
        }, step:function() {
          that$$13.removeEdge(v$$1.shift(), {type:"nothing"});
          viz$$8.labels.clearLabels();
        }, onComplete:function() {
          options$$6.onComplete();
        }, duration:Math.ceil(options$$6.duration / v$$1.length)});
        break;
      default:
        this.doError();
    }
  }, sum:function(json$$3, opt$$12) {
    var viz$$9 = this.viz;
    var options$$7 = $$$1.merge(this.options, viz$$9.controller, opt$$12);
    var root$$2 = viz$$9.root;
    var graph$$9;
    viz$$9.root = opt$$12.id || viz$$9.root;
    switch(options$$7.type) {
      case "nothing":
        graph$$9 = viz$$9.construct(json$$3);
        graph$$9.eachNode(function(elem$$23) {
          elem$$23.eachAdjacency(function(adj$$8) {
            viz$$9.graph.addAdjacence(adj$$8.nodeFrom, adj$$8.nodeTo, adj$$8.data);
          });
        });
        break;
      case "replot":
        viz$$9.refresh(true);
        this.sum(json$$3, {type:"nothing"});
        viz$$9.refresh(true);
        break;
      case "fade:seq":
      ;
      case "fade":
      ;
      case "fade:con":
        that = this;
        graph$$9 = viz$$9.construct(json$$3);
        var fadeEdges = this.preprocessSum(graph$$9);
        var modes = !fadeEdges ? ["node-property:alpha"] : ["node-property:alpha", "edge-property:alpha"];
        viz$$9.reposition();
        if (options$$7.type != "fade:con") {
          viz$$9.fx.animate($$$1.merge(options$$7, {modes:["linear"], onComplete:function() {
            viz$$9.fx.animate($$$1.merge(options$$7, {modes:modes, onComplete:function() {
              options$$7.onComplete();
            }}));
          }}));
        } else {
          viz$$9.graph.eachNode(function(elem$$24) {
            if (elem$$24.id != root$$2 && elem$$24.pos.isZero()) {
              elem$$24.pos.set(elem$$24.endPos);
              elem$$24.startPos.set(elem$$24.endPos);
            }
          });
          viz$$9.fx.animate($$$1.merge(options$$7, {modes:["linear"].concat(modes)}));
        }
        break;
      default:
        this.doError();
    }
  }, morph:function(json$$4, opt$$13, extraModes) {
    extraModes = extraModes || {};
    var viz$$10 = this.viz;
    var options$$8 = $$$1.merge(this.options, viz$$10.controller, opt$$13);
    var root$$3 = viz$$10.root;
    var graph$$10;
    viz$$10.root = opt$$13.id || viz$$10.root;
    switch(options$$8.type) {
      case "nothing":
        graph$$10 = viz$$10.construct(json$$4);
        graph$$10.eachNode(function(elem$$25) {
          var nodeExists = viz$$10.graph.hasNode(elem$$25.id);
          elem$$25.eachAdjacency(function(adj$$9) {
            var adjExists = !!viz$$10.graph.getAdjacence(adj$$9.nodeFrom.id, adj$$9.nodeTo.id);
            viz$$10.graph.addAdjacence(adj$$9.nodeFrom, adj$$9.nodeTo, adj$$9.data);
            if (adjExists) {
              var addedAdj = viz$$10.graph.getAdjacence(adj$$9.nodeFrom.id, adj$$9.nodeTo.id);
              var prop$$18;
              for (prop$$18 in adj$$9.data || {}) {
                addedAdj.data[prop$$18] = adj$$9.data[prop$$18];
              }
            }
          });
          if (nodeExists) {
            var addedNode = viz$$10.graph.getNode(elem$$25.id);
            var prop$$17;
            for (prop$$17 in elem$$25.data || {}) {
              addedNode.data[prop$$17] = elem$$25.data[prop$$17];
            }
          }
        });
        viz$$10.graph.eachNode(function(elem$$26) {
          elem$$26.eachAdjacency(function(adj$$10) {
            if (!graph$$10.getAdjacence(adj$$10.nodeFrom.id, adj$$10.nodeTo.id)) {
              viz$$10.graph.removeAdjacence(adj$$10.nodeFrom.id, adj$$10.nodeTo.id);
            }
          });
          if (!graph$$10.hasNode(elem$$26.id)) {
            viz$$10.graph.removeNode(elem$$26.id);
          }
        });
        break;
      case "replot":
        viz$$10.labels.clearLabels(true);
        this.morph(json$$4, {type:"nothing"});
        viz$$10.refresh(true);
        viz$$10.refresh(true);
        break;
      case "fade:seq":
      ;
      case "fade":
      ;
      case "fade:con":
        that = this;
        graph$$10 = viz$$10.construct(json$$4);
        var nodeModes = "node-property" in extraModes && $$$1.map($$$1.splat(extraModes["node-property"]), function(n$$15) {
          return "$" + n$$15;
        });
        viz$$10.graph.eachNode(function(elem$$27) {
          var graphNode = graph$$10.getNode(elem$$27.id);
          if (!graphNode) {
            elem$$27.setData("alpha", 1);
            elem$$27.setData("alpha", 1, "start");
            elem$$27.setData("alpha", 0, "end");
            elem$$27.ignore = true;
          } else {
            var graphNodeData = graphNode.data;
            var prop$$19;
            for (prop$$19 in graphNodeData) {
              if (nodeModes && $$$1.indexOf(nodeModes, prop$$19) > -1) {
                elem$$27.endData[prop$$19] = graphNodeData[prop$$19];
              } else {
                elem$$27.data[prop$$19] = graphNodeData[prop$$19];
              }
            }
          }
        });
        viz$$10.graph.eachNode(function(elem$$28) {
          if (elem$$28.ignore) {
            return;
          }
          elem$$28.eachAdjacency(function(adj$$11) {
            if (adj$$11.nodeFrom.ignore || adj$$11.nodeTo.ignore) {
              return;
            }
            var nodeFrom$$1 = graph$$10.getNode(adj$$11.nodeFrom.id);
            var nodeTo$$1 = graph$$10.getNode(adj$$11.nodeTo.id);
            if (!nodeFrom$$1.adjacentTo(nodeTo$$1)) {
              adj$$11 = viz$$10.graph.getAdjacence(nodeFrom$$1.id, nodeTo$$1.id);
              fadeEdges$$1 = true;
              adj$$11.setData("alpha", 1);
              adj$$11.setData("alpha", 1, "start");
              adj$$11.setData("alpha", 0, "end");
            }
          });
        });
        var fadeEdges$$1 = this.preprocessSum(graph$$10);
        var modes$$1 = !fadeEdges$$1 ? ["node-property:alpha"] : ["node-property:alpha", "edge-property:alpha"];
        modes$$1[0] = modes$$1[0] + ("node-property" in extraModes ? ":" + $$$1.splat(extraModes["node-property"]).join(":") : "");
        modes$$1[1] = (modes$$1[1] || "edge-property:alpha") + ("edge-property" in extraModes ? ":" + $$$1.splat(extraModes["edge-property"]).join(":") : "");
        if ("label-property" in extraModes) {
          modes$$1.push("label-property:" + $$$1.splat(extraModes["label-property"]).join(":"));
        }
        if (viz$$10.reposition) {
          viz$$10.reposition();
        } else {
          viz$$10.compute("end");
        }
        viz$$10.graph.eachNode(function(elem$$29) {
          if (elem$$29.id != root$$3 && elem$$29.pos.getp().equals(Polar.KER)) {
            elem$$29.pos.set(elem$$29.endPos);
            elem$$29.startPos.set(elem$$29.endPos);
          }
        });
        viz$$10.fx.animate($$$1.merge(options$$8, {modes:[extraModes.position || "polar"].concat(modes$$1), onComplete:function() {
          viz$$10.graph.eachNode(function(elem$$30) {
            if (elem$$30.ignore) {
              viz$$10.graph.removeNode(elem$$30.id);
            }
          });
          viz$$10.graph.eachNode(function(elem$$31) {
            elem$$31.eachAdjacency(function(adj$$12) {
              if (adj$$12.ignore) {
                viz$$10.graph.removeAdjacence(adj$$12.nodeFrom.id, adj$$12.nodeTo.id);
              }
            });
          });
          options$$8.onComplete();
        }}));
      default:
      ;
    }
  }, contract:function(node$$37, opt$$14) {
    var viz$$11 = this.viz;
    if (node$$37.collapsed || !node$$37.anySubnode($$$1.lambda(true))) {
      return;
    }
    opt$$14 = $$$1.merge(this.options, viz$$11.config, opt$$14 || {}, {"modes":["node-property:alpha:span", "linear"]});
    node$$37.collapsed = true;
    (function subn(n$$16) {
      n$$16.eachSubnode(function(ch$$6) {
        ch$$6.ignore = true;
        ch$$6.setData("alpha", 0, opt$$14.type == "animate" ? "end" : "current");
        subn(ch$$6);
      });
    })(node$$37);
    if (opt$$14.type == "animate") {
      viz$$11.compute("end");
      if (viz$$11.rotated) {
        viz$$11.rotate(viz$$11.rotated, "none", {"property":"end"});
      }
      (function subn$$1(n$$17) {
        n$$17.eachSubnode(function(ch$$7) {
          ch$$7.setPos(node$$37.getPos("end"), "end");
          subn$$1(ch$$7);
        });
      })(node$$37);
      viz$$11.fx.animate(opt$$14);
    } else {
      if (opt$$14.type == "replot") {
        viz$$11.refresh();
      }
    }
  }, expand:function(node$$38, opt$$15) {
    if (!("collapsed" in node$$38)) {
      return;
    }
    var viz$$12 = this.viz;
    opt$$15 = $$$1.merge(this.options, viz$$12.config, opt$$15 || {}, {"modes":["node-property:alpha:span", "linear"]});
    delete node$$38.collapsed;
    (function subn$$2(n$$18) {
      n$$18.eachSubnode(function(ch$$8) {
        delete ch$$8.ignore;
        ch$$8.setData("alpha", 1, opt$$15.type == "animate" ? "end" : "current");
        subn$$2(ch$$8);
      });
    })(node$$38);
    if (opt$$15.type == "animate") {
      viz$$12.compute("end");
      if (viz$$12.rotated) {
        viz$$12.rotate(viz$$12.rotated, "none", {"property":"end"});
      }
      viz$$12.fx.animate(opt$$15);
    } else {
      if (opt$$15.type == "replot") {
        viz$$12.refresh();
      }
    }
  }, preprocessSum:function(graph$$11) {
    var viz$$13 = this.viz;
    graph$$11.eachNode(function(elem$$32) {
      if (!viz$$13.graph.hasNode(elem$$32.id)) {
        viz$$13.graph.addNode(elem$$32);
        var n$$19 = viz$$13.graph.getNode(elem$$32.id);
        n$$19.setData("alpha", 0);
        n$$19.setData("alpha", 0, "start");
        n$$19.setData("alpha", 1, "end");
      }
    });
    var fadeEdges$$2 = false;
    graph$$11.eachNode(function(elem$$33) {
      elem$$33.eachAdjacency(function(adj$$13) {
        var nodeFrom$$2 = viz$$13.graph.getNode(adj$$13.nodeFrom.id);
        var nodeTo$$2 = viz$$13.graph.getNode(adj$$13.nodeTo.id);
        if (!nodeFrom$$2.adjacentTo(nodeTo$$2)) {
          adj$$13 = viz$$13.graph.addAdjacence(nodeFrom$$2, nodeTo$$2, adj$$13.data);
          if (nodeFrom$$2.startAlpha == nodeFrom$$2.endAlpha && nodeTo$$2.startAlpha == nodeTo$$2.endAlpha) {
            fadeEdges$$2 = true;
            adj$$13.setData("alpha", 0);
            adj$$13.setData("alpha", 0, "start");
            adj$$13.setData("alpha", 1, "end");
          }
        }
      });
    });
    return fadeEdges$$2;
  }};
  var NodeHelper = {"none":{"render":$$$1.empty, "contains":$$$1.lambda(false)}, "circle":{"render":function(type$$48, pos$$16, radius$$2, canvas$$8) {
    var ctx$$3 = canvas$$8.getCtx();
    ctx$$3.beginPath();
    ctx$$3.arc(pos$$16.x, pos$$16.y, radius$$2, 0, Math.PI * 2, true);
    ctx$$3.closePath();
    ctx$$3[type$$48]();
  }, "contains":function(npos, pos$$17, radius$$3) {
    var diffx = npos.x - pos$$17.x;
    var diffy = npos.y - pos$$17.y;
    var diff$$1 = diffx * diffx + diffy * diffy;
    return diff$$1 <= radius$$3 * radius$$3;
  }}, "ellipse":{"render":function(type$$49, pos$$18, width$$16, height$$15, canvas$$9) {
    var ctx$$4 = canvas$$9.getCtx();
    var scalex = 1;
    var scaley = 1;
    var scaleposx = 1;
    var scaleposy = 1;
    var radius$$4 = 0;
    if (width$$16 > height$$15) {
      radius$$4 = width$$16 / 2;
      scaley = height$$15 / width$$16;
      scaleposy = width$$16 / height$$15;
    } else {
      radius$$4 = height$$15 / 2;
      scalex = width$$16 / height$$15;
      scaleposx = height$$15 / width$$16;
    }
    ctx$$4.save();
    ctx$$4.scale(scalex, scaley);
    ctx$$4.beginPath();
    ctx$$4.arc(pos$$18.x * scaleposx, pos$$18.y * scaleposy, radius$$4, 0, Math.PI * 2, true);
    ctx$$4.closePath();
    ctx$$4[type$$49]();
    ctx$$4.restore();
  }, "contains":function(npos$$1, pos$$19, width$$17, height$$16) {
    var radius$$5 = 0;
    var scalex$$1 = 1;
    var scaley$$1 = 1;
    var diffx$$1 = 0;
    var diffy$$1 = 0;
    var diff$$2 = 0;
    if (width$$17 > height$$16) {
      radius$$5 = width$$17 / 2;
      scaley$$1 = height$$16 / width$$17;
    } else {
      radius$$5 = height$$16 / 2;
      scalex$$1 = width$$17 / height$$16;
    }
    diffx$$1 = (npos$$1.x - pos$$19.x) * (1 / scalex$$1);
    diffy$$1 = (npos$$1.y - pos$$19.y) * (1 / scaley$$1);
    diff$$2 = diffx$$1 * diffx$$1 + diffy$$1 * diffy$$1;
    return diff$$2 <= radius$$5 * radius$$5;
  }}, "square":{"render":function(type$$50, pos$$20, dim$$1, canvas$$10) {
    canvas$$10.getCtx()[type$$50 + "Rect"](pos$$20.x - dim$$1, pos$$20.y - dim$$1, 2 * dim$$1, 2 * dim$$1);
  }, "contains":function(npos$$2, pos$$21, dim$$2) {
    return Math.abs(pos$$21.x - npos$$2.x) <= dim$$2 && Math.abs(pos$$21.y - npos$$2.y) <= dim$$2;
  }}, "rectangle":{"render":function(type$$51, pos$$22, width$$18, height$$17, canvas$$11) {
    canvas$$11.getCtx()[type$$51 + "Rect"](pos$$22.x - width$$18 / 2, pos$$22.y - height$$17 / 2, width$$18, height$$17);
  }, "contains":function(npos$$3, pos$$23, width$$19, height$$18) {
    return Math.abs(pos$$23.x - npos$$3.x) <= width$$19 / 2 && Math.abs(pos$$23.y - npos$$3.y) <= height$$18 / 2;
  }}, "triangle":{"render":function(type$$52, pos$$24, dim$$3, canvas$$12) {
    var ctx$$5 = canvas$$12.getCtx();
    var c1x = pos$$24.x;
    var c1y = pos$$24.y - dim$$3;
    var c2x = c1x - dim$$3;
    var c2y = pos$$24.y + dim$$3;
    var c3x = c1x + dim$$3;
    var c3y = c2y;
    ctx$$5.beginPath();
    ctx$$5.moveTo(c1x, c1y);
    ctx$$5.lineTo(c2x, c2y);
    ctx$$5.lineTo(c3x, c3y);
    ctx$$5.closePath();
    ctx$$5[type$$52]();
  }, "contains":function(npos$$4, pos$$25, dim$$4) {
    return NodeHelper.circle.contains(npos$$4, pos$$25, dim$$4);
  }}, "star":{"render":function(type$$53, pos$$26, dim$$5, canvas$$13) {
    var ctx$$6 = canvas$$13.getCtx();
    var pi5 = Math.PI / 5;
    ctx$$6.save();
    ctx$$6.translate(pos$$26.x, pos$$26.y);
    ctx$$6.beginPath();
    ctx$$6.moveTo(dim$$5, 0);
    var i$$42 = 0;
    for (;i$$42 < 9;i$$42++) {
      ctx$$6.rotate(pi5);
      if (i$$42 % 2 == 0) {
        ctx$$6.lineTo(dim$$5 / .525731 * .200811, 0);
      } else {
        ctx$$6.lineTo(dim$$5, 0);
      }
    }
    ctx$$6.closePath();
    ctx$$6[type$$53]();
    ctx$$6.restore();
  }, "contains":function(npos$$5, pos$$27, dim$$6) {
    return NodeHelper.circle.contains(npos$$5, pos$$27, dim$$6);
  }}};
  var EdgeHelper = {"line":{"render":function(from, to$$1, canvas$$14) {
    var ctx$$7 = canvas$$14.getCtx();
    ctx$$7.beginPath();
    ctx$$7.moveTo(from.x, from.y);
    ctx$$7.lineTo(to$$1.x, to$$1.y);
    ctx$$7.stroke();
  }, "contains":function(posFrom, posTo, pos$$28, epsilon) {
    var min = Math.min;
    var max = Math.max;
    var minPosX = min(posFrom.x, posTo.x);
    var maxPosX = max(posFrom.x, posTo.x);
    var minPosY = min(posFrom.y, posTo.y);
    var maxPosY = max(posFrom.y, posTo.y);
    if (pos$$28.x >= minPosX && pos$$28.x <= maxPosX && pos$$28.y >= minPosY && pos$$28.y <= maxPosY) {
      if (Math.abs(posTo.x - posFrom.x) <= epsilon) {
        return true;
      }
      var dist = (posTo.y - posFrom.y) / (posTo.x - posFrom.x) * (pos$$28.x - posFrom.x) + posFrom.y;
      return Math.abs(dist - pos$$28.y) <= epsilon;
    }
    return false;
  }}, "arrow":{"render":function(from$$1, to$$2, dim$$7, swap, canvas$$15) {
    var ctx$$8 = canvas$$15.getCtx();
    if (swap) {
      var tmp$$1 = from$$1;
      from$$1 = to$$2;
      to$$2 = tmp$$1;
    }
    var vect = new Complex(to$$2.x - from$$1.x, to$$2.y - from$$1.y);
    vect.$scale(dim$$7 / vect.norm());
    var intermediatePoint = new Complex(to$$2.x - vect.x, to$$2.y - vect.y);
    var normal = new Complex(-vect.y / 2, vect.x / 2);
    var v1 = intermediatePoint.add(normal);
    var v2 = intermediatePoint.$add(normal.$scale(-1));
    ctx$$8.beginPath();
    ctx$$8.moveTo(from$$1.x, from$$1.y);
    ctx$$8.lineTo(to$$2.x, to$$2.y);
    ctx$$8.stroke();
    ctx$$8.beginPath();
    ctx$$8.moveTo(v1.x, v1.y);
    ctx$$8.lineTo(v2.x, v2.y);
    ctx$$8.lineTo(to$$2.x, to$$2.y);
    ctx$$8.closePath();
    ctx$$8.fill();
  }, "contains":function(posFrom$$1, posTo$$1, pos$$29, epsilon$$1) {
    return EdgeHelper.line.contains(posFrom$$1, posTo$$1, pos$$29, epsilon$$1);
  }}, "hyperline":{"render":function(from$$2, to$$3, r$$1, canvas$$16) {
    function computeArcThroughTwoPoints(p1, p2) {
      var aDen = p1.x * p2.y - p1.y * p2.x;
      var bDen = aDen;
      var sq1 = p1.squaredNorm();
      var sq2 = p2.squaredNorm();
      if (aDen == 0) {
        return {x:0, y:0, ratio:-1};
      }
      var a$$6 = (p1.y * sq2 - p2.y * sq1 + p1.y - p2.y) / aDen;
      var b$$4 = (p2.x * sq1 - p1.x * sq2 + p2.x - p1.x) / bDen;
      var x$$64 = -a$$6 / 2;
      var y$$45 = -b$$4 / 2;
      var squaredRatio = (a$$6 * a$$6 + b$$4 * b$$4) / 4 - 1;
      if (squaredRatio < 0) {
        return {x:0, y:0, ratio:-1};
      }
      var ratio = Math.sqrt(squaredRatio);
      var out = {x:x$$64, y:y$$45, ratio:ratio > 1E3 ? -1 : ratio, a:a$$6, b:b$$4};
      return out;
    }
    function sense(angleBegin$$1, angleEnd$$1) {
      return angleBegin$$1 < angleEnd$$1 ? angleBegin$$1 + Math.PI > angleEnd$$1 ? false : true : angleEnd$$1 + Math.PI > angleBegin$$1 ? true : false;
    }
    var ctx$$9 = canvas$$16.getCtx();
    var centerOfCircle = computeArcThroughTwoPoints(from$$2, to$$3);
    if (centerOfCircle.a > 1E3 || centerOfCircle.b > 1E3 || centerOfCircle.ratio < 0) {
      ctx$$9.beginPath();
      ctx$$9.moveTo(from$$2.x * r$$1, from$$2.y * r$$1);
      ctx$$9.lineTo(to$$3.x * r$$1, to$$3.y * r$$1);
      ctx$$9.stroke();
    } else {
      var angleBegin = Math.atan2(to$$3.y - centerOfCircle.y, to$$3.x - centerOfCircle.x);
      var angleEnd = Math.atan2(from$$2.y - centerOfCircle.y, from$$2.x - centerOfCircle.x);
      sense = sense(angleBegin, angleEnd);
      ctx$$9.beginPath();
      ctx$$9.arc(centerOfCircle.x * r$$1, centerOfCircle.y * r$$1, centerOfCircle.ratio * r$$1, angleBegin, angleEnd, sense);
      ctx$$9.stroke();
    }
  }, "contains":$$$1.lambda(false)}};
  Graph.Plot = {initialize:function(viz$$14, klass$$6) {
    this.viz = viz$$14;
    this.config = viz$$14.config;
    this.node = viz$$14.config.Node;
    this.edge = viz$$14.config.Edge;
    this.animation = new Animation;
    this.nodeTypes = new klass$$6.Plot.NodeTypes;
    this.edgeTypes = new klass$$6.Plot.EdgeTypes;
    this.labels = viz$$14.labels;
  }, nodeHelper:NodeHelper, edgeHelper:EdgeHelper, Interpolator:{"map":{"border":"color", "color":"color", "width":"number", "height":"number", "dim":"number", "alpha":"number", "lineWidth":"number", "angularWidth":"number", "span":"number", "valueArray":"array-number", "dimArray":"array-number", "vertices":"polygon"}, "canvas":{"globalAlpha":"number", "fillStyle":"color", "strokeStyle":"color", "lineWidth":"number", "shadowBlur":"number", "shadowColor":"color", "shadowOffsetX":"number", "shadowOffsetY":"number", 
  "miterLimit":"number"}, "label":{"size":"number", "color":"color"}, "compute":function(from$$3, to$$4, delta$$4) {
    return from$$3 + (to$$4 - from$$3) * delta$$4;
  }, "moebius":function(elem$$34, props$$4, delta$$5, vector) {
    var v$$2 = vector.scale(-delta$$5);
    if (v$$2.norm() < 1) {
      var x$$65 = v$$2.x;
      var y$$46 = v$$2.y;
      var ans$$8 = elem$$34.startPos.getc().moebiusTransformation(v$$2);
      elem$$34.pos.setc(ans$$8.x, ans$$8.y);
      v$$2.x = x$$65;
      v$$2.y = y$$46;
    }
  }, "linear":function(elem$$35, props$$5, delta$$6) {
    var from$$4 = elem$$35.startPos.getc(true);
    var to$$5 = elem$$35.endPos.getc(true);
    elem$$35.pos.setc(this.compute(from$$4.x, to$$5.x, delta$$6), this.compute(from$$4.y, to$$5.y, delta$$6));
  }, "polar":function(elem$$36, props$$6, delta$$7) {
    var from$$5 = elem$$36.startPos.getp(true);
    var to$$6 = elem$$36.endPos.getp();
    var ans$$9 = to$$6.interpolate(from$$5, delta$$7);
    elem$$36.pos.setp(ans$$9.theta, ans$$9.rho);
  }, "number":function(elem$$37, prop$$20, delta$$8, getter, setter) {
    var from$$6 = elem$$37[getter](prop$$20, "start");
    var to$$7 = elem$$37[getter](prop$$20, "end");
    elem$$37[setter](prop$$20, this.compute(from$$6, to$$7, delta$$8));
  }, "color":function(elem$$38, prop$$21, delta$$9, getter$$1, setter$$1) {
    var from$$7 = $$$1.hexToRgb(elem$$38[getter$$1](prop$$21, "start"));
    var to$$8 = $$$1.hexToRgb(elem$$38[getter$$1](prop$$21, "end"));
    var comp = this.compute;
    var val$$5 = $$$1.rgbToHex([parseInt(comp(from$$7[0], to$$8[0], delta$$9)), parseInt(comp(from$$7[1], to$$8[1], delta$$9)), parseInt(comp(from$$7[2], to$$8[2], delta$$9))]);
    elem$$38[setter$$1](prop$$21, val$$5);
  }, "array-number":function(elem$$39, prop$$22, delta$$10, getter$$2, setter$$2) {
    var from$$8 = elem$$39[getter$$2](prop$$22, "start");
    var to$$9 = elem$$39[getter$$2](prop$$22, "end");
    var cur$$1 = [];
    var i$$43 = 0;
    var l$$15 = from$$8.length;
    for (;i$$43 < l$$15;i$$43++) {
      var fromi = from$$8[i$$43];
      var toi = to$$9[i$$43];
      if (fromi.length) {
        var j$$3 = 0;
        var len$$2 = fromi.length;
        var curi = [];
        for (;j$$3 < len$$2;j$$3++) {
          curi.push(this.compute(fromi[j$$3], toi[j$$3], delta$$10));
        }
        cur$$1.push(curi);
      } else {
        cur$$1.push(this.compute(fromi, toi, delta$$10));
      }
    }
    elem$$39[setter$$2](prop$$22, cur$$1);
  }, "node":function(elem$$40, props$$7, delta$$11, map, getter$$3, setter$$3) {
    map = this[map];
    if (props$$7) {
      var len$$3 = props$$7.length;
      var i$$44 = 0;
      for (;i$$44 < len$$3;i$$44++) {
        var pi$$1 = props$$7[i$$44];
        this[map[pi$$1]](elem$$40, pi$$1, delta$$11, getter$$3, setter$$3);
      }
    } else {
      for (pi$$1 in map) {
        this[map[pi$$1]](elem$$40, pi$$1, delta$$11, getter$$3, setter$$3);
      }
    }
  }, "edge":function(elem$$41, props$$8, delta$$12, mapKey, getter$$4, setter$$4) {
    var adjs$$1 = elem$$41.adjacencies;
    var id$$20;
    for (id$$20 in adjs$$1) {
      this["node"](adjs$$1[id$$20], props$$8, delta$$12, mapKey, getter$$4, setter$$4);
    }
  }, "node-property":function(elem$$42, props$$9, delta$$13) {
    this["node"](elem$$42, props$$9, delta$$13, "map", "getData", "setData");
  }, "edge-property":function(elem$$43, props$$10, delta$$14) {
    this["edge"](elem$$43, props$$10, delta$$14, "map", "getData", "setData");
  }, "label-property":function(elem$$44, props$$11, delta$$15) {
    this["node"](elem$$44, props$$11, delta$$15, "label", "getLabelData", "setLabelData");
  }, "node-style":function(elem$$45, props$$12, delta$$16) {
    this["node"](elem$$45, props$$12, delta$$16, "canvas", "getCanvasStyle", "setCanvasStyle");
  }, "edge-style":function(elem$$46, props$$13, delta$$17) {
    this["edge"](elem$$46, props$$13, delta$$17, "canvas", "getCanvasStyle", "setCanvasStyle");
  }, "polygon":function(elem$$47, prop$$23, delta$$18, getter$$5, setter$$5) {
    var from$$9 = elem$$47[getter$$5](prop$$23, "start");
    var to$$10 = elem$$47[getter$$5](prop$$23, "end");
    var cur$$2 = [];
    if (typeof from$$9.offset == "undefined") {
      if (from$$9 === 0) {
        from$$9 = $$$1.map(to$$10, function() {
          return new $jit.Complex(0, 0);
        });
        from$$9.offset = 0;
      } else {
        if (from$$9.length == 0) {
          from$$9.push(new $jit.Complex(0, 0));
        }
        for (;from$$9.length < to$$10.length;) {
          from$$9.push(from$$9[0]);
        }
        for (;from$$9.length > to$$10.length;) {
          to$$10.push(to$$10[0] || new $jit.Complex(0, 0));
        }
        if (from$$9.length == 0) {
          return;
        }
        var l$$16 = from$$9.length;
        var minDist = 1E300;
        var offset$$9 = 0;
        for (;offset$$9 < l$$16;offset$$9++) {
          var d$$3 = 0;
          var i$$45 = 0;
          for (;i$$45 < l$$16;i$$45++) {
            d$$3 += Geometry.dist2(from$$9[(offset$$9 + i$$45) % l$$16], to$$10[i$$45]);
          }
          if (d$$3 < minDist) {
            from$$9.offset = offset$$9;
            minDist = d$$3;
          }
        }
      }
    }
    i$$45 = 0;
    l$$16 = from$$9.length;
    for (;i$$45 < l$$16;i$$45++) {
      var fromi$$1 = from$$9[(i$$45 + from$$9.offset) % l$$16];
      var toi$$1 = to$$10[i$$45];
      cur$$2.push(new $jit.Complex(this.compute(fromi$$1.x, toi$$1.x, delta$$18), this.compute(fromi$$1.y, toi$$1.y, delta$$18)));
    }
    elem$$47[setter$$5](prop$$23, cur$$2);
  }}, sequence:function(options$$9) {
    var that$$14 = this;
    options$$9 = $$$1.merge({condition:$$$1.lambda(false), step:$$$1.empty, onComplete:$$$1.empty, duration:200}, options$$9 || {});
    var interval = setInterval(function() {
      if (options$$9.condition()) {
        options$$9.step();
      } else {
        clearInterval(interval);
        options$$9.onComplete();
      }
      that$$14.viz.refresh(true);
    }, options$$9.duration);
  }, prepare:function(modes$$2) {
    var graph$$12 = this.viz.graph;
    var accessors = {"node-property":{"getter":"getData", "setter":"setData"}, "edge-property":{"getter":"getData", "setter":"setData"}, "node-style":{"getter":"getCanvasStyle", "setter":"setCanvasStyle"}, "edge-style":{"getter":"getCanvasStyle", "setter":"setCanvasStyle"}};
    var m$$2 = {};
    if ($$$1.type(modes$$2) == "array") {
      var i$$46 = 0;
      var len$$4 = modes$$2.length;
      for (;i$$46 < len$$4;i$$46++) {
        var elems = modes$$2[i$$46].split(":");
        m$$2[elems.shift()] = elems;
      }
    } else {
      var p$$15;
      for (p$$15 in modes$$2) {
        if (p$$15 == "position") {
          m$$2[modes$$2.position] = [];
        } else {
          m$$2[p$$15] = $$$1.splat(modes$$2[p$$15]);
        }
      }
    }
    graph$$12.eachNode(function(node$$39) {
      node$$39.startPos.set(node$$39.pos);
      $$$1.each(["node-property", "node-style"], function(p$$16) {
        if (p$$16 in m$$2) {
          var prop$$24 = m$$2[p$$16];
          var i$$47 = 0;
          var l$$17 = prop$$24.length;
          for (;i$$47 < l$$17;i$$47++) {
            node$$39[accessors[p$$16].setter](prop$$24[i$$47], node$$39[accessors[p$$16].getter](prop$$24[i$$47]), "start");
          }
        }
      });
      $$$1.each(["edge-property", "edge-style"], function(p$$17) {
        if (p$$17 in m$$2) {
          var prop$$25 = m$$2[p$$17];
          node$$39.eachAdjacency(function(adj$$14) {
            var i$$48 = 0;
            var l$$18 = prop$$25.length;
            for (;i$$48 < l$$18;i$$48++) {
              adj$$14[accessors[p$$17].setter](prop$$25[i$$48], adj$$14[accessors[p$$17].getter](prop$$25[i$$48]), "start");
            }
          });
        }
      });
    });
    return m$$2;
  }, animate:function(opt$$16, versor) {
    opt$$16 = $$$1.merge(this.viz.config, opt$$16 || {});
    var that$$15 = this;
    var viz$$15 = this.viz;
    var graph$$13 = viz$$15.graph;
    var interp = this.Interpolator;
    var animation = opt$$16.type === "nodefx" ? this.nodeFxAnimation : this.animation;
    var m$$3 = this.prepare(opt$$16.modes);
    if (opt$$16.hideLabels) {
      this.labels.hideLabels(true);
    }
    animation.setOptions($$$1.extend(opt$$16, {$animating:false, compute:function(delta$$19) {
      graph$$13.eachNode(function(node$$40) {
        var p$$18;
        for (p$$18 in m$$3) {
          interp[p$$18](node$$40, m$$3[p$$18], delta$$19, versor);
        }
      });
      that$$15.plot(opt$$16, this.$animating, delta$$19);
      this.$animating = true;
    }, complete:function() {
      if (opt$$16.hideLabels) {
        that$$15.labels.hideLabels(false);
      }
      that$$15.plot(opt$$16);
      opt$$16.onComplete();
    }})).start();
  }, nodeFx:function(opt$$17) {
    var viz$$16 = this.viz;
    var graph$$14 = viz$$16.graph;
    var animation$$1 = this.nodeFxAnimation;
    var options$$10 = $$$1.merge(this.viz.config, {"elements":{"id":false, "properties":{}}, "reposition":false});
    opt$$17 = $$$1.merge(options$$10, opt$$17 || {}, {onBeforeCompute:$$$1.empty, onAfterCompute:$$$1.empty});
    animation$$1.stopTimer();
    var props$$14 = opt$$17.elements.properties;
    if (!opt$$17.elements.id) {
      graph$$14.eachNode(function(n$$20) {
        var prop$$27;
        for (prop$$27 in props$$14) {
          n$$20.setData(prop$$27, props$$14[prop$$27], "end");
        }
      });
    } else {
      var ids = $$$1.splat(opt$$17.elements.id);
      $$$1.each(ids, function(id$$21) {
        var n$$21 = graph$$14.getNode(id$$21);
        if (n$$21) {
          var prop$$28;
          for (prop$$28 in props$$14) {
            n$$21.setData(prop$$28, props$$14[prop$$28], "end");
          }
        }
      });
    }
    var propnames = [];
    var prop$$26;
    for (prop$$26 in props$$14) {
      propnames.push(prop$$26);
    }
    var modes$$3 = ["node-property:" + propnames.join(":")];
    if (opt$$17.reposition) {
      modes$$3.push("linear");
      viz$$16.compute("end");
    }
    this.animate($$$1.merge(opt$$17, {modes:modes$$3, type:"nodefx"}));
  }, plot:function(opt$$18, animating) {
    var viz$$17 = this.viz;
    var aGraph = viz$$17.graph;
    var canvas$$17 = viz$$17.canvas;
    var id$$22 = viz$$17.root;
    var that$$16 = this;
    var ctx$$10 = canvas$$17.getCtx();
    var min$$1 = Math.min;
    opt$$18 = opt$$18 || this.viz.controller;
    opt$$18.clearCanvas && canvas$$17.clear();
    var root$$4 = aGraph.getNode(id$$22);
    if (!root$$4) {
      return;
    }
    var T = !!root$$4.visited;
    aGraph.eachNode(function(node$$41) {
      var nodeAlpha = node$$41.getData("alpha");
      node$$41.eachAdjacency(function(adj$$15) {
        var nodeTo$$3 = adj$$15.nodeTo;
        if (!!nodeTo$$3.visited === T && node$$41.drawn && nodeTo$$3.drawn) {
          !animating && opt$$18.onBeforePlotLine(adj$$15);
          that$$16.plotLine(adj$$15, canvas$$17, animating);
          !animating && opt$$18.onAfterPlotLine(adj$$15);
        }
      });
      if (node$$41.drawn) {
        !animating && opt$$18.onBeforePlotNode(node$$41);
        that$$16.plotNode(node$$41, canvas$$17, animating);
        !animating && opt$$18.onAfterPlotNode(node$$41);
      }
      if (!that$$16.labelsHidden && opt$$18.withLabels) {
        if (node$$41.drawn && nodeAlpha >= .95) {
          that$$16.labels.plotLabel(canvas$$17, node$$41, opt$$18);
        } else {
          that$$16.labels.hideLabel(node$$41, false);
        }
      }
      node$$41.visited = !T;
    });
  }, plotTree:function(node$$42, opt$$19, animating$$1) {
    var that$$17 = this;
    var viz$$18 = this.viz;
    var canvas$$18 = viz$$18.canvas;
    var config$$1 = this.config;
    var ctx$$11 = canvas$$18.getCtx();
    var nodeAlpha$$1 = node$$42.getData("alpha");
    node$$42.eachSubnode(function(elem$$48) {
      if (opt$$19.plotSubtree(node$$42, elem$$48) && elem$$48.exist && elem$$48.drawn) {
        var adj$$16 = node$$42.getAdjacency(elem$$48.id);
        !animating$$1 && opt$$19.onBeforePlotLine(adj$$16);
        that$$17.plotLine(adj$$16, canvas$$18, animating$$1);
        !animating$$1 && opt$$19.onAfterPlotLine(adj$$16);
        that$$17.plotTree(elem$$48, opt$$19, animating$$1);
      }
    });
    if (node$$42.drawn) {
      !animating$$1 && opt$$19.onBeforePlotNode(node$$42);
      this.plotNode(node$$42, canvas$$18, animating$$1);
      !animating$$1 && opt$$19.onAfterPlotNode(node$$42);
      if (!opt$$19.hideLabels && opt$$19.withLabels && nodeAlpha$$1 >= .95) {
        this.labels.plotLabel(canvas$$18, node$$42, opt$$19);
      } else {
        this.labels.hideLabel(node$$42, false);
      }
    } else {
      this.labels.hideLabel(node$$42, true);
    }
  }, plotNode:function(node$$43, canvas$$19, animating$$2) {
    var f$$2 = node$$43.getData("type");
    var ctxObj = this.node.CanvasStyles;
    if (f$$2 != "none") {
      var width$$20 = node$$43.getData("lineWidth");
      var color$$2 = node$$43.getData("color");
      var alpha$$3 = node$$43.getData("alpha");
      var ctx$$12 = canvas$$19.getCtx();
      ctx$$12.save();
      ctx$$12.lineWidth = width$$20;
      ctx$$12.fillStyle = ctx$$12.strokeStyle = color$$2;
      ctx$$12.globalAlpha = alpha$$3;
      var s$$7;
      for (s$$7 in ctxObj) {
        ctx$$12[s$$7] = node$$43.getCanvasStyle(s$$7);
      }
      this.nodeTypes[f$$2].render.call(this, node$$43, canvas$$19, animating$$2);
      ctx$$12.restore();
    }
  }, plotLine:function(adj$$17, canvas$$20, animating$$3) {
    var f$$3 = adj$$17.getData("type");
    var ctxObj$$1 = this.edge.CanvasStyles;
    if (f$$3 != "none") {
      var width$$21 = adj$$17.getData("lineWidth");
      var color$$3 = adj$$17.getData("color");
      var ctx$$13 = canvas$$20.getCtx();
      var nodeFrom$$3 = adj$$17.nodeFrom;
      var nodeTo$$4 = adj$$17.nodeTo;
      ctx$$13.save();
      ctx$$13.lineWidth = width$$21;
      ctx$$13.fillStyle = ctx$$13.strokeStyle = color$$3;
      ctx$$13.globalAlpha = Math.min(nodeFrom$$3.getData("alpha"), nodeTo$$4.getData("alpha"), adj$$17.getData("alpha"));
      var s$$8;
      for (s$$8 in ctxObj$$1) {
        ctx$$13[s$$8] = adj$$17.getCanvasStyle(s$$8);
      }
      this.edgeTypes[f$$3].render.call(this, adj$$17, canvas$$20, animating$$3);
      ctx$$13.restore();
    }
  }};
  Graph.Plot3D = $$$1.merge(Graph.Plot, {Interpolator:{"linear":function(elem$$49, props$$15, delta$$20) {
    var from$$10 = elem$$49.startPos.getc(true);
    var to$$11 = elem$$49.endPos.getc(true);
    elem$$49.pos.setc(this.compute(from$$10.x, to$$11.x, delta$$20), this.compute(from$$10.y, to$$11.y, delta$$20), this.compute(from$$10.z, to$$11.z, delta$$20));
  }}, plotNode:function(node$$44, canvas$$21) {
    if (node$$44.getData("type") == "none") {
      return;
    }
    this.plotElement(node$$44, canvas$$21, {getAlpha:function() {
      return node$$44.getData("alpha");
    }});
  }, plotLine:function(adj$$18, canvas$$22) {
    if (adj$$18.getData("type") == "none") {
      return;
    }
    this.plotElement(adj$$18, canvas$$22, {getAlpha:function() {
      return Math.min(adj$$18.nodeFrom.getData("alpha"), adj$$18.nodeTo.getData("alpha"), adj$$18.getData("alpha"));
    }});
  }, plotElement:function(elem$$50, canvas$$23, opt$$20) {
    var gl = canvas$$23.getCtx();
    var viewMatrix = new Matrix4;
    var lighting = canvas$$23.config.Scene.Lighting;
    var wcanvas = canvas$$23.canvases[0];
    var program$$16 = wcanvas.program;
    var camera = wcanvas.camera;
    if (!elem$$50.geometry) {
      elem$$50.geometry = new (O3D[elem$$50.getData("type")]);
    }
    elem$$50.geometry.update(elem$$50);
    if (!elem$$50.webGLVertexBuffer) {
      var vertices = [];
      var faces = [];
      var normals = [];
      var vertexIndex = 0;
      var geom$$4 = elem$$50.geometry;
      var i$$49 = 0;
      var vs = geom$$4.vertices;
      var fs = geom$$4.faces;
      var fsl = fs.length;
      for (;i$$49 < fsl;i$$49++) {
        var face$$3 = fs[i$$49];
        var v1$$1 = vs[face$$3.a];
        var v2$$1 = vs[face$$3.b];
        var v3 = vs[face$$3.c];
        var v4 = face$$3.d ? vs[face$$3.d] : false;
        var n$$22 = face$$3.normal;
        vertices.push(v1$$1.x, v1$$1.y, v1$$1.z);
        vertices.push(v2$$1.x, v2$$1.y, v2$$1.z);
        vertices.push(v3.x, v3.y, v3.z);
        if (v4) {
          vertices.push(v4.x, v4.y, v4.z);
        }
        normals.push(n$$22.x, n$$22.y, n$$22.z);
        normals.push(n$$22.x, n$$22.y, n$$22.z);
        normals.push(n$$22.x, n$$22.y, n$$22.z);
        if (v4) {
          normals.push(n$$22.x, n$$22.y, n$$22.z);
        }
        faces.push(vertexIndex, vertexIndex + 1, vertexIndex + 2);
        if (v4) {
          faces.push(vertexIndex, vertexIndex + 2, vertexIndex + 3);
          vertexIndex += 4;
        } else {
          vertexIndex += 3;
        }
      }
      elem$$50.webGLVertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, elem$$50.webGLVertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
      elem$$50.webGLFaceBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elem$$50.webGLFaceBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(faces), gl.STATIC_DRAW);
      elem$$50.webGLFaceCount = faces.length;
      elem$$50.webGLNormalBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, elem$$50.webGLNormalBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    }
    viewMatrix.multiply(camera.matrix, elem$$50.geometry.matrix);
    gl.uniformMatrix4fv(program$$16.viewMatrix, false, viewMatrix.flatten());
    gl.uniformMatrix4fv(program$$16.projectionMatrix, false, camera.projectionMatrix.flatten());
    var normalMatrix = Matrix4.makeInvert(viewMatrix);
    normalMatrix.$transpose();
    gl.uniformMatrix4fv(program$$16.normalMatrix, false, normalMatrix.flatten());
    var color$$4 = $$$1.hexToRgb(elem$$50.getData("color"));
    color$$4.push(opt$$20.getAlpha());
    gl.uniform4f(program$$16.color, color$$4[0] / 255, color$$4[1] / 255, color$$4[2] / 255, color$$4[3]);
    gl.uniform1i(program$$16.enableLighting, lighting.enable);
    if (lighting.enable) {
      if (lighting.ambient) {
        var acolor = lighting.ambient;
        gl.uniform3f(program$$16.ambientColor, acolor[0], acolor[1], acolor[2]);
      }
      if (lighting.directional) {
        var dir = lighting.directional;
        color$$4 = dir.color;
        var pos$$30 = dir.direction;
        var vd = (new Vector3(pos$$30.x, pos$$30.y, pos$$30.z)).normalize().$scale(-1);
        gl.uniform3f(program$$16.lightingDirection, vd.x, vd.y, vd.z);
        gl.uniform3f(program$$16.directionalColor, color$$4[0], color$$4[1], color$$4[2]);
      }
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, elem$$50.webGLVertexBuffer);
    gl.vertexAttribPointer(program$$16.position, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, elem$$50.webGLNormalBuffer);
    gl.vertexAttribPointer(program$$16.normal, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elem$$50.webGLFaceBuffer);
    gl.drawElements(gl.TRIANGLES, elem$$50.webGLFaceCount, gl.UNSIGNED_SHORT, 0);
  }});
  Graph.Label = {};
  Graph.Label.Native = new Class({initialize:function(viz$$19) {
    this.viz = viz$$19;
  }, plotLabel:function(canvas$$24, node$$45, controller) {
    var ctx$$14 = canvas$$24.getCtx();
    var pos$$31 = node$$45.pos.getc(true);
    ctx$$14.font = node$$45.getLabelData("style") + " " + node$$45.getLabelData("size") + "px " + node$$45.getLabelData("family");
    ctx$$14.textAlign = node$$45.getLabelData("textAlign");
    ctx$$14.fillStyle = ctx$$14.strokeStyle = node$$45.getLabelData("color");
    ctx$$14.textBaseline = node$$45.getLabelData("textBaseline");
    this.renderLabel(canvas$$24, node$$45, controller);
  }, renderLabel:function(canvas$$25, node$$46, controller$$1) {
    var ctx$$15 = canvas$$25.getCtx();
    var pos$$32 = node$$46.pos.getc(true);
    ctx$$15.fillText(node$$46.name, pos$$32.x, pos$$32.y + node$$46.getData("height") / 2);
  }, hideLabel:function(node$$47, show) {
    node$$47 = $$$1.splat(node$$47);
    var al = show ? false : true;
    $$$1.each(node$$47, function(n$$23) {
      n$$23._hideLabel = al;
    });
  }, hideLabels:$$$1.empty});
  Graph.Label.DOM = new Class({labelsHidden:false, labelContainer:false, labels:{}, getLabelContainer:function() {
    return this.labelContainer ? this.labelContainer : this.labelContainer = document.getElementById(this.viz.config.labelContainer);
  }, getLabel:function(id$$23) {
    return id$$23 in this.labels && this.labels[id$$23] != null ? this.labels[id$$23] : this.labels[id$$23] = document.getElementById(id$$23);
  }, hideLabels:function(hide) {
    var container = this.getLabelContainer();
    if (hide) {
      container.style.display = "none";
    } else {
      container.style.display = "";
    }
    this.labelsHidden = hide;
  }, clearLabels:function(force$$5) {
    var id$$24;
    for (id$$24 in this.labels) {
      if (force$$5 || !this.viz.graph.hasNode(id$$24)) {
        this.disposeLabel(id$$24);
        delete this.labels[id$$24];
      }
    }
  }, disposeLabel:function(id$$25) {
    var elem$$51 = this.getLabel(id$$25);
    if (elem$$51 && elem$$51.parentNode) {
      elem$$51.parentNode.removeChild(elem$$51);
    }
  }, hideLabel:function(node$$48, show$$1) {
    node$$48 = $$$1.splat(node$$48);
    var st$$1 = show$$1 ? "" : "none";
    var lab;
    var that$$18 = this;
    $$$1.each(node$$48, function(n$$24) {
      lab = that$$18.getLabel(n$$24.id);
      if (lab) {
        lab.style.display = st$$1;
      }
    });
  }, fitsInCanvas:function(pos$$33, canvas$$26) {
    var size$$7 = canvas$$26.getSize();
    if (pos$$33.w && pos$$33.h) {
      if (pos$$33.x >= size$$7.width || pos$$33.x < -pos$$33.w || pos$$33.y >= size$$7.height || pos$$33.y < -pos$$33.h) {
        return false;
      }
    } else {
      if (pos$$33.x >= size$$7.width || pos$$33.x < 0 || pos$$33.y >= size$$7.height || pos$$33.y < 0) {
        return false;
      }
    }
    return true;
  }});
  Graph.Label.HTML = new Class({Implements:Graph.Label.DOM, plotLabel:function(canvas$$27, node$$49, controller$$2) {
    var id$$26 = node$$49.id;
    var tag$$2 = this.getLabel(id$$26);
    if (!tag$$2 && !(tag$$2 = document.getElementById(id$$26))) {
      tag$$2 = document.createElement("div");
      var container$$1 = this.getLabelContainer();
      tag$$2.id = id$$26;
      tag$$2.className = "node";
      tag$$2.style.position = "absolute";
      controller$$2.onCreateLabel(tag$$2, node$$49);
      container$$1.appendChild(tag$$2);
      this.labels[node$$49.id] = tag$$2;
    }
    this.placeLabel(tag$$2, node$$49, controller$$2);
  }});
  Graph.Label.SVG = new Class({Implements:Graph.Label.DOM, plotLabel:function(canvas$$28, node$$50, controller$$3) {
    var id$$27 = node$$50.id;
    var tag$$3 = this.getLabel(id$$27);
    if (!tag$$3 && !(tag$$3 = document.getElementById(id$$27))) {
      var ns = "http://www.w3.org/2000/svg";
      tag$$3 = document.createElementNS(ns, "svg:text");
      var tspan = document.createElementNS(ns, "svg:tspan");
      tag$$3.appendChild(tspan);
      var container$$2 = this.getLabelContainer();
      tag$$3.setAttribute("id", id$$27);
      tag$$3.setAttribute("class", "node");
      container$$2.appendChild(tag$$3);
      controller$$3.onCreateLabel(tag$$3, node$$50);
      this.labels[node$$50.id] = tag$$3;
    }
    this.placeLabel(tag$$3, node$$50, controller$$3);
  }});
  Graph.Geom = new Class({initialize:function(viz$$20) {
    this.viz = viz$$20;
    this.config = viz$$20.config;
    this.node = viz$$20.config.Node;
    this.edge = viz$$20.config.Edge;
  }, translate:function(pos$$34, prop$$29) {
    prop$$29 = $$$1.splat(prop$$29);
    this.viz.graph.eachNode(function(elem$$52) {
      $$$1.each(prop$$29, function(p$$19) {
        elem$$52.getPos(p$$19).$add(pos$$34);
      });
    });
  }, setRightLevelToShow:function(node$$51, canvas$$29, callback$$25) {
    var level$$9 = this.getRightLevelToShow(node$$51, canvas$$29);
    var fx$$1 = this.viz.labels;
    var opt$$21 = $$$1.merge({execShow:true, execHide:true, onHide:$$$1.empty, onShow:$$$1.empty}, callback$$25 || {});
    node$$51.eachLevel(0, this.config.levelsToShow, function(n$$25) {
      var d$$4 = n$$25._depth - node$$51._depth;
      if (d$$4 > level$$9) {
        opt$$21.onHide(n$$25);
        if (opt$$21.execHide) {
          n$$25.drawn = false;
          n$$25.exist = false;
          fx$$1.hideLabel(n$$25, false);
        }
      } else {
        opt$$21.onShow(n$$25);
        if (opt$$21.execShow) {
          n$$25.exist = true;
        }
      }
    });
    node$$51.drawn = true;
  }, getRightLevelToShow:function(node$$52, canvas$$30) {
    var config$$2 = this.config;
    var level$$10 = config$$2.levelsToShow;
    var constrained = config$$2.constrained;
    if (!constrained) {
      return level$$10;
    }
    for (;!this.treeFitsInCanvas(node$$52, canvas$$30, level$$10) && level$$10 > 1;) {
      level$$10--;
    }
    return level$$10;
  }});
  var Loader = {construct:function(json$$5) {
    var isGraph = $$$1.type(json$$5) == "array";
    var ans$$10 = new Graph(this.graphOptions, this.config.Node, this.config.Edge, this.config.Label);
    if (!isGraph) {
      (function(ans$$11, json$$6) {
        ans$$11.addNode(json$$6);
        if (json$$6.children) {
          var i$$50 = 0;
          var ch$$9 = json$$6.children;
          for (;i$$50 < ch$$9.length;i$$50++) {
            ans$$11.addAdjacence(json$$6, ch$$9[i$$50]);
            arguments.callee(ans$$11, ch$$9[i$$50]);
          }
        }
      })(ans$$10, json$$5);
    } else {
      (function(ans$$12, json$$7) {
        function getNode(id$$28) {
          var i$$52 = 0;
          var l$$20 = json$$7.length;
          for (;i$$52 < l$$20;i$$52++) {
            if (json$$7[i$$52].id == id$$28) {
              return json$$7[i$$52];
            }
          }
          var newNode$$1 = {"id":id$$28, "name":id$$28};
          return ans$$12.addNode(newNode$$1);
        }
        var i$$51 = 0;
        var l$$19 = json$$7.length;
        for (;i$$51 < l$$19;i$$51++) {
          ans$$12.addNode(json$$7[i$$51]);
          var adj$$19 = json$$7[i$$51].adjacencies;
          if (adj$$19) {
            var j$$4 = 0;
            var lj = adj$$19.length;
            for (;j$$4 < lj;j$$4++) {
              var node$$53 = adj$$19[j$$4];
              var data$$22 = {};
              if (typeof adj$$19[j$$4] != "string") {
                data$$22 = $$$1.merge(node$$53.data, {});
                node$$53 = node$$53.nodeTo;
              }
              ans$$12.addAdjacence(json$$7[i$$51], getNode(node$$53), data$$22);
            }
          }
        }
      })(ans$$10, json$$5);
    }
    return ans$$10;
  }, loadJSON:function(json$$8, i$$53) {
    this.json = json$$8;
    if (this.labels && this.labels.clearLabels) {
      this.labels.clearLabels(true);
    }
    this.graph = this.construct(json$$8);
    if ($$$1.type(json$$8) != "array") {
      this.root = json$$8.id;
    } else {
      this.root = json$$8[i$$53 ? i$$53 : 0].id;
    }
  }, toJSON:function(type$$54) {
    type$$54 = type$$54 || "tree";
    if (type$$54 == "tree") {
      var ans$$13 = {};
      var rootNode = this.graph.getNode(this.root);
      ans$$13 = function recTree(node$$54) {
        var ans$$14 = {};
        ans$$14.id = node$$54.id;
        ans$$14.name = node$$54.name;
        ans$$14.data = node$$54.data;
        var ch$$10 = [];
        node$$54.eachSubnode(function(n$$26) {
          ch$$10.push(recTree(n$$26));
        });
        ans$$14.children = ch$$10;
        return ans$$14;
      }(rootNode);
      return ans$$13;
    } else {
      ans$$13 = [];
      var T$$1 = !!this.graph.getNode(this.root).visited;
      this.graph.eachNode(function(node$$55) {
        var ansNode = {};
        ansNode.id = node$$55.id;
        ansNode.name = node$$55.name;
        ansNode.data = node$$55.data;
        var adjs$$2 = [];
        node$$55.eachAdjacency(function(adj$$20) {
          var nodeTo$$5 = adj$$20.nodeTo;
          if (!!nodeTo$$5.visited === T$$1) {
            var ansAdj = {};
            ansAdj.nodeTo = nodeTo$$5.id;
            ansAdj.data = adj$$20.data;
            adjs$$2.push(ansAdj);
          }
        });
        ansNode.adjacencies = adjs$$2;
        ans$$13.push(ansNode);
        node$$55.visited = !T$$1;
      });
      return ans$$13;
    }
  }};
  var Layouts = $jit.Layouts = {};
  var NodeDim = {label:null, compute:function(graph$$15, prop$$30, opt$$22) {
    this.initializeLabel(opt$$22);
    var label$$10 = this.label;
    var style$$5 = label$$10.style;
    graph$$15.eachNode(function(n$$27) {
      var autoWidth = n$$27.getData("autoWidth");
      var autoHeight = n$$27.getData("autoHeight");
      if (autoWidth || autoHeight) {
        delete n$$27.data.$width;
        delete n$$27.data.$height;
        delete n$$27.data.$dim;
        var width$$22 = n$$27.getData("width");
        var height$$19 = n$$27.getData("height");
        style$$5.width = autoWidth ? "auto" : width$$22 + "px";
        style$$5.height = autoHeight ? "auto" : height$$19 + "px";
        label$$10.innerHTML = n$$27.name;
        var offsetWidth = label$$10.offsetWidth;
        var offsetHeight = label$$10.offsetHeight;
        var type$$55 = n$$27.getData("type");
        if ($$$1.indexOf(["circle", "square", "triangle", "star"], type$$55) === -1) {
          n$$27.setData("width", offsetWidth);
          n$$27.setData("height", offsetHeight);
        } else {
          var dim$$8 = offsetWidth > offsetHeight ? offsetWidth : offsetHeight;
          n$$27.setData("width", dim$$8);
          n$$27.setData("height", dim$$8);
          n$$27.setData("dim", dim$$8);
        }
      }
    });
  }, initializeLabel:function(opt$$23) {
    if (!this.label) {
      this.label = document.createElement("div");
      document.body.appendChild(this.label);
    }
    this.setLabelStyles(opt$$23);
  }, setLabelStyles:function(opt$$24) {
    $$$1.extend(this.label.style, {"visibility":"hidden", "position":"absolute", "width":"auto", "height":"auto"});
    this.label.className = "jit-autoadjust-label";
  }};
  Layouts.PhyloJive = function() {
    function getBoundaries(graph$$16, config$$3, level$$11, orn, prop$$31) {
      var dim$$9 = config$$3.Node;
      var multitree = config$$3.multitree;
      if (dim$$9.overridable) {
        var w$$6 = -1;
        var h$$4 = -1;
        graph$$16.eachNode(function(n$$28) {
          if (n$$28._depth == level$$11 && (!multitree || "$orn" in n$$28.data && n$$28.data.$orn == orn)) {
            var dw = n$$28.getData("width", prop$$31);
            var dh = n$$28.getData("height", prop$$31);
            w$$6 = w$$6 < dw ? dw : w$$6;
            h$$4 = h$$4 < dh ? dh : h$$4;
          }
        });
        return {"width":w$$6 < 0 ? dim$$9.width : w$$6, "height":h$$4 < 0 ? dim$$9.height : h$$4};
      } else {
        return dim$$9;
      }
    }
    function design(graph$$17, node$$56, prop$$32, config$$4, orn$$1) {
      function $design(node$$57, maxsize, y$$47, xpos) {
        var ymin = Number.MAX_VALUE;
        var ymax = Number.MIN_VALUE;
        var subnodeVisible = false;
        if (config$$4.branchLength) {
          xpos += 10 + graph$$17.factor * node$$57.data.len * config$$4.branchMultiplier;
        } else {
          xpos += config$$4.levelDistance;
        }
        node$$57.eachSubnode(function(n$$29) {
          if (n$$29.exist) {
            subnodeVisible = true;
            y$$47 = $design(n$$29, null, y$$47, xpos);
            if (ymin > y$$47.ymid) {
              ymin = y$$47.ymid;
            }
            if (ymax < y$$47.ymid) {
              ymax = y$$47.ymid;
            }
          }
        });
        if (graph$$17.maxXpos < xpos) {
          graph$$17.maxXpos = xpos;
        }
        if (subnodeVisible) {
          y$$47.ymid = node$$57.getPos(prop$$32)["y"] = (ymax + ymin) / 2;
        } else {
          y$$47.ymid = y$$47.ymin = y$$47.ymax = node$$57.getPos(prop$$32)["y"] = y$$47.ymax + node$$57.getData(s$$9, prop$$32) + siblingOffset;
        }
        node$$57.getPos(prop$$32)["x"] = xpos;
        if (!node$$57.data.leaf) {
          var anyChildVisible = true;
          node$$57.eachLevel(1, 1, function(n$$30) {
            if (!n$$30.exist && !n$$30.drawn) {
              anyChildVisible = false;
            }
          });
          if (!anyChildVisible) {
            node$$57.data.display = "";
            node$$57.data.$type = "triangle";
          } else {
            node$$57.data.display = "none";
            node$$57.data.$type = "circle";
          }
        }
        return y$$47;
      }
      var multitree$$1 = config$$4.multitree;
      var auxp = ["x", "y"];
      var auxs = ["width", "height"];
      var ind = +(orn$$1 == "left" || orn$$1 == "right");
      var p$$20 = auxp[ind];
      var notp = auxp[1 - ind];
      var cnode = config$$4.Node;
      var s$$9 = auxs[ind];
      var nots = auxs[1 - ind];
      var siblingOffset = config$$4.siblingOffset;
      var subtreeOffset = config$$4.subtreeOffset;
      var align = config$$4.align;
      graph$$17.maxXpos = Number.MIN_VALUE;
      if (!graph$$17.maxLen && !graph$$17.minLen && !graph$$17.factor) {
        var max$$1 = Number.MIN_VALUE;
        var min$$2 = Number.MAX_VALUE;
        graph$$17.eachNode(function(node$$58) {
          if (node$$58.data.len < min$$2) {
            min$$2 = node$$58.data.len;
          }
          if (node$$58.data.len > max$$1) {
            max$$1 = node$$58.data.len;
          }
        });
        graph$$17.minLen = min$$2;
        graph$$17.maxLen = max$$1;
        var constant = config$$4.width / graph$$17.depth.length;
        graph$$17.factor = constant / (graph$$17.maxLen - graph$$17.minLen);
      }
      $design(node$$56, false, {ymid:0, ymin:0, ymax:0}, 0);
      graph$$17.maxXpos += node$$56.data.$dim + 10 || 0;
    }
    var slice = Array.prototype.slice;
    return new Class({compute:function(property, computeLevels) {
      var prop$$33 = property || "start";
      var node$$59 = this.graph.getNode(this.root);
      $$$1.extend(node$$59, {"drawn":true, "exist":true, "selected":true});
      NodeDim.compute(this.graph, prop$$33, this.config);
      if (!!computeLevels || !("_depth" in node$$59)) {
        this.graph.computeLevels(this.root, 0, "ignore");
      }
      this.computePositions(node$$59, prop$$33);
    }, computePositions:function(node$$60, prop$$34) {
      var config$$5 = this.config;
      var multitree$$2 = config$$5.multitree;
      var align$$1 = config$$5.align;
      var indent = align$$1 !== "center" && config$$5.indent;
      var orn$$2 = config$$5.orientation;
      var orns = multitree$$2 ? ["top", "right", "bottom", "left"] : [orn$$2];
      var that$$19 = this;
      $$$1.each(orns, function(orn$$3) {
        design(that$$19.graph, node$$60, prop$$34, that$$19.config, orn$$3, prop$$34);
        var i$$55 = ["x", "y"][+(orn$$3 == "left" || orn$$3 == "right")];
        var prev;
        if (!prev) {
          prev = node$$60;
        }
      });
    }, computeLeaves:function(node$$61, leaves$$1) {
      var that$$20 = this;
      node$$61.eachSubnode(function(node$$62) {
        leaves$$1 += that$$20.computeLeaves(node$$62, 0);
      });
      if (node$$61.data.leaf) {
        return node$$61.data.leaves = 1;
      }
      return node$$61.data.leaves = leaves$$1;
    }});
  }();
  $jit.Phylo = function() {
    function getNodesToHide(node$$63) {
      node$$63 = node$$63 || this.clickedNode;
      if (!this.config.constrained) {
        return [];
      }
      var i$$56;
      var Geom = this.geom;
      var graph$$18 = this.graph;
      var canvas$$31 = this.canvas;
      var level$$12 = node$$63._depth;
      var nodeArray = [];
      graph$$18.eachNode(function(n$$32) {
        if (n$$32.exist && !n$$32.selected) {
          if (n$$32.isDescendantOf(node$$63.id)) {
            if (n$$32._depth <= level$$12) {
              nodeArray.push(n$$32);
            }
          } else {
            nodeArray.push(n$$32);
          }
        }
      });
      var leafLevel = Geom.getRightLevelToShow(node$$63, canvas$$31);
      node$$63.eachLevel(leafLevel, leafLevel, function(n$$33) {
        if (n$$33.exist && !n$$33.selected) {
          nodeArray.push(n$$33);
        }
      });
      i$$56 = 0;
      for (;i$$56 < nodesInPath.length;i$$56 += 1) {
        var n$$31 = this.graph.getNode(nodesInPath[i$$56]);
        if (!n$$31.isDescendantOf(node$$63.id)) {
          nodeArray.push(n$$31);
        }
      }
      return nodeArray;
    }
    function getNodesToShow(node$$64) {
      var nodeArray$$1 = [];
      var config$$6 = this.config;
      node$$64 = node$$64 || this.clickedNode;
      this.clickedNode.eachLevel(0, config$$6.levelsToShow, function(n$$34) {
        if (config$$6.multitree && !("$orn" in n$$34.data) && n$$34.anySubnode(function(ch$$11) {
          return ch$$11.exist && !ch$$11.drawn;
        })) {
          nodeArray$$1.push(n$$34);
        } else {
          if (n$$34.drawn && !n$$34.anySubnode("drawn")) {
            nodeArray$$1.push(n$$34);
          }
        }
      });
      return nodeArray$$1;
    }
    var nodesInPath = [];
    return new Class({Implements:[Loader, Extras, Layouts.PhyloJive], initialize:function(controller$$4) {
      var $Phylo = $jit.Phylo;
      var config$$7 = {levelsToShow:2, levelDistance:30, constrained:true, Node:{type:"rectangle"}, duration:700, offsetX:0, offsetY:0};
      this.controller = this.config = $$$1.merge(Options("Canvas", "Fx", "Tree", "PhyloJive", "Node", "Edge", "Controller", "Tips", "NodeStyles", "Events", "Navigation", "Label"), config$$7, controller$$4);
      var canvasConfig = this.config;
      if (canvasConfig.useCanvas) {
        this.canvas = canvasConfig.useCanvas;
        this.config.labelContainer = this.canvas.id + "-label";
      } else {
        if (canvasConfig.background) {
          canvasConfig.background = $$$1.merge({type:"Circles"}, canvasConfig.background);
        }
        this.canvas = new Canvas(this, canvasConfig);
        this.config.labelContainer = (typeof canvasConfig.injectInto === "string" ? canvasConfig.injectInto : canvasConfig.injectInto.id) + "-label";
      }
      this.graphOptions = {"klass":Complex};
      this.graph = new Graph(this.graphOptions, this.config.Node, this.config.Edge);
      this.labels = new $Phylo.Label[canvasConfig.Label.type](this);
      this.fx = new $Phylo.Plot(this, $Phylo);
      this.op = new $Phylo.Op(this);
      this.group = new $Phylo.Group(this);
      this.geom = new $Phylo.Geom(this);
      this.clickedNode = null;
      this.initializeExtras();
    }, hasProperty:function(obj$$30) {
      if (typeof obj$$30 === "undefined") {
        return false;
      }
      var i$$57;
      for (i$$57 in obj$$30) {
        if (obj$$30.hasOwnProperty(i$$57)) {
          return true;
        }
      }
      return false;
    }, sum:function(array$$13) {
      if (!array$$13 || array$$13.length === 0) {
        return;
      }
      return $$$1.reduce(array$$13, function(acc, value$$39) {
        return acc + value$$39;
      }, 0);
    }, mean:function(sample) {
      if (!sample || sample.length === 0) {
        return;
      }
      return this.sum(sample) / sample.length;
    }, wtmean:function(sample$$1, number$$2) {
      if (!sample$$1 || sample$$1.length === 0 || !number$$2 || number$$2.length === 0 || number$$2.length !== sample$$1.length) {
        return;
      }
      var i$$58;
      var sum$$1 = 0;
      var count$$3 = 0;
      i$$58 = 0;
      for (;i$$58 < number$$2.length;i$$58 += 1) {
        sum$$1 += number$$2[i$$58] * sample$$1[i$$58];
        count$$3 += number$$2[i$$58];
      }
      return sum$$1 / count$$3;
    }, variance:function(sample$$2) {
      if (!sample$$2 || sample$$2.length === 0) {
        return;
      }
      var avg;
      var num$$4;
      var total;
      avg = this.mean(sample$$2);
      num$$4 = sample$$2.length;
      total = $$$1.reduce(sample$$2, function(acc$$1, value$$40) {
        var diff$$3 = value$$40 - avg;
        return acc$$1 + diff$$3 * diff$$3;
      }, 0);
      return total / num$$4;
    }, sd:function(sample$$3) {
      if (!sample$$3 || sample$$3.length === 0) {
        return;
      }
      return Math.sqrt(this.variance(sample$$3));
    }, square:function(num$$5) {
      return $jit.util.map(num$$5, function(elem$$53) {
        return elem$$53 * elem$$53;
      });
    }, multiply:function(num1, num2) {
      if (!num1 || !num2 || num1.length !== num2.length) {
        return;
      }
      var i$$59;
      var result$$4 = [];
      i$$59 = 0;
      for (;i$$59 < num1.length;i$$59 += 1) {
        result$$4.push(num1[i$$59] * num2[i$$59]);
      }
      return result$$4;
    }, variancePop:function(num$$6, sd, ui, up) {
      if (!num$$6 || !sd || !ui || num$$6.length !== sd.length || sd.length !== ui.length) {
        return;
      }
      if (num$$6.length === 1) {
        return 0;
      }
      var sumNum = this.sum(num$$6);
      var sqUp = up * up;
      var lessNum;
      var sqSd;
      var sqUi;
      lessNum = $jit.util.map(num$$6, function(elem$$54) {
        return elem$$54 - 1;
      });
      sqSd = this.square(sd);
      sqUi = this.square(ui);
      return (this.sum(this.multiply(lessNum, sqSd)) + this.sum(this.multiply(num$$6, sqUi)) - sumNum * sqUp) / (sumNum - 1);
    }, sdPop:function(num$$7, sd$$1, ui$$1, up$$1) {
      if (!num$$7 || !sd$$1 || !ui$$1 || num$$7.length !== sd$$1.length || sd$$1.length !== ui$$1.length) {
        return;
      }
      return Math.sqrt(this.variancePop(num$$7, sd$$1, ui$$1, up$$1));
    }, meanPop:function(ni, ui$$2) {
      if (!ni || !ui$$2 || ni.length != ui$$2.length) {
        return;
      }
      return this.sum(this.multiply(ni, ui$$2)) / this.sum(ni);
    }, isQuant:function(data$$23) {
      if (typeof data$$23[0] === "number") {
        return true;
      } else {
        return false;
      }
    }, isQuali:function(data$$24) {
      if (typeof data$$24[0] === "string") {
        return true;
      } else {
        return false;
      }
    }, characterType:function(data$$25, testcase) {
      if (!data$$25 || data$$25.length === 0) {
        return;
      }
      switch(testcase) {
        case "quant":
          return this.isQuant(data$$25);
        case "quali":
          return this.isQuali(data$$25);
      }
    }, intersect:function(setA, setB) {
      if (!setA || !setB || setA.length === 0 || setB.length === 0) {
        return [];
      }
      var hashA = {};
      var i$$60;
      var result$$5 = [];
      i$$60 = 0;
      for (;i$$60 < setA.length;i$$60 += 1) {
        hashA[setA[i$$60]] = true;
      }
      i$$60 = 0;
      for (;i$$60 < setB.length;i$$60 += 1) {
        if (hashA[setB[i$$60]]) {
          result$$5.push(setB[i$$60]);
        }
      }
      return result$$5;
    }, union:function(setA$$1, setB$$1) {
      setA$$1 = setA$$1 || [];
      setB$$1 = setB$$1 || [];
      var i$$61;
      var j$$5;
      var sets = [setA$$1, setB$$1];
      var char$$6;
      var union = {};
      i$$61 = 0;
      for (;i$$61 < sets.length;i$$61 += 1) {
        char$$6 = sets[i$$61];
        j$$5 = 0;
        for (;j$$5 < char$$6.length;j$$5 += 1) {
          union[char$$6[j$$5]] = char$$6[j$$5];
        }
      }
      char$$6 = [];
      for (i$$61 in union) {
        if (union.hasOwnProperty(i$$61)) {
          char$$6.push(union[i$$61]);
        }
      }
      return char$$6;
    }, setCollapsed:function(node$$65) {
      if (node$$65.data.$type === "triangle") {
        node$$65.collapsed = true;
      } else {
        node$$65.collapsed = false;
      }
    }, nodesExpCol:function(node$$66) {
      var level$$13 = 0;
      if (node$$66.collapsed) {
        node$$66.eachSubgraph(function(elem$$55) {
          if (!elem$$55.exist) {
            elem$$55.exist = true;
            elem$$55.drawn = true;
          }
          if (!elem$$55.data.leaf) {
            elem$$55.data.$type = "circle";
          } else {
            elem$$55.data.$type = "none";
          }
          elem$$55.collapsed = false;
          if (level$$13 < elem$$55._depth) {
            level$$13 = elem$$55._depth + 1;
          }
        });
        if (!node$$66.data.leaf) {
          node$$66.data.$type = "circle";
        } else {
          node$$66.data.$type = "none";
        }
      } else {
        node$$66.eachSubgraph(function(elem$$56) {
          elem$$56.exist = false;
          elem$$56.drawn = false;
          if (!elem$$56.data.leaf) {
            elem$$56.data.$type = "circle";
          } else {
            elem$$56.data.$type = "none";
          }
          elem$$56.collapsed = true;
        });
        node$$66.exist = true;
        node$$66.drawn = true;
        level$$13 = false;
        if (!node$$66.data.leaf) {
          node$$66.data.$type = "triangle";
        } else {
          node$$66.data.$type = "none";
        }
      }
      return level$$13;
    }, fitchParsimony:function(node$$67, characterList) {
      function downPass(node$$68) {
        var childrenChar = {};
        var key$$24;
        var i$$63;
        var j$$7;
        node$$68.eachSubnode(function(snode) {
          char$$7 = downPass(snode);
          i$$63 = 0;
          for (;i$$63 < characterList.length;i$$63 += 1) {
            key$$24 = characterList[i$$63];
            childrenChar[key$$24] = childrenChar[key$$24] || [];
            childrenChar[key$$24].push(char$$7[key$$24]);
          }
        });
        if (node$$68.data.leaf) {
          return node$$68.data.character || [];
        }
        var parentChar = {};
        j$$7 = 0;
        for (;j$$7 < characterList.length;j$$7 += 1) {
          key$$24 = characterList[j$$7];
          var intersection = childrenChar[key$$24][0] || [];
          i$$63 = 0;
          for (;i$$63 < childrenChar[key$$24].length;i$$63 += 1) {
            char$$7 = childrenChar[key$$24][i$$63] || [];
            intersection = that$$21.intersect(intersection, char$$7);
          }
          if (intersection.length > 0) {
            parentChar[key$$24] = intersection;
          } else {
            char$$7 = childrenChar[key$$24][0] || [];
            i$$63 = 1;
            for (;i$$63 < childrenChar[key$$24].length;i$$63 += 1) {
              char$$7 = that$$21.union(char$$7, childrenChar[key$$24][i$$63]);
            }
            parentChar[key$$24] = char$$7;
          }
        }
        node$$68.data.colorCharacter = parentChar[that$$21.config.firstCharacter];
        return node$$68.data.character = parentChar;
      }
      function upPass(node$$69) {
        function $upPass(n$$35) {
          if (n$$35.data.leaf) {
            return;
          }
          var key$$25;
          var morphData = n$$35.data.character;
          var p$$21 = n$$35.getParents()[0];
          var fp;
          var i$$64;
          for (key$$25 in morphData) {
            if (morphData.hasOwnProperty(key$$25)) {
              var sp = morphData[key$$25];
              var fa = p$$21.data.character[key$$25];
              fp = that$$21.intersect(sp, fa);
              if (fp.length !== fa.length) {
                var cIntersect;
                n$$35.eachSubnode(function(subn$$3) {
                  if (!cIntersect) {
                    cIntersect = subn$$3.data.character[key$$25];
                    return;
                  }
                  cIntersect = that$$21.intersect(cIntersect, subn$$3.data.character[key$$25]);
                });
                if (cIntersect && cIntersect.length !== 0) {
                  var cUnion = [];
                  var aIntersect;
                  n$$35.eachSubnode(function(subn$$4) {
                    cUnion = that$$21.union(cUnion, subn$$4.data.character[key$$25]);
                  });
                  aIntersect = that$$21.intersect(cUnion, fa);
                  fp = that$$21.union(aIntersect, n$$35.data.character[key$$25]);
                } else {
                  fp = that$$21.union(n$$35.data.character[key$$25], fa);
                }
              }
              n$$35.data.character[key$$25] = fp;
            }
          }
          n$$35.eachSubnode(function(sn) {
            $upPass(sn);
          });
          n$$35.data.colorCharacter = n$$35.data.character[that$$21.config.firstCharacter];
        }
        node$$69.eachSubnode(function(n$$36) {
          $upPass(n$$36);
        });
      }
      if (characterList && characterList.length != 0) {
        var i$$62;
        var char$$7;
        var j$$6;
        var that$$21 = this;
        var result$$6;
        downPass(node$$67);
        upPass(node$$67);
      }
    }, setCharacter:function(firstCharacter) {
      firstCharacter = firstCharacter || this.config.firstCharacter;
      if (!firstCharacter) {
        return;
      }
      var speciesHash = this.character;
      var speciesName;
      var char$$8;
      var i$$65;
      for (i$$65 in this.graph.nodes) {
        if (this.graph.nodes.hasOwnProperty(i$$65)) {
          var node$$70 = this.graph.nodes[i$$65];
          node$$70.data.character = {};
          if (node$$70.data.leaf) {
            for (key in speciesHash) {
              if (speciesHash.hasOwnProperty(key)) {
                var speciesCharacter = speciesHash[key][firstCharacter];
                if (node$$70.name === key) {
                  node$$70.data.colorCharacter = speciesCharacter;
                  node$$70.data.character = speciesHash[key];
                  break;
                }
              }
            }
          }
        }
      }
    }, sdAtTree:function(root$$5, characters) {
      var samples = {};
      var char$$9;
      var result$$7 = {};
      i = 0;
      for (;i < characters.length;i += 1) {
        samples[characters[i]] = [];
      }
      root$$5.eachSubgraph(function(node$$71) {
        if (node$$71.data.leaf) {
          i = 0;
          for (;i < characters.length;i += 1) {
            char$$9 = characters[i];
            if (node$$71.data.character[char$$9] && typeof node$$71.data.character[char$$9][0] !== "undefined") {
              samples[char$$9].push(node$$71.data.character[char$$9][0]);
            }
          }
        }
      });
      i = 0;
      for (;i < characters.length;i += 1) {
        char$$9 = characters[i];
        result$$7[char$$9] = this.sd(samples[char$$9]);
      }
      return result$$7;
    }, varianceAtTree:function(root$$6, characters$$1) {
      var samples$$1 = {};
      var char$$10;
      var result$$8 = {};
      i = 0;
      for (;i < characters$$1.length;i += 1) {
        samples$$1[characters$$1[i]] = [];
      }
      root$$6.eachSubgraph(function(node$$72) {
        if (node$$72.data.leaf) {
          i = 0;
          for (;i < characters$$1.length;i += 1) {
            char$$10 = characters$$1[i];
            if (node$$72.data.character[char$$10] && typeof node$$72.data.character[char$$10][0] !== "undefined") {
              samples$$1[char$$10].push(node$$72.data.character[char$$10][0]);
            }
          }
        }
      });
      i = 0;
      for (;i < characters$$1.length;i += 1) {
        char$$10 = characters$$1[i];
        result$$8[char$$10] = this.variance(samples$$1[char$$10]);
      }
      return result$$8;
    }, meanAtTree:function(root$$7, characters$$2) {
      var samples$$2 = {};
      var char$$11;
      var result$$9 = {};
      i = 0;
      for (;i < characters$$2.length;i += 1) {
        samples$$2[characters$$2[i]] = {value:[], number:[]};
      }
      root$$7.eachSubgraph(function(node$$73) {
        if (node$$73.data.leaf) {
          i = 0;
          for (;i < characters$$2.length;i += 1) {
            char$$11 = characters$$2[i];
            if (node$$73.data.character[char$$11] && typeof node$$73.data.character[char$$11][0] !== "undefined") {
              samples$$2[char$$11].value.push(node$$73.data.character[char$$11][0]);
              samples$$2[char$$11].number.push(1);
            }
          }
        }
      });
      i = 0;
      for (;i < characters$$2.length;i += 1) {
        char$$11 = characters$$2[i];
        result$$9[char$$11] = this.wtmean(samples$$2[char$$11].value, samples$$2[char$$11].number);
      }
      return result$$9;
    }, checkQuant:function(characters$$3) {
      function compareFunction(mean, sd$$2, mTree, sTree) {
        var test1 = Math.abs(mean - mTree) > sTree;
        var test2 = sd$$2 > sTree;
        return !(test1 && test2);
      }
      var n$$37 = this.config.threshold;
      var root$$8 = this.graph.getNode(this.root);
      var meanTree = this.meanAtTree(root$$8, characters$$3);
      var sdTree = this.sdAtTree(root$$8, characters$$3);
      var i$$66;
      var that$$22 = this;
      var count$$4 = 0;
      (function $checkQuant(node$$74) {
        var childrenValues = {};
        var result$$10;
        var sd$$3 = {};
        var ui$$3 = {};
        var num$$8 = {};
        var ans$$15;
        var char$$12;
        node$$74.data.characterConsistency = node$$74.data.characterConsistency || {};
        node$$74.data.stat = {};
        i$$66 = 0;
        for (;i$$66 < characters$$3.length;i$$66 += 1) {
          char$$12 = characters$$3[i$$66];
          childrenValues[characters$$3[i$$66]] = [];
          node$$74.data.stat[characters$$3[i$$66]] = {sd:undefined, u:undefined, n:undefined};
          sd$$3[char$$12] = [];
          ui$$3[char$$12] = [];
          num$$8[char$$12] = [];
        }
        node$$74.eachSubnode(function(n$$38) {
          ans$$15 = $checkQuant(n$$38);
          result$$10 = ans$$15.character;
          i$$66 = 0;
          for (;i$$66 < characters$$3.length;i$$66 += 1) {
            if (result$$10[characters$$3[i$$66]] && typeof result$$10[characters$$3[i$$66]][0] !== "undefined") {
              childrenValues[characters$$3[i$$66]].push(result$$10[characters$$3[i$$66]][0]);
              sd$$3[characters$$3[i$$66]].push(ans$$15.stat[characters$$3[i$$66]].sd);
              ui$$3[characters$$3[i$$66]].push(ans$$15.stat[characters$$3[i$$66]].u);
              num$$8[characters$$3[i$$66]].push(ans$$15.stat[characters$$3[i$$66]].n);
            }
          }
        });
        if (!node$$74.data.leaf) {
          i$$66 = 0;
          for (;i$$66 < characters$$3.length;i$$66 += 1) {
            char$$12 = characters$$3[i$$66];
            if (childrenValues[char$$12].length !== 0) {
              node$$74.data.stat[char$$12].u = that$$22.meanPop(num$$8[char$$12], ui$$3[char$$12]);
              node$$74.data.character[char$$12] = [node$$74.data.stat[char$$12].u];
              node$$74.data.stat[char$$12].n = that$$22.sum(num$$8[char$$12]);
              node$$74.data.stat[char$$12].sd = that$$22.sdPop(num$$8[char$$12], sd$$3[char$$12], ui$$3[char$$12], node$$74.data.stat[characters$$3[i$$66]].u);
              result$$10 = compareFunction(node$$74.data.stat[char$$12].u, node$$74.data.stat[char$$12].sd, meanTree[char$$12], sdTree[char$$12]);
            } else {
              node$$74.data.stat[char$$12] = {sd:undefined, u:undefined, n:undefined};
              result$$10 = true;
            }
            node$$74.data.characterConsistency[char$$12] = result$$10;
          }
        } else {
          i$$66 = 0;
          for (;i$$66 < characters$$3.length;i$$66 += 1) {
            result$$10 = node$$74.data.character;
            if (result$$10[characters$$3[i$$66]] && typeof result$$10[characters$$3[i$$66]][0] !== "undefined") {
              node$$74.data.stat[characters$$3[i$$66]] = {sd:0, u:result$$10[characters$$3[i$$66]][0], n:1};
            } else {
              node$$74.data.stat[characters$$3[i$$66]] = {sd:undefined, u:undefined, n:undefined};
            }
          }
        }
        return node$$74.data;
      })(root$$8);
    }, checkQuali:function(characters$$4) {
      function compareFunction$$1(sample$$4) {
        var test1$$1 = sample$$4[0];
        var test2$$1;
        var j$$8 = 0;
        for (;j$$8 < sample$$4.length;j$$8 += 1) {
          test2$$1 = sample$$4[j$$8];
          var result$$11 = that$$23.intersect(test1$$1, test2$$1);
          if (result$$11.length !== test1$$1.length || result$$11.length !== test2$$1.length) {
            return false;
          }
          test1$$1 = result$$11;
        }
        return true;
      }
      var root$$9 = this.graph.getNode(this.root);
      var i$$67;
      var that$$23 = this;
      (function $checkQuali(node$$75) {
        var childrenValues$$1 = {};
        var result$$12;
        node$$75.data.characterConsistency = node$$75.data.characterConsistency || {};
        i$$67 = 0;
        for (;i$$67 < characters$$4.length;i$$67 += 1) {
          childrenValues$$1[characters$$4[i$$67]] = [];
        }
        node$$75.eachSubnode(function(n$$39) {
          result$$12 = $checkQuali(n$$39);
          i$$67 = 0;
          for (;i$$67 < characters$$4.length;i$$67 += 1) {
            if (result$$12[characters$$4[i$$67]]) {
              childrenValues$$1[characters$$4[i$$67]].push(result$$12[characters$$4[i$$67]]);
            }
          }
        });
        if (!node$$75.data.leaf) {
          i$$67 = 0;
          for (;i$$67 < characters$$4.length;i$$67 += 1) {
            var char$$13 = characters$$4[i$$67];
            result$$12 = compareFunction$$1(childrenValues$$1[char$$13]);
            node$$75.data.characterConsistency[char$$13] = result$$12;
          }
        }
        return node$$75.data.character;
      })(root$$9);
    }, quantParsimony:function(root$$10, characters$$5) {
      var methods$$1 = this.calcMethods;
      (function $quantParsimony(node$$76) {
        var childrenValues$$2 = {};
        i = 0;
        for (;i < characters$$5.length;i += 1) {
          childrenValues$$2[characters$$5[i]] = [];
        }
        node$$76.eachSubnode(function(n$$40) {
          var result$$13 = $quantParsimony(n$$40);
          i = 0;
          for (;i < characters$$5.length;i += 1) {
            if (result$$13[characters$$5[i]] && typeof result$$13[characters$$5[i]][0] !== "undefined") {
              childrenValues$$2[characters$$5[i]].push(result$$13[characters$$5[i]][0]);
            }
          }
        });
        if (!node$$76.data.leaf) {
          i = 0;
          for (;i < characters$$5.length;i += 1) {
            var char$$14 = characters$$5[i];
            var value$$41 = node$$76.data.character[char$$14];
            var mean$$1 = st.mean(childrenValues$$2[char$$14]);
            node$$76.data.character[char$$14] = [mean$$1];
          }
        }
        return node$$76.data.character;
      })(root$$10);
    }, listCharacters:function() {
      var aSpecies;
      var i$$68;
      var result$$14 = [];
      for (aSpecies in this.character) {
        for (i$$68 in this.character[aSpecies]) {
          result$$14.push(i$$68);
        }
        return result$$14;
      }
    }, findAllCharTypes:function(root$$11) {
      var type$$56 = {quant:[], quali:[]};
      var all = [];
      var quali = {};
      var quant = {};
      var key$$26;
      var that$$24 = this;
      var first$$4 = this.config.firstCharacter;
      var charTypeMapping$$1 = {};
      var i$$69;
      if (all && all.length === 0) {
        all = this.listCharacters();
        if (this.config.selectedCharacters.length !== 0) {
          if (typeof this.config.selectedCharacters[0] === "undefined") {
            this.config.selectedCharacters[0] = all[0];
          }
          this.config.firstCharacter = this.config.selectedCharacters[0];
        } else {
          if (all.length !== 0) {
            this.config.selectedCharacters = [all[0]];
            this.config.firstCharacter = all[0];
          }
        }
      }
      if (all && all.length !== 0) {
        root$$11.eachSubgraph(function(node$$77) {
          if (node$$77.data.leaf) {
            i$$69 = 0;
            for (;i$$69 < all.length;i$$69 += 1) {
              key$$26 = all[i$$69];
              if (that$$24.characterType(node$$77.data.character[key$$26], "quali")) {
                quali[key$$26] = true;
                charTypeMapping$$1[key$$26] = that$$24.config.typeEnum.quali;
              } else {
                if (that$$24.characterType(node$$77.data.character[key$$26], "quant")) {
                  quant[key$$26] = true;
                  charTypeMapping$$1[key$$26] = that$$24.config.typeEnum.quant;
                }
              }
            }
          }
        });
      }
      for (key$$26 in quali) {
        if (quali.hasOwnProperty(key$$26)) {
          type$$56.quali.push(key$$26);
        }
      }
      for (key$$26 in quant) {
        if (quant.hasOwnProperty(key$$26)) {
          type$$56.quant.push(key$$26);
        }
      }
      this.characterList = all;
      this.charTypeMapping = charTypeMapping$$1;
      return type$$56;
    }, findQuantMinMax:function(root$$12, quantCharacters) {
      var char$$15;
      var min$$4;
      var max$$2;
      var result$$15 = {};
      var i$$70;
      i$$70 = 0;
      for (;i$$70 < quantCharacters.length;i$$70 += 1) {
        char$$15 = quantCharacters[i$$70];
        result$$15[char$$15] = result$$15[char$$15] || {};
        result$$15[char$$15].min = min$$4 = Number.MAX_VALUE;
        result$$15[char$$15].max = max$$2 = Number.MIN_VALUE;
        root$$12.eachSubgraph(function(node$$78) {
          if (node$$78.data.leaf) {
            var charState = node$$78.data.character[char$$15] && node$$78.data.character[char$$15][0];
            if (typeof charState !== "undefined") {
              min$$4 = min$$4 < charState ? min$$4 : charState;
              max$$2 = max$$2 > charState ? max$$2 : charState;
            }
          }
        });
        result$$15[char$$15].min = min$$4;
        result$$15[char$$15].max = max$$2;
      }
      return result$$15;
    }, findQuantRange:function(quantMinMax) {
      var result$$16 = {};
      var char$$16;
      var rangeCount = this.config.rangeCount;
      var stepsize;
      var i$$71;
      for (char$$16 in quantMinMax) {
        if (quantMinMax.hasOwnProperty(char$$16)) {
          var min$$5 = quantMinMax[char$$16].min;
          var max$$3 = quantMinMax[char$$16].max;
          stepsize = (max$$3 - min$$5) / rangeCount;
          result$$16[char$$16] = [];
          i$$71 = 1;
          for (;i$$71 <= rangeCount;i$$71 += 1) {
            result$$16[char$$16].push((min$$5 + i$$71 * stepsize).toFixed(2));
          }
        }
      }
      return result$$16;
    }, colorCharacter:function(colorOverwrite) {
      var speciesHash$$1 = this.character;
      var speciesName$$1;
      var char$$17;
      var i$$72;
      var that$$25 = this;
      var box;
      var node$$79;
      var characterValue;
      var j$$9;
      var html$$5;
      if (this.hasProperty(speciesHash$$1)) {
        var $colorCharacter = function(root$$13, characterColorCollection) {
          var firstCharacter$$2 = that$$25.config.firstCharacter;
          var key$$27;
          var charArray;
          var char$$18;
          var i$$73;
          var quantColor = that$$25.config.quantColor;
          var currentAdj;
          root$$13.eachSubgraph(function(node$$80) {
            node$$80.data.color = node$$80.data.color || {};
            for (adj in node$$80.adjacencies) {
              if (node$$80.adjacencies.hasOwnProperty(adj)) {
                currentAdj$$1 = node$$80.adjacencies[adj];
                currentAdj$$1.data && delete currentAdj$$1.data.$color;
              }
            }
            i$$73 = 0;
            for (;i$$73 < that$$25.characterGroups.quali.length;i$$73 += 1) {
              char$$18 = that$$25.characterGroups.quali[i$$73];
              charArray = node$$80.data.character[char$$18];
              key$$27 = charArray && charArray.length === 1 && charArray[0] || "";
              if (key$$27) {
                key$$27 = key$$27.replace(/ /g, "");
                node$$80.data.color[char$$18] = characterColorCollection[char$$18].color;
                if (char$$18 === firstCharacter$$2) {
                  for (adj in node$$80.adjacencies) {
                    if (node$$80.adjacencies.hasOwnProperty(adj)) {
                      currentAdj$$1 = node$$80.adjacencies[adj];
                      var nodeTo$$6 = node$$80.adjacencies[adj].nodeTo;
                      var nodeFrom$$4 = node$$80.adjacencies[adj].nodeFrom;
                      if (nodeTo$$6._depth < node$$80._depth || nodeFrom$$4._depth < node$$80._depth) {
                        if (charArray.length === 1) {
                          currentAdj$$1.data.$color = characterColorCollection[firstCharacter$$2][charArray[0]].color;
                          break;
                        } else {
                          delete currentAdj$$1.data.$color;
                        }
                      }
                    }
                  }
                }
              } else {
                node$$80.data.color[char$$18] = characterColorCollection[char$$18]["multiple"];
              }
            }
            i$$73 = 0;
            for (;i$$73 < that$$25.characterGroups.quant.length;i$$73 += 1) {
              char$$18 = that$$25.characterGroups.quant[i$$73];
              charArray = node$$80.data.character[char$$18];
              key$$27 = charArray && charArray.length === 1 && charArray[0] || "";
              if (key$$27) {
                var rangeArray = that$$25.range[char$$18];
                var index$$43 = that$$25.findIndex(key$$27, rangeArray);
                node$$80.data.color[char$$18] = quantColor[index$$43];
                if (char$$18 === firstCharacter$$2) {
                  for (adj in node$$80.adjacencies) {
                    if (node$$80.adjacencies.hasOwnProperty(adj)) {
                      var currentAdj$$1 = node$$80.adjacencies[adj];
                      nodeTo$$6 = node$$80.adjacencies[adj].nodeTo;
                      nodeFrom$$4 = node$$80.adjacencies[adj].nodeFrom;
                      if (nodeTo$$6._depth < node$$80._depth || nodeFrom$$4._depth < node$$80._depth) {
                        if (charArray.length === 1) {
                          currentAdj$$1.data.$color = quantColor[index$$43];
                          break;
                        } else {
                          delete currentAdj$$1.data.$color;
                        }
                      }
                    }
                  }
                }
              }
            }
          });
        };
        var rootNode$$1 = this.graph.getNode(this.root);
        var string;
        var color$$5 = this.config.color;
        var distinct = {};
        var legendColorCollection = {};
        var pointer = 0;
        var legendRows = "";
        var multiple = false;
        var firstCharacter$$1;
        var firstSpecies;
        var characterKey = [];
        for (speciesName$$1 in speciesHash$$1) {
          if (speciesHash$$1.hasOwnProperty(speciesName$$1)) {
            for (char$$17 in speciesHash$$1[speciesName$$1]) {
              if (speciesHash$$1[speciesName$$1].hasOwnProperty(char$$17)) {
                characterKey.push(char$$17);
              }
            }
            break;
          }
        }
        distinct = legendColorCollection[firstCharacter$$1];
        if (!this.config.initCharacter) {
          this.setCharacter(this.config.firstCharacter);
          this.config.initCharacter = true;
        }
        this.characterGroups = this.findAllCharTypes(rootNode$$1);
        this.fitchParsimony(rootNode$$1, this.characterGroups.quali);
        this.quantParsimony(rootNode$$1, this.characterGroups.quant);
        this.checkQuali(this.characterGroups.quali);
        this.checkQuant(this.characterGroups.quant);
        this.characterMinMax = this.findQuantMinMax(rootNode$$1, this.characterGroups.quant);
        this.range = this.findQuantRange(this.characterMinMax);
        html$$5 = this.createLegend();
        $colorCharacter(this.graph.getNode(this.root), this.colorCoding);
        return html$$5;
      }
    }, findDistinctCharacterStates:function(character$$2) {
      var i$$74;
      var result$$17 = [];
      var temp$$1 = {};
      var node$$81;
      var char$$19;
      var j$$10;
      for (i$$74 in this.graph.nodes) {
        if (this.graph.nodes.hasOwnProperty(i$$74)) {
          node$$81 = this.graph.nodes[i$$74];
          char$$19 = node$$81.data.character[character$$2];
          if (node$$81.data.leaf && char$$19) {
            j$$10 = 0;
            for (;j$$10 < char$$19.length;j$$10++) {
              temp$$1[char$$19[j$$10]] = character$$2;
            }
          }
        }
      }
      for (i$$74 in temp$$1) {
        if (temp$$1.hasOwnProperty(i$$74)) {
          result$$17.push(i$$74);
        }
      }
      return {hash:temp$$1, array:result$$17};
    }, createLegend:function() {
      var list$$1;
      var root$$14;
      var i$$75;
      var char$$20;
      var temp$$2 = {};
      var ds = {};
      var j$$11;
      var dschar;
      var sh$$2;
      var jj;
      var shapes$$1 = this.config.shapes;
      var dsAlt = {};
      var dscharAlt;
      var color$$6 = this.config.color;
      var shapePointer = 0;
      var rangeArray$$1;
      var label$$11;
      var quantColor$$1 = this.config.quantColor;
      var quantShape = this.config.quantShape;
      var heading;
      var content;
      root$$14 = this.graph.getNode(this.root);
      list$$1 = this.characterGroups.quali;
      if (!list$$1) {
        this.findAllCharTypes(root$$14);
        list$$1 = this.characterGroups.quali;
      }
      if (list$$1) {
        i$$75 = 0;
        for (;i$$75 < list$$1.length;i$$75 += 1) {
          char$$20 = list$$1[i$$75];
          temp$$2[char$$20] = this.findDistinctCharacterStates(char$$20).array;
          temp$$2[char$$20] && temp$$2[char$$20].push("multiple");
        }
      }
      for (i$$75 in temp$$2) {
        if (temp$$2.hasOwnProperty(i$$75)) {
          char$$20 = temp$$2[i$$75];
          dschar = [];
          dscharAlt = {};
          j$$11 = 0;
          for (;j$$11 < char$$20.length;j$$11 += 1) {
            jj = color$$6.length > j$$11 ? j$$11 : color$$6.length - 1;
            sh$$2 = shapes$$1.length > shapePointer ? shapePointer : shapes$$1.length - 1;
            dschar.push({color:color$$6[jj], name:char$$20[j$$11], shape:shapes$$1[sh$$2]});
            dscharAlt[char$$20[j$$11]] = {color:color$$6[jj], shape:shapes$$1[sh$$2]};
          }
          ds[i$$75] = dschar;
          dsAlt[i$$75] = dscharAlt;
          shapePointer++;
        }
      }
      i$$75 = 0;
      for (;i$$75 < this.characterGroups.quant.length;i$$75 += 1) {
        char$$20 = this.characterGroups.quant[i$$75];
        rangeArray$$1 = this.range[char$$20];
        dschar = [];
        dscharAlt = {};
        j$$11 = 0;
        for (;j$$11 < rangeArray$$1.length;j$$11 += 1) {
          jj = quantColor$$1.length > j$$11 ? j$$11 : quantColor$$1.length - 1;
          sh$$2 = shapes$$1.length > shapePointer ? shapePointer : shapes$$1.length - 1;
          label$$11 = (j$$11 === 0 ? this.characterMinMax[char$$20].min.toFixed(2) : rangeArray$$1[j$$11 - 1]) + " - " + rangeArray$$1[j$$11];
          dschar.push({color:quantColor$$1[j$$11], name:label$$11, shape:quantShape});
          dscharAlt[label$$11] = {color:quantColor$$1[j$$11], shape:quantShape};
        }
        ds[char$$20] = dschar;
        dsAlt[char$$20] = dscharAlt;
        shapePointer++;
      }
      heading = "";
      content = "";
      list$$1 = this.config.selectedCharacters;
      i$$75 = 0;
      for (;i$$75 < list$$1.length;i$$75 += 1) {
        label$$11 = "";
        char$$20 = list$$1[i$$75];
        if (typeof char$$20 !== "undefined") {
          dschar = ds[char$$20] || [];
          heading = '<tr><th colspan="2">' + char$$20.replace(/_/g, " ") + "</th></tr>";
          j$$11 = 0;
          for (;j$$11 < dschar.length;j$$11 += 1) {
            sh$$2 = dschar[j$$11];
            label$$11 += '<tr><td><div class ="' + sh$$2.shape + '" style="background-color:' + sh$$2.color + ';"></div></td><td>' + sh$$2.name + "</td></tr>";
          }
          if (label$$11) {
            content += heading + label$$11;
          }
        }
      }
      this.colorCoding = dsAlt;
      this.colorCodingQuali = ds;
      return content;
    }, findIndex:function(value$$42, rangeArray$$2) {
      var i$$76;
      if (typeof value$$42 === "undefined" || typeof rangeArray$$2 === "undefined") {
        return;
      }
      i$$76 = 0;
      for (;i$$76 < rangeArray$$2.length;i$$76 += 1) {
        if (value$$42 <= rangeArray$$2[i$$76]) {
          break;
        }
      }
      return i$$76 === rangeArray$$2.length ? i$$76 - 1 : i$$76;
    }, plot:function() {
      this.fx.plot(this.controller);
    }, fitScreen:function() {
      var size$$8 = this.canvas.getSize();
      var key$$28;
      var i$$77;
      var overflow = false;
      var clicked = this.clickedNode.id || this.root;
      var height$$20 = 0;
      var root$$15 = this.graph.getNode(clicked);
      var depth$$1 = this.graph.depth;
      this.config.onBeforeCompute({name:""});
      for (key$$28 in depth$$1) {
        if (depth$$1.hasOwnProperty(key$$28)) {
          if (depth$$1[key$$28]) {
            var nodes = depth$$1[key$$28];
            var tempHeight = 0;
            i$$77 = 0;
            for (;i$$77 < nodes.length;i$$77 += 1) {
              var node$$82 = nodes[i$$77];
              if (height$$20 < size$$8.height) {
                if (node$$82.data.leaf) {
                  tempHeight += node$$82.getData("height", "start") + 8;
                } else {
                  tempHeight += node$$82.getData("height", "start") / 2;
                }
                node$$82.drawn = true;
                node$$82.exist = true;
              }
            }
            if (tempHeight + height$$20 < size$$8.height && !overflow) {
              height$$20 += tempHeight;
              this.zoomIndex = parseInt(key$$28, 10);
            } else {
              i$$77 = 0;
              for (;i$$77 < nodes.length;i$$77 += 1) {
                node$$82 = nodes[i$$77];
                node$$82.exist = false;
                node$$82.drawn = false;
                node$$82.collapsed = true;
              }
              overflow = true;
            }
          }
        }
      }
      var canvas$$32 = this.canvas;
      var ox$$4 = canvas$$32.translateOffsetX;
      var oy$$5 = canvas$$32.translateOffsetY;
      this.canvas.translate(-1 * ox$$4, -1 * oy$$5);
      this.computePositions(this.graph.getNode(this.root), "");
      this.plot();
      this.config.onAfterCompute();
    }, zoom:function(scroll$$3) {
      if (!this.busy) {
        this.busy = true;
        this.config.onBeforeCompute({name:""});
        var viz$$21 = this;
        var graph$$19 = viz$$21.graph;
        var flag$$2 = true;
        var node$$83 = viz$$21.graph.getNode(viz$$21.root);
        var step$$2 = 2;
        var min$$6 = 1;
        var max$$4 = graph$$19.depth.length - 1;
        var j$$12;
        if (typeof viz$$21.zoomIndex === "undefined") {
          viz$$21.zoomIndex = 1;
        }
        var i$$78 = viz$$21.zoomIndex;
        if (i$$78 < 1) {
          i$$78 = 1;
        } else {
          if (i$$78 > graph$$19.depth.length - 1) {
            i$$78 = graph$$19.depth.length - 1;
          }
        }
        var show$$2 = scroll$$3 < 0 ? false : true;
        step$$2 = Math.round(graph$$19.depth.length / 10);
        step$$2 = Math.max(step$$2, 2);
        var maxDepth = graph$$19.depth.length;
        var nodelist = graph$$19.depth[i$$78];
        j$$12 = nodelist.length - 1;
        for (;j$$12 >= 0;j$$12 -= 1) {
          var n$$41 = nodelist[j$$12];
          n$$41.eachLevel(1, step$$2, function(subn$$5) {
            var nodeVisible = show$$2 ? !subn$$5.exist : subn$$5.exist;
            if (nodeVisible) {
              subn$$5.exist = show$$2;
              subn$$5.drawn = show$$2;
            }
          });
        }
        viz$$21.computePositions(node$$83, "");
        viz$$21.plot();
        viz$$21.config.onAfterCompute("Depth " + i$$78);
        i$$78 += (show$$2 ? +1 : -1) * step$$2;
        viz$$21.zoomIndex = i$$78;
        this.busy = false;
      }
    }, switchPosition:function(pos$$36, method$$2, onComplete) {
      var Geom$$1 = this.geom;
      var Plot = this.fx;
      var that$$26 = this;
      if (!Plot.busy) {
        Plot.busy = true;
        this.contract({onComplete:function() {
          Geom$$1.switchOrientation(pos$$36);
          that$$26.compute("end", false);
          Plot.busy = false;
          if (method$$2 === "animate") {
            that$$26.onClick(that$$26.clickedNode.id, onComplete);
          } else {
            if (method$$2 === "replot") {
              that$$26.select(that$$26.clickedNode.id, onComplete);
            }
          }
        }}, pos$$36);
      }
    }, switchAlignment:function(align$$2, method$$3, onComplete$$1) {
      this.config.align = align$$2;
      if (method$$3 === "animate") {
        this.select(this.clickedNode.id, onComplete$$1);
      } else {
        if (method$$3 === "replot") {
          this.onClick(this.clickedNode.id, onComplete$$1);
        }
      }
    }, addNodeInPath:function(id$$29) {
      nodesInPath.push(id$$29);
      this.select(this.clickedNode && this.clickedNode.id || this.root);
    }, clearNodesInPath:function(id$$30) {
      nodesInPath.length = 0;
      this.select(this.clickedNode && this.clickedNode.id || this.root);
    }, refresh:function() {
      this.reposition();
      this.select(this.clickedNode && this.clickedNode.id || this.root);
    }, reposition:function() {
      this.graph.computeLevels(this.root, 0, "ignore");
      this.geom.setRightLevelToShow(this.clickedNode, this.canvas);
      this.graph.eachNode(function(n$$42) {
        if (n$$42.exist) {
          n$$42.drawn = true;
        }
      });
      this.compute("end");
    }, requestNodes:function(node$$84, onComplete$$2) {
      var handler$$3 = $$$1.merge(this.controller, onComplete$$2);
      var lev = this.config.levelsToShow;
      if (handler$$3.request) {
        var leaves$$2 = [];
        var d$$5 = node$$84._depth;
        node$$84.eachLevel(0, lev, function(n$$43) {
          if (n$$43.drawn && !n$$43.anySubnode()) {
            leaves$$2.push(n$$43);
            n$$43._level = lev - (n$$43._depth - d$$5);
          }
        });
        this.group.requestNodes(leaves$$2, handler$$3);
      } else {
        handler$$3.onComplete();
      }
    }, contract:function(onComplete$$3, switched) {
      var orn$$4 = this.config.orientation;
      var Geom$$2 = this.geom;
      var Group = this.group;
      if (switched) {
        Geom$$2.switchOrientation(switched);
      }
      var nodes$$1 = getNodesToHide.call(this);
      if (switched) {
        Geom$$2.switchOrientation(orn$$4);
      }
      Group.contract(nodes$$1, $$$1.merge(this.controller, onComplete$$3));
    }, move:function(node$$85, onComplete$$4) {
      this.compute("end", false);
      var move = onComplete$$4.Move;
      var JSCompiler_object_inline_x_88 = move.offsetX;
      var JSCompiler_object_inline_y_89 = move.offsetY;
      this.fx.animate($$$1.merge(this.controller, {modes:["linear"]}, onComplete$$4));
    }, expand:function(node$$86, onComplete$$5) {
      var nodeArray$$2 = getNodesToShow.call(this, node$$86);
      this.group.expand(nodeArray$$2, $$$1.merge(this.controller, onComplete$$5));
    }, selectPath:function(node$$87) {
      function path(node$$88) {
        if (node$$88 === null || node$$88.selected) {
          return;
        }
        node$$88.selected = true;
        $$$1.each(that$$27.group.getSiblings([node$$88])[node$$88.id], function(n$$44) {
          n$$44.exist = true;
          n$$44.drawn = true;
        });
        var parents = node$$88.getParents();
        parents = parents.length > 0 ? parents[0] : null;
        path(parents);
      }
      var that$$27 = this;
      var i$$79;
      var ns$$1;
      this.graph.eachNode(function(n$$45) {
        n$$45.selected = false;
      });
      i$$79 = 0, ns$$1 = [node$$87.id].concat(nodesInPath);
      for (;i$$79 < ns$$1.length;i$$79 += 1) {
        path(this.graph.getNode(ns$$1[i$$79]));
      }
    }, setRoot:function(id$$31, method$$4, onComplete$$6) {
      function $setRoot() {
        this.root = id$$31;
        var node$$89 = this.graph.getNode(id$$31);
        this.clickedNode = clickedNode;
        this.graph.computeLevels(this.root, 0, "ignore");
        node$$89.collapsed = true;
        this.nodesExpCol(node$$89);
        this.computePositions(node$$89, "end", true);
        this.computeLeaves(this.graph.getNode(id$$31), 0);
        this.fitchParsimony(this.graph.getNode(id$$31));
        this.colorCharacter();
        this.fx.animate({modes:["linear", "node-property:alpha"], onComplete:function() {
          that$$28.busy = false;
        }});
      }
      if (this.busy) {
        return;
      }
      this.busy = true;
      var that$$28 = this;
      var canvas$$33 = this.canvas;
      var clickedNode = this.graph.getNode(id$$31);
      if (method$$4 === "animate") {
        $setRoot.call(this);
      } else {
        if (method$$4 === "replot") {
          $setRoot.call(this);
        }
      }
      this.zoomIndex = this.graph.depth.length - 1;
    }, addSubtree:function(subtree$$2, method$$5, onComplete$$7) {
      if (method$$5 === "replot") {
        this.op.sum(subtree$$2, $$$1.extend({type:"replot"}, onComplete$$7 || {}));
      } else {
        if (method$$5 === "animate") {
          this.op.sum(subtree$$2, $$$1.extend({type:"fade:seq"}, onComplete$$7 || {}));
        }
      }
    }, removeSubtree:function(id$$32, removeRoot, method$$6, onComplete$$8) {
      var node$$90 = this.graph.getNode(id$$32);
      var subids = [];
      node$$90.eachLevel(+!removeRoot, false, function(n$$46) {
        subids.push(n$$46.id);
      });
      if (method$$6 === "replot") {
        this.op.removeNode(subids, $$$1.extend({type:"replot"}, onComplete$$8 || {}));
      } else {
        if (method$$6 === "animate") {
          this.op.removeNode(subids, $$$1.extend({type:"fade:seq"}, onComplete$$8 || {}));
        }
      }
    }, select:function(id$$33, onComplete$$9) {
      var group$$1 = this.group;
      var geom$$5 = this.geom;
      var node$$91 = this.graph.getNode(id$$33);
      var canvas$$34 = this.canvas;
      var root$$16 = this.graph.getNode(this.root);
      var complete = $$$1.merge(this.controller, onComplete$$9);
      var that$$29 = this;
      complete.onBeforeCompute(node$$91);
      this.selectPath(node$$91);
      this.clickedNode = node$$91;
      this.requestNodes(node$$91, {onComplete:function() {
        group$$1.hide(group$$1.prepare(getNodesToHide.call(that$$29)), complete);
        geom$$5.setRightLevelToShow(node$$91, canvas$$34);
        that$$29.compute("current");
        that$$29.graph.eachNode(function(n$$47) {
          var pos$$37 = n$$47.pos.getc(true);
          n$$47.startPos.setc(pos$$37.x, pos$$37.y);
          n$$47.endPos.setc(pos$$37.x, pos$$37.y);
          n$$47.visited = false;
        });
        var offset$$11 = {x:complete.offsetX, y:complete.offsetY};
        that$$29.geom.translate(node$$91.endPos.add(offset$$11).$scale(-1), ["start", "current", "end"]);
        group$$1.show(getNodesToShow.call(that$$29));
        that$$29.plot();
        complete.onAfterCompute(that$$29.clickedNode);
        complete.onComplete();
      }});
    }, onClick:function(id$$34, options$$11) {
      var canvas$$35 = this.canvas;
      var that$$30 = this;
      var Geom$$3 = this.geom;
      var config$$8 = this.config;
      var innerController = {Move:{enable:true, offsetX:config$$8.offsetX || 0, offsetY:config$$8.offsetY || 0}, setRightLevelToShowConfig:false, onBeforeRequest:$$$1.empty, onBeforeContract:$$$1.empty, onBeforeMove:$$$1.empty, onBeforeExpand:$$$1.empty};
      var complete$$1 = $$$1.merge(this.controller, innerController, options$$11);
      if (!this.busy) {
        this.busy = true;
        var node$$92 = this.graph.getNode(id$$34);
        this.selectPath(node$$92, this.clickedNode);
        this.clickedNode = node$$92;
        complete$$1.onBeforeCompute(node$$92);
        complete$$1.onBeforeRequest(node$$92);
        complete$$1.onBeforeContract(node$$92);
        Geom$$3.setRightLevelToShow(node$$92, canvas$$35, complete$$1.setRightLevelToShowConfig);
        complete$$1.onBeforeMove(node$$92);
        var nodes$$2 = getNodesToShow.call(this, node$$92);
        that$$30.group.show(nodes$$2);
        that$$30.computePositions(node$$92, "");
        complete$$1.onAfterCompute(id$$34);
        this.busy = false;
      }
    }});
  }();
  $jit.Phylo.$extend = true;
  $jit.Phylo.Op = new Class({Implements:Graph.Op});
  $jit.Phylo.Group = new Class({initialize:function(viz$$22) {
    this.viz = viz$$22;
    this.canvas = viz$$22.canvas;
    this.config = viz$$22.config;
    this.animation = new Animation;
    this.nodes = null;
  }, requestNodes:function(nodes$$3, controller$$5) {
    var counter = 0;
    var len$$5 = nodes$$3.length;
    var nodeSelected = {};
    var i$$80;
    var viz$$23 = this.viz;
    if (len$$5 === 0) {
      controller$$5.onComplete();
    }
    i$$80 = 0;
    for (;i$$80 < len$$5;i$$80 += 1) {
      nodeSelected[nodes$$3[i$$80].id] = nodes$$3[i$$80];
      controller$$5.request(nodes$$3[i$$80].id, nodes$$3[i$$80]._level, {onComplete:function(nodeId, data$$26) {
        if (data$$26 && data$$26.children) {
          data$$26.id = nodeId;
          viz$$23.op.sum(data$$26, {type:"nothing"});
        }
        if (++counter === len$$5) {
          viz$$23.graph.computeLevels(viz$$23.root, 0);
          controller$$5.onComplete();
        }
      }});
    }
  }, contract:function(nodes$$4, controller$$6) {
    var viz$$24 = this.viz;
    var that$$31 = this;
    nodes$$4 = this.prepare(nodes$$4);
    this.animation.setOptions($$$1.merge(controller$$6, {$animating:false, compute:function(delta$$21) {
      if (delta$$21 === 1) {
        delta$$21 = .99;
      }
      that$$31.plotStep(1 - delta$$21, controller$$6, this.$animating);
      this.$animating = "contract";
    }, complete:function() {
      that$$31.hide(nodes$$4, controller$$6);
    }})).start();
  }, hide:function(nodes$$5, controller$$7) {
    var viz$$25 = this.viz;
    var i$$81;
    i$$81 = 0;
    for (;i$$81 < nodes$$5.length;i$$81 += 1) {
      if (true || !controller$$7 || !controller$$7.request) {
        nodes$$5[i$$81].eachLevel(1, false, function(elem$$57) {
          if (elem$$57.exist) {
            $$$1.extend(elem$$57, {"drawn":false, "exist":false});
          }
        });
      } else {
        var ids$$1 = [];
        nodes$$5[i$$81].eachLevel(1, false, function(n$$48) {
          ids$$1.push(n$$48.id);
        });
        viz$$25.op.removeNode(ids$$1, {"type":"nothing"});
        viz$$25.labels.clearLabels();
      }
    }
    controller$$7.onComplete();
  }, expand:function(nodes$$6, controller$$8) {
    var that$$32 = this;
    this.show(nodes$$6);
    this.animation.setOptions($$$1.merge(controller$$8, {$animating:false, compute:function(delta$$22) {
      that$$32.plotStep(delta$$22, controller$$8, this.$animating);
      this.$animating = "expand";
    }, complete:function() {
      that$$32.plotStep(undefined, controller$$8, false);
      controller$$8.onComplete();
    }})).start();
  }, show:function(nodes$$7) {
    var config$$9 = this.config;
    this.prepare(nodes$$7);
    $$$1.each(nodes$$7, function(n$$49) {
      if (config$$9.multitree && !("$orn" in n$$49.data)) {
        delete n$$49.data.$orns;
        var orns$$1 = " ";
        n$$49.eachSubnode(function(ch$$12) {
          if ("$orn" in ch$$12.data && orns$$1.indexOf(ch$$12.data.$orn) < 0 && ch$$12.exist && !ch$$12.drawn) {
            orns$$1 += ch$$12.data.$orn + " ";
          }
        });
        n$$49.data.$orns = orns$$1;
      }
      n$$49.eachLevel(0, config$$9.levelsToShow, function(n$$50) {
        if (n$$50.exist) {
          n$$50.drawn = true;
        }
      });
    });
  }, prepare:function(nodes$$8) {
    this.nodes = this.getNodesWithChildren(nodes$$8);
    return this.nodes;
  }, getNodesWithChildren:function(nodes$$9) {
    var ans$$16 = [];
    var config$$10 = this.config;
    var root$$17 = this.viz.root;
    var i$$82;
    var j$$13;
    var desc;
    nodes$$9.sort(function(a$$7, b$$5) {
      return (a$$7._depth <= b$$5._depth) - (a$$7._depth >= b$$5._depth);
    });
    i$$82 = 0;
    for (;i$$82 < nodes$$9.length;i$$82 += 1) {
      if (nodes$$9[i$$82].anySubnode("exist")) {
        j$$13 = i$$82 + 1, desc = false;
        for (;!desc && j$$13 < nodes$$9.length;j$$13 += 1) {
          if (!config$$10.multitree || "$orn" in nodes$$9[j$$13].data) {
            desc = desc || nodes$$9[i$$82].isDescendantOf(nodes$$9[j$$13].id);
          }
        }
        if (!desc) {
          ans$$16.push(nodes$$9[i$$82]);
        }
      }
    }
    return ans$$16;
  }, plotStep:function(delta$$23, controller$$9, animating$$4) {
    var viz$$26 = this.viz;
    var config$$11 = this.config;
    var canvas$$36 = viz$$26.canvas;
    var ctx$$16 = canvas$$36.getCtx();
    var nodes$$10 = this.nodes;
    var i$$83;
    var node$$93;
    var nds = {};
    i$$83 = 0;
    for (;i$$83 < nodes$$10.length;i$$83 += 1) {
      node$$93 = nodes$$10[i$$83];
      nds[node$$93.id] = [];
      var root$$18 = config$$11.multitree && !("$orn" in node$$93.data);
      var orns$$2 = root$$18 && node$$93.data.$orns;
      node$$93.eachSubgraph(function(n$$51) {
        if (root$$18 && orns$$2 && orns$$2.indexOf(n$$51.data.$orn) > 0 && n$$51.drawn) {
          n$$51.drawn = false;
          nds[node$$93.id].push(n$$51);
        } else {
          if ((!root$$18 || !orns$$2) && n$$51.drawn) {
            n$$51.drawn = false;
            nds[node$$93.id].push(n$$51);
          }
        }
      });
      node$$93.drawn = true;
    }
    if (nodes$$10.length > 0) {
      viz$$26.fx.plot();
    }
    for (i$$83 in nds) {
      $$$1.each(nds[i$$83], function(n$$52) {
        n$$52.drawn = true;
      });
    }
    i$$83 = 0;
    for (;i$$83 < nodes$$10.length;i$$83 += 1) {
      node$$93 = nodes$$10[i$$83];
      ctx$$16.save();
      viz$$26.fx.plotSubtree(node$$93, controller$$9, delta$$23, animating$$4);
      ctx$$16.restore();
    }
  }, getSiblings:function(nodes$$11) {
    var siblings = {};
    $$$1.each(nodes$$11, function(n$$53) {
      var par$$1 = n$$53.getParents();
      if (par$$1.length === 0) {
        siblings[n$$53.id] = [n$$53];
      } else {
        var ans$$17 = [];
        par$$1[0].eachSubnode(function(sn$$1) {
          ans$$17.push(sn$$1);
        });
        siblings[n$$53.id] = ans$$17;
      }
    });
    return siblings;
  }});
  $jit.Phylo.Geom = new Class({Implements:Graph.Geom, switchOrientation:function(orn$$5) {
    this.config.orientation = orn$$5;
  }, dispatch:function() {
    function val$$6(a$$8) {
      return typeof a$$8 === "function" ? a$$8() : a$$8;
    }
    var args$$3 = Array.prototype.slice.call(arguments);
    var s$$10 = args$$3.shift();
    var len$$6 = args$$3.length;
    if (len$$6 === 2) {
      return s$$10 === "top" || s$$10 === "bottom" ? val$$6(args$$3[0]) : val$$6(args$$3[1]);
    } else {
      if (len$$6 === 4) {
        switch(s$$10) {
          case "top":
            return val$$6(args$$3[0]);
          case "right":
            return val$$6(args$$3[1]);
          case "bottom":
            return val$$6(args$$3[2]);
          case "left":
            return val$$6(args$$3[3]);
        }
      }
    }
    return undefined;
  }, getSize:function(n$$54, invert$$1) {
    var data$$27 = n$$54.data;
    var config$$12 = this.config;
    var siblingOffset$$1 = config$$12.siblingOffset;
    var s$$11 = config$$12.multitree && "$orn" in data$$27 && data$$27.$orn || config$$12.orientation;
    var w$$7 = n$$54.getData("width") + siblingOffset$$1;
    var h$$5 = n$$54.getData("height") + siblingOffset$$1;
    if (!invert$$1) {
      return this.dispatch(s$$11, h$$5, w$$7);
    } else {
      return this.dispatch(s$$11, w$$7, h$$5);
    }
  }, getTreeBaseSize:function(node$$94, level$$14, leaf) {
    var size$$9 = this.getSize(node$$94, true);
    var baseHeight = 0;
    var that$$33 = this;
    if (leaf(level$$14, node$$94)) {
      return size$$9;
    }
    if (level$$14 === 0) {
      return 0;
    }
    node$$94.eachSubnode(function(elem$$58) {
      baseHeight += that$$33.getTreeBaseSize(elem$$58, level$$14 - 1, leaf);
    });
    return (size$$9 > baseHeight ? size$$9 : baseHeight) + this.config.subtreeOffset;
  }, getEdge:function(node$$95, type$$57, s$$12) {
    function $C$$1(a$$9, b$$6) {
      return function() {
        return node$$95.pos.add(new Complex(a$$9, b$$6));
      };
    }
    var dim$$10 = this.node;
    var w$$8 = node$$95.getData("width");
    var h$$6 = node$$95.getData("height");
    if (type$$57 === "begin") {
      if (dim$$10.align === "center") {
        return this.dispatch(s$$12, $C$$1(0, h$$6 / 2), $C$$1(-w$$8 / 2, 0), $C$$1(0, -h$$6 / 2), $C$$1(w$$8 / 2, 0));
      } else {
        if (dim$$10.align === "left") {
          return this.dispatch(s$$12, $C$$1(0, h$$6), $C$$1(0, 0), $C$$1(0, 0), $C$$1(w$$8, 0));
        } else {
          if (dim$$10.align === "right") {
            return this.dispatch(s$$12, $C$$1(0, 0), $C$$1(-w$$8, 0), $C$$1(0, -h$$6), $C$$1(0, 0));
          } else {
            throw "align: not implemented";
          }
        }
      }
    } else {
      if (type$$57 === "end") {
        if (dim$$10.align === "center") {
          return this.dispatch(s$$12, $C$$1(0, -h$$6 / 2), $C$$1(w$$8 / 2, 0), $C$$1(0, h$$6 / 2), $C$$1(-w$$8 / 2, 0));
        } else {
          if (dim$$10.align === "left") {
            return this.dispatch(s$$12, $C$$1(0, 0), $C$$1(w$$8, 0), $C$$1(0, h$$6), $C$$1(0, 0));
          } else {
            if (dim$$10.align === "right") {
              return this.dispatch(s$$12, $C$$1(0, -h$$6), $C$$1(0, 0), $C$$1(0, 0), $C$$1(-w$$8, 0));
            } else {
              throw "align: not implemented";
            }
          }
        }
      }
    }
  }, getScaledTreePosition:function(node$$96, scale) {
    function $C$$2(a$$10, b$$7) {
      return function() {
        return node$$96.pos.add(new Complex(a$$10, b$$7)).$scale(1 - scale);
      };
    }
    var dim$$11 = this.node;
    var w$$9 = node$$96.getData("width");
    var h$$7 = node$$96.getData("height");
    var s$$13 = this.config.multitree && "$orn" in node$$96.data && node$$96.data.$orn || this.config.orientation;
    if (dim$$11.align === "left") {
      return this.dispatch(s$$13, $C$$2(0, h$$7), $C$$2(0, 0), $C$$2(0, 0), $C$$2(w$$9, 0));
    } else {
      if (dim$$11.align === "center") {
        return this.dispatch(s$$13, $C$$2(0, h$$7 / 2), $C$$2(-w$$9 / 2, 0), $C$$2(0, -h$$7 / 2), $C$$2(w$$9 / 2, 0));
      } else {
        if (dim$$11.align === "right") {
          return this.dispatch(s$$13, $C$$2(0, 0), $C$$2(-w$$9, 0), $C$$2(0, -h$$7), $C$$2(0, 0));
        } else {
          throw "align: not implemented";
        }
      }
    }
  }, treeFitsInCanvas:function(node$$97, canvas$$37, level$$15) {
    var csize = canvas$$37.getSize();
    var s$$14 = this.config.multitree && "$orn" in node$$97.data && node$$97.data.$orn || this.config.orientation;
    var size$$10 = this.dispatch(s$$14, csize.width, csize.height);
    var baseSize = this.getTreeBaseSize(node$$97, level$$15, function(level$$16, node$$98) {
      return level$$16 === 0 || !node$$98.anySubnode();
    });
    return baseSize < size$$10;
  }});
  Graph.Util.eachAdjacency = function(node$$99, action$$10, flags$$13) {
    var adj$$21 = node$$99.adjacencies;
    var filter$$5 = this.filter(flags$$13);
    var id$$35;
    var i$$84;
    var keys = new Array;
    var nodeList$$1 = new Array;
    for (id$$35 in adj$$21) {
      keys.push(id$$35);
      if (node$$99 !== adj$$21[id$$35].nodeTo) {
        nodeList$$1.push(adj$$21[id$$35].nodeTo);
      } else {
        nodeList$$1.push(adj$$21[id$$35].nodeFrom);
      }
    }
    if (isLateralise()) {
      var cmp = function(node1, node2) {
        node1.data.len = node1.data.len || 0;
        node2.data.len = node2.data.len || 0;
        return node1.data.len - node2.data.len;
      };
      nodeList$$1 = nodeList$$1.sort(cmp);
      keys = new Array;
      i$$84 = 0;
      for (;i$$84 < nodeList$$1.length;i$$84 += 1) {
        keys.push(nodeList$$1[i$$84].id);
      }
    }
    if (node$$99.data.rotate) {
      keys = keys.reverse();
    }
    for (id$$35 in keys) {
      if (keys.hasOwnProperty(id$$35)) {
        var a$$11 = adj$$21[keys[id$$35]];
        if (filter$$5(a$$11)) {
          if (a$$11.nodeFrom !== node$$99) {
            var tmp$$2 = a$$11.nodeFrom;
            a$$11.nodeFrom = a$$11.nodeTo;
            a$$11.nodeTo = tmp$$2;
          }
          action$$10(a$$11, id$$35);
        }
      }
    }
  };
  Graph.Plot.plotTree = function(node$$100, opt$$25, animating$$5) {
    var that$$34 = this;
    var viz$$27 = this.viz;
    var canvas$$38 = viz$$27.canvas;
    var config$$13 = this.config;
    var ctx$$17 = canvas$$38.getCtx();
    var nodeAlpha$$2 = node$$100.getData("alpha");
    if (viz$$27.clickedNode.id === node$$100.id) {
      ctx$$17.save();
      ctx$$17.strokeStyle = "yellow";
    }
    node$$100.eachSubnode(function(elem$$59) {
      if (opt$$25.plotSubtree(node$$100, elem$$59) && elem$$59.exist && elem$$59.drawn) {
        var adj$$22 = node$$100.getAdjacency(elem$$59.id);
        !animating$$5 && opt$$25.onBeforePlotLine(adj$$22);
        that$$34.plotLine(adj$$22, canvas$$38, animating$$5);
        !animating$$5 && opt$$25.onAfterPlotLine(adj$$22);
        that$$34.plotTree(elem$$59, opt$$25, animating$$5);
      }
    });
    if (node$$100.drawn) {
      !animating$$5 && opt$$25.onBeforePlotNode(node$$100);
      this.plotNode(node$$100, canvas$$38, animating$$5);
      !animating$$5 && opt$$25.onAfterPlotNode(node$$100);
      if (!opt$$25.hideLabels && opt$$25.withLabels && nodeAlpha$$2 >= .95) {
        this.labels.plotLabel(canvas$$38, node$$100, opt$$25);
      } else {
        this.labels.hideLabel(node$$100, false);
      }
    } else {
      this.labels.hideLabel(node$$100, true);
    }
    if (viz$$27.clickedNode.id === node$$100.id) {
      ctx$$17.restore();
    }
  };
  $jit.Phylo.Plot = new Class({Implements:Graph.Plot, plotSubtree:function(node$$101, opt$$26, scale$$1, animating$$6) {
    var viz$$28 = this.viz;
    var canvas$$39 = viz$$28.canvas;
    var config$$14 = viz$$28.config;
    scale$$1 = Math.min(Math.max(.001, scale$$1), 1);
    if (scale$$1 >= 0) {
      node$$101.drawn = false;
      var ctx$$18 = canvas$$39.getCtx();
      var diff$$4 = viz$$28.geom.getScaledTreePosition(node$$101, scale$$1);
      ctx$$18.translate(diff$$4.x, diff$$4.y);
      ctx$$18.scale(scale$$1, scale$$1);
    }
    this.plotTree(node$$101, $$$1.merge(opt$$26, {"withLabels":true, "hideLabels":!!scale$$1, "plotSubtree":function(n$$55, ch$$13) {
      var root$$19 = config$$14.multitree && !("$orn" in node$$101.data);
      var orns$$3 = root$$19 && node$$101.getData("orns");
      return !root$$19 || orns$$3.indexOf(node$$101.getData("orn")) > -1;
    }}), animating$$6);
    if (scale$$1 >= 0) {
      node$$101.drawn = true;
    }
  }, getAlignedPos:function(pos$$38, width$$23, height$$21) {
    var nconfig = this.node;
    var square;
    var orn$$6;
    if (nconfig.align === "center") {
      square = {x:pos$$38.x - width$$23 / 2, y:pos$$38.y - height$$21 / 2};
    } else {
      if (nconfig.align === "left") {
        orn$$6 = this.config.orientation;
        if (orn$$6 === "bottom" || orn$$6 === "top") {
          square = {x:pos$$38.x - width$$23 / 2, y:pos$$38.y};
        } else {
          square = {x:pos$$38.x, y:pos$$38.y - height$$21 / 2};
        }
      } else {
        if (nconfig.align === "right") {
          orn$$6 = this.config.orientation;
          if (orn$$6 === "bottom" || orn$$6 === "top") {
            square = {x:pos$$38.x - width$$23 / 2, y:pos$$38.y - height$$21};
          } else {
            square = {x:pos$$38.x - width$$23, y:pos$$38.y - height$$21 / 2};
          }
        } else {
          throw "align: not implemented";
        }
      }
    }
    return square;
  }, getOrientation:function(adj$$23) {
    var config$$15 = this.config;
    var orn$$7 = config$$15.orientation;
    if (config$$15.multitree) {
      var nodeFrom$$5 = adj$$23.nodeFrom;
      var nodeTo$$7 = adj$$23.nodeTo;
      orn$$7 = "$orn" in nodeFrom$$5.data && nodeFrom$$5.data.$orn || "$orn" in nodeTo$$7.data && nodeTo$$7.data.$orn;
    }
    return orn$$7;
  }});
  $jit.Phylo.Label = {};
  $jit.Phylo.Label.Native = new Class({Implements:Graph.Label.Native, renderLabel:function(canvas$$40, node$$102, controller$$10) {
    var ctx$$19 = canvas$$40.getCtx();
    var coord = node$$102.pos.getc(true);
    var width$$24 = node$$102.getData("width");
    var height$$22 = node$$102.getData("height");
    var pos$$39 = this.viz.fx.getAlignedPos(coord, width$$24, height$$22);
    ctx$$19.fillText(node$$102.name, pos$$39.x + width$$24 / 2, pos$$39.y + height$$22 / 2);
  }});
  $jit.Phylo.Label.DOM = new Class({Implements:Graph.Label.DOM, placeLabel:function(tag$$4, node$$103, controller$$11) {
    var pos$$40 = node$$103.pos.getc(true).clone();
    var config$$16 = this.viz.config;
    var dim$$12 = config$$16.Node;
    var canvas$$41 = this.viz.canvas;
    var w$$10 = node$$103.getData("width");
    var h$$8 = node$$103.getData("height");
    var radius$$6 = canvas$$41.getSize();
    var labelPos;
    var orn$$8;
    if (config$$16.alignName) {
      pos$$40.x = this.viz.graph.maxXpos;
    }
    var ox$$5 = canvas$$41.translateOffsetX;
    var oy$$6 = canvas$$41.translateOffsetY;
    var sx$$6 = canvas$$41.scaleOffsetX;
    var sy$$6 = canvas$$41.scaleOffsetY;
    var posx = pos$$40.x * sx$$6 + ox$$5;
    var posy = pos$$40.y * sy$$6 + oy$$6;
    if (dim$$12.align === "left") {
      labelPos = {x:Math.round(posx + 10), y:Math.round(posy - h$$8 / 2)};
      if (!controller$$11.alignName && !node$$103.data.leaf) {
        labelPos.x += controller$$11.collapsedXOffset;
      }
      tag$$4.style.textAlign = "left";
    } else {
      throw "align: not implemented";
    }
    var style$$6 = tag$$4.style;
    style$$6.left = labelPos.x + "px";
    style$$6.top = labelPos.y + "px";
    style$$6.display = this.fitsInCanvas(labelPos, canvas$$41) ? "inline" : "none";
    controller$$11.onPlaceLabel(tag$$4, node$$103);
  }});
  $jit.Phylo.Label.SVG = new Class({Implements:[$jit.Phylo.Label.DOM, Graph.Label.SVG], initialize:function(viz$$29) {
    this.viz = viz$$29;
  }});
  $jit.Phylo.Label.HTML = new Class({Implements:[$jit.Phylo.Label.DOM, Graph.Label.HTML], initialize:function(viz$$30) {
    this.viz = viz$$30;
  }});
  $jit.Phylo.Plot.NodeTypes = new Class({"none":{"render":$$$1.empty, "contains":$$$1.lambda(false)}, "circle":{"render":function(node$$104, canvas$$42) {
    var dim$$13 = node$$104.getData("dim");
    var pos$$41 = this.getAlignedPos(node$$104.pos.getc(true), dim$$13, dim$$13);
    var dim2 = dim$$13 / 2;
    this.nodeHelper.circle.render("fill", {x:pos$$41.x, y:pos$$41.y + dim2}, dim2, canvas$$42);
  }, "contains":function(node$$105, pos$$42) {
    if (!node$$105.exist) {
      return false;
    }
    var dim$$14 = node$$105.getData("dim");
    var npos$$6 = this.getAlignedPos(node$$105.pos.getc(true), dim$$14, dim$$14);
    var dim2$$1 = dim$$14 / 2;
    return this.nodeHelper.circle.contains({x:npos$$6.x, y:npos$$6.y + dim2$$1}, pos$$42, dim2$$1 + 10);
  }}, "square":{"render":function(node$$106, canvas$$43) {
    var dim$$15 = node$$106.getData("dim");
    var dim2$$2 = dim$$15 / 2;
    var pos$$43 = this.getAlignedPos(node$$106.pos.getc(true), dim$$15, dim$$15);
    this.nodeHelper.square.render("fill", {x:pos$$43.x, y:pos$$43.y + dim2$$2}, dim2$$2, canvas$$43);
  }, "contains":function(node$$107, pos$$44) {
    if (!node$$107.exist) {
      return false;
    }
    var dim$$16 = node$$107.getData("dim");
    var npos$$7 = this.getAlignedPos(node$$107.pos.getc(true), dim$$16, dim$$16);
    var dim2$$3 = dim$$16 / 2;
    return this.nodeHelper.square.contains({x:npos$$7.x, y:npos$$7.y + dim2$$3}, pos$$44, dim2$$3);
  }}, "ellipse":{"render":function(node$$108, canvas$$44) {
    var width$$25 = node$$108.getData("width");
    var height$$23 = node$$108.getData("height");
    var pos$$45 = this.getAlignedPos(node$$108.pos.getc(true), width$$25, height$$23);
    this.nodeHelper.ellipse.render("fill", {x:pos$$45.x + width$$25 / 2, y:pos$$45.y + height$$23 / 2}, width$$25, height$$23, canvas$$44);
  }, "contains":function(node$$109, pos$$46) {
    if (!node$$109.exist) {
      return false;
    }
    var width$$26 = node$$109.getData("width");
    var height$$24 = node$$109.getData("height");
    var npos$$8 = this.getAlignedPos(node$$109.pos.getc(true), width$$26, height$$24);
    this.nodeHelper.ellipse.contains({x:npos$$8.x + width$$26 / 2, y:npos$$8.y + height$$24 / 2}, pos$$46, width$$26, height$$24);
  }}, "rectangle":{"render":function(node$$110, canvas$$45) {
    var width$$27 = node$$110.getData("width");
    var height$$25 = node$$110.getData("height");
    var pos$$47 = this.getAlignedPos(node$$110.pos.getc(true), width$$27, height$$25);
    this.nodeHelper.rectangle.render("fill", {x:pos$$47.x + width$$27 / 2, y:pos$$47.y + height$$25 / 2}, width$$27, height$$25, canvas$$45);
  }, "contains":function(node$$111, pos$$48) {
    if (!node$$111.exist) {
      return false;
    }
    var width$$28 = node$$111.getData("width");
    var height$$26 = node$$111.getData("height");
    var npos$$9 = this.getAlignedPos(node$$111.pos.getc(true), width$$28, height$$26);
    this.nodeHelper.rectangle.contains({x:npos$$9.x + width$$28 / 2, y:npos$$9.y + height$$26 / 2}, pos$$48, width$$28, height$$26);
  }}, "triangle":{"render":function(node$$112, canvas$$46) {
    var width$$29 = node$$112.getData("width");
    var height$$27 = node$$112.getData("height");
    var dim$$17 = node$$112.getData("dim");
    var pos$$49 = this.getAlignedPos(node$$112.pos.getc(true), width$$29, height$$27);
    this.nodeHelper.triangle.render("fill", {x:pos$$49.x + width$$29 / 2, y:pos$$49.y + height$$27 / 2}, dim$$17, canvas$$46);
  }, "contains":function(node$$113, pos$$50) {
    if (!node$$113.exist) {
      return false;
    }
    var width$$30 = node$$113.getData("width");
    var height$$28 = node$$113.getData("height");
    var dim$$18 = node$$113.getData("dim");
    var npos$$10 = this.getAlignedPos(node$$113.pos.getc(true), width$$30, height$$28);
    return this.nodeHelper.triangle.contains({x:npos$$10.x + width$$30 / 2, y:npos$$10.y + height$$28 / 2}, pos$$50, dim$$18);
  }}});
  $jit.Phylo.Plot.EdgeTypes = new Class({"none":$$$1.empty, "line":{"render":function(adj$$24, canvas$$47) {
    var orn$$9 = this.getOrientation(adj$$24);
    var nodeFrom$$6 = adj$$24.nodeFrom;
    var nodeTo$$8 = adj$$24.nodeTo;
    var rel = nodeFrom$$6._depth < nodeTo$$8._depth;
    var from$$11 = (rel ? nodeFrom$$6 : nodeTo$$8).getPos();
    var to$$12 = (rel ? nodeTo$$8 : nodeFrom$$6).getPos();
    var JSCompiler_object_inline_x_90 = from$$11.x;
    var JSCompiler_object_inline_y_91 = from$$11.y;
    var middle2 = {x:JSCompiler_object_inline_x_90, y:to$$12.y};
    this.edgeHelper.line.render(from$$11, middle2, canvas$$47);
    this.edgeHelper.line.render(middle2, to$$12, canvas$$47);
    if (!nodeTo$$8.anySubnode() && this.config.alignName) {
      var ctx$$20 = canvas$$47.getCtx();
      ctx$$20.save();
      ctx$$20.lineWidth = 2;
      ctx$$20.lineCap = "butt";
      ctx$$20.fillStyle = ctx$$20.strokeStyle = "#ccb";
      ctx$$20.beginPath();
      ctx$$20.dashedLine(to$$12.x, to$$12.y, this.viz.graph.maxXpos, to$$12.y);
      ctx$$20.closePath();
      ctx$$20.stroke();
      ctx$$20.restore();
    }
  }, "contains":function(adj$$25, pos$$51) {
    var orn$$10 = this.getOrientation(adj$$25);
    var nodeFrom$$7 = adj$$25.nodeFrom;
    var nodeTo$$9 = adj$$25.nodeTo;
    var rel$$1 = nodeFrom$$7._depth < nodeTo$$9._depth;
    var from$$12 = this.viz.geom.getEdge(rel$$1 ? nodeFrom$$7 : nodeTo$$9, "begin", orn$$10);
    var to$$13 = this.viz.geom.getEdge(rel$$1 ? nodeTo$$9 : nodeFrom$$7, "end", orn$$10);
    return this.edgeHelper.line.contains(from$$12, to$$13, pos$$51, this.edge.epsilon);
  }}, "arrow":{"render":function(adj$$26, canvas$$48) {
    var orn$$11 = this.getOrientation(adj$$26);
    var node$$114 = adj$$26.nodeFrom;
    var child$$1 = adj$$26.nodeTo;
    var dim$$19 = adj$$26.getData("dim");
    var from$$13 = this.viz.geom.getEdge(node$$114, "begin", orn$$11);
    var to$$14 = this.viz.geom.getEdge(child$$1, "end", orn$$11);
    var direction$$3 = adj$$26.data.$direction;
    var inv = direction$$3 && direction$$3.length > 1 && direction$$3[0] !== node$$114.id;
    this.edgeHelper.arrow.render(from$$13, to$$14, dim$$19, inv, canvas$$48);
  }, "contains":function(adj$$27, pos$$52) {
    var orn$$12 = this.getOrientation(adj$$27);
    var nodeFrom$$8 = adj$$27.nodeFrom;
    var nodeTo$$10 = adj$$27.nodeTo;
    var rel$$2 = nodeFrom$$8._depth < nodeTo$$10._depth;
    var from$$14 = this.viz.geom.getEdge(rel$$2 ? nodeFrom$$8 : nodeTo$$10, "begin", orn$$12);
    var to$$15 = this.viz.geom.getEdge(rel$$2 ? nodeTo$$10 : nodeFrom$$8, "end", orn$$12);
    return this.edgeHelper.arrow.contains(from$$14, to$$15, pos$$52, this.edge.epsilon);
  }}, "quadratic:begin":{"render":function(adj$$28, canvas$$49) {
    var orn$$13 = this.getOrientation(adj$$28);
    var nodeFrom$$9 = adj$$28.nodeFrom;
    var nodeTo$$11 = adj$$28.nodeTo;
    var rel$$3 = nodeFrom$$9._depth < nodeTo$$11._depth;
    var begin$$11 = this.viz.geom.getEdge(rel$$3 ? nodeFrom$$9 : nodeTo$$11, "begin", orn$$13);
    var end$$1 = this.viz.geom.getEdge(rel$$3 ? nodeTo$$11 : nodeFrom$$9, "end", orn$$13);
    var dim$$20 = adj$$28.getData("dim");
    var ctx$$21 = canvas$$49.getCtx();
    ctx$$21.beginPath();
    ctx$$21.moveTo(begin$$11.x, begin$$11.y);
    switch(orn$$13) {
      case "left":
        ctx$$21.quadraticCurveTo(begin$$11.x + dim$$20, begin$$11.y, end$$1.x, end$$1.y);
        break;
      case "right":
        ctx$$21.quadraticCurveTo(begin$$11.x - dim$$20, begin$$11.y, end$$1.x, end$$1.y);
        break;
      case "top":
        ctx$$21.quadraticCurveTo(begin$$11.x, begin$$11.y + dim$$20, end$$1.x, end$$1.y);
        break;
      case "bottom":
        ctx$$21.quadraticCurveTo(begin$$11.x, begin$$11.y - dim$$20, end$$1.x, end$$1.y);
    }
    ctx$$21.stroke();
  }}, "quadratic:end":{"render":function(adj$$29, canvas$$50) {
    var orn$$14 = this.getOrientation(adj$$29);
    var nodeFrom$$10 = adj$$29.nodeFrom;
    var nodeTo$$12 = adj$$29.nodeTo;
    var rel$$4 = nodeFrom$$10._depth < nodeTo$$12._depth;
    var begin$$12 = this.viz.geom.getEdge(rel$$4 ? nodeFrom$$10 : nodeTo$$12, "begin", orn$$14);
    var end$$2 = this.viz.geom.getEdge(rel$$4 ? nodeTo$$12 : nodeFrom$$10, "end", orn$$14);
    var dim$$21 = adj$$29.getData("dim");
    var ctx$$22 = canvas$$50.getCtx();
    ctx$$22.beginPath();
    ctx$$22.moveTo(begin$$12.x, begin$$12.y);
    switch(orn$$14) {
      case "left":
        ctx$$22.quadraticCurveTo(end$$2.x - dim$$21, end$$2.y, end$$2.x, end$$2.y);
        break;
      case "right":
        ctx$$22.quadraticCurveTo(end$$2.x + dim$$21, end$$2.y, end$$2.x, end$$2.y);
        break;
      case "top":
        ctx$$22.quadraticCurveTo(end$$2.x, end$$2.y - dim$$21, end$$2.x, end$$2.y);
        break;
      case "bottom":
        ctx$$22.quadraticCurveTo(end$$2.x, end$$2.y + dim$$21, end$$2.x, end$$2.y);
    }
    ctx$$22.stroke();
  }}, "bezier":{"render":function(adj$$30, canvas$$51) {
    var orn$$15 = this.getOrientation(adj$$30);
    var nodeFrom$$11 = adj$$30.nodeFrom;
    var nodeTo$$13 = adj$$30.nodeTo;
    var rel$$5 = nodeFrom$$11._depth < nodeTo$$13._depth;
    var begin$$13 = this.viz.geom.getEdge(rel$$5 ? nodeFrom$$11 : nodeTo$$13, "begin", orn$$15);
    var end$$3 = this.viz.geom.getEdge(rel$$5 ? nodeTo$$13 : nodeFrom$$11, "end", orn$$15);
    var dim$$22 = adj$$30.getData("dim");
    var ctx$$23 = canvas$$51.getCtx();
    ctx$$23.beginPath();
    ctx$$23.moveTo(begin$$13.x, begin$$13.y);
    switch(orn$$15) {
      case "left":
        ctx$$23.bezierCurveTo(begin$$13.x + dim$$22, begin$$13.y, end$$3.x - dim$$22, end$$3.y, end$$3.x, end$$3.y);
        break;
      case "right":
        ctx$$23.bezierCurveTo(begin$$13.x - dim$$22, begin$$13.y, end$$3.x + dim$$22, end$$3.y, end$$3.x, end$$3.y);
        break;
      case "top":
        ctx$$23.bezierCurveTo(begin$$13.x, begin$$13.y + dim$$22, end$$3.x, end$$3.y - dim$$22, end$$3.x, end$$3.y);
        break;
      case "bottom":
        ctx$$23.bezierCurveTo(begin$$13.x, begin$$13.y - dim$$22, end$$3.x, end$$3.y + dim$$22, end$$3.x, end$$3.y);
    }
    ctx$$23.stroke();
  }}, "rectangular":{"render":function(adj$$31, canvas$$52) {
    var orn$$16 = this.getOrientation(adj$$31);
    var nodeFrom$$12 = adj$$31.nodeFrom;
    var nodeTo$$14 = adj$$31.nodeTo;
    var rel$$6 = nodeFrom$$12._depth < nodeTo$$14._depth;
    var from$$15 = this.viz.geom.getEdge(rel$$6 ? nodeFrom$$12 : nodeTo$$14, "begin", orn$$16);
    var to$$16 = this.viz.geom.getEdge(rel$$6 ? nodeTo$$14 : nodeFrom$$12, "end", orn$$16);
    var middle = {x:from$$15.x, y:to$$16.y};
    this.edgeHelper.line.render(from$$15, middle, canvas$$52);
    this.edgeHelper.line.render(middle, to$$16, canvas$$52);
  }, "contains":function(adj$$32, pos$$53) {
    var orn$$17 = this.getOrientation(adj$$32);
    var nodeFrom$$13 = adj$$32.nodeFrom;
    var nodeTo$$15 = adj$$32.nodeTo;
    var rel$$7 = nodeFrom$$13._depth < nodeTo$$15._depth;
    var from$$16 = this.viz.geom.getEdge(rel$$7 ? nodeFrom$$13 : nodeTo$$15, "begin", orn$$17);
    var to$$17 = this.viz.geom.getEdge(rel$$7 ? nodeTo$$15 : nodeFrom$$13, "end", orn$$17);
    return this.edgeHelper.line.contains(from$$16, to$$17, pos$$53, this.edge.epsilon);
  }}});
  Extras.Classes.Navigation.implement({onMouseWheel:function(e$$46, win$$34, scroll$$4) {
    if (!this.config.zooming) {
      return;
    }
    $$$1.event.stop($$$1.event.get(e$$46, win$$34));
    this.viz.zoom(scroll$$4);
  }});
  Graph.Util.computeLevels = function(graph$$20, id$$36, startDepth$$1, flags$$14) {
    startDepth$$1 = startDepth$$1 || 0;
    var filter$$6 = this.filter(flags$$14);
    this.eachNode(graph$$20, function(elem$$60) {
      elem$$60._flag = false;
      elem$$60._depth = -1;
    }, flags$$14);
    var root$$20 = graph$$20.getNode(id$$36);
    root$$20._depth = startDepth$$1;
    var queue$$2 = [root$$20];
    graph$$20.depth = [];
    var that$$35 = this;
    for (;queue$$2.length !== 0;) {
      var node$$115 = queue$$2.pop();
      node$$115._flag = true;
      this.eachAdjacency(node$$115, function(adj$$33) {
        var n$$56 = adj$$33.nodeTo;
        if (n$$56._flag === false && filter$$6(n$$56)) {
          if (n$$56._depth < 0) {
            n$$56._depth = node$$115._depth + 1 + startDepth$$1;
            if (!graph$$20.depth[n$$56._depth]) {
              graph$$20.depth[n$$56._depth] = [];
            }
            graph$$20.depth[n$$56._depth].push(n$$56);
          }
          queue$$2.unshift(n$$56);
        }
      }, flags$$14);
    }
  };
  NodeHelper.triangle = {render:function(type$$58, pos$$54, dim$$23, canvas$$53) {
    var ctx$$24 = canvas$$53.getCtx();
    var c1x$$1 = pos$$54.x;
    var c1y$$1 = pos$$54.y;
    var c2x$$1 = c1x$$1 + dim$$23;
    var c2y$$1 = pos$$54.y - dim$$23;
    var c3x$$1 = c2x$$1;
    var c3y$$1 = pos$$54.y + dim$$23;
    ctx$$24.beginPath();
    ctx$$24.moveTo(c1x$$1, c1y$$1);
    ctx$$24.lineTo(c2x$$1, c2y$$1);
    ctx$$24.lineTo(c3x$$1, c3y$$1);
    ctx$$24.closePath();
    ctx$$24[type$$58]();
  }, contains:function(npos$$11, pos$$55, dim$$24) {
    var a$$12 = new Complex(npos$$11.x, npos$$11.y);
    var b$$8 = new Complex(a$$12.x + dim$$24, npos$$11.y - dim$$24);
    var c$$4 = new Complex(b$$8.x, npos$$11.y + dim$$24);
    pos$$55 = new Complex(pos$$55.x, pos$$55.y);
    var negOne = new Complex(-1, -1);
    var v0 = new Complex(c$$4.x - a$$12.x, c$$4.y - a$$12.y);
    var v1$$2 = new Complex(b$$8.x - a$$12.x, b$$8.y - a$$12.y);
    var v2$$2 = new Complex(pos$$55.x - a$$12.x, pos$$55.y - a$$12.y);
    var dot00 = v0.x * v0.x + v0.y * v0.y;
    var dot01 = v0.x * v1$$2.x + v0.y * v1$$2.y;
    var dot02 = v0.x * v2$$2.x + v0.y * v2$$2.y;
    var dot11 = v1$$2.x * v1$$2.x + v1$$2.y * v1$$2.y;
    var dot12 = v1$$2.x * v2$$2.x + v1$$2.y * v2$$2.y;
    var inv$$1 = 1 / (dot00 * dot11 - dot01 * dot01);
    var u = (dot11 * dot02 - dot01 * dot12) * inv$$1;
    var v$$3 = (dot00 * dot12 - dot01 * dot02) * inv$$1;
    return u > 0 && v$$3 > 0 && u + v$$3 < 1;
  }};
  var CP = window.CanvasRenderingContext2D && CanvasRenderingContext2D.prototype;
  if (CP && CP.lineTo) {
    CP.dashedLine = function(x$$66, y$$48, x2$$1, y2$$1) {
      var dashArray = [4, 2];
      if (!dashArray) {
        dashArray = [10, 5];
      }
      var dashCount = dashArray.length;
      this.moveTo(x$$66, y$$48);
      var dx$$5 = x2$$1 - x$$66;
      var dy$$5 = y2$$1 - y$$48;
      var slope = dy$$5 / dx$$5;
      var distRemaining = Math.sqrt(dx$$5 * dx$$5 + dy$$5 * dy$$5);
      var dashIndex = 0;
      var draw = true;
      for (;distRemaining >= .1;) {
        dashIndex += 1;
        var dashLength = dashArray[dashIndex % dashCount];
        if (dashLength > distRemaining) {
          dashLength = distRemaining;
        }
        var xStep = Math.sqrt(dashLength * dashLength / (1 + slope * slope));
        x$$66 += xStep;
        y$$48 += slope * xStep;
        this[draw ? "lineTo" : "moveTo"](x$$66, y$$48);
        distRemaining -= dashLength;
        draw = !draw;
      }
    };
  }
})();
(function(a$$13, b$$9) {
  function I(a$$142) {
    return f$$4.event.special.hover ? a$$142 : a$$142.replace(B, "mouseenter$1 mouseleave$1");
  }
  function G(a$$140) {
    var b$$93 = F.exec(a$$140);
    b$$93 && (b$$93[1] = (b$$93[1] || "").toLowerCase(), b$$93[3] = b$$93[3] && new RegExp("(?:^|\\s)" + b$$93[3] + "(?:\\s|$)"));
    return b$$93;
  }
  function cy(a$$14) {
    return f$$4.isWindow(a$$14) ? a$$14 : a$$14.nodeType === 9 ? a$$14.defaultView || a$$14.parentWindow : !1;
  }
  function cu(a$$15) {
    if (!cj[a$$15]) {
      var b$$10 = c$$5.body;
      var d$$7 = f$$4("<" + a$$15 + ">").appendTo(b$$10);
      var e$$48 = d$$7.css("display");
      d$$7.remove();
      if (e$$48 === "none" || e$$48 === "") {
        ck || (ck = c$$5.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0), b$$10.appendChild(ck);
        if (!cl || !ck.createElement) {
          cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f$$4.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), cl.close();
        }
        d$$7 = cl.createElement(a$$15), cl.body.appendChild(d$$7), e$$48 = f$$4.css(d$$7, "display"), b$$10.removeChild(ck);
      }
      cj[a$$15] = e$$48;
    }
    return cj[a$$15];
  }
  function ct(a$$16, b$$11) {
    var c$$6 = {};
    f$$4.each(cp.concat.apply([], cp.slice(0, b$$11)), function() {
      c$$6[this] = a$$16;
    });
    return c$$6;
  }
  function cs() {
    cq = b$$9;
  }
  function cr() {
    setTimeout(cs, 0);
    return cq = f$$4.now();
  }
  function ch$$14() {
    try {
      return new a$$13.XMLHttpRequest;
    } catch (b$$13) {
    }
  }
  function b_(a$$19, b$$14, c$$9, d$$10) {
    if (f$$4.isArray(b$$14)) {
      f$$4.each(b$$14, function(b$$15, e$$52) {
        c$$9 || bD.test(a$$19) ? d$$10(a$$19, e$$52) : b_(a$$19 + "[" + (typeof e$$52 == "object" ? b$$15 : "") + "]", e$$52, c$$9, d$$10);
      });
    } else {
      if (!c$$9 && f$$4.type(b$$14) === "object") {
        var e$$51;
        for (e$$51 in b$$14) {
          b_(a$$19 + "[" + e$$51 + "]", b$$14[e$$51], c$$9, d$$10);
        }
      } else {
        d$$10(a$$19, b$$14);
      }
    }
  }
  function b$(a$$20, c$$10) {
    var d$$11;
    var e$$53;
    var g$$3 = f$$4.ajaxSettings.flatOptions || {};
    for (d$$11 in c$$10) {
      c$$10[d$$11] !== b$$9 && ((g$$3[d$$11] ? a$$20 : e$$53 || (e$$53 = {}))[d$$11] = c$$10[d$$11]);
    }
    e$$53 && f$$4.extend(!0, a$$20, e$$53);
  }
  function bZ(a$$21, c$$11, d$$12, e$$54, f$$6, g$$4) {
    f$$6 = f$$6 || c$$11.dataTypes[0], g$$4 = g$$4 || {}, g$$4[f$$6] = !0;
    var h$$12 = a$$21[f$$6];
    var i$$88 = 0;
    var j$$17 = h$$12 ? h$$12.length : 0;
    var k$$5 = a$$21 === bS;
    var l$$23;
    for (;i$$88 < j$$17 && (k$$5 || !l$$23);i$$88++) {
      l$$23 = h$$12[i$$88](c$$11, d$$12, e$$54), typeof l$$23 == "string" && (!k$$5 || g$$4[l$$23] ? l$$23 = b$$9 : (c$$11.dataTypes.unshift(l$$23), l$$23 = bZ(a$$21, c$$11, d$$12, e$$54, l$$23, g$$4)));
    }
    (k$$5 || !l$$23) && !g$$4["*"] && (l$$23 = bZ(a$$21, c$$11, d$$12, e$$54, "*", g$$4));
    return l$$23;
  }
  function bY(a$$22) {
    return function(b$$16, c$$12) {
      typeof b$$16 != "string" && (c$$12 = b$$16, b$$16 = "*");
      if (f$$4.isFunction(c$$12)) {
        var d$$13 = b$$16.toLowerCase().split(bO);
        var e$$55 = 0;
        var g$$5 = d$$13.length;
        var h$$13;
        var i$$89;
        var j$$18;
        for (;e$$55 < g$$5;e$$55++) {
          h$$13 = d$$13[e$$55], j$$18 = /^\+/.test(h$$13), j$$18 && (h$$13 = h$$13.substr(1) || "*"), i$$89 = a$$22[h$$13] = a$$22[h$$13] || [], i$$89[j$$18 ? "unshift" : "push"](c$$12);
        }
      }
    };
  }
  function bB(a$$23, b$$17, c$$13) {
    var d$$14 = b$$17 === "width" ? a$$23.offsetWidth : a$$23.offsetHeight;
    var e$$56 = b$$17 === "width" ? 1 : 0;
    var g$$6 = 4;
    if (d$$14 > 0) {
      if (c$$13 !== "border") {
        for (;e$$56 < g$$6;e$$56 += 2) {
          c$$13 || (d$$14 -= parseFloat(f$$4.css(a$$23, "padding" + bx[e$$56])) || 0), c$$13 === "margin" ? d$$14 += parseFloat(f$$4.css(a$$23, c$$13 + bx[e$$56])) || 0 : d$$14 -= parseFloat(f$$4.css(a$$23, "border" + bx[e$$56] + "Width")) || 0;
        }
      }
      return d$$14 + "px";
    }
    d$$14 = by(a$$23, b$$17);
    if (d$$14 < 0 || d$$14 == null) {
      d$$14 = a$$23.style[b$$17];
    }
    if (bt.test(d$$14)) {
      return d$$14;
    }
    d$$14 = parseFloat(d$$14) || 0;
    if (c$$13) {
      for (;e$$56 < g$$6;e$$56 += 2) {
        d$$14 += parseFloat(f$$4.css(a$$23, "padding" + bx[e$$56])) || 0, c$$13 !== "padding" && (d$$14 += parseFloat(f$$4.css(a$$23, "border" + bx[e$$56] + "Width")) || 0), c$$13 === "margin" && (d$$14 += parseFloat(f$$4.css(a$$23, c$$13 + bx[e$$56])) || 0);
      }
    }
    return d$$14 + "px";
  }
  function bn(a$$25) {
    var b$$19 = (a$$25.nodeName || "").toLowerCase();
    b$$19 === "input" ? bm(a$$25) : b$$19 !== "script" && typeof a$$25.getElementsByTagName != "undefined" && f$$4.grep(a$$25.getElementsByTagName("input"), bm);
  }
  function bm(a$$26) {
    if (a$$26.type === "checkbox" || a$$26.type === "radio") {
      a$$26.defaultChecked = a$$26.checked;
    }
  }
  function bl(a$$27) {
    return typeof a$$27.getElementsByTagName != "undefined" ? a$$27.getElementsByTagName("*") : typeof a$$27.querySelectorAll != "undefined" ? a$$27.querySelectorAll("*") : [];
  }
  function bk(a$$28, b$$20) {
    var c$$14;
    b$$20.nodeType === 1 && (b$$20.clearAttributes && b$$20.clearAttributes(), b$$20.mergeAttributes && b$$20.mergeAttributes(a$$28), c$$14 = b$$20.nodeName.toLowerCase(), c$$14 === "object" ? b$$20.outerHTML = a$$28.outerHTML : c$$14 !== "input" || a$$28.type !== "checkbox" && a$$28.type !== "radio" ? c$$14 === "option" ? b$$20.selected = a$$28.defaultSelected : c$$14 === "input" || c$$14 === "textarea" ? b$$20.defaultValue = a$$28.defaultValue : c$$14 === "script" && b$$20.text !== a$$28.text && 
    (b$$20.text = a$$28.text) : (a$$28.checked && (b$$20.defaultChecked = b$$20.checked = a$$28.checked), b$$20.value !== a$$28.value && (b$$20.value = a$$28.value)), b$$20.removeAttribute(f$$4.expando), b$$20.removeAttribute("_submit_attached"), b$$20.removeAttribute("_change_attached"));
  }
  function bj(a$$29, b$$21) {
    if (b$$21.nodeType === 1 && !!f$$4.hasData(a$$29)) {
      var c$$15;
      var d$$15;
      var e$$57;
      var g$$7 = f$$4._data(a$$29);
      var h$$14 = f$$4._data(b$$21, g$$7);
      var i$$90 = g$$7.events;
      if (i$$90) {
        delete h$$14.handle, h$$14.events = {};
        for (c$$15 in i$$90) {
          d$$15 = 0, e$$57 = i$$90[c$$15].length;
          for (;d$$15 < e$$57;d$$15++) {
            f$$4.event.add(b$$21, c$$15, i$$90[c$$15][d$$15]);
          }
        }
      }
      h$$14.data && (h$$14.data = f$$4.extend({}, h$$14.data));
    }
  }
  function bi(a$$30, b$$22) {
    return f$$4.nodeName(a$$30, "table") ? a$$30.getElementsByTagName("tbody")[0] || a$$30.appendChild(a$$30.ownerDocument.createElement("tbody")) : a$$30;
  }
  function U(a$$31) {
    var b$$23 = V.split("|");
    var c$$16 = a$$31.createDocumentFragment();
    if (c$$16.createElement) {
      for (;b$$23.length;) {
        c$$16.createElement(b$$23.pop());
      }
    }
    return c$$16;
  }
  function T$$2(a$$32, b$$24, c$$17) {
    b$$24 = b$$24 || 0;
    if (f$$4.isFunction(b$$24)) {
      return f$$4.grep(a$$32, function(a$$33, d$$17) {
        var e$$58 = !!b$$24.call(a$$33, d$$17, a$$33);
        return e$$58 === c$$17;
      });
    }
    if (b$$24.nodeType) {
      return f$$4.grep(a$$32, function(a$$34, d$$18) {
        return a$$34 === b$$24 === c$$17;
      });
    }
    if (typeof b$$24 == "string") {
      var d$$16 = f$$4.grep(a$$32, function(a$$35) {
        return a$$35.nodeType === 1;
      });
      if (O.test(b$$24)) {
        return f$$4.filter(b$$24, d$$16, !c$$17);
      }
      b$$24 = f$$4.filter(b$$24, d$$16);
    }
    return f$$4.grep(a$$32, function(a$$36, d$$19) {
      return f$$4.inArray(a$$36, b$$24) >= 0 === c$$17;
    });
  }
  function S(a$$37) {
    return !a$$37 || !a$$37.parentNode || a$$37.parentNode.nodeType === 11;
  }
  function K() {
    return !0;
  }
  function J() {
    return !1;
  }
  function n$$57(a$$38, b$$25, c$$18) {
    var d$$20 = b$$25 + "defer";
    var e$$59 = b$$25 + "queue";
    var g$$8 = b$$25 + "mark";
    var h$$15 = f$$4._data(a$$38, d$$20);
    h$$15 && (c$$18 === "queue" || !f$$4._data(a$$38, e$$59)) && (c$$18 === "mark" || !f$$4._data(a$$38, g$$8)) && setTimeout(function() {
      !f$$4._data(a$$38, e$$59) && !f$$4._data(a$$38, g$$8) && (f$$4.removeData(a$$38, d$$20, !0), h$$15.fire());
    }, 0);
  }
  function m$$4(a$$39) {
    var b$$26;
    for (b$$26 in a$$39) {
      if (b$$26 === "data" && f$$4.isEmptyObject(a$$39[b$$26])) {
        continue;
      }
      if (b$$26 !== "toJSON") {
        return !1;
      }
    }
    return !0;
  }
  function l$$21(a$$40, c$$19, d$$21) {
    if (d$$21 === b$$9 && a$$40.nodeType === 1) {
      var e$$60 = "data-" + c$$19.replace(k$$2, "-$1").toLowerCase();
      d$$21 = a$$40.getAttribute(e$$60);
      if (typeof d$$21 == "string") {
        try {
          d$$21 = d$$21 === "true" ? !0 : d$$21 === "false" ? !1 : d$$21 === "null" ? null : f$$4.isNumeric(d$$21) ? +d$$21 : j$$14.test(d$$21) ? f$$4.parseJSON(d$$21) : d$$21;
        } catch (g$$9) {
        }
        f$$4.data(a$$40, c$$19, d$$21);
      } else {
        d$$21 = b$$9;
      }
    }
    return d$$21;
  }
  function h$$9(a$$41) {
    var b$$27 = g[a$$41] = {};
    var c$$20;
    var d$$22;
    a$$41 = a$$41.split(/\s+/);
    c$$20 = 0, d$$22 = a$$41.length;
    for (;c$$20 < d$$22;c$$20++) {
      b$$27[a$$41[c$$20]] = !0;
    }
    return b$$27;
  }
  var c$$5 = a$$13.document;
  var d$$6 = a$$13.navigator;
  var e$$47 = a$$13.location;
  var f$$4 = function() {
    function x$$68(a$$44, b$$29) {
      return (b$$29 + "").toUpperCase();
    }
    function e$$61(a$$43, b$$28) {
      return new e$$61.fn.init(a$$43, b$$28, h$$16);
    }
    function J$$1() {
      if (!e$$61.isReady) {
        try {
          c$$5.documentElement.doScroll("left");
        } catch (a$$42) {
          setTimeout(J$$1, 1);
          return;
        }
        e$$61.ready();
      }
    }
    var f$$7 = a$$13.jQuery;
    var g$$10 = a$$13.$;
    var h$$16;
    var i$$91 = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/;
    var j$$19 = /\S/;
    var k$$6 = /^\s+/;
    var l$$24 = /\s+$/;
    var m$$6 = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    var n$$59 = /^[\],:{}\s]*$/;
    var o$$2 = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var p$$24 = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var q$$1 = /(?:^|:|,)(?:\s*\[)+/g;
    var r$$3 = /(webkit)[ \/]([\w.]+)/;
    var s$$16 = /(opera)(?:.*version)?[ \/]([\w.]+)/;
    var t$$3 = /(msie) ([\w.]+)/;
    var u$$2 = /(mozilla)(?:.*? rv:([\w.]+))?/;
    var v$$5 = /-([a-z]|[0-9])/ig;
    var w$$12 = /^-ms-/;
    var y$$50 = d$$6.userAgent;
    var z$$3;
    var A$$1;
    var B$$1;
    var C$$1 = Object.prototype.toString;
    var D$$1 = Object.prototype.hasOwnProperty;
    var E$$1 = Array.prototype.push;
    var F$$1 = Array.prototype.slice;
    var G$$1 = String.prototype.trim;
    var H$$1 = Array.prototype.indexOf;
    var I$$1 = {};
    e$$61.fn = e$$61.prototype = {constructor:e$$61, init:function(a$$45, d$$23, f$$8) {
      var g$$11;
      var h$$17;
      var j$$20;
      var k$$7;
      if (!a$$45) {
        return this;
      }
      if (a$$45.nodeType) {
        this.context = this[0] = a$$45, this.length = 1;
        return this;
      }
      if (a$$45 === "body" && !d$$23 && c$$5.body) {
        this.context = c$$5, this[0] = c$$5.body, this.selector = a$$45, this.length = 1;
        return this;
      }
      if (typeof a$$45 == "string") {
        a$$45.charAt(0) !== "<" || a$$45.charAt(a$$45.length - 1) !== ">" || a$$45.length < 3 ? g$$11 = i$$91.exec(a$$45) : g$$11 = [null, a$$45, null];
        if (g$$11 && (g$$11[1] || !d$$23)) {
          if (g$$11[1]) {
            d$$23 = d$$23 instanceof e$$61 ? d$$23[0] : d$$23, k$$7 = d$$23 ? d$$23.ownerDocument || d$$23 : c$$5, j$$20 = m$$6.exec(a$$45), j$$20 ? e$$61.isPlainObject(d$$23) ? (a$$45 = [c$$5.createElement(j$$20[1])], e$$61.fn.attr.call(a$$45, d$$23, !0)) : a$$45 = [k$$7.createElement(j$$20[1])] : (j$$20 = e$$61.buildFragment([g$$11[1]], [k$$7]), a$$45 = (j$$20.cacheable ? e$$61.clone(j$$20.fragment) : j$$20.fragment).childNodes);
            return e$$61.merge(this, a$$45);
          }
          h$$17 = c$$5.getElementById(g$$11[2]);
          if (h$$17 && h$$17.parentNode) {
            if (h$$17.id !== g$$11[2]) {
              return f$$8.find(a$$45);
            }
            this.length = 1, this[0] = h$$17;
          }
          this.context = c$$5, this.selector = a$$45;
          return this;
        }
        return !d$$23 || d$$23.jquery ? (d$$23 || f$$8).find(a$$45) : this.constructor(d$$23).find(a$$45);
      }
      if (e$$61.isFunction(a$$45)) {
        return f$$8.ready(a$$45);
      }
      a$$45.selector !== b$$9 && (this.selector = a$$45.selector, this.context = a$$45.context);
      return e$$61.makeArray(a$$45, this);
    }, selector:"", jquery:"1.7.2", length:0, size:function() {
      return this.length;
    }, toArray:function() {
      return F$$1.call(this, 0);
    }, get:function(a$$46) {
      return a$$46 == null ? this.toArray() : a$$46 < 0 ? this[this.length + a$$46] : this[a$$46];
    }, pushStack:function(a$$47, b$$30, c$$21) {
      var d$$24 = this.constructor();
      e$$61.isArray(a$$47) ? E$$1.apply(d$$24, a$$47) : e$$61.merge(d$$24, a$$47), d$$24.prevObject = this, d$$24.context = this.context, b$$30 === "find" ? d$$24.selector = this.selector + (this.selector ? " " : "") + c$$21 : b$$30 && (d$$24.selector = this.selector + "." + b$$30 + "(" + c$$21 + ")");
      return d$$24;
    }, each:function(a$$48, b$$31) {
      return e$$61.each(this, a$$48, b$$31);
    }, ready:function(a$$49) {
      e$$61.bindReady(), A$$1.add(a$$49);
      return this;
    }, eq:function(a$$50) {
      a$$50 = +a$$50;
      return a$$50 === -1 ? this.slice(a$$50) : this.slice(a$$50, a$$50 + 1);
    }, first:function() {
      return this.eq(0);
    }, last:function() {
      return this.eq(-1);
    }, slice:function() {
      return this.pushStack(F$$1.apply(this, arguments), "slice", F$$1.call(arguments).join(","));
    }, map:function(a$$51) {
      return this.pushStack(e$$61.map(this, function(b$$32, c$$22) {
        return a$$51.call(b$$32, c$$22, b$$32);
      }));
    }, end:function() {
      return this.prevObject || this.constructor(null);
    }, push:E$$1, sort:[].sort, splice:[].splice}, e$$61.fn.init.prototype = e$$61.fn, e$$61.extend = e$$61.fn.extend = function() {
      var a$$52;
      var c$$23;
      var d$$25;
      var f$$9;
      var g$$12;
      var h$$18;
      var i$$92 = arguments[0] || {};
      var j$$21 = 1;
      var k$$8 = arguments.length;
      var l$$25 = !1;
      typeof i$$92 == "boolean" && (l$$25 = i$$92, i$$92 = arguments[1] || {}, j$$21 = 2), typeof i$$92 != "object" && !e$$61.isFunction(i$$92) && (i$$92 = {}), k$$8 === j$$21 && (i$$92 = this, --j$$21);
      for (;j$$21 < k$$8;j$$21++) {
        if ((a$$52 = arguments[j$$21]) != null) {
          for (c$$23 in a$$52) {
            d$$25 = i$$92[c$$23], f$$9 = a$$52[c$$23];
            if (i$$92 === f$$9) {
              continue;
            }
            l$$25 && f$$9 && (e$$61.isPlainObject(f$$9) || (g$$12 = e$$61.isArray(f$$9))) ? (g$$12 ? (g$$12 = !1, h$$18 = d$$25 && e$$61.isArray(d$$25) ? d$$25 : []) : h$$18 = d$$25 && e$$61.isPlainObject(d$$25) ? d$$25 : {}, i$$92[c$$23] = e$$61.extend(l$$25, h$$18, f$$9)) : f$$9 !== b$$9 && (i$$92[c$$23] = f$$9);
          }
        }
      }
      return i$$92;
    }, e$$61.extend({noConflict:function(b$$33) {
      a$$13.$ === e$$61 && (a$$13.$ = g$$10), b$$33 && a$$13.jQuery === e$$61 && (a$$13.jQuery = f$$7);
      return e$$61;
    }, isReady:!1, readyWait:1, holdReady:function(a$$53) {
      a$$53 ? e$$61.readyWait++ : e$$61.ready(!0);
    }, ready:function(a$$54) {
      if (a$$54 === !0 && !--e$$61.readyWait || a$$54 !== !0 && !e$$61.isReady) {
        if (!c$$5.body) {
          return setTimeout(e$$61.ready, 1);
        }
        e$$61.isReady = !0;
        if (a$$54 !== !0 && --e$$61.readyWait > 0) {
          return;
        }
        A$$1.fireWith(c$$5, [e$$61]), e$$61.fn.trigger && e$$61(c$$5).trigger("ready").off("ready");
      }
    }, bindReady:function() {
      if (!A$$1) {
        A$$1 = e$$61.Callbacks("once memory");
        if (c$$5.readyState === "complete") {
          return setTimeout(e$$61.ready, 1);
        }
        if (c$$5.addEventListener) {
          c$$5.addEventListener("DOMContentLoaded", B$$1, !1), a$$13.addEventListener("load", e$$61.ready, !1);
        } else {
          if (c$$5.attachEvent) {
            c$$5.attachEvent("onreadystatechange", B$$1), a$$13.attachEvent("onload", e$$61.ready);
            var b$$34 = !1;
            try {
              b$$34 = a$$13.frameElement == null;
            } catch (d$$26) {
            }
            c$$5.documentElement.doScroll && b$$34 && J$$1();
          }
        }
      }
    }, isFunction:function(a$$55) {
      return e$$61.type(a$$55) === "function";
    }, isArray:Array.isArray || function(a$$56) {
      return e$$61.type(a$$56) === "array";
    }, isWindow:function(a$$57) {
      return a$$57 != null && a$$57 == a$$57.window;
    }, isNumeric:function(a$$58) {
      return !isNaN(parseFloat(a$$58)) && isFinite(a$$58);
    }, type:function(a$$59) {
      return a$$59 == null ? String(a$$59) : I$$1[C$$1.call(a$$59)] || "object";
    }, isPlainObject:function(a$$60) {
      if (!a$$60 || e$$61.type(a$$60) !== "object" || a$$60.nodeType || e$$61.isWindow(a$$60)) {
        return !1;
      }
      try {
        if (a$$60.constructor && !D$$1.call(a$$60, "constructor") && !D$$1.call(a$$60.constructor.prototype, "isPrototypeOf")) {
          return !1;
        }
      } catch (c$$24) {
        return !1;
      }
      var d$$27;
      for (d$$27 in a$$60) {
      }
      return d$$27 === b$$9 || D$$1.call(a$$60, d$$27);
    }, isEmptyObject:function(a$$61) {
      var b$$35;
      for (b$$35 in a$$61) {
        return !1;
      }
      return !0;
    }, error:function(a$$62) {
      throw new Error(a$$62);
    }, parseJSON:function(b$$36) {
      if (typeof b$$36 != "string" || !b$$36) {
        return null;
      }
      b$$36 = e$$61.trim(b$$36);
      if (a$$13.JSON && a$$13.JSON.parse) {
        return a$$13.JSON.parse(b$$36);
      }
      if (n$$59.test(b$$36.replace(o$$2, "@").replace(p$$24, "]").replace(q$$1, ""))) {
        return (new Function("return " + b$$36))();
      }
      e$$61.error("Invalid JSON: " + b$$36);
    }, parseXML:function(c$$25) {
      if (typeof c$$25 != "string" || !c$$25) {
        return null;
      }
      var d$$28;
      var f$$10;
      try {
        a$$13.DOMParser ? (f$$10 = new DOMParser, d$$28 = f$$10.parseFromString(c$$25, "text/xml")) : (d$$28 = new ActiveXObject("Microsoft.XMLDOM"), d$$28.async = "false", d$$28.loadXML(c$$25));
      } catch (g$$13) {
        d$$28 = b$$9;
      }
      (!d$$28 || !d$$28.documentElement || d$$28.getElementsByTagName("parsererror").length) && e$$61.error("Invalid XML: " + c$$25);
      return d$$28;
    }, noop:function() {
    }, globalEval:function(b$$37) {
      b$$37 && j$$19.test(b$$37) && (a$$13.execScript || function(b$$38) {
        a$$13.eval.call(a$$13, b$$38);
      })(b$$37);
    }, camelCase:function(a$$63) {
      return a$$63.replace(w$$12, "ms-").replace(v$$5, x$$68);
    }, nodeName:function(a$$64, b$$39) {
      return a$$64.nodeName && a$$64.nodeName.toUpperCase() === b$$39.toUpperCase();
    }, each:function(a$$65, c$$26, d$$29) {
      var f$$11;
      var g$$14 = 0;
      var h$$19 = a$$65.length;
      var i$$93 = h$$19 === b$$9 || e$$61.isFunction(a$$65);
      if (d$$29) {
        if (i$$93) {
          for (f$$11 in a$$65) {
            if (c$$26.apply(a$$65[f$$11], d$$29) === !1) {
              break;
            }
          }
        } else {
          for (;g$$14 < h$$19;) {
            if (c$$26.apply(a$$65[g$$14++], d$$29) === !1) {
              break;
            }
          }
        }
      } else {
        if (i$$93) {
          for (f$$11 in a$$65) {
            if (c$$26.call(a$$65[f$$11], f$$11, a$$65[f$$11]) === !1) {
              break;
            }
          }
        } else {
          for (;g$$14 < h$$19;) {
            if (c$$26.call(a$$65[g$$14], g$$14, a$$65[g$$14++]) === !1) {
              break;
            }
          }
        }
      }
      return a$$65;
    }, trim:G$$1 ? function(a$$66) {
      return a$$66 == null ? "" : G$$1.call(a$$66);
    } : function(a$$67) {
      return a$$67 == null ? "" : (a$$67 + "").replace(k$$6, "").replace(l$$24, "");
    }, makeArray:function(a$$68, b$$40) {
      var c$$27 = b$$40 || [];
      if (a$$68 != null) {
        var d$$30 = e$$61.type(a$$68);
        a$$68.length == null || d$$30 === "string" || d$$30 === "function" || d$$30 === "regexp" || e$$61.isWindow(a$$68) ? E$$1.call(c$$27, a$$68) : e$$61.merge(c$$27, a$$68);
      }
      return c$$27;
    }, inArray:function(a$$69, b$$41, c$$28) {
      var d$$31;
      if (b$$41) {
        if (H$$1) {
          return H$$1.call(b$$41, a$$69, c$$28);
        }
        d$$31 = b$$41.length, c$$28 = c$$28 ? c$$28 < 0 ? Math.max(0, d$$31 + c$$28) : c$$28 : 0;
        for (;c$$28 < d$$31;c$$28++) {
          if (c$$28 in b$$41 && b$$41[c$$28] === a$$69) {
            return c$$28;
          }
        }
      }
      return -1;
    }, merge:function(a$$70, c$$29) {
      var d$$32 = a$$70.length;
      var e$$62 = 0;
      if (typeof c$$29.length == "number") {
        var f$$12 = c$$29.length;
        for (;e$$62 < f$$12;e$$62++) {
          a$$70[d$$32++] = c$$29[e$$62];
        }
      } else {
        for (;c$$29[e$$62] !== b$$9;) {
          a$$70[d$$32++] = c$$29[e$$62++];
        }
      }
      a$$70.length = d$$32;
      return a$$70;
    }, grep:function(a$$71, b$$42, c$$30) {
      var d$$33 = [];
      var e$$63;
      c$$30 = !!c$$30;
      var f$$13 = 0;
      var g$$15 = a$$71.length;
      for (;f$$13 < g$$15;f$$13++) {
        e$$63 = !!b$$42(a$$71[f$$13], f$$13), c$$30 !== e$$63 && d$$33.push(a$$71[f$$13]);
      }
      return d$$33;
    }, map:function(a$$72, c$$31, d$$34) {
      var f$$14;
      var g$$16;
      var h$$20 = [];
      var i$$94 = 0;
      var j$$22 = a$$72.length;
      var k$$9 = a$$72 instanceof e$$61 || j$$22 !== b$$9 && typeof j$$22 == "number" && (j$$22 > 0 && a$$72[0] && a$$72[j$$22 - 1] || j$$22 === 0 || e$$61.isArray(a$$72));
      if (k$$9) {
        for (;i$$94 < j$$22;i$$94++) {
          f$$14 = c$$31(a$$72[i$$94], i$$94, d$$34), f$$14 != null && (h$$20[h$$20.length] = f$$14);
        }
      } else {
        for (g$$16 in a$$72) {
          f$$14 = c$$31(a$$72[g$$16], g$$16, d$$34), f$$14 != null && (h$$20[h$$20.length] = f$$14);
        }
      }
      return h$$20.concat.apply([], h$$20);
    }, guid:1, proxy:function(a$$73, c$$32) {
      function g$$17() {
        return a$$73.apply(c$$32, f$$15.concat(F$$1.call(arguments)));
      }
      if (typeof c$$32 == "string") {
        var d$$35 = a$$73[c$$32];
        c$$32 = a$$73, a$$73 = d$$35;
      }
      if (!e$$61.isFunction(a$$73)) {
        return b$$9;
      }
      var f$$15 = F$$1.call(arguments, 2);
      g$$17.guid = a$$73.guid = a$$73.guid || g$$17.guid || e$$61.guid++;
      return g$$17;
    }, access:function(a$$74, c$$33, d$$36, f$$16, g$$18, h$$21, i$$95) {
      var j$$23;
      var k$$10 = d$$36 == null;
      var l$$26 = 0;
      var m$$7 = a$$74.length;
      if (d$$36 && typeof d$$36 == "object") {
        for (l$$26 in d$$36) {
          e$$61.access(a$$74, c$$33, l$$26, d$$36[l$$26], 1, h$$21, f$$16);
        }
        g$$18 = 1;
      } else {
        if (f$$16 !== b$$9) {
          j$$23 = i$$95 === b$$9 && e$$61.isFunction(f$$16), k$$10 && (j$$23 ? (j$$23 = c$$33, c$$33 = function(a$$75, b$$43, c$$34) {
            return j$$23.call(e$$61(a$$75), c$$34);
          }) : (c$$33.call(a$$74, f$$16), c$$33 = null));
          if (c$$33) {
            for (;l$$26 < m$$7;l$$26++) {
              c$$33(a$$74[l$$26], d$$36, j$$23 ? f$$16.call(a$$74[l$$26], l$$26, c$$33(a$$74[l$$26], d$$36)) : f$$16, i$$95);
            }
          }
          g$$18 = 1;
        }
      }
      return g$$18 ? a$$74 : k$$10 ? c$$33.call(a$$74) : m$$7 ? c$$33(a$$74[0], d$$36) : h$$21;
    }, now:function() {
      return (new Date).getTime();
    }, uaMatch:function(a$$76) {
      a$$76 = a$$76.toLowerCase();
      var b$$44 = r$$3.exec(a$$76) || s$$16.exec(a$$76) || t$$3.exec(a$$76) || a$$76.indexOf("compatible") < 0 && u$$2.exec(a$$76) || [];
      return {browser:b$$44[1] || "", version:b$$44[2] || "0"};
    }, sub:function() {
      function a$$77(b$$46, c$$35) {
        return new a$$77.fn.init(b$$46, c$$35);
      }
      e$$61.extend(!0, a$$77, this), a$$77.superclass = this, a$$77.fn = a$$77.prototype = this(), a$$77.fn.constructor = a$$77, a$$77.sub = this.sub, a$$77.fn.init = function(d$$37, f$$17) {
        f$$17 && f$$17 instanceof e$$61 && !(f$$17 instanceof a$$77) && (f$$17 = a$$77(f$$17));
        return e$$61.fn.init.call(this, d$$37, f$$17, b$$45);
      }, a$$77.fn.init.prototype = a$$77.fn;
      var b$$45 = a$$77(c$$5);
      return a$$77;
    }, browser:{}}), e$$61.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a$$78, b$$47) {
      I$$1["[object " + b$$47 + "]"] = b$$47.toLowerCase();
    }), z$$3 = e$$61.uaMatch(y$$50), z$$3.browser && (e$$61.browser[z$$3.browser] = !0, e$$61.browser.version = z$$3.version), e$$61.browser.webkit && (e$$61.browser.safari = !0), j$$19.test("\u00a0") && (k$$6 = /^[\s\xA0]+/, l$$24 = /[\s\xA0]+$/), h$$16 = e$$61(c$$5), c$$5.addEventListener ? B$$1 = function() {
      c$$5.removeEventListener("DOMContentLoaded", B$$1, !1), e$$61.ready();
    } : c$$5.attachEvent && (B$$1 = function() {
      c$$5.readyState === "complete" && (c$$5.detachEvent("onreadystatechange", B$$1), e$$61.ready());
    });
    return e$$61;
  }();
  var g = {};
  f$$4.Callbacks = function(a$$79) {
    function o$$3(b$$49, f$$18) {
      f$$18 = f$$18 || [], e$$64 = !a$$79.memory || [b$$49, f$$18], i$$96 = !0, j$$24 = !0, m$$8 = k$$11 || 0, k$$11 = 0, l$$27 = c$$36.length;
      for (;c$$36 && m$$8 < l$$27;m$$8++) {
        if (c$$36[m$$8].apply(b$$49, f$$18) === !1 && a$$79.stopOnFalse) {
          e$$64 = !0;
          break;
        }
      }
      j$$24 = !1, c$$36 && (a$$79.once ? e$$64 === !0 ? p$$25.disable() : c$$36 = [] : d$$38 && d$$38.length && (e$$64 = d$$38.shift(), p$$25.fireWith(e$$64[0], e$$64[1])));
    }
    function n$$60(b$$48) {
      var d$$39;
      var e$$65;
      var g$$19;
      var h$$22;
      var i$$97;
      d$$39 = 0, e$$65 = b$$48.length;
      for (;d$$39 < e$$65;d$$39++) {
        g$$19 = b$$48[d$$39], h$$22 = f$$4.type(g$$19), h$$22 === "array" ? n$$60(g$$19) : h$$22 === "function" && (!a$$79.unique || !p$$25.has(g$$19)) && c$$36.push(g$$19);
      }
    }
    a$$79 = a$$79 ? g[a$$79] || h$$9(a$$79) : {};
    var c$$36 = [];
    var d$$38 = [];
    var e$$64;
    var i$$96;
    var j$$24;
    var k$$11;
    var l$$27;
    var m$$8;
    var p$$25 = {add:function() {
      if (c$$36) {
        var a$$80 = c$$36.length;
        n$$60(arguments), j$$24 ? l$$27 = c$$36.length : e$$64 && e$$64 !== !0 && (k$$11 = a$$80, o$$3(e$$64[0], e$$64[1]));
      }
      return this;
    }, remove:function() {
      if (c$$36) {
        var b$$50 = arguments;
        var d$$40 = 0;
        var e$$66 = b$$50.length;
        for (;d$$40 < e$$66;d$$40++) {
          var f$$19 = 0;
          for (;f$$19 < c$$36.length;f$$19++) {
            if (b$$50[d$$40] === c$$36[f$$19]) {
              j$$24 && f$$19 <= l$$27 && (l$$27--, f$$19 <= m$$8 && m$$8--), c$$36.splice(f$$19--, 1);
              if (a$$79.unique) {
                break;
              }
            }
          }
        }
      }
      return this;
    }, has:function(a$$81) {
      if (c$$36) {
        var b$$51 = 0;
        var d$$41 = c$$36.length;
        for (;b$$51 < d$$41;b$$51++) {
          if (a$$81 === c$$36[b$$51]) {
            return !0;
          }
        }
      }
      return !1;
    }, empty:function() {
      c$$36 = [];
      return this;
    }, disable:function() {
      c$$36 = d$$38 = e$$64 = b$$9;
      return this;
    }, disabled:function() {
      return !c$$36;
    }, lock:function() {
      d$$38 = b$$9, (!e$$64 || e$$64 === !0) && p$$25.disable();
      return this;
    }, locked:function() {
      return !d$$38;
    }, fireWith:function(b$$52, c$$37) {
      d$$38 && (j$$24 ? a$$79.once || d$$38.push([b$$52, c$$37]) : (!a$$79.once || !e$$64) && o$$3(b$$52, c$$37));
      return this;
    }, fire:function() {
      p$$25.fireWith(this, arguments);
      return this;
    }, fired:function() {
      return !!i$$96;
    }};
    return p$$25;
  };
  var i$$85 = [].slice;
  f$$4.extend({Deferred:function(a$$82) {
    var b$$53 = f$$4.Callbacks("once memory");
    var c$$38 = f$$4.Callbacks("once memory");
    var d$$42 = f$$4.Callbacks("memory");
    var e$$67 = "pending";
    var g$$20 = {resolve:b$$53, reject:c$$38, notify:d$$42};
    var h$$23 = {done:b$$53.add, fail:c$$38.add, progress:d$$42.add, state:function() {
      return e$$67;
    }, isResolved:b$$53.fired, isRejected:c$$38.fired, then:function(a$$83, b$$54, c$$39) {
      i$$98.done(a$$83).fail(b$$54).progress(c$$39);
      return this;
    }, always:function() {
      i$$98.done.apply(i$$98, arguments).fail.apply(i$$98, arguments);
      return this;
    }, pipe:function(a$$84, b$$55, c$$40) {
      return f$$4.Deferred(function(d$$43) {
        f$$4.each({done:[a$$84, "resolve"], fail:[b$$55, "reject"], progress:[c$$40, "notify"]}, function(a$$85, b$$56) {
          var c$$41 = b$$56[0];
          var e$$68 = b$$56[1];
          var g$$21;
          f$$4.isFunction(c$$41) ? i$$98[a$$85](function() {
            g$$21 = c$$41.apply(this, arguments), g$$21 && f$$4.isFunction(g$$21.promise) ? g$$21.promise().then(d$$43.resolve, d$$43.reject, d$$43.notify) : d$$43[e$$68 + "With"](this === i$$98 ? d$$43 : this, [g$$21]);
          }) : i$$98[a$$85](d$$43[e$$68]);
        });
      }).promise();
    }, promise:function(a$$86) {
      if (a$$86 == null) {
        a$$86 = h$$23;
      } else {
        var b$$57;
        for (b$$57 in h$$23) {
          a$$86[b$$57] = h$$23[b$$57];
        }
      }
      return a$$86;
    }};
    var i$$98 = h$$23.promise({});
    var j$$25;
    for (j$$25 in g$$20) {
      i$$98[j$$25] = g$$20[j$$25].fire, i$$98[j$$25 + "With"] = g$$20[j$$25].fireWith;
    }
    i$$98.done(function() {
      e$$67 = "resolved";
    }, c$$38.disable, d$$42.lock).fail(function() {
      e$$67 = "rejected";
    }, b$$53.disable, d$$42.lock), a$$82 && a$$82.call(i$$98, i$$98);
    return i$$98;
  }, when:function(a$$87) {
    function m$$9(a$$88) {
      return function(b$$59) {
        e$$69[a$$88] = arguments.length > 1 ? i$$85.call(arguments, 0) : b$$59, j$$26.notifyWith(k$$12, e$$69);
      };
    }
    function l$$28(a$$89) {
      return function(c$$43) {
        b$$58[a$$89] = arguments.length > 1 ? i$$85.call(arguments, 0) : c$$43, --g$$22 || j$$26.resolveWith(j$$26, b$$58);
      };
    }
    var b$$58 = i$$85.call(arguments, 0);
    var c$$42 = 0;
    var d$$44 = b$$58.length;
    var e$$69 = Array(d$$44);
    var g$$22 = d$$44;
    var h$$24 = d$$44;
    var j$$26 = d$$44 <= 1 && a$$87 && f$$4.isFunction(a$$87.promise) ? a$$87 : f$$4.Deferred();
    var k$$12 = j$$26.promise();
    if (d$$44 > 1) {
      for (;c$$42 < d$$44;c$$42++) {
        b$$58[c$$42] && b$$58[c$$42].promise && f$$4.isFunction(b$$58[c$$42].promise) ? b$$58[c$$42].promise().then(l$$28(c$$42), j$$26.reject, m$$9(c$$42)) : --g$$22;
      }
      g$$22 || j$$26.resolveWith(j$$26, b$$58);
    } else {
      j$$26 !== a$$87 && j$$26.resolveWith(j$$26, d$$44 ? [a$$87] : []);
    }
    return k$$12;
  }}), f$$4.support = function() {
    var b$$60;
    var d$$45;
    var e$$70;
    var g$$23;
    var h$$25;
    var i$$99;
    var j$$27;
    var k$$13;
    var l$$29;
    var m$$10;
    var n$$61;
    var o$$4;
    var p$$26 = c$$5.createElement("div");
    var q$$2 = c$$5.documentElement;
    p$$26.setAttribute("className", "t"), p$$26.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d$$45 = p$$26.getElementsByTagName("*"), e$$70 = p$$26.getElementsByTagName("a")[0];
    if (!d$$45 || !d$$45.length || !e$$70) {
      return {};
    }
    g$$23 = c$$5.createElement("select"), h$$25 = g$$23.appendChild(c$$5.createElement("option")), i$$99 = p$$26.getElementsByTagName("input")[0], b$$60 = {leadingWhitespace:p$$26.firstChild.nodeType === 3, tbody:!p$$26.getElementsByTagName("tbody").length, htmlSerialize:!!p$$26.getElementsByTagName("link").length, style:/top/.test(e$$70.getAttribute("style")), hrefNormalized:e$$70.getAttribute("href") === "/a", opacity:/^0.55/.test(e$$70.style.opacity), cssFloat:!!e$$70.style.cssFloat, checkOn:i$$99.value === 
    "on", optSelected:h$$25.selected, getSetAttribute:p$$26.className !== "t", enctype:!!c$$5.createElement("form").enctype, html5Clone:c$$5.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", submitBubbles:!0, changeBubbles:!0, focusinBubbles:!1, deleteExpando:!0, noCloneEvent:!0, inlineBlockNeedsLayout:!1, shrinkWrapBlocks:!1, reliableMarginRight:!0, pixelMargin:!0}, f$$4.boxModel = b$$60.boxModel = c$$5.compatMode === "CSS1Compat", i$$99.checked = !0, b$$60.noCloneChecked = i$$99.cloneNode(!0).checked, 
    g$$23.disabled = !0, b$$60.optDisabled = !h$$25.disabled;
    try {
      delete p$$26.test;
    } catch (r$$4) {
      b$$60.deleteExpando = !1;
    }
    !p$$26.addEventListener && p$$26.attachEvent && p$$26.fireEvent && (p$$26.attachEvent("onclick", function() {
      b$$60.noCloneEvent = !1;
    }), p$$26.cloneNode(!0).fireEvent("onclick")), i$$99 = c$$5.createElement("input"), i$$99.value = "t", i$$99.setAttribute("type", "radio"), b$$60.radioValue = i$$99.value === "t", i$$99.setAttribute("checked", "checked"), i$$99.setAttribute("name", "t"), p$$26.appendChild(i$$99), j$$27 = c$$5.createDocumentFragment(), j$$27.appendChild(p$$26.lastChild), b$$60.checkClone = j$$27.cloneNode(!0).cloneNode(!0).lastChild.checked, b$$60.appendChecked = i$$99.checked, j$$27.removeChild(i$$99), j$$27.appendChild(p$$26);
    if (p$$26.attachEvent) {
      for (n$$61 in{submit:1, change:1, focusin:1}) {
        m$$10 = "on" + n$$61, o$$4 = m$$10 in p$$26, o$$4 || (p$$26.setAttribute(m$$10, "return;"), o$$4 = typeof p$$26[m$$10] == "function"), b$$60[n$$61 + "Bubbles"] = o$$4;
      }
    }
    j$$27.removeChild(p$$26), j$$27 = g$$23 = h$$25 = p$$26 = i$$99 = null, f$$4(function() {
      var d$$46;
      var e$$71;
      var g$$24;
      var h$$26;
      var i$$100;
      var j$$28;
      var l$$30;
      var m$$11;
      var n$$62;
      var q$$3;
      var r$$5;
      var s$$17;
      var t$$4;
      var u$$3 = c$$5.getElementsByTagName("body")[0];
      !u$$3 || (m$$11 = 1, t$$4 = "padding:0;margin:0;border:", r$$5 = "position:absolute;top:0;left:0;width:1px;height:1px;", s$$17 = t$$4 + "0;visibility:hidden;", n$$62 = "style='" + r$$5 + t$$4 + "5px solid #000;", q$$3 = "<div " + n$$62 + "display:block;'><div style='" + t$$4 + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n$$62 + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", d$$46 = c$$5.createElement("div"), d$$46.style.cssText = s$$17 + "width:0;height:0;position:static;top:0;margin-top:" + 
      m$$11 + "px", u$$3.insertBefore(d$$46, u$$3.firstChild), p$$26 = c$$5.createElement("div"), d$$46.appendChild(p$$26), p$$26.innerHTML = "<table><tr><td style='" + t$$4 + "0;display:none'></td><td>t</td></tr></table>", k$$13 = p$$26.getElementsByTagName("td"), o$$4 = k$$13[0].offsetHeight === 0, k$$13[0].style.display = "", k$$13[1].style.display = "none", b$$60.reliableHiddenOffsets = o$$4 && k$$13[0].offsetHeight === 0, a$$13.getComputedStyle && (p$$26.innerHTML = "", l$$30 = c$$5.createElement("div"), 
      l$$30.style.width = "0", l$$30.style.marginRight = "0", p$$26.style.width = "2px", p$$26.appendChild(l$$30), b$$60.reliableMarginRight = (parseInt((a$$13.getComputedStyle(l$$30, null) || {marginRight:0}).marginRight, 10) || 0) === 0), typeof p$$26.style.zoom != "undefined" && (p$$26.innerHTML = "", p$$26.style.width = p$$26.style.padding = "1px", p$$26.style.border = 0, p$$26.style.overflow = "hidden", p$$26.style.display = "inline", p$$26.style.zoom = 1, b$$60.inlineBlockNeedsLayout = p$$26.offsetWidth === 
      3, p$$26.style.display = "block", p$$26.style.overflow = "visible", p$$26.innerHTML = "<div style='width:5px;'></div>", b$$60.shrinkWrapBlocks = p$$26.offsetWidth !== 3), p$$26.style.cssText = r$$5 + s$$17, p$$26.innerHTML = q$$3, e$$71 = p$$26.firstChild, g$$24 = e$$71.firstChild, i$$100 = e$$71.nextSibling.firstChild.firstChild, j$$28 = {doesNotAddBorder:g$$24.offsetTop !== 5, doesAddBorderForTableAndCells:i$$100.offsetTop === 5}, g$$24.style.position = "fixed", g$$24.style.top = "20px", 
      j$$28.fixedPosition = g$$24.offsetTop === 20 || g$$24.offsetTop === 15, g$$24.style.position = g$$24.style.top = "", e$$71.style.overflow = "hidden", e$$71.style.position = "relative", j$$28.subtractsBorderForOverflowNotVisible = g$$24.offsetTop === -5, j$$28.doesNotIncludeMarginInBodyOffset = u$$3.offsetTop !== m$$11, a$$13.getComputedStyle && (p$$26.style.marginTop = "1%", b$$60.pixelMargin = (a$$13.getComputedStyle(p$$26, null) || {marginTop:0}).marginTop !== "1%"), typeof d$$46.style.zoom != 
      "undefined" && (d$$46.style.zoom = 1), u$$3.removeChild(d$$46), l$$30 = p$$26 = d$$46 = null, f$$4.extend(b$$60, j$$28));
    });
    return b$$60;
  }();
  var j$$14 = /^(?:\{.*\}|\[.*\])$/;
  var k$$2 = /([A-Z])/g;
  f$$4.extend({cache:{}, uuid:0, expando:"jQuery" + (f$$4.fn.jquery + Math.random()).replace(/\D/g, ""), noData:{embed:!0, object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet:!0}, hasData:function(a$$90) {
    a$$90 = a$$90.nodeType ? f$$4.cache[a$$90[f$$4.expando]] : a$$90[f$$4.expando];
    return !!a$$90 && !m$$4(a$$90);
  }, data:function(a$$91, c$$44, d$$47, e$$72) {
    if (!!f$$4.acceptData(a$$91)) {
      var g$$25;
      var h$$27;
      var i$$101;
      var j$$29 = f$$4.expando;
      var k$$14 = typeof c$$44 == "string";
      var l$$31 = a$$91.nodeType;
      var m$$12 = l$$31 ? f$$4.cache : a$$91;
      var n$$63 = l$$31 ? a$$91[j$$29] : a$$91[j$$29] && j$$29;
      var o$$5 = c$$44 === "events";
      if ((!n$$63 || !m$$12[n$$63] || !o$$5 && !e$$72 && !m$$12[n$$63].data) && k$$14 && d$$47 === b$$9) {
        return;
      }
      n$$63 || (l$$31 ? a$$91[j$$29] = n$$63 = ++f$$4.uuid : n$$63 = j$$29), m$$12[n$$63] || (m$$12[n$$63] = {}, l$$31 || (m$$12[n$$63].toJSON = f$$4.noop));
      if (typeof c$$44 == "object" || typeof c$$44 == "function") {
        e$$72 ? m$$12[n$$63] = f$$4.extend(m$$12[n$$63], c$$44) : m$$12[n$$63].data = f$$4.extend(m$$12[n$$63].data, c$$44);
      }
      g$$25 = h$$27 = m$$12[n$$63], e$$72 || (h$$27.data || (h$$27.data = {}), h$$27 = h$$27.data), d$$47 !== b$$9 && (h$$27[f$$4.camelCase(c$$44)] = d$$47);
      if (o$$5 && !h$$27[c$$44]) {
        return g$$25.events;
      }
      k$$14 ? (i$$101 = h$$27[c$$44], i$$101 == null && (i$$101 = h$$27[f$$4.camelCase(c$$44)])) : i$$101 = h$$27;
      return i$$101;
    }
  }, removeData:function(a$$92, b$$61, c$$45) {
    if (!!f$$4.acceptData(a$$92)) {
      var d$$48;
      var e$$73;
      var g$$26;
      var h$$28 = f$$4.expando;
      var i$$102 = a$$92.nodeType;
      var j$$30 = i$$102 ? f$$4.cache : a$$92;
      var k$$15 = i$$102 ? a$$92[h$$28] : h$$28;
      if (!j$$30[k$$15]) {
        return;
      }
      if (b$$61) {
        d$$48 = c$$45 ? j$$30[k$$15] : j$$30[k$$15].data;
        if (d$$48) {
          f$$4.isArray(b$$61) || (b$$61 in d$$48 ? b$$61 = [b$$61] : (b$$61 = f$$4.camelCase(b$$61), b$$61 in d$$48 ? b$$61 = [b$$61] : b$$61 = b$$61.split(" ")));
          e$$73 = 0, g$$26 = b$$61.length;
          for (;e$$73 < g$$26;e$$73++) {
            delete d$$48[b$$61[e$$73]];
          }
          if (!(c$$45 ? m$$4 : f$$4.isEmptyObject)(d$$48)) {
            return;
          }
        }
      }
      if (!c$$45) {
        delete j$$30[k$$15].data;
        if (!m$$4(j$$30[k$$15])) {
          return;
        }
      }
      f$$4.support.deleteExpando || !j$$30.setInterval ? delete j$$30[k$$15] : j$$30[k$$15] = null, i$$102 && (f$$4.support.deleteExpando ? delete a$$92[h$$28] : a$$92.removeAttribute ? a$$92.removeAttribute(h$$28) : a$$92[h$$28] = null);
    }
  }, _data:function(a$$93, b$$62, c$$46) {
    return f$$4.data(a$$93, b$$62, c$$46, !0);
  }, acceptData:function(a$$94) {
    if (a$$94.nodeName) {
      var b$$63 = f$$4.noData[a$$94.nodeName.toLowerCase()];
      if (b$$63) {
        return b$$63 !== !0 && a$$94.getAttribute("classid") === b$$63;
      }
    }
    return !0;
  }}), f$$4.fn.extend({data:function(a$$95, c$$47) {
    var d$$49;
    var e$$74;
    var g$$27;
    var h$$29;
    var i$$103;
    var j$$31 = this[0];
    var k$$16 = 0;
    var m$$13 = null;
    if (a$$95 === b$$9) {
      if (this.length) {
        m$$13 = f$$4.data(j$$31);
        if (j$$31.nodeType === 1 && !f$$4._data(j$$31, "parsedAttrs")) {
          g$$27 = j$$31.attributes;
          i$$103 = g$$27.length;
          for (;k$$16 < i$$103;k$$16++) {
            h$$29 = g$$27[k$$16].name, h$$29.indexOf("data-") === 0 && (h$$29 = f$$4.camelCase(h$$29.substring(5)), l$$21(j$$31, h$$29, m$$13[h$$29]));
          }
          f$$4._data(j$$31, "parsedAttrs", !0);
        }
      }
      return m$$13;
    }
    if (typeof a$$95 == "object") {
      return this.each(function() {
        f$$4.data(this, a$$95);
      });
    }
    d$$49 = a$$95.split(".", 2), d$$49[1] = d$$49[1] ? "." + d$$49[1] : "", e$$74 = d$$49[1] + "!";
    return f$$4.access(this, function(c$$48) {
      if (c$$48 === b$$9) {
        m$$13 = this.triggerHandler("getData" + e$$74, [d$$49[0]]), m$$13 === b$$9 && j$$31 && (m$$13 = f$$4.data(j$$31, a$$95), m$$13 = l$$21(j$$31, a$$95, m$$13));
        return m$$13 === b$$9 && d$$49[1] ? this.data(d$$49[0]) : m$$13;
      }
      d$$49[1] = c$$48, this.each(function() {
        var b$$64 = f$$4(this);
        b$$64.triggerHandler("setData" + e$$74, d$$49), f$$4.data(this, a$$95, c$$48), b$$64.triggerHandler("changeData" + e$$74, d$$49);
      });
    }, null, c$$47, arguments.length > 1, null, !1);
  }, removeData:function(a$$96) {
    return this.each(function() {
      f$$4.removeData(this, a$$96);
    });
  }}), f$$4.extend({_mark:function(a$$97, b$$65) {
    a$$97 && (b$$65 = (b$$65 || "fx") + "mark", f$$4._data(a$$97, b$$65, (f$$4._data(a$$97, b$$65) || 0) + 1));
  }, _unmark:function(a$$98, b$$66, c$$49) {
    a$$98 !== !0 && (c$$49 = b$$66, b$$66 = a$$98, a$$98 = !1);
    if (b$$66) {
      c$$49 = c$$49 || "fx";
      var d$$50 = c$$49 + "mark";
      var e$$75 = a$$98 ? 0 : (f$$4._data(b$$66, d$$50) || 1) - 1;
      e$$75 ? f$$4._data(b$$66, d$$50, e$$75) : (f$$4.removeData(b$$66, d$$50, !0), n$$57(b$$66, c$$49, "mark"));
    }
  }, queue:function(a$$99, b$$67, c$$50) {
    var d$$51;
    if (a$$99) {
      b$$67 = (b$$67 || "fx") + "queue", d$$51 = f$$4._data(a$$99, b$$67), c$$50 && (!d$$51 || f$$4.isArray(c$$50) ? d$$51 = f$$4._data(a$$99, b$$67, f$$4.makeArray(c$$50)) : d$$51.push(c$$50));
      return d$$51 || [];
    }
  }, dequeue:function(a$$100, b$$68) {
    b$$68 = b$$68 || "fx";
    var c$$51 = f$$4.queue(a$$100, b$$68);
    var d$$52 = c$$51.shift();
    var e$$76 = {};
    d$$52 === "inprogress" && (d$$52 = c$$51.shift()), d$$52 && (b$$68 === "fx" && c$$51.unshift("inprogress"), f$$4._data(a$$100, b$$68 + ".run", e$$76), d$$52.call(a$$100, function() {
      f$$4.dequeue(a$$100, b$$68);
    }, e$$76)), c$$51.length || (f$$4.removeData(a$$100, b$$68 + "queue " + b$$68 + ".run", !0), n$$57(a$$100, b$$68, "queue"));
  }}), f$$4.fn.extend({queue:function(a$$101, c$$52) {
    var d$$53 = 2;
    typeof a$$101 != "string" && (c$$52 = a$$101, a$$101 = "fx", d$$53--);
    if (arguments.length < d$$53) {
      return f$$4.queue(this[0], a$$101);
    }
    return c$$52 === b$$9 ? this : this.each(function() {
      var b$$69 = f$$4.queue(this, a$$101, c$$52);
      a$$101 === "fx" && b$$69[0] !== "inprogress" && f$$4.dequeue(this, a$$101);
    });
  }, dequeue:function(a$$102) {
    return this.each(function() {
      f$$4.dequeue(this, a$$102);
    });
  }, delay:function(a$$103, b$$70) {
    a$$103 = f$$4.fx ? f$$4.fx.speeds[a$$103] || a$$103 : a$$103, b$$70 = b$$70 || "fx";
    return this.queue(b$$70, function(b$$71, c$$53) {
      var d$$54 = setTimeout(b$$71, a$$103);
      c$$53.stop = function() {
        clearTimeout(d$$54);
      };
    });
  }, clearQueue:function(a$$104) {
    return this.queue(a$$104 || "fx", []);
  }, promise:function(a$$105, c$$54) {
    function m$$14() {
      --h$$30 || d$$55.resolveWith(e$$77, [e$$77]);
    }
    typeof a$$105 != "string" && (c$$54 = a$$105, a$$105 = b$$9), a$$105 = a$$105 || "fx";
    var d$$55 = f$$4.Deferred();
    var e$$77 = this;
    var g$$28 = e$$77.length;
    var h$$30 = 1;
    var i$$104 = a$$105 + "defer";
    var j$$32 = a$$105 + "queue";
    var k$$17 = a$$105 + "mark";
    var l$$32;
    for (;g$$28--;) {
      if (l$$32 = f$$4.data(e$$77[g$$28], i$$104, b$$9, !0) || (f$$4.data(e$$77[g$$28], j$$32, b$$9, !0) || f$$4.data(e$$77[g$$28], k$$17, b$$9, !0)) && f$$4.data(e$$77[g$$28], i$$104, f$$4.Callbacks("once memory"), !0)) {
        h$$30++, l$$32.add(m$$14);
      }
    }
    m$$14();
    return d$$55.promise(c$$54);
  }});
  var o = /[\n\t\r]/g;
  var p$$22 = /\s+/;
  var q = /\r/g;
  var r$$2 = /^(?:button|input)$/i;
  var s$$15 = /^(?:button|input|object|select|textarea)$/i;
  var t$$2 = /^a(?:rea)?$/i;
  var u$$1 = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
  var v$$4 = f$$4.support.getSetAttribute;
  var w$$11;
  var x$$67;
  var y$$49;
  f$$4.fn.extend({attr:function(a$$106, b$$72) {
    return f$$4.access(this, f$$4.attr, a$$106, b$$72, arguments.length > 1);
  }, removeAttr:function(a$$107) {
    return this.each(function() {
      f$$4.removeAttr(this, a$$107);
    });
  }, prop:function(a$$108, b$$73) {
    return f$$4.access(this, f$$4.prop, a$$108, b$$73, arguments.length > 1);
  }, removeProp:function(a$$109) {
    a$$109 = f$$4.propFix[a$$109] || a$$109;
    return this.each(function() {
      try {
        this[a$$109] = b$$9, delete this[a$$109];
      } catch (c$$55) {
      }
    });
  }, addClass:function(a$$110) {
    var b$$74;
    var c$$56;
    var d$$56;
    var e$$78;
    var g$$29;
    var h$$31;
    var i$$105;
    if (f$$4.isFunction(a$$110)) {
      return this.each(function(b$$75) {
        f$$4(this).addClass(a$$110.call(this, b$$75, this.className));
      });
    }
    if (a$$110 && typeof a$$110 == "string") {
      b$$74 = a$$110.split(p$$22);
      c$$56 = 0, d$$56 = this.length;
      for (;c$$56 < d$$56;c$$56++) {
        e$$78 = this[c$$56];
        if (e$$78.nodeType === 1) {
          if (!e$$78.className && b$$74.length === 1) {
            e$$78.className = a$$110;
          } else {
            g$$29 = " " + e$$78.className + " ";
            h$$31 = 0, i$$105 = b$$74.length;
            for (;h$$31 < i$$105;h$$31++) {
              ~g$$29.indexOf(" " + b$$74[h$$31] + " ") || (g$$29 += b$$74[h$$31] + " ");
            }
            e$$78.className = f$$4.trim(g$$29);
          }
        }
      }
    }
    return this;
  }, removeClass:function(a$$111) {
    var c$$57;
    var d$$57;
    var e$$79;
    var g$$30;
    var h$$32;
    var i$$106;
    var j$$33;
    if (f$$4.isFunction(a$$111)) {
      return this.each(function(b$$76) {
        f$$4(this).removeClass(a$$111.call(this, b$$76, this.className));
      });
    }
    if (a$$111 && typeof a$$111 == "string" || a$$111 === b$$9) {
      c$$57 = (a$$111 || "").split(p$$22);
      d$$57 = 0, e$$79 = this.length;
      for (;d$$57 < e$$79;d$$57++) {
        g$$30 = this[d$$57];
        if (g$$30.nodeType === 1 && g$$30.className) {
          if (a$$111) {
            h$$32 = (" " + g$$30.className + " ").replace(o, " ");
            i$$106 = 0, j$$33 = c$$57.length;
            for (;i$$106 < j$$33;i$$106++) {
              h$$32 = h$$32.replace(" " + c$$57[i$$106] + " ", " ");
            }
            g$$30.className = f$$4.trim(h$$32);
          } else {
            g$$30.className = "";
          }
        }
      }
    }
    return this;
  }, toggleClass:function(a$$112, b$$77) {
    var c$$58 = typeof a$$112;
    var d$$58 = typeof b$$77 == "boolean";
    if (f$$4.isFunction(a$$112)) {
      return this.each(function(c$$59) {
        f$$4(this).toggleClass(a$$112.call(this, c$$59, this.className, b$$77), b$$77);
      });
    }
    return this.each(function() {
      if (c$$58 === "string") {
        var e$$80;
        var g$$31 = 0;
        var h$$33 = f$$4(this);
        var i$$107 = b$$77;
        var j$$34 = a$$112.split(p$$22);
        for (;e$$80 = j$$34[g$$31++];) {
          i$$107 = d$$58 ? i$$107 : !h$$33.hasClass(e$$80), h$$33[i$$107 ? "addClass" : "removeClass"](e$$80);
        }
      } else {
        if (c$$58 === "undefined" || c$$58 === "boolean") {
          this.className && f$$4._data(this, "__className__", this.className), this.className = this.className || a$$112 === !1 ? "" : f$$4._data(this, "__className__") || "";
        }
      }
    });
  }, hasClass:function(a$$113) {
    var b$$78 = " " + a$$113 + " ";
    var c$$60 = 0;
    var d$$59 = this.length;
    for (;c$$60 < d$$59;c$$60++) {
      if (this[c$$60].nodeType === 1 && (" " + this[c$$60].className + " ").replace(o, " ").indexOf(b$$78) > -1) {
        return !0;
      }
    }
    return !1;
  }, val:function(a$$114) {
    var c$$61;
    var d$$60;
    var e$$81;
    var g$$32 = this[0];
    if (!!arguments.length) {
      e$$81 = f$$4.isFunction(a$$114);
      return this.each(function(d$$61) {
        var g$$33 = f$$4(this);
        var h$$34;
        if (this.nodeType === 1) {
          e$$81 ? h$$34 = a$$114.call(this, d$$61, g$$33.val()) : h$$34 = a$$114, h$$34 == null ? h$$34 = "" : typeof h$$34 == "number" ? h$$34 += "" : f$$4.isArray(h$$34) && (h$$34 = f$$4.map(h$$34, function(a$$115) {
            return a$$115 == null ? "" : a$$115 + "";
          })), c$$61 = f$$4.valHooks[this.type] || f$$4.valHooks[this.nodeName.toLowerCase()];
          if (!c$$61 || !("set" in c$$61) || c$$61.set(this, h$$34, "value") === b$$9) {
            this.value = h$$34;
          }
        }
      });
    }
    if (g$$32) {
      c$$61 = f$$4.valHooks[g$$32.type] || f$$4.valHooks[g$$32.nodeName.toLowerCase()];
      if (c$$61 && "get" in c$$61 && (d$$60 = c$$61.get(g$$32, "value")) !== b$$9) {
        return d$$60;
      }
      d$$60 = g$$32.value;
      return typeof d$$60 == "string" ? d$$60.replace(q, "") : d$$60 == null ? "" : d$$60;
    }
  }}), f$$4.extend({valHooks:{option:{get:function(a$$116) {
    var b$$79 = a$$116.attributes.value;
    return !b$$79 || b$$79.specified ? a$$116.value : a$$116.text;
  }}, select:{get:function(a$$117) {
    var b$$80;
    var c$$62;
    var d$$62;
    var e$$82;
    var g$$34 = a$$117.selectedIndex;
    var h$$35 = [];
    var i$$108 = a$$117.options;
    var j$$35 = a$$117.type === "select-one";
    if (g$$34 < 0) {
      return null;
    }
    c$$62 = j$$35 ? g$$34 : 0, d$$62 = j$$35 ? g$$34 + 1 : i$$108.length;
    for (;c$$62 < d$$62;c$$62++) {
      e$$82 = i$$108[c$$62];
      if (e$$82.selected && (f$$4.support.optDisabled ? !e$$82.disabled : e$$82.getAttribute("disabled") === null) && (!e$$82.parentNode.disabled || !f$$4.nodeName(e$$82.parentNode, "optgroup"))) {
        b$$80 = f$$4(e$$82).val();
        if (j$$35) {
          return b$$80;
        }
        h$$35.push(b$$80);
      }
    }
    if (j$$35 && !h$$35.length && i$$108.length) {
      return f$$4(i$$108[g$$34]).val();
    }
    return h$$35;
  }, set:function(a$$118, b$$81) {
    var c$$63 = f$$4.makeArray(b$$81);
    f$$4(a$$118).find("option").each(function() {
      this.selected = f$$4.inArray(f$$4(this).val(), c$$63) >= 0;
    }), c$$63.length || (a$$118.selectedIndex = -1);
    return c$$63;
  }}}, attrFn:{val:!0, css:!0, html:!0, text:!0, data:!0, width:!0, height:!0, offset:!0}, attr:function(a$$119, c$$64, d$$63, e$$83) {
    var g$$35;
    var h$$36;
    var i$$109;
    var j$$36 = a$$119.nodeType;
    if (!!a$$119 && j$$36 !== 3 && j$$36 !== 8 && j$$36 !== 2) {
      if (e$$83 && c$$64 in f$$4.attrFn) {
        return f$$4(a$$119)[c$$64](d$$63);
      }
      if (typeof a$$119.getAttribute == "undefined") {
        return f$$4.prop(a$$119, c$$64, d$$63);
      }
      i$$109 = j$$36 !== 1 || !f$$4.isXMLDoc(a$$119), i$$109 && (c$$64 = c$$64.toLowerCase(), h$$36 = f$$4.attrHooks[c$$64] || (u$$1.test(c$$64) ? x$$67 : w$$11));
      if (d$$63 !== b$$9) {
        if (d$$63 === null) {
          f$$4.removeAttr(a$$119, c$$64);
          return;
        }
        if (h$$36 && "set" in h$$36 && i$$109 && (g$$35 = h$$36.set(a$$119, d$$63, c$$64)) !== b$$9) {
          return g$$35;
        }
        a$$119.setAttribute(c$$64, "" + d$$63);
        return d$$63;
      }
      if (h$$36 && "get" in h$$36 && i$$109 && (g$$35 = h$$36.get(a$$119, c$$64)) !== null) {
        return g$$35;
      }
      g$$35 = a$$119.getAttribute(c$$64);
      return g$$35 === null ? b$$9 : g$$35;
    }
  }, removeAttr:function(a$$120, b$$82) {
    var c$$65;
    var d$$64;
    var e$$84;
    var g$$36;
    var h$$37;
    var i$$110 = 0;
    if (b$$82 && a$$120.nodeType === 1) {
      d$$64 = b$$82.toLowerCase().split(p$$22), g$$36 = d$$64.length;
      for (;i$$110 < g$$36;i$$110++) {
        e$$84 = d$$64[i$$110], e$$84 && (c$$65 = f$$4.propFix[e$$84] || e$$84, h$$37 = u$$1.test(e$$84), h$$37 || f$$4.attr(a$$120, e$$84, ""), a$$120.removeAttribute(v$$4 ? e$$84 : c$$65), h$$37 && c$$65 in a$$120 && (a$$120[c$$65] = !1));
      }
    }
  }, attrHooks:{type:{set:function(a$$121, b$$83) {
    if (r$$2.test(a$$121.nodeName) && a$$121.parentNode) {
      f$$4.error("type property can't be changed");
    } else {
      if (!f$$4.support.radioValue && b$$83 === "radio" && f$$4.nodeName(a$$121, "input")) {
        var c$$66 = a$$121.value;
        a$$121.setAttribute("type", b$$83), c$$66 && (a$$121.value = c$$66);
        return b$$83;
      }
    }
  }}, value:{get:function(a$$122, b$$84) {
    if (w$$11 && f$$4.nodeName(a$$122, "button")) {
      return w$$11.get(a$$122, b$$84);
    }
    return b$$84 in a$$122 ? a$$122.value : null;
  }, set:function(a$$123, b$$85, c$$67) {
    if (w$$11 && f$$4.nodeName(a$$123, "button")) {
      return w$$11.set(a$$123, b$$85, c$$67);
    }
    a$$123.value = b$$85;
  }}}, propFix:{tabindex:"tabIndex", readonly:"readOnly", "for":"htmlFor", "class":"className", maxlength:"maxLength", cellspacing:"cellSpacing", cellpadding:"cellPadding", rowspan:"rowSpan", colspan:"colSpan", usemap:"useMap", frameborder:"frameBorder", contenteditable:"contentEditable"}, prop:function(a$$124, c$$68, d$$65) {
    var e$$85;
    var g$$37;
    var h$$38;
    var i$$111 = a$$124.nodeType;
    if (!!a$$124 && i$$111 !== 3 && i$$111 !== 8 && i$$111 !== 2) {
      h$$38 = i$$111 !== 1 || !f$$4.isXMLDoc(a$$124), h$$38 && (c$$68 = f$$4.propFix[c$$68] || c$$68, g$$37 = f$$4.propHooks[c$$68]);
      return d$$65 !== b$$9 ? g$$37 && "set" in g$$37 && (e$$85 = g$$37.set(a$$124, d$$65, c$$68)) !== b$$9 ? e$$85 : a$$124[c$$68] = d$$65 : g$$37 && "get" in g$$37 && (e$$85 = g$$37.get(a$$124, c$$68)) !== null ? e$$85 : a$$124[c$$68];
    }
  }, propHooks:{tabIndex:{get:function(a$$125) {
    var c$$69 = a$$125.getAttributeNode("tabindex");
    return c$$69 && c$$69.specified ? parseInt(c$$69.value, 10) : s$$15.test(a$$125.nodeName) || t$$2.test(a$$125.nodeName) && a$$125.href ? 0 : b$$9;
  }}}}), f$$4.attrHooks.tabindex = f$$4.propHooks.tabIndex, x$$67 = {get:function(a$$126, c$$70) {
    var d$$66;
    var e$$86 = f$$4.prop(a$$126, c$$70);
    return e$$86 === !0 || typeof e$$86 != "boolean" && (d$$66 = a$$126.getAttributeNode(c$$70)) && d$$66.nodeValue !== !1 ? c$$70.toLowerCase() : b$$9;
  }, set:function(a$$127, b$$86, c$$71) {
    var d$$67;
    b$$86 === !1 ? f$$4.removeAttr(a$$127, c$$71) : (d$$67 = f$$4.propFix[c$$71] || c$$71, d$$67 in a$$127 && (a$$127[d$$67] = !0), a$$127.setAttribute(c$$71, c$$71.toLowerCase()));
    return c$$71;
  }}, v$$4 || (y$$49 = {name:!0, id:!0, coords:!0}, w$$11 = f$$4.valHooks.button = {get:function(a$$128, c$$72) {
    var d$$68;
    d$$68 = a$$128.getAttributeNode(c$$72);
    return d$$68 && (y$$49[c$$72] ? d$$68.nodeValue !== "" : d$$68.specified) ? d$$68.nodeValue : b$$9;
  }, set:function(a$$129, b$$87, d$$69) {
    var e$$87 = a$$129.getAttributeNode(d$$69);
    e$$87 || (e$$87 = c$$5.createAttribute(d$$69), a$$129.setAttributeNode(e$$87));
    return e$$87.nodeValue = b$$87 + "";
  }}, f$$4.attrHooks.tabindex.set = w$$11.set, f$$4.each(["width", "height"], function(a$$130, b$$88) {
    f$$4.attrHooks[b$$88] = f$$4.extend(f$$4.attrHooks[b$$88], {set:function(a$$131, c$$73) {
      if (c$$73 === "") {
        a$$131.setAttribute(b$$88, "auto");
        return c$$73;
      }
    }});
  }), f$$4.attrHooks.contenteditable = {get:w$$11.get, set:function(a$$132, b$$89, c$$74) {
    b$$89 === "" && (b$$89 = "false"), w$$11.set(a$$132, b$$89, c$$74);
  }}), f$$4.support.hrefNormalized || f$$4.each(["href", "src", "width", "height"], function(a$$133, c$$75) {
    f$$4.attrHooks[c$$75] = f$$4.extend(f$$4.attrHooks[c$$75], {get:function(a$$134) {
      var d$$70 = a$$134.getAttribute(c$$75, 2);
      return d$$70 === null ? b$$9 : d$$70;
    }});
  }), f$$4.support.style || (f$$4.attrHooks.style = {get:function(a$$135) {
    return a$$135.style.cssText.toLowerCase() || b$$9;
  }, set:function(a$$136, b$$90) {
    return a$$136.style.cssText = "" + b$$90;
  }}), f$$4.support.optSelected || (f$$4.propHooks.selected = f$$4.extend(f$$4.propHooks.selected, {get:function(a$$137) {
    var b$$91 = a$$137.parentNode;
    return null;
  }})), f$$4.support.enctype || (f$$4.propFix.enctype = "encoding"), f$$4.support.checkOn || f$$4.each(["radio", "checkbox"], function() {
    f$$4.valHooks[this] = {get:function(a$$138) {
      return a$$138.getAttribute("value") === null ? "on" : a$$138.value;
    }};
  }), f$$4.each(["radio", "checkbox"], function() {
    f$$4.valHooks[this] = f$$4.extend(f$$4.valHooks[this], {set:function(a$$139, b$$92) {
      if (f$$4.isArray(b$$92)) {
        return a$$139.checked = f$$4.inArray(f$$4(a$$139).val(), b$$92) >= 0;
      }
    }});
  });
  var z$$2 = /^(?:textarea|input|select)$/i;
  var A = /^([^\.]*)?(?:\.(.+))?$/;
  var B = /(?:^|\s)hover(\.\S+)?\b/;
  var C = /^key/;
  var D = /^(?:mouse|contextmenu)|click/;
  var E = /^(?:focusinfocus|focusoutblur)$/;
  var F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/;
  f$$4.event = {add:function(a$$143, c$$77, d$$71, e$$88, g$$38) {
    var h$$39;
    var i$$112;
    var j$$37;
    var k$$18;
    var l$$33;
    var m$$15;
    var n$$64;
    var o$$6;
    var p$$27;
    var q$$4;
    var r$$6;
    var s$$18;
    if (!(a$$143.nodeType === 3 || a$$143.nodeType === 8 || !c$$77 || !d$$71 || !(h$$39 = f$$4._data(a$$143)))) {
      d$$71.handler && (p$$27 = d$$71, d$$71 = p$$27.handler, g$$38 = p$$27.selector), d$$71.guid || (d$$71.guid = f$$4.guid++), j$$37 = h$$39.events, j$$37 || (h$$39.events = j$$37 = {}), i$$112 = h$$39.handle, i$$112 || (h$$39.handle = i$$112 = function(a$$144) {
        return typeof f$$4 != "undefined" && (!a$$144 || f$$4.event.triggered !== a$$144.type) ? f$$4.event.dispatch.apply(i$$112.elem, arguments) : b$$9;
      }, i$$112.elem = a$$143), c$$77 = f$$4.trim(I(c$$77)).split(" ");
      k$$18 = 0;
      for (;k$$18 < c$$77.length;k$$18++) {
        l$$33 = A.exec(c$$77[k$$18]) || [], m$$15 = l$$33[1], n$$64 = (l$$33[2] || "").split(".").sort(), s$$18 = f$$4.event.special[m$$15] || {}, m$$15 = (g$$38 ? s$$18.delegateType : s$$18.bindType) || m$$15, s$$18 = f$$4.event.special[m$$15] || {}, o$$6 = f$$4.extend({type:m$$15, origType:l$$33[1], data:e$$88, handler:d$$71, guid:d$$71.guid, selector:g$$38, quick:g$$38 && G(g$$38), namespace:n$$64.join(".")}, p$$27), r$$6 = j$$37[m$$15];
        if (!r$$6) {
          r$$6 = j$$37[m$$15] = [], r$$6.delegateCount = 0;
          if (!s$$18.setup || s$$18.setup.call(a$$143, e$$88, n$$64, i$$112) === !1) {
            a$$143.addEventListener ? a$$143.addEventListener(m$$15, i$$112, !1) : a$$143.attachEvent && a$$143.attachEvent("on" + m$$15, i$$112);
          }
        }
        s$$18.add && (s$$18.add.call(a$$143, o$$6), o$$6.handler.guid || (o$$6.handler.guid = d$$71.guid)), g$$38 ? r$$6.splice(r$$6.delegateCount++, 0, o$$6) : r$$6.push(o$$6), f$$4.event.global[m$$15] = !0;
      }
      a$$143 = null;
    }
  }, global:{}, remove:function(a$$145, b$$95, c$$78, d$$72, e$$89) {
    var g$$39 = f$$4.hasData(a$$145) && f$$4._data(a$$145);
    var h$$40;
    var i$$113;
    var j$$38;
    var k$$19;
    var l$$34;
    var m$$16;
    var n$$65;
    var o$$7;
    var p$$28;
    var q$$5;
    var r$$7;
    var s$$19;
    if (!!g$$39 && !!(o$$7 = g$$39.events)) {
      b$$95 = f$$4.trim(I(b$$95 || "")).split(" ");
      h$$40 = 0;
      for (;h$$40 < b$$95.length;h$$40++) {
        i$$113 = A.exec(b$$95[h$$40]) || [], j$$38 = k$$19 = i$$113[1], l$$34 = i$$113[2];
        if (!j$$38) {
          for (j$$38 in o$$7) {
            f$$4.event.remove(a$$145, j$$38 + b$$95[h$$40], c$$78, d$$72, !0);
          }
          continue;
        }
        p$$28 = f$$4.event.special[j$$38] || {}, j$$38 = (d$$72 ? p$$28.delegateType : p$$28.bindType) || j$$38, r$$7 = o$$7[j$$38] || [], m$$16 = r$$7.length, l$$34 = l$$34 ? new RegExp("(^|\\.)" + l$$34.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
        n$$65 = 0;
        for (;n$$65 < r$$7.length;n$$65++) {
          s$$19 = r$$7[n$$65], (e$$89 || k$$19 === s$$19.origType) && (!c$$78 || c$$78.guid === s$$19.guid) && (!l$$34 || l$$34.test(s$$19.namespace)) && (!d$$72 || d$$72 === s$$19.selector || d$$72 === "**" && s$$19.selector) && (r$$7.splice(n$$65--, 1), s$$19.selector && r$$7.delegateCount--, p$$28.remove && p$$28.remove.call(a$$145, s$$19));
        }
        r$$7.length === 0 && m$$16 !== r$$7.length && ((!p$$28.teardown || p$$28.teardown.call(a$$145, l$$34) === !1) && f$$4.removeEvent(a$$145, j$$38, g$$39.handle), delete o$$7[j$$38]);
      }
      f$$4.isEmptyObject(o$$7) && (q$$5 = g$$39.handle, q$$5 && (q$$5.elem = null), f$$4.removeData(a$$145, ["events", "handle"], !0));
    }
  }, customEvent:{getData:!0, setData:!0, changeData:!0}, trigger:function(c$$79, d$$73, e$$90, g$$40) {
    if (!e$$90 || e$$90.nodeType !== 3 && e$$90.nodeType !== 8) {
      var h$$41 = c$$79.type || c$$79;
      var i$$114 = [];
      var j$$39;
      var k$$20;
      var l$$35;
      var m$$17;
      var n$$66;
      var o$$8;
      var p$$29;
      var q$$6;
      var r$$8;
      var s$$20;
      if (E.test(h$$41 + f$$4.event.triggered)) {
        return;
      }
      h$$41.indexOf("!") >= 0 && (h$$41 = h$$41.slice(0, -1), k$$20 = !0), h$$41.indexOf(".") >= 0 && (i$$114 = h$$41.split("."), h$$41 = i$$114.shift(), i$$114.sort());
      if ((!e$$90 || f$$4.event.customEvent[h$$41]) && !f$$4.event.global[h$$41]) {
        return;
      }
      c$$79 = typeof c$$79 == "object" ? c$$79[f$$4.expando] ? c$$79 : new f$$4.Event(h$$41, c$$79) : new f$$4.Event(h$$41), c$$79.type = h$$41, c$$79.isTrigger = !0, c$$79.exclusive = k$$20, c$$79.namespace = i$$114.join("."), c$$79.namespace_re = c$$79.namespace ? new RegExp("(^|\\.)" + i$$114.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o$$8 = h$$41.indexOf(":") < 0 ? "on" + h$$41 : "";
      if (!e$$90) {
        j$$39 = f$$4.cache;
        for (l$$35 in j$$39) {
          j$$39[l$$35].events && j$$39[l$$35].events[h$$41] && f$$4.event.trigger(c$$79, d$$73, j$$39[l$$35].handle.elem, !0);
        }
        return;
      }
      c$$79.result = b$$9, c$$79.target || (c$$79.target = e$$90), d$$73 = d$$73 != null ? f$$4.makeArray(d$$73) : [], d$$73.unshift(c$$79), p$$29 = f$$4.event.special[h$$41] || {};
      if (p$$29.trigger && p$$29.trigger.apply(e$$90, d$$73) === !1) {
        return;
      }
      r$$8 = [[e$$90, p$$29.bindType || h$$41]];
      if (!g$$40 && !p$$29.noBubble && !f$$4.isWindow(e$$90)) {
        s$$20 = p$$29.delegateType || h$$41, m$$17 = E.test(s$$20 + h$$41) ? e$$90 : e$$90.parentNode, n$$66 = null;
        for (;m$$17;m$$17 = m$$17.parentNode) {
          r$$8.push([m$$17, s$$20]), n$$66 = m$$17;
        }
        n$$66 && n$$66 === e$$90.ownerDocument && r$$8.push([n$$66.defaultView || n$$66.parentWindow || a$$13, s$$20]);
      }
      l$$35 = 0;
      for (;l$$35 < r$$8.length && !c$$79.isPropagationStopped();l$$35++) {
        m$$17 = r$$8[l$$35][0], c$$79.type = r$$8[l$$35][1], q$$6 = (f$$4._data(m$$17, "events") || {})[c$$79.type] && f$$4._data(m$$17, "handle"), q$$6 && q$$6.apply(m$$17, d$$73), q$$6 = o$$8 && m$$17[o$$8], q$$6 && f$$4.acceptData(m$$17) && q$$6.apply(m$$17, d$$73) === !1 && c$$79.preventDefault();
      }
      c$$79.type = h$$41, !g$$40 && !c$$79.isDefaultPrevented() && (!p$$29._default || p$$29._default.apply(e$$90.ownerDocument, d$$73) === !1) && (h$$41 !== "click" || !f$$4.nodeName(e$$90, "a")) && f$$4.acceptData(e$$90) && o$$8 && e$$90[h$$41] && (h$$41 !== "focus" && h$$41 !== "blur" || c$$79.target.offsetWidth !== 0) && !f$$4.isWindow(e$$90) && (n$$66 = e$$90[o$$8], n$$66 && (e$$90[o$$8] = null), f$$4.event.triggered = h$$41, e$$90[h$$41](), f$$4.event.triggered = b$$9, n$$66 && (e$$90[o$$8] = 
      n$$66));
      return c$$79.result;
    }
  }, dispatch:function(c$$80) {
    c$$80 = f$$4.event.fix(c$$80 || a$$13.event);
    var d$$74 = (f$$4._data(this, "events") || {})[c$$80.type] || [];
    var e$$91 = d$$74.delegateCount;
    var g$$41 = [].slice.call(arguments, 0);
    var h$$42 = !c$$80.exclusive && !c$$80.namespace;
    var i$$115 = f$$4.event.special[c$$80.type] || {};
    var j$$40 = [];
    var k$$21;
    var l$$36;
    var m$$18;
    var n$$67;
    var o$$9;
    var p$$30;
    var q$$7;
    var r$$9;
    var s$$21;
    var t$$5;
    var u$$4;
    g$$41[0] = c$$80, c$$80.delegateTarget = this;
    if (!i$$115.preDispatch || i$$115.preDispatch.call(this, c$$80) !== !1) {
      if (e$$91 && (!c$$80.button || c$$80.type !== "click")) {
        n$$67 = f$$4(this), n$$67.context = this.ownerDocument || this;
        m$$18 = c$$80.target;
        for (;m$$18 != this;m$$18 = m$$18.parentNode || this) {
          if (m$$18.disabled !== !0) {
            p$$30 = {}, r$$9 = [], n$$67[0] = m$$18;
            k$$21 = 0;
            for (;k$$21 < e$$91;k$$21++) {
              var JSCompiler_temp_const$$4 = (s$$21 = d$$74[k$$21], t$$5 = s$$21.selector);
              var JSCompiler_temp$$5;
              if (JSCompiler_temp$$5 = p$$30[t$$5] === b$$9) {
                var JSCompiler_temp_const$$7 = p$$30;
                var JSCompiler_temp_const$$6 = t$$5;
                var JSCompiler_temp$$8;
                if (s$$21.quick) {
                  var b$$inline_26 = s$$21.quick;
                  var c$$inline_27 = m$$18.attributes || {};
                  JSCompiler_temp$$8 = (!b$$inline_26[1] || m$$18.nodeName.toLowerCase() === b$$inline_26[1]) && (!b$$inline_26[2] || (c$$inline_27.id || {}).value === b$$inline_26[2]) && (!b$$inline_26[3] || b$$inline_26[3].test((c$$inline_27["class"] || {}).value));
                } else {
                  JSCompiler_temp$$8 = n$$67.is(t$$5);
                }
                JSCompiler_temp$$5 = JSCompiler_temp_const$$7[JSCompiler_temp_const$$6] = JSCompiler_temp$$8;
              }
              JSCompiler_temp_const$$4, JSCompiler_temp$$5, p$$30[t$$5] && r$$9.push(s$$21);
            }
            r$$9.length && j$$40.push({elem:m$$18, matches:r$$9});
          }
        }
      }
      d$$74.length > e$$91 && j$$40.push({elem:this, matches:d$$74.slice(e$$91)});
      k$$21 = 0;
      for (;k$$21 < j$$40.length && !c$$80.isPropagationStopped();k$$21++) {
        q$$7 = j$$40[k$$21], c$$80.currentTarget = q$$7.elem;
        l$$36 = 0;
        for (;l$$36 < q$$7.matches.length && !c$$80.isImmediatePropagationStopped();l$$36++) {
          s$$21 = q$$7.matches[l$$36];
          if (h$$42 || !c$$80.namespace && !s$$21.namespace || c$$80.namespace_re && c$$80.namespace_re.test(s$$21.namespace)) {
            c$$80.data = s$$21.data, c$$80.handleObj = s$$21, o$$9 = ((f$$4.event.special[s$$21.origType] || {}).handle || s$$21.handler).apply(q$$7.elem, g$$41), o$$9 !== b$$9 && (c$$80.result = o$$9, o$$9 === !1 && (c$$80.preventDefault(), c$$80.stopPropagation()));
          }
        }
      }
      i$$115.postDispatch && i$$115.postDispatch.call(this, c$$80);
      return c$$80.result;
    }
  }, props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks:{}, keyHooks:{props:"char charCode key keyCode".split(" "), filter:function(a$$146, b$$96) {
    a$$146.which == null && (a$$146.which = b$$96.charCode != null ? b$$96.charCode : b$$96.keyCode);
    return a$$146;
  }}, mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter:function(a$$147, d$$75) {
    var e$$92;
    var f$$20;
    var g$$42;
    var h$$43 = d$$75.button;
    var i$$116 = d$$75.fromElement;
    a$$147.pageX == null && d$$75.clientX != null && (e$$92 = a$$147.target.ownerDocument || c$$5, f$$20 = e$$92.documentElement, g$$42 = e$$92.body, a$$147.pageX = d$$75.clientX + (f$$20 && f$$20.scrollLeft || g$$42 && g$$42.scrollLeft || 0) - (f$$20 && f$$20.clientLeft || g$$42 && g$$42.clientLeft || 0), a$$147.pageY = d$$75.clientY + (f$$20 && f$$20.scrollTop || g$$42 && g$$42.scrollTop || 0) - (f$$20 && f$$20.clientTop || g$$42 && g$$42.clientTop || 0)), !a$$147.relatedTarget && i$$116 && (a$$147.relatedTarget = 
    i$$116 === a$$147.target ? d$$75.toElement : i$$116), !a$$147.which && h$$43 !== b$$9 && (a$$147.which = h$$43 & 1 ? 1 : h$$43 & 2 ? 3 : h$$43 & 4 ? 2 : 0);
    return a$$147;
  }}, fix:function(a$$148) {
    if (a$$148[f$$4.expando]) {
      return a$$148;
    }
    var d$$76;
    var e$$93;
    var g$$43 = a$$148;
    var h$$44 = f$$4.event.fixHooks[a$$148.type] || {};
    var i$$117 = h$$44.props ? this.props.concat(h$$44.props) : this.props;
    a$$148 = f$$4.Event(g$$43);
    d$$76 = i$$117.length;
    for (;d$$76;) {
      e$$93 = i$$117[--d$$76], a$$148[e$$93] = g$$43[e$$93];
    }
    a$$148.target || (a$$148.target = g$$43.srcElement || c$$5), a$$148.target.nodeType === 3 && (a$$148.target = a$$148.target.parentNode), a$$148.metaKey === b$$9 && (a$$148.metaKey = a$$148.ctrlKey);
    return h$$44.filter ? h$$44.filter(a$$148, g$$43) : a$$148;
  }, special:{ready:{setup:f$$4.bindReady}, load:{noBubble:!0}, focus:{delegateType:"focusin"}, blur:{delegateType:"focusout"}, beforeunload:{setup:function(a$$149, b$$97, c$$81) {
    f$$4.isWindow(this) && (this.onbeforeunload = c$$81);
  }, teardown:function(a$$150, b$$98) {
    this.onbeforeunload === b$$98 && (this.onbeforeunload = null);
  }}}, simulate:function(a$$151, b$$99, c$$82, d$$77) {
    var e$$94 = f$$4.extend(new f$$4.Event, c$$82, {type:a$$151, isSimulated:!0, originalEvent:{}});
    d$$77 ? f$$4.event.trigger(e$$94, null, b$$99) : f$$4.event.dispatch.call(b$$99, e$$94), e$$94.isDefaultPrevented() && c$$82.preventDefault();
  }}, f$$4.event.handle = f$$4.event.dispatch, f$$4.removeEvent = c$$5.removeEventListener ? function(a$$152, b$$100, c$$83) {
    a$$152.removeEventListener && a$$152.removeEventListener(b$$100, c$$83, !1);
  } : function(a$$153, b$$101, c$$84) {
    a$$153.detachEvent && a$$153.detachEvent("on" + b$$101, c$$84);
  }, f$$4.Event = function(a$$154, b$$102) {
    if (!(this instanceof f$$4.Event)) {
      return new f$$4.Event(a$$154, b$$102);
    }
    a$$154 && a$$154.type ? (this.originalEvent = a$$154, this.type = a$$154.type, this.isDefaultPrevented = a$$154.defaultPrevented || a$$154.returnValue === !1 || a$$154.getPreventDefault && a$$154.getPreventDefault() ? K : J) : this.type = a$$154, b$$102 && f$$4.extend(this, b$$102), this.timeStamp = a$$154 && a$$154.timeStamp || f$$4.now(), this[f$$4.expando] = !0;
  }, f$$4.Event.prototype = {preventDefault:function() {
    this.isDefaultPrevented = K;
    var a$$155 = this.originalEvent;
    !a$$155 || (a$$155.preventDefault ? a$$155.preventDefault() : a$$155.returnValue = !1);
  }, stopPropagation:function() {
    this.isPropagationStopped = K;
    var a$$156 = this.originalEvent;
    !a$$156 || (a$$156.stopPropagation && a$$156.stopPropagation(), a$$156.cancelBubble = !0);
  }, stopImmediatePropagation:function() {
    this.isImmediatePropagationStopped = K, this.stopPropagation();
  }, isDefaultPrevented:J, isPropagationStopped:J, isImmediatePropagationStopped:J}, f$$4.each({mouseenter:"mouseover", mouseleave:"mouseout"}, function(a$$157, b$$103) {
    f$$4.event.special[a$$157] = {delegateType:b$$103, bindType:b$$103, handle:function(a$$158) {
      var c$$85 = this;
      var d$$78 = a$$158.relatedTarget;
      var e$$95 = a$$158.handleObj;
      var g$$44 = e$$95.selector;
      var h$$45;
      if (!d$$78 || d$$78 !== c$$85 && !f$$4.contains(c$$85, d$$78)) {
        a$$158.type = e$$95.origType, h$$45 = e$$95.handler.apply(this, arguments), a$$158.type = b$$103;
      }
      return h$$45;
    }};
  }), f$$4.support.submitBubbles || (f$$4.event.special.submit = {setup:function() {
    if (f$$4.nodeName(this, "form")) {
      return !1;
    }
    f$$4.event.add(this, "click._submit keypress._submit", function(a$$159) {
      var c$$86 = a$$159.target;
      var d$$79 = f$$4.nodeName(c$$86, "input") || f$$4.nodeName(c$$86, "button") ? c$$86.form : b$$9;
      d$$79 && !d$$79._submit_attached && (f$$4.event.add(d$$79, "submit._submit", function(a$$160) {
        a$$160._submit_bubble = !0;
      }), d$$79._submit_attached = !0);
    });
  }, postDispatch:function(a$$161) {
    a$$161._submit_bubble && (delete a$$161._submit_bubble, this.parentNode && !a$$161.isTrigger && f$$4.event.simulate("submit", this.parentNode, a$$161, !0));
  }, teardown:function() {
    if (f$$4.nodeName(this, "form")) {
      return !1;
    }
    f$$4.event.remove(this, "._submit");
  }}), f$$4.support.changeBubbles || (f$$4.event.special.change = {setup:function() {
    if (z$$2.test(this.nodeName)) {
      if (this.type === "checkbox" || this.type === "radio") {
        f$$4.event.add(this, "propertychange._change", function(a$$162) {
          a$$162.originalEvent.propertyName === "checked" && (this._just_changed = !0);
        }), f$$4.event.add(this, "click._change", function(a$$163) {
          this._just_changed && !a$$163.isTrigger && (this._just_changed = !1, f$$4.event.simulate("change", this, a$$163, !0));
        });
      }
      return !1;
    }
    f$$4.event.add(this, "beforeactivate._change", function(a$$164) {
      var b$$104 = a$$164.target;
      z$$2.test(b$$104.nodeName) && !b$$104._change_attached && (f$$4.event.add(b$$104, "change._change", function(a$$165) {
        this.parentNode && !a$$165.isSimulated && !a$$165.isTrigger && f$$4.event.simulate("change", this.parentNode, a$$165, !0);
      }), b$$104._change_attached = !0);
    });
  }, handle:function(a$$166) {
    var b$$105 = a$$166.target;
    if (this !== b$$105 || a$$166.isSimulated || a$$166.isTrigger || b$$105.type !== "radio" && b$$105.type !== "checkbox") {
      return a$$166.handleObj.handler.apply(this, arguments);
    }
  }, teardown:function() {
    f$$4.event.remove(this, "._change");
    return z$$2.test(this.nodeName);
  }}), f$$4.support.focusinBubbles || f$$4.each({focus:"focusin", blur:"focusout"}, function(a$$167, b$$106) {
    function e$$96(a$$168) {
      f$$4.event.simulate(b$$106, a$$168.target, f$$4.event.fix(a$$168), !0);
    }
    var d$$80 = 0;
    f$$4.event.special[b$$106] = {setup:function() {
      d$$80++ === 0 && c$$5.addEventListener(a$$167, e$$96, !0);
    }, teardown:function() {
      --d$$80 === 0 && c$$5.removeEventListener(a$$167, e$$96, !0);
    }};
  }), f$$4.fn.extend({on:function(a$$169, c$$87, d$$81, e$$97, g$$45) {
    var h$$46;
    var i$$118;
    if (typeof a$$169 == "object") {
      typeof c$$87 != "string" && (d$$81 = d$$81 || c$$87, c$$87 = b$$9);
      for (i$$118 in a$$169) {
        this.on(i$$118, c$$87, d$$81, a$$169[i$$118], g$$45);
      }
      return this;
    }
    d$$81 == null && e$$97 == null ? (e$$97 = c$$87, d$$81 = c$$87 = b$$9) : e$$97 == null && (typeof c$$87 == "string" ? (e$$97 = d$$81, d$$81 = b$$9) : (e$$97 = d$$81, d$$81 = c$$87, c$$87 = b$$9));
    if (e$$97 === !1) {
      e$$97 = J;
    } else {
      if (!e$$97) {
        return this;
      }
    }
    g$$45 === 1 && (h$$46 = e$$97, e$$97 = function(a$$170) {
      f$$4().off(a$$170);
      return h$$46.apply(this, arguments);
    }, e$$97.guid = h$$46.guid || (h$$46.guid = f$$4.guid++));
    return this.each(function() {
      f$$4.event.add(this, a$$169, e$$97, d$$81, c$$87);
    });
  }, one:function(a$$171, b$$107, c$$88, d$$82) {
    return this.on(a$$171, b$$107, c$$88, d$$82, 1);
  }, off:function(a$$172, c$$89, d$$83) {
    if (a$$172 && a$$172.preventDefault && a$$172.handleObj) {
      var e$$98 = a$$172.handleObj;
      f$$4(a$$172.delegateTarget).off(e$$98.namespace ? e$$98.origType + "." + e$$98.namespace : e$$98.origType, e$$98.selector, e$$98.handler);
      return this;
    }
    if (typeof a$$172 == "object") {
      var g$$46;
      for (g$$46 in a$$172) {
        this.off(g$$46, c$$89, a$$172[g$$46]);
      }
      return this;
    }
    if (c$$89 === !1 || typeof c$$89 == "function") {
      d$$83 = c$$89, c$$89 = b$$9;
    }
    d$$83 === !1 && (d$$83 = J);
    return this.each(function() {
      f$$4.event.remove(this, a$$172, d$$83, c$$89);
    });
  }, bind:function(a$$173, b$$108, c$$90) {
    return this.on(a$$173, null, b$$108, c$$90);
  }, unbind:function(a$$174, b$$109) {
    return this.off(a$$174, null, b$$109);
  }, live:function(a$$175, b$$110, c$$91) {
    f$$4(this.context).on(a$$175, this.selector, b$$110, c$$91);
    return this;
  }, die:function(a$$176, b$$111) {
    f$$4(this.context).off(a$$176, this.selector || "**", b$$111);
    return this;
  }, delegate:function(a$$177, b$$112, c$$92, d$$84) {
    return this.on(b$$112, a$$177, c$$92, d$$84);
  }, undelegate:function(a$$178, b$$113, c$$93) {
    return arguments.length == 1 ? this.off(a$$178, "**") : this.off(b$$113, a$$178, c$$93);
  }, trigger:function(a$$179, b$$114) {
    return this.each(function() {
      f$$4.event.trigger(a$$179, b$$114, this);
    });
  }, triggerHandler:function(a$$180, b$$115) {
    if (this[0]) {
      return f$$4.event.trigger(a$$180, b$$115, this[0], !0);
    }
  }, toggle:function(a$$181) {
    function e$$99(c$$95) {
      var e$$100 = (f$$4._data(this, "lastToggle" + a$$181.guid) || 0) % d$$85;
      f$$4._data(this, "lastToggle" + a$$181.guid, e$$100 + 1), c$$95.preventDefault();
      return b$$116[e$$100].apply(this, arguments) || !1;
    }
    var b$$116 = arguments;
    var c$$94 = a$$181.guid || f$$4.guid++;
    var d$$85 = 0;
    e$$99.guid = c$$94;
    for (;d$$85 < b$$116.length;) {
      b$$116[d$$85++].guid = c$$94;
    }
    return this.click(e$$99);
  }, hover:function(a$$182, b$$117) {
    return this.mouseenter(a$$182).mouseleave(b$$117 || a$$182);
  }}), f$$4.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a$$183, b$$118) {
    f$$4.fn[b$$118] = function(a$$184, c$$96) {
      c$$96 == null && (c$$96 = a$$184, a$$184 = null);
      return arguments.length > 0 ? this.on(b$$118, null, a$$184, c$$96) : this.trigger(b$$118);
    }, f$$4.attrFn && (f$$4.attrFn[b$$118] = !0), C.test(b$$118) && (f$$4.event.fixHooks[b$$118] = f$$4.event.keyHooks), D.test(b$$118) && (f$$4.event.fixHooks[b$$118] = f$$4.event.mouseHooks);
  }), function() {
    function y$$51(a$$264, b$$174, c$$130) {
      var d$$112;
      var e$$126 = [];
      var f$$42 = "";
      var g$$65 = b$$174.nodeType ? [b$$174] : b$$174;
      for (;d$$112 = o$$10.match.PSEUDO.exec(a$$264);) {
        f$$42 += d$$112[0], a$$264 = a$$264.replace(o$$10.match.PSEUDO, "");
      }
      a$$264 = o$$10.relative[a$$264] ? a$$264 + "*" : a$$264;
      var h$$58 = 0;
      var i$$129 = g$$65.length;
      for (;h$$58 < i$$129;h$$58++) {
        m$$19(a$$264, g$$65[h$$58], e$$126, c$$130);
      }
      return m$$19.filter(f$$42, e$$126);
    }
    function s$$22(a$$245, b$$160) {
      a$$245 = Array.prototype.slice.call(a$$245, 0);
      if (b$$160) {
        b$$160.push.apply(b$$160, a$$245);
        return b$$160;
      }
      return a$$245;
    }
    function q$$8(a$$244, b$$159) {
      return "\\" + (b$$159 - 0 + 1);
    }
    function m$$19(b$$121, d$$87, e$$104, f$$23) {
      e$$104 = e$$104 || [], d$$87 = d$$87 || c$$5;
      var h$$50 = d$$87;
      if (d$$87.nodeType !== 1 && d$$87.nodeType !== 9) {
        return [];
      }
      if (!b$$121 || typeof b$$121 != "string") {
        return e$$104;
      }
      var i$$122;
      var j$$44;
      var k$$25;
      var l$$38;
      var n$$69;
      var q$$9;
      var r$$11;
      var t$$6;
      var u$$6 = !0;
      var v$$7 = m$$19.isXML(d$$87);
      var w$$14 = [];
      var x$$70 = b$$121;
      do {
        a$$185.exec(""), i$$122 = a$$185.exec(x$$70);
        if (i$$122) {
          x$$70 = i$$122[3], w$$14.push(i$$122[1]);
          if (i$$122[2]) {
            l$$38 = i$$122[3];
            break;
          }
        }
      } while (i$$122);
      if (w$$14.length > 1 && p$$31.exec(b$$121)) {
        if (w$$14.length === 2 && o$$10.relative[w$$14[0]]) {
          j$$44 = y$$51(w$$14[0] + w$$14[1], d$$87, f$$23);
        } else {
          j$$44 = o$$10.relative[w$$14[0]] ? [d$$87] : m$$19(w$$14.shift(), d$$87);
          for (;w$$14.length;) {
            b$$121 = w$$14.shift(), o$$10.relative[b$$121] && (b$$121 += w$$14.shift()), j$$44 = y$$51(b$$121, j$$44, f$$23);
          }
        }
      } else {
        !f$$23 && w$$14.length > 1 && d$$87.nodeType === 9 && !v$$7 && o$$10.match.ID.test(w$$14[0]) && !o$$10.match.ID.test(w$$14[w$$14.length - 1]) && (n$$69 = m$$19.find(w$$14.shift(), d$$87, v$$7), d$$87 = n$$69.expr ? m$$19.filter(n$$69.expr, n$$69.set)[0] : n$$69.set[0]);
        if (d$$87) {
          n$$69 = f$$23 ? {expr:w$$14.pop(), set:s$$22(f$$23)} : m$$19.find(w$$14.pop(), w$$14.length === 1 && (w$$14[0] === "~" || w$$14[0] === "+") && d$$87.parentNode ? d$$87.parentNode : d$$87, v$$7), j$$44 = n$$69.expr ? m$$19.filter(n$$69.expr, n$$69.set) : n$$69.set, w$$14.length > 0 ? k$$25 = s$$22(j$$44) : u$$6 = !1;
          for (;w$$14.length;) {
            q$$9 = w$$14.pop(), r$$11 = q$$9, o$$10.relative[q$$9] ? r$$11 = w$$14.pop() : q$$9 = "", r$$11 == null && (r$$11 = d$$87), o$$10.relative[q$$9](k$$25, r$$11, v$$7);
          }
        } else {
          k$$25 = w$$14 = [];
        }
      }
      k$$25 || (k$$25 = j$$44), k$$25 || m$$19.error(q$$9 || b$$121);
      if (g$$47.call(k$$25) === "[object Array]") {
        if (!u$$6) {
          e$$104.push.apply(e$$104, k$$25);
        } else {
          if (d$$87 && d$$87.nodeType === 1) {
            t$$6 = 0;
            for (;k$$25[t$$6] != null;t$$6++) {
              k$$25[t$$6] && (k$$25[t$$6] === !0 || k$$25[t$$6].nodeType === 1 && m$$19.contains(d$$87, k$$25[t$$6])) && e$$104.push(j$$44[t$$6]);
            }
          } else {
            t$$6 = 0;
            for (;k$$25[t$$6] != null;t$$6++) {
              k$$25[t$$6] && k$$25[t$$6].nodeType === 1 && e$$104.push(j$$44[t$$6]);
            }
          }
        }
      } else {
        s$$22(k$$25, e$$104);
      }
      l$$38 && (m$$19(l$$38, h$$50, e$$104, f$$23), m$$19.uniqueSort(e$$104));
      return e$$104;
    }
    function x$$69(a$$186, b$$119, c$$97, e$$102, f$$21, g$$48) {
      var h$$48 = 0;
      var i$$120 = e$$102.length;
      for (;h$$48 < i$$120;h$$48++) {
        var j$$42 = e$$102[h$$48];
        if (j$$42) {
          var k$$23 = !1;
          j$$42 = j$$42[a$$186];
          for (;j$$42;) {
            if (j$$42[d$$86] === c$$97) {
              k$$23 = e$$102[j$$42.sizset];
              break;
            }
            if (j$$42.nodeType === 1) {
              g$$48 || (j$$42[d$$86] = c$$97, j$$42.sizset = h$$48);
              if (typeof b$$119 != "string") {
                if (j$$42 === b$$119) {
                  k$$23 = !0;
                  break;
                }
              } else {
                if (m$$19.filter(b$$119, [j$$42]).length > 0) {
                  k$$23 = j$$42;
                  break;
                }
              }
            }
            j$$42 = j$$42[a$$186];
          }
          e$$102[h$$48] = k$$23;
        }
      }
    }
    function w$$13(a$$187, b$$120, c$$98, e$$103, f$$22, g$$49) {
      var h$$49 = 0;
      var i$$121 = e$$103.length;
      for (;h$$49 < i$$121;h$$49++) {
        var j$$43 = e$$103[h$$49];
        if (j$$43) {
          var k$$24 = !1;
          j$$43 = j$$43[a$$187];
          for (;j$$43;) {
            if (j$$43[d$$86] === c$$98) {
              k$$24 = e$$103[j$$43.sizset];
              break;
            }
            j$$43.nodeType === 1 && !g$$49 && (j$$43[d$$86] = c$$98, j$$43.sizset = h$$49);
            if (j$$43.nodeName.toLowerCase() === b$$120) {
              k$$24 = j$$43;
              break;
            }
            j$$43 = j$$43[a$$187];
          }
          e$$103[h$$49] = k$$24;
        }
      }
    }
    var a$$185 = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
    var d$$86 = "sizcache" + (Math.random() + "").replace(".", "");
    var e$$101 = 0;
    var g$$47 = Object.prototype.toString;
    var h$$47 = !1;
    var i$$119 = !0;
    var j$$41 = /\\/g;
    var k$$22 = /\r\n/g;
    var l$$37 = /\W/;
    [0, 0].sort(function() {
      i$$119 = !1;
      return 0;
    });
    m$$19.uniqueSort = function(a$$188) {
      if (u$$5) {
        h$$47 = i$$119, a$$188.sort(u$$5);
        if (h$$47) {
          var b$$122 = 1;
          for (;b$$122 < a$$188.length;b$$122++) {
            a$$188[b$$122] === a$$188[b$$122 - 1] && a$$188.splice(b$$122--, 1);
          }
        }
      }
      return a$$188;
    }, m$$19.matches = function(a$$189, b$$123) {
      return m$$19(a$$189, null, null, b$$123);
    }, m$$19.matchesSelector = function(a$$190, b$$124) {
      return m$$19(b$$124, null, null, [a$$190]).length > 0;
    }, m$$19.find = function(a$$191, b$$125, c$$99) {
      var d$$88;
      var e$$105;
      var f$$24;
      var g$$50;
      var h$$51;
      var i$$123;
      if (!a$$191) {
        return [];
      }
      e$$105 = 0, f$$24 = o$$10.order.length;
      for (;e$$105 < f$$24;e$$105++) {
        h$$51 = o$$10.order[e$$105];
        if (g$$50 = o$$10.leftMatch[h$$51].exec(a$$191)) {
          i$$123 = g$$50[1], g$$50.splice(1, 1);
          if (i$$123.substr(i$$123.length - 1) !== "\\") {
            g$$50[1] = (g$$50[1] || "").replace(j$$41, ""), d$$88 = o$$10.find[h$$51](g$$50, b$$125, c$$99);
            if (d$$88 != null) {
              a$$191 = a$$191.replace(o$$10.match[h$$51], "");
              break;
            }
          }
        }
      }
      d$$88 || (d$$88 = typeof b$$125.getElementsByTagName != "undefined" ? b$$125.getElementsByTagName("*") : []);
      return {set:d$$88, expr:a$$191};
    }, m$$19.filter = function(a$$192, c$$100, d$$89, e$$106) {
      var f$$25;
      var g$$51;
      var h$$52;
      var i$$124;
      var j$$45;
      var k$$26;
      var l$$39;
      var n$$70;
      var p$$32;
      var q$$10 = a$$192;
      var r$$12 = [];
      var s$$23 = c$$100;
      var t$$7 = c$$100 && c$$100[0] && m$$19.isXML(c$$100[0]);
      for (;a$$192 && c$$100.length;) {
        for (h$$52 in o$$10.filter) {
          if ((f$$25 = o$$10.leftMatch[h$$52].exec(a$$192)) != null && f$$25[2]) {
            k$$26 = o$$10.filter[h$$52], l$$39 = f$$25[1], g$$51 = !1, f$$25.splice(1, 1);
            if (l$$39.substr(l$$39.length - 1) === "\\") {
              continue;
            }
            s$$23 === r$$12 && (r$$12 = []);
            if (o$$10.preFilter[h$$52]) {
              f$$25 = o$$10.preFilter[h$$52](f$$25, s$$23, d$$89, r$$12, e$$106, t$$7);
              if (!f$$25) {
                g$$51 = i$$124 = !0;
              } else {
                if (f$$25 === !0) {
                  continue;
                }
              }
            }
            if (f$$25) {
              n$$70 = 0;
              for (;(j$$45 = s$$23[n$$70]) != null;n$$70++) {
                j$$45 && (i$$124 = k$$26(j$$45, f$$25, n$$70, s$$23), p$$32 = e$$106 ^ i$$124, d$$89 && i$$124 != null ? p$$32 ? g$$51 = !0 : s$$23[n$$70] = !1 : p$$32 && (r$$12.push(j$$45), g$$51 = !0));
              }
            }
            if (i$$124 !== b$$9) {
              d$$89 || (s$$23 = r$$12), a$$192 = a$$192.replace(o$$10.match[h$$52], "");
              if (!g$$51) {
                return [];
              }
              break;
            }
          }
        }
        if (a$$192 === q$$10) {
          if (g$$51 == null) {
            m$$19.error(a$$192);
          } else {
            break;
          }
        }
        q$$10 = a$$192;
      }
      return s$$23;
    }, m$$19.error = function(a$$193) {
      throw new Error("Syntax error, unrecognized expression: " + a$$193);
    };
    var n$$68 = m$$19.getText = function(a$$194) {
      var b$$126;
      var c$$101;
      var d$$90 = a$$194.nodeType;
      var e$$107 = "";
      if (d$$90) {
        if (d$$90 === 1 || d$$90 === 9 || d$$90 === 11) {
          if (typeof a$$194.textContent == "string") {
            return a$$194.textContent;
          }
          if (typeof a$$194.innerText == "string") {
            return a$$194.innerText.replace(k$$22, "");
          }
          a$$194 = a$$194.firstChild;
          for (;a$$194;a$$194 = a$$194.nextSibling) {
            e$$107 += n$$68(a$$194);
          }
        } else {
          if (d$$90 === 3 || d$$90 === 4) {
            return a$$194.nodeValue;
          }
        }
      } else {
        b$$126 = 0;
        for (;c$$101 = a$$194[b$$126];b$$126++) {
          c$$101.nodeType !== 8 && (e$$107 += n$$68(c$$101));
        }
      }
      return e$$107;
    };
    var o$$10 = m$$19.selectors = {order:["ID", "NAME", "TAG"], match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, 
    PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, leftMatch:{}, attrMap:{"class":"className", "for":"htmlFor"}, attrHandle:{href:function(a$$195) {
      return a$$195.getAttribute("href");
    }, type:function(a$$196) {
      return a$$196.getAttribute("type");
    }}, relative:{"+":function(a$$197, b$$127) {
      var c$$102 = typeof b$$127 == "string";
      var d$$91 = c$$102 && !l$$37.test(b$$127);
      var e$$108 = c$$102 && !d$$91;
      d$$91 && (b$$127 = b$$127.toLowerCase());
      var f$$26 = 0;
      var g$$52 = a$$197.length;
      var h$$53;
      for (;f$$26 < g$$52;f$$26++) {
        if (h$$53 = a$$197[f$$26]) {
          for (;(h$$53 = h$$53.previousSibling) && h$$53.nodeType !== 1;) {
          }
          a$$197[f$$26] = e$$108 || h$$53 && h$$53.nodeName.toLowerCase() === b$$127 ? h$$53 || !1 : h$$53 === b$$127;
        }
      }
      e$$108 && m$$19.filter(b$$127, a$$197, !0);
    }, ">":function(a$$198, b$$128) {
      var c$$103;
      var d$$92 = typeof b$$128 == "string";
      var e$$109 = 0;
      var f$$27 = a$$198.length;
      if (d$$92 && !l$$37.test(b$$128)) {
        b$$128 = b$$128.toLowerCase();
        for (;e$$109 < f$$27;e$$109++) {
          c$$103 = a$$198[e$$109];
          if (c$$103) {
            var g$$53 = c$$103.parentNode;
            a$$198[e$$109] = g$$53.nodeName.toLowerCase() === b$$128 ? g$$53 : !1;
          }
        }
      } else {
        for (;e$$109 < f$$27;e$$109++) {
          c$$103 = a$$198[e$$109], c$$103 && (a$$198[e$$109] = d$$92 ? c$$103.parentNode : c$$103.parentNode === b$$128);
        }
        d$$92 && m$$19.filter(b$$128, a$$198, !0);
      }
    }, "":function(a$$199, b$$129, c$$104) {
      var d$$93;
      var f$$28 = e$$101++;
      var g$$54 = x$$69;
      typeof b$$129 == "string" && !l$$37.test(b$$129) && (b$$129 = b$$129.toLowerCase(), d$$93 = b$$129, g$$54 = w$$13), g$$54("parentNode", b$$129, f$$28, a$$199, d$$93, c$$104);
    }, "~":function(a$$200, b$$130, c$$105) {
      var d$$94;
      var f$$29 = e$$101++;
      var g$$55 = x$$69;
      typeof b$$130 == "string" && !l$$37.test(b$$130) && (b$$130 = b$$130.toLowerCase(), d$$94 = b$$130, g$$55 = w$$13), g$$55("previousSibling", b$$130, f$$29, a$$200, d$$94, c$$105);
    }}, find:{ID:function(a$$201, b$$131, c$$106) {
      if (typeof b$$131.getElementById != "undefined" && !c$$106) {
        var d$$95 = b$$131.getElementById(a$$201[1]);
        return d$$95 && d$$95.parentNode ? [d$$95] : [];
      }
    }, NAME:function(a$$202, b$$132) {
      if (typeof b$$132.getElementsByName != "undefined") {
        var c$$107 = [];
        var d$$96 = b$$132.getElementsByName(a$$202[1]);
        var e$$110 = 0;
        var f$$30 = d$$96.length;
        for (;e$$110 < f$$30;e$$110++) {
          d$$96[e$$110].getAttribute("name") === a$$202[1] && c$$107.push(d$$96[e$$110]);
        }
        return c$$107.length === 0 ? null : c$$107;
      }
    }, TAG:function(a$$203, b$$133) {
      if (typeof b$$133.getElementsByTagName != "undefined") {
        return b$$133.getElementsByTagName(a$$203[1]);
      }
    }}, preFilter:{CLASS:function(a$$204, b$$134, c$$108, d$$97, e$$111, f$$31) {
      a$$204 = " " + a$$204[1].replace(j$$41, "") + " ";
      if (f$$31) {
        return a$$204;
      }
      var g$$56 = 0;
      var h$$54;
      for (;(h$$54 = b$$134[g$$56]) != null;g$$56++) {
        h$$54 && (e$$111 ^ (h$$54.className && (" " + h$$54.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a$$204) >= 0) ? c$$108 || d$$97.push(h$$54) : c$$108 && (b$$134[g$$56] = !1));
      }
      return !1;
    }, ID:function(a$$205) {
      return a$$205[1].replace(j$$41, "");
    }, TAG:function(a$$206, b$$135) {
      return a$$206[1].replace(j$$41, "").toLowerCase();
    }, CHILD:function(a$$207) {
      if (a$$207[1] === "nth") {
        a$$207[2] || m$$19.error(a$$207[0]), a$$207[2] = a$$207[2].replace(/^\+|\s*/g, "");
        var b$$136 = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a$$207[2] === "even" && "2n" || a$$207[2] === "odd" && "2n+1" || !/\D/.test(a$$207[2]) && "0n+" + a$$207[2] || a$$207[2]);
        a$$207[2] = b$$136[1] + (b$$136[2] || 1) - 0, a$$207[3] = b$$136[3] - 0;
      } else {
        a$$207[2] && m$$19.error(a$$207[0]);
      }
      a$$207[0] = e$$101++;
      return a$$207;
    }, ATTR:function(a$$208, b$$137, c$$109, d$$98, e$$112, f$$32) {
      var g$$57 = a$$208[1] = a$$208[1].replace(j$$41, "");
      !f$$32 && o$$10.attrMap[g$$57] && (a$$208[1] = o$$10.attrMap[g$$57]), a$$208[4] = (a$$208[4] || a$$208[5] || "").replace(j$$41, ""), a$$208[2] === "~=" && (a$$208[4] = " " + a$$208[4] + " ");
      return a$$208;
    }, PSEUDO:function(b$$138, c$$110, d$$99, e$$113, f$$33) {
      if (b$$138[1] === "not") {
        if ((a$$185.exec(b$$138[3]) || "").length > 1 || /^\w/.test(b$$138[3])) {
          b$$138[3] = m$$19(b$$138[3], null, null, c$$110);
        } else {
          var g$$58 = m$$19.filter(b$$138[3], c$$110, d$$99, !0 ^ f$$33);
          d$$99 || e$$113.push.apply(e$$113, g$$58);
          return !1;
        }
      } else {
        if (o$$10.match.POS.test(b$$138[0]) || o$$10.match.CHILD.test(b$$138[0])) {
          return !0;
        }
      }
      return b$$138;
    }, POS:function(a$$209) {
      a$$209.unshift(!0);
      return a$$209;
    }}, filters:{enabled:function(a$$210) {
      return a$$210.disabled === !1 && a$$210.type !== "hidden";
    }, disabled:function(a$$211) {
      return a$$211.disabled === !0;
    }, checked:function(a$$212) {
      return a$$212.checked === !0;
    }, selected:function(a$$213) {
      return a$$213.selected === !0;
    }, parent:function(a$$214) {
      return !!a$$214.firstChild;
    }, empty:function(a$$215) {
      return !a$$215.firstChild;
    }, has:function(a$$216, b$$139, c$$111) {
      return !!m$$19(c$$111[3], a$$216).length;
    }, header:function(a$$217) {
      return /h\d/i.test(a$$217.nodeName);
    }, text:function(a$$218) {
      var b$$140 = a$$218.getAttribute("type");
      var c$$112 = a$$218.type;
      return a$$218.nodeName.toLowerCase() === "input" && "text" === c$$112 && (b$$140 === c$$112 || b$$140 === null);
    }, radio:function(a$$219) {
      return a$$219.nodeName.toLowerCase() === "input" && "radio" === a$$219.type;
    }, checkbox:function(a$$220) {
      return a$$220.nodeName.toLowerCase() === "input" && "checkbox" === a$$220.type;
    }, file:function(a$$221) {
      return a$$221.nodeName.toLowerCase() === "input" && "file" === a$$221.type;
    }, password:function(a$$222) {
      return a$$222.nodeName.toLowerCase() === "input" && "password" === a$$222.type;
    }, submit:function(a$$223) {
      var b$$141 = a$$223.nodeName.toLowerCase();
      return (b$$141 === "input" || b$$141 === "button") && "submit" === a$$223.type;
    }, image:function(a$$224) {
      return a$$224.nodeName.toLowerCase() === "input" && "image" === a$$224.type;
    }, reset:function(a$$225) {
      var b$$142 = a$$225.nodeName.toLowerCase();
      return (b$$142 === "input" || b$$142 === "button") && "reset" === a$$225.type;
    }, button:function(a$$226) {
      var b$$143 = a$$226.nodeName.toLowerCase();
      return b$$143 === "input" && "button" === a$$226.type || b$$143 === "button";
    }, input:function(a$$227) {
      return /input|select|textarea|button/i.test(a$$227.nodeName);
    }, focus:function(a$$228) {
      return a$$228 === a$$228.ownerDocument.activeElement;
    }}, setFilters:{first:function(a$$229, b$$144) {
      return b$$144 === 0;
    }, last:function(a$$230, b$$145, c$$113, d$$100) {
      return b$$145 === d$$100.length - 1;
    }, even:function(a$$231, b$$146) {
      return b$$146 % 2 === 0;
    }, odd:function(a$$232, b$$147) {
      return b$$147 % 2 === 1;
    }, lt:function(a$$233, b$$148, c$$114) {
      return b$$148 < c$$114[3] - 0;
    }, gt:function(a$$234, b$$149, c$$115) {
      return b$$149 > c$$115[3] - 0;
    }, nth:function(a$$235, b$$150, c$$116) {
      return c$$116[3] - 0 === b$$150;
    }, eq:function(a$$236, b$$151, c$$117) {
      return c$$117[3] - 0 === b$$151;
    }}, filter:{PSEUDO:function(a$$237, b$$152, c$$118, d$$101) {
      var e$$114 = b$$152[1];
      var f$$34 = o$$10.filters[e$$114];
      if (f$$34) {
        return f$$34(a$$237, c$$118, b$$152, d$$101);
      }
      if (e$$114 === "contains") {
        return (a$$237.textContent || a$$237.innerText || n$$68([a$$237]) || "").indexOf(b$$152[3]) >= 0;
      }
      if (e$$114 === "not") {
        var g$$59 = b$$152[3];
        var h$$55 = 0;
        var i$$125 = g$$59.length;
        for (;h$$55 < i$$125;h$$55++) {
          if (g$$59[h$$55] === a$$237) {
            return !1;
          }
        }
        return !0;
      }
      m$$19.error(e$$114);
    }, CHILD:function(a$$238, b$$153) {
      var c$$119;
      var e$$115;
      var f$$35;
      var g$$60;
      var h$$56;
      var i$$126;
      var j$$46;
      var k$$27 = b$$153[1];
      var l$$40 = a$$238;
      switch(k$$27) {
        case "only":
        ;
        case "first":
          for (;l$$40 = l$$40.previousSibling;) {
            if (l$$40.nodeType === 1) {
              return !1;
            }
          }
          if (k$$27 === "first") {
            return !0;
          }
          l$$40 = a$$238;
        case "last":
          for (;l$$40 = l$$40.nextSibling;) {
            if (l$$40.nodeType === 1) {
              return !1;
            }
          }
          return !0;
        case "nth":
          c$$119 = b$$153[2], e$$115 = b$$153[3];
          if (c$$119 === 1 && e$$115 === 0) {
            return !0;
          }
          f$$35 = b$$153[0], g$$60 = a$$238.parentNode;
          if (g$$60 && (g$$60[d$$86] !== f$$35 || !a$$238.nodeIndex)) {
            i$$126 = 0;
            l$$40 = g$$60.firstChild;
            for (;l$$40;l$$40 = l$$40.nextSibling) {
              l$$40.nodeType === 1 && (l$$40.nodeIndex = ++i$$126);
            }
            g$$60[d$$86] = f$$35;
          }
          j$$46 = a$$238.nodeIndex - e$$115;
          return c$$119 === 0 ? j$$46 === 0 : j$$46 % c$$119 === 0 && j$$46 / c$$119 >= 0;
      }
    }, ID:function(a$$239, b$$154) {
      return a$$239.nodeType === 1 && a$$239.getAttribute("id") === b$$154;
    }, TAG:function(a$$240, b$$155) {
      return b$$155 === "*" && a$$240.nodeType === 1 || !!a$$240.nodeName && a$$240.nodeName.toLowerCase() === b$$155;
    }, CLASS:function(a$$241, b$$156) {
      return (" " + (a$$241.className || a$$241.getAttribute("class")) + " ").indexOf(b$$156) > -1;
    }, ATTR:function(a$$242, b$$157) {
      var c$$120 = b$$157[1];
      var d$$102 = m$$19.attr ? m$$19.attr(a$$242, c$$120) : o$$10.attrHandle[c$$120] ? o$$10.attrHandle[c$$120](a$$242) : a$$242[c$$120] != null ? a$$242[c$$120] : a$$242.getAttribute(c$$120);
      var e$$116 = d$$102 + "";
      var f$$36 = b$$157[2];
      var g$$61 = b$$157[4];
      return d$$102 == null ? f$$36 === "!=" : !f$$36 && m$$19.attr ? d$$102 != null : f$$36 === "=" ? e$$116 === g$$61 : f$$36 === "*=" ? e$$116.indexOf(g$$61) >= 0 : f$$36 === "~=" ? (" " + e$$116 + " ").indexOf(g$$61) >= 0 : g$$61 ? f$$36 === "!=" ? e$$116 !== g$$61 : f$$36 === "^=" ? e$$116.indexOf(g$$61) === 0 : f$$36 === "$=" ? e$$116.substr(e$$116.length - g$$61.length) === g$$61 : f$$36 === "|=" ? e$$116 === g$$61 || e$$116.substr(0, g$$61.length + 1) === g$$61 + "-" : !1 : e$$116 && d$$102 !== 
      !1;
    }, POS:function(a$$243, b$$158, c$$121, d$$103) {
      var e$$117 = b$$158[2];
      var f$$37 = o$$10.setFilters[e$$117];
      if (f$$37) {
        return f$$37(a$$243, c$$121, b$$158, d$$103);
      }
    }}};
    var p$$31 = o$$10.match.POS;
    var r$$10;
    for (r$$10 in o$$10.match) {
      o$$10.match[r$$10] = new RegExp(o$$10.match[r$$10].source + /(?![^\[]*\])(?![^\(]*\))/.source), o$$10.leftMatch[r$$10] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o$$10.match[r$$10].source.replace(/\\(\d+)/g, q$$8));
    }
    o$$10.match.globalPOS = p$$31;
    try {
      Array.prototype.slice.call(c$$5.documentElement.childNodes, 0)[0].nodeType;
    } catch (t$$8) {
      s$$22 = function(a$$246, b$$161) {
        var c$$122 = 0;
        var d$$104 = b$$161 || [];
        if (g$$47.call(a$$246) === "[object Array]") {
          Array.prototype.push.apply(d$$104, a$$246);
        } else {
          if (typeof a$$246.length == "number") {
            var e$$118 = a$$246.length;
            for (;c$$122 < e$$118;c$$122++) {
              d$$104.push(a$$246[c$$122]);
            }
          } else {
            for (;a$$246[c$$122];c$$122++) {
              d$$104.push(a$$246[c$$122]);
            }
          }
        }
        return d$$104;
      };
    }
    var u$$5;
    var v$$6;
    c$$5.documentElement.compareDocumentPosition ? u$$5 = function(a$$247, b$$162) {
      if (a$$247 === b$$162) {
        h$$47 = !0;
        return 0;
      }
      if (!a$$247.compareDocumentPosition || !b$$162.compareDocumentPosition) {
        return a$$247.compareDocumentPosition ? -1 : 1;
      }
      return a$$247.compareDocumentPosition(b$$162) & 4 ? -1 : 1;
    } : (u$$5 = function(a$$248, b$$163) {
      if (a$$248 === b$$163) {
        h$$47 = !0;
        return 0;
      }
      if (a$$248.sourceIndex && b$$163.sourceIndex) {
        return a$$248.sourceIndex - b$$163.sourceIndex;
      }
      var c$$123;
      var d$$105;
      var e$$119 = [];
      var f$$38 = [];
      var g$$62 = a$$248.parentNode;
      var i$$127 = b$$163.parentNode;
      var j$$47 = g$$62;
      if (g$$62 === i$$127) {
        return v$$6(a$$248, b$$163);
      }
      if (!g$$62) {
        return -1;
      }
      if (!i$$127) {
        return 1;
      }
      for (;j$$47;) {
        e$$119.unshift(j$$47), j$$47 = j$$47.parentNode;
      }
      j$$47 = i$$127;
      for (;j$$47;) {
        f$$38.unshift(j$$47), j$$47 = j$$47.parentNode;
      }
      c$$123 = e$$119.length, d$$105 = f$$38.length;
      var k$$28 = 0;
      for (;k$$28 < c$$123 && k$$28 < d$$105;k$$28++) {
        if (e$$119[k$$28] !== f$$38[k$$28]) {
          return v$$6(e$$119[k$$28], f$$38[k$$28]);
        }
      }
      return k$$28 === c$$123 ? v$$6(a$$248, f$$38[k$$28], -1) : v$$6(e$$119[k$$28], b$$163, 1);
    }, v$$6 = function(a$$249, b$$164, c$$124) {
      if (a$$249 === b$$164) {
        return c$$124;
      }
      var d$$106 = a$$249.nextSibling;
      for (;d$$106;) {
        if (d$$106 === b$$164) {
          return -1;
        }
        d$$106 = d$$106.nextSibling;
      }
      return 1;
    }), function() {
      var a$$250 = c$$5.createElement("div");
      var d$$107 = "script" + (new Date).getTime();
      var e$$120 = c$$5.documentElement;
      a$$250.innerHTML = "<a name='" + d$$107 + "'/>", e$$120.insertBefore(a$$250, e$$120.firstChild), c$$5.getElementById(d$$107) && (o$$10.find.ID = function(a$$251, c$$125, d$$108) {
        if (typeof c$$125.getElementById != "undefined" && !d$$108) {
          var e$$121 = c$$125.getElementById(a$$251[1]);
          return e$$121 ? e$$121.id === a$$251[1] || typeof e$$121.getAttributeNode != "undefined" && e$$121.getAttributeNode("id").nodeValue === a$$251[1] ? [e$$121] : b$$9 : [];
        }
      }, o$$10.filter.ID = function(a$$252, b$$165) {
        var c$$126 = typeof a$$252.getAttributeNode != "undefined" && a$$252.getAttributeNode("id");
        return a$$252.nodeType === 1 && c$$126 && c$$126.nodeValue === b$$165;
      }), e$$120.removeChild(a$$250), e$$120 = a$$250 = null;
    }(), function() {
      var a$$253 = c$$5.createElement("div");
      a$$253.appendChild(c$$5.createComment("")), a$$253.getElementsByTagName("*").length > 0 && (o$$10.find.TAG = function(a$$254, b$$166) {
        var c$$127 = b$$166.getElementsByTagName(a$$254[1]);
        if (a$$254[1] === "*") {
          var d$$109 = [];
          var e$$122 = 0;
          for (;c$$127[e$$122];e$$122++) {
            c$$127[e$$122].nodeType === 1 && d$$109.push(c$$127[e$$122]);
          }
          c$$127 = d$$109;
        }
        return c$$127;
      }), a$$253.innerHTML = "<a href='#'></a>", a$$253.firstChild && typeof a$$253.firstChild.getAttribute != "undefined" && a$$253.firstChild.getAttribute("href") !== "#" && (o$$10.attrHandle.href = function(a$$255) {
        return a$$255.getAttribute("href", 2);
      }), a$$253 = null;
    }(), c$$5.querySelectorAll && function() {
      var a$$256 = m$$19;
      var b$$167 = c$$5.createElement("div");
      var d$$110 = "__sizzle__";
      b$$167.innerHTML = "<p class='TEST'></p>";
      if (!b$$167.querySelectorAll || b$$167.querySelectorAll(".TEST").length !== 0) {
        m$$19 = function(b$$168, e$$124, f$$39, g$$63) {
          e$$124 = e$$124 || c$$5;
          if (!g$$63 && !m$$19.isXML(e$$124)) {
            var h$$57 = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b$$168);
            if (h$$57 && (e$$124.nodeType === 1 || e$$124.nodeType === 9)) {
              if (h$$57[1]) {
                return s$$22(e$$124.getElementsByTagName(b$$168), f$$39);
              }
              if (h$$57[2] && o$$10.find.CLASS && e$$124.getElementsByClassName) {
                return s$$22(e$$124.getElementsByClassName(h$$57[2]), f$$39);
              }
            }
            if (e$$124.nodeType === 9) {
              if (b$$168 === "body" && e$$124.body) {
                return s$$22([e$$124.body], f$$39);
              }
              if (h$$57 && h$$57[3]) {
                var i$$128 = e$$124.getElementById(h$$57[3]);
                if (!i$$128 || !i$$128.parentNode) {
                  return s$$22([], f$$39);
                }
                if (i$$128.id === h$$57[3]) {
                  return s$$22([i$$128], f$$39);
                }
              }
              try {
                return s$$22(e$$124.querySelectorAll(b$$168), f$$39);
              } catch (j$$48) {
              }
            } else {
              if (e$$124.nodeType === 1 && e$$124.nodeName.toLowerCase() !== "object") {
                var k$$29 = e$$124;
                var l$$41 = e$$124.getAttribute("id");
                var n$$71 = l$$41 || d$$110;
                var p$$33 = e$$124.parentNode;
                var q$$11 = /^\s*[+~]/.test(b$$168);
                l$$41 ? n$$71 = n$$71.replace(/'/g, "\\$&") : e$$124.setAttribute("id", n$$71), q$$11 && p$$33 && (e$$124 = e$$124.parentNode);
                try {
                  if (!q$$11 || p$$33) {
                    return s$$22(e$$124.querySelectorAll("[id='" + n$$71 + "'] " + b$$168), f$$39);
                  }
                } catch (r$$13) {
                } finally {
                  l$$41 || k$$29.removeAttribute("id");
                }
              }
            }
          }
          return a$$256(b$$168, e$$124, f$$39, g$$63);
        };
        var e$$123;
        for (e$$123 in a$$256) {
          m$$19[e$$123] = a$$256[e$$123];
        }
        b$$167 = null;
      }
    }(), function() {
      var a$$257 = c$$5.documentElement;
      var b$$169 = a$$257.matchesSelector || a$$257.mozMatchesSelector || a$$257.webkitMatchesSelector || a$$257.msMatchesSelector;
      if (b$$169) {
        var d$$111 = !b$$169.call(c$$5.createElement("div"), "div");
        var e$$125 = !1;
        try {
          b$$169.call(c$$5.documentElement, "[test!='']:sizzle");
        } catch (f$$40) {
          e$$125 = !0;
        }
        m$$19.matchesSelector = function(a$$258, c$$128) {
          c$$128 = c$$128.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
          if (!m$$19.isXML(a$$258)) {
            try {
              if (e$$125 || !o$$10.match.PSEUDO.test(c$$128) && !/!=/.test(c$$128)) {
                var f$$41 = b$$169.call(a$$258, c$$128);
                if (f$$41 || !d$$111 || a$$258.document && a$$258.document.nodeType !== 11) {
                  return f$$41;
                }
              }
            } catch (g$$64) {
            }
          }
          return m$$19(c$$128, null, null, [a$$258]).length > 0;
        };
      }
    }(), function() {
      var a$$259 = c$$5.createElement("div");
      a$$259.innerHTML = "<div class='test e'></div><div class='test'></div>";
      if (!!a$$259.getElementsByClassName && a$$259.getElementsByClassName("e").length !== 0) {
        a$$259.lastChild.className = "e";
        if (a$$259.getElementsByClassName("e").length === 1) {
          return;
        }
        o$$10.order.splice(1, 0, "CLASS"), o$$10.find.CLASS = function(a$$260, b$$170, c$$129) {
          if (typeof b$$170.getElementsByClassName != "undefined" && !c$$129) {
            return b$$170.getElementsByClassName(a$$260[1]);
          }
        }, a$$259 = null;
      }
    }(), c$$5.documentElement.contains ? m$$19.contains = function(a$$261, b$$171) {
      return a$$261 !== b$$171 && (a$$261.contains ? a$$261.contains(b$$171) : !0);
    } : c$$5.documentElement.compareDocumentPosition ? m$$19.contains = function(a$$262, b$$172) {
      return !!(a$$262.compareDocumentPosition(b$$172) & 16);
    } : m$$19.contains = function() {
      return !1;
    }, m$$19.isXML = function(a$$263) {
      var b$$173 = (a$$263 ? a$$263.ownerDocument || a$$263 : 0).documentElement;
      return b$$173 ? b$$173.nodeName !== "HTML" : !1;
    };
    m$$19.attr = f$$4.attr, m$$19.selectors.attrMap = {}, f$$4.find = m$$19, f$$4.expr = m$$19.selectors, f$$4.expr[":"] = f$$4.expr.filters, f$$4.unique = m$$19.uniqueSort, f$$4.text = m$$19.getText, f$$4.isXMLDoc = m$$19.isXML, f$$4.contains = m$$19.contains;
  }();
  var L = /Until$/;
  var M = /^(?:parents|prevUntil|prevAll)/;
  var N = /,/;
  var O = /^.[^:#\[\.,]*$/;
  var P = Array.prototype.slice;
  var Q = f$$4.expr.match.globalPOS;
  var R = {children:!0, contents:!0, next:!0, prev:!0};
  f$$4.fn.extend({find:function(a$$265) {
    var b$$175 = this;
    var c$$131;
    var d$$113;
    if (typeof a$$265 != "string") {
      return f$$4(a$$265).filter(function() {
        c$$131 = 0, d$$113 = b$$175.length;
        for (;c$$131 < d$$113;c$$131++) {
          if (f$$4.contains(b$$175[c$$131], this)) {
            return !0;
          }
        }
      });
    }
    var e$$127 = this.pushStack("", "find", a$$265);
    var g$$66;
    var h$$59;
    var i$$130;
    c$$131 = 0, d$$113 = this.length;
    for (;c$$131 < d$$113;c$$131++) {
      g$$66 = e$$127.length, f$$4.find(a$$265, this[c$$131], e$$127);
      if (c$$131 > 0) {
        h$$59 = g$$66;
        for (;h$$59 < e$$127.length;h$$59++) {
          i$$130 = 0;
          for (;i$$130 < g$$66;i$$130++) {
            if (e$$127[i$$130] === e$$127[h$$59]) {
              e$$127.splice(h$$59--, 1);
              break;
            }
          }
        }
      }
    }
    return e$$127;
  }, has:function(a$$266) {
    var b$$176 = f$$4(a$$266);
    return this.filter(function() {
      var a$$267 = 0;
      var c$$132 = b$$176.length;
      for (;a$$267 < c$$132;a$$267++) {
        if (f$$4.contains(this, b$$176[a$$267])) {
          return !0;
        }
      }
    });
  }, not:function(a$$268) {
    return this.pushStack(T$$2(this, a$$268, !1), "not", a$$268);
  }, filter:function(a$$269) {
    return this.pushStack(T$$2(this, a$$269, !0), "filter", a$$269);
  }, is:function(a$$270) {
    return !!a$$270 && (typeof a$$270 == "string" ? Q.test(a$$270) ? f$$4(a$$270, this.context).index(this[0]) >= 0 : f$$4.filter(a$$270, this).length > 0 : this.filter(a$$270).length > 0);
  }, closest:function(a$$271, b$$177) {
    var c$$133 = [];
    var d$$114;
    var e$$128;
    var g$$67 = this[0];
    if (f$$4.isArray(a$$271)) {
      var h$$60 = 1;
      for (;g$$67 && g$$67.ownerDocument && g$$67 !== b$$177;) {
        d$$114 = 0;
        for (;d$$114 < a$$271.length;d$$114++) {
          f$$4(g$$67).is(a$$271[d$$114]) && c$$133.push({selector:a$$271[d$$114], elem:g$$67, level:h$$60});
        }
        g$$67 = g$$67.parentNode, h$$60++;
      }
      return c$$133;
    }
    var i$$131 = Q.test(a$$271) || typeof a$$271 != "string" ? f$$4(a$$271, b$$177 || this.context) : 0;
    d$$114 = 0, e$$128 = this.length;
    for (;d$$114 < e$$128;d$$114++) {
      g$$67 = this[d$$114];
      for (;g$$67;) {
        if (i$$131 ? i$$131.index(g$$67) > -1 : f$$4.find.matchesSelector(g$$67, a$$271)) {
          c$$133.push(g$$67);
          break;
        }
        g$$67 = g$$67.parentNode;
        if (!g$$67 || !g$$67.ownerDocument || g$$67 === b$$177 || g$$67.nodeType === 11) {
          break;
        }
      }
    }
    c$$133 = c$$133.length > 1 ? f$$4.unique(c$$133) : c$$133;
    return this.pushStack(c$$133, "closest", a$$271);
  }, index:function(a$$272) {
    if (!a$$272) {
      return this[0] && this[0].parentNode ? this.prevAll().length : -1;
    }
    if (typeof a$$272 == "string") {
      return f$$4.inArray(this[0], f$$4(a$$272));
    }
    return f$$4.inArray(a$$272.jquery ? a$$272[0] : a$$272, this);
  }, add:function(a$$273, b$$178) {
    var c$$134 = typeof a$$273 == "string" ? f$$4(a$$273, b$$178) : f$$4.makeArray(a$$273 && a$$273.nodeType ? [a$$273] : a$$273);
    var d$$115 = f$$4.merge(this.get(), c$$134);
    return this.pushStack(S(c$$134[0]) || S(d$$115[0]) ? d$$115 : f$$4.unique(d$$115));
  }, andSelf:function() {
    return this.add(this.prevObject);
  }}), f$$4.each({parent:function(a$$274) {
    var b$$179 = a$$274.parentNode;
    return b$$179 && b$$179.nodeType !== 11 ? b$$179 : null;
  }, parents:function(a$$275) {
    return f$$4.dir(a$$275, "parentNode");
  }, parentsUntil:function(a$$276, b$$180, c$$135) {
    return f$$4.dir(a$$276, "parentNode", c$$135);
  }, next:function(a$$277) {
    return f$$4.nth(a$$277, 2, "nextSibling");
  }, prev:function(a$$278) {
    return f$$4.nth(a$$278, 2, "previousSibling");
  }, nextAll:function(a$$279) {
    return f$$4.dir(a$$279, "nextSibling");
  }, prevAll:function(a$$280) {
    return f$$4.dir(a$$280, "previousSibling");
  }, nextUntil:function(a$$281, b$$181, c$$136) {
    return f$$4.dir(a$$281, "nextSibling", c$$136);
  }, prevUntil:function(a$$282, b$$182, c$$137) {
    return f$$4.dir(a$$282, "previousSibling", c$$137);
  }, siblings:function(a$$283) {
    return f$$4.sibling((a$$283.parentNode || {}).firstChild, a$$283);
  }, children:function(a$$284) {
    return f$$4.sibling(a$$284.firstChild);
  }, contents:function(a$$285) {
    return f$$4.nodeName(a$$285, "iframe") ? a$$285.contentDocument || a$$285.contentWindow.document : f$$4.makeArray(a$$285.childNodes);
  }}, function(a$$286, b$$183) {
    f$$4.fn[a$$286] = function(c$$138, d$$116) {
      var e$$129 = f$$4.map(this, b$$183, c$$138);
      L.test(a$$286) || (d$$116 = c$$138), d$$116 && typeof d$$116 == "string" && (e$$129 = f$$4.filter(d$$116, e$$129)), e$$129 = this.length > 1 && !R[a$$286] ? f$$4.unique(e$$129) : e$$129, (this.length > 1 || N.test(d$$116)) && M.test(a$$286) && (e$$129 = e$$129.reverse());
      return this.pushStack(e$$129, a$$286, P.call(arguments).join(","));
    };
  }), f$$4.extend({filter:function(a$$287, b$$184, c$$139) {
    c$$139 && (a$$287 = ":not(" + a$$287 + ")");
    return b$$184.length === 1 ? f$$4.find.matchesSelector(b$$184[0], a$$287) ? [b$$184[0]] : [] : f$$4.find.matches(a$$287, b$$184);
  }, dir:function(a$$288, c$$140, d$$117) {
    var e$$130 = [];
    var g$$68 = a$$288[c$$140];
    for (;g$$68 && g$$68.nodeType !== 9 && (d$$117 === b$$9 || g$$68.nodeType !== 1 || !f$$4(g$$68).is(d$$117));) {
      g$$68.nodeType === 1 && e$$130.push(g$$68), g$$68 = g$$68[c$$140];
    }
    return e$$130;
  }, nth:function(a$$289, b$$185, c$$141, d$$118) {
    b$$185 = b$$185 || 1;
    var e$$131 = 0;
    for (;a$$289;a$$289 = a$$289[c$$141]) {
      if (a$$289.nodeType === 1 && ++e$$131 === b$$185) {
        break;
      }
    }
    return a$$289;
  }, sibling:function(a$$290, b$$186) {
    var c$$142 = [];
    for (;a$$290;a$$290 = a$$290.nextSibling) {
      a$$290.nodeType === 1 && a$$290 !== b$$186 && c$$142.push(a$$290);
    }
    return c$$142;
  }});
  var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video";
  var W = / jQuery\d+="(?:\d+|null)"/g;
  var X = /^\s+/;
  var Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig;
  var Z = /<([\w:]+)/;
  var $$$2 = /<tbody/i;
  var _$$1 = /<|&#?\w+;/;
  var ba = /<(?:script|style)/i;
  var bb = /<(?:script|object|embed|option|style)/i;
  var bc = new RegExp("<(?:" + V + ")[\\s/>]", "i");
  var bd = /checked\s*(?:[^=]|=\s*.checked.)/i;
  var be = /\/(java|ecma)script/i;
  var bf = /^\s*<!(?:\[CDATA\[|\-\-)/;
  var bg = {option:[1, "<select multiple='multiple'>", "</select>"], legend:[1, "<fieldset>", "</fieldset>"], thead:[1, "<table>", "</table>"], tr:[2, "<table><tbody>", "</tbody></table>"], td:[3, "<table><tbody><tr>", "</tr></tbody></table>"], col:[2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area:[1, "<map>", "</map>"], _default:[0, "", ""]};
  var bh = U(c$$5);
  bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f$$4.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f$$4.fn.extend({text:function(a$$291) {
    return f$$4.access(this, function(a$$292) {
      return a$$292 === b$$9 ? f$$4.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c$$5).createTextNode(a$$292));
    }, null, a$$291, arguments.length);
  }, wrapAll:function(a$$293) {
    if (f$$4.isFunction(a$$293)) {
      return this.each(function(b$$188) {
        f$$4(this).wrapAll(a$$293.call(this, b$$188));
      });
    }
    if (this[0]) {
      var b$$187 = f$$4(a$$293, this[0].ownerDocument).eq(0).clone(!0);
      this[0].parentNode && b$$187.insertBefore(this[0]), b$$187.map(function() {
        var a$$294 = this;
        for (;a$$294.firstChild && a$$294.firstChild.nodeType === 1;) {
          a$$294 = a$$294.firstChild;
        }
        return a$$294;
      }).append(this);
    }
    return this;
  }, wrapInner:function(a$$295) {
    if (f$$4.isFunction(a$$295)) {
      return this.each(function(b$$189) {
        f$$4(this).wrapInner(a$$295.call(this, b$$189));
      });
    }
    return this.each(function() {
      var b$$190 = f$$4(this);
      var c$$143 = b$$190.contents();
      c$$143.length ? c$$143.wrapAll(a$$295) : b$$190.append(a$$295);
    });
  }, wrap:function(a$$296) {
    var b$$191 = f$$4.isFunction(a$$296);
    return this.each(function(c$$144) {
      f$$4(this).wrapAll(b$$191 ? a$$296.call(this, c$$144) : a$$296);
    });
  }, unwrap:function() {
    return this.parent().each(function() {
      f$$4.nodeName(this, "body") || f$$4(this).replaceWith(this.childNodes);
    }).end();
  }, append:function() {
    return this.domManip(arguments, !0, function(a$$297) {
      this.nodeType === 1 && this.appendChild(a$$297);
    });
  }, prepend:function() {
    return this.domManip(arguments, !0, function(a$$298) {
      this.nodeType === 1 && this.insertBefore(a$$298, this.firstChild);
    });
  }, before:function() {
    if (this[0] && this[0].parentNode) {
      return this.domManip(arguments, !1, function(a$$300) {
        this.parentNode.insertBefore(a$$300, this);
      });
    }
    if (arguments.length) {
      var a$$299 = f$$4.clean(arguments);
      a$$299.push.apply(a$$299, this.toArray());
      return this.pushStack(a$$299, "before", arguments);
    }
  }, after:function() {
    if (this[0] && this[0].parentNode) {
      return this.domManip(arguments, !1, function(a$$302) {
        this.parentNode.insertBefore(a$$302, this.nextSibling);
      });
    }
    if (arguments.length) {
      var a$$301 = this.pushStack(this, "after", arguments);
      a$$301.push.apply(a$$301, f$$4.clean(arguments));
      return a$$301;
    }
  }, remove:function(a$$303, b$$192) {
    var c$$145 = 0;
    var d$$119;
    for (;(d$$119 = this[c$$145]) != null;c$$145++) {
      if (!a$$303 || f$$4.filter(a$$303, [d$$119]).length) {
        !b$$192 && d$$119.nodeType === 1 && (f$$4.cleanData(d$$119.getElementsByTagName("*")), f$$4.cleanData([d$$119])), d$$119.parentNode && d$$119.parentNode.removeChild(d$$119);
      }
    }
    return this;
  }, empty:function() {
    var a$$304 = 0;
    var b$$193;
    for (;(b$$193 = this[a$$304]) != null;a$$304++) {
      b$$193.nodeType === 1 && f$$4.cleanData(b$$193.getElementsByTagName("*"));
      for (;b$$193.firstChild;) {
        b$$193.removeChild(b$$193.firstChild);
      }
    }
    return this;
  }, clone:function(a$$305, b$$194) {
    a$$305 = a$$305 == null ? !1 : a$$305, b$$194 = b$$194 == null ? a$$305 : b$$194;
    return this.map(function() {
      return f$$4.clone(this, a$$305, b$$194);
    });
  }, html:function(a$$306) {
    return f$$4.access(this, function(a$$307) {
      var c$$146 = this[0] || {};
      var d$$120 = 0;
      var e$$132 = this.length;
      if (a$$307 === b$$9) {
        return c$$146.nodeType === 1 ? c$$146.innerHTML.replace(W, "") : null;
      }
      if (typeof a$$307 == "string" && !ba.test(a$$307) && (f$$4.support.leadingWhitespace || !X.test(a$$307)) && !bg[(Z.exec(a$$307) || ["", ""])[1].toLowerCase()]) {
        a$$307 = a$$307.replace(Y, "<$1></$2>");
        try {
          for (;d$$120 < e$$132;d$$120++) {
            c$$146 = this[d$$120] || {}, c$$146.nodeType === 1 && (f$$4.cleanData(c$$146.getElementsByTagName("*")), c$$146.innerHTML = a$$307);
          }
          c$$146 = 0;
        } catch (g$$69) {
        }
      }
      c$$146 && this.empty().append(a$$307);
    }, null, a$$306, arguments.length);
  }, replaceWith:function(a$$308) {
    if (this[0] && this[0].parentNode) {
      if (f$$4.isFunction(a$$308)) {
        return this.each(function(b$$195) {
          var c$$147 = f$$4(this);
          var d$$121 = c$$147.html();
          c$$147.replaceWith(a$$308.call(this, b$$195, d$$121));
        });
      }
      typeof a$$308 != "string" && (a$$308 = f$$4(a$$308).detach());
      return this.each(function() {
        var b$$196 = this.nextSibling;
        var c$$148 = this.parentNode;
        f$$4(this).remove(), b$$196 ? f$$4(b$$196).before(a$$308) : f$$4(c$$148).append(a$$308);
      });
    }
    return this.length ? this.pushStack(f$$4(f$$4.isFunction(a$$308) ? a$$308() : a$$308), "replaceWith", a$$308) : this;
  }, detach:function(a$$309) {
    return this.remove(a$$309, !0);
  }, domManip:function(a$$310, c$$149, d$$122) {
    var e$$133;
    var g$$70;
    var h$$61;
    var i$$132;
    var j$$49 = a$$310[0];
    var k$$30 = [];
    if (!f$$4.support.checkClone && arguments.length === 3 && typeof j$$49 == "string" && bd.test(j$$49)) {
      return this.each(function() {
        f$$4(this).domManip(a$$310, c$$149, d$$122, !0);
      });
    }
    if (f$$4.isFunction(j$$49)) {
      return this.each(function(e$$134) {
        var g$$71 = f$$4(this);
        a$$310[0] = j$$49.call(this, e$$134, c$$149 ? g$$71.html() : b$$9), g$$71.domManip(a$$310, c$$149, d$$122);
      });
    }
    if (this[0]) {
      i$$132 = j$$49 && j$$49.parentNode, f$$4.support.parentNode && i$$132 && i$$132.nodeType === 11 && i$$132.childNodes.length === this.length ? e$$133 = {fragment:i$$132} : e$$133 = f$$4.buildFragment(a$$310, this, k$$30), h$$61 = e$$133.fragment, h$$61.childNodes.length === 1 ? g$$70 = h$$61 = h$$61.firstChild : g$$70 = h$$61.firstChild;
      if (g$$70) {
        c$$149 = c$$149 && f$$4.nodeName(g$$70, "tr");
        var l$$42 = 0;
        var m$$20 = this.length;
        var n$$72 = m$$20 - 1;
        for (;l$$42 < m$$20;l$$42++) {
          d$$122.call(c$$149 ? bi(this[l$$42], g$$70) : this[l$$42], e$$133.cacheable || m$$20 > 1 && l$$42 < n$$72 ? f$$4.clone(h$$61, !0, !0) : h$$61);
        }
      }
      k$$30.length && f$$4.each(k$$30, function(a$$311, b$$197) {
        b$$197.src ? f$$4.ajax({type:"GET", global:!1, url:b$$197.src, async:!1, dataType:"script"}) : f$$4.globalEval((b$$197.text || b$$197.textContent || b$$197.innerHTML || "").replace(bf, "/*$0*/")), b$$197.parentNode && b$$197.parentNode.removeChild(b$$197);
      });
    }
    return this;
  }}), f$$4.buildFragment = function(a$$312, b$$198, d$$123) {
    var e$$135;
    var g$$72;
    var h$$62;
    var i$$133;
    var j$$50 = a$$312[0];
    b$$198 && b$$198[0] && (i$$133 = b$$198[0].ownerDocument || b$$198[0]), i$$133.createDocumentFragment || (i$$133 = c$$5), a$$312.length === 1 && typeof j$$50 == "string" && j$$50.length < 512 && i$$133 === c$$5 && j$$50.charAt(0) === "<" && !bb.test(j$$50) && (f$$4.support.checkClone || !bd.test(j$$50)) && (f$$4.support.html5Clone || !bc.test(j$$50)) && (g$$72 = !0, h$$62 = f$$4.fragments[j$$50], h$$62 && h$$62 !== 1 && (e$$135 = h$$62)), e$$135 || (e$$135 = i$$133.createDocumentFragment(), f$$4.clean(a$$312, 
    i$$133, e$$135, d$$123)), g$$72 && (f$$4.fragments[j$$50] = h$$62 ? e$$135 : 1);
    return {fragment:e$$135, cacheable:g$$72};
  }, f$$4.fragments = {}, f$$4.each({appendTo:"append", prependTo:"prepend", insertBefore:"before", insertAfter:"after", replaceAll:"replaceWith"}, function(a$$313, b$$199) {
    f$$4.fn[a$$313] = function(c$$150) {
      var d$$124 = [];
      var e$$136 = f$$4(c$$150);
      var g$$73 = this.length === 1 && this[0].parentNode;
      if (g$$73 && g$$73.nodeType === 11 && g$$73.childNodes.length === 1 && e$$136.length === 1) {
        e$$136[b$$199](this[0]);
        return this;
      }
      var h$$63 = 0;
      var i$$134 = e$$136.length;
      for (;h$$63 < i$$134;h$$63++) {
        var j$$51 = (h$$63 > 0 ? this.clone(!0) : this).get();
        f$$4(e$$136[h$$63])[b$$199](j$$51), d$$124 = d$$124.concat(j$$51);
      }
      return this.pushStack(d$$124, a$$313, e$$136.selector);
    };
  }), f$$4.extend({clone:function(a$$314, b$$200, c$$151) {
    var d$$125;
    var e$$137;
    var g$$74;
    var JSCompiler_temp$$3;
    if (f$$4.support.html5Clone || f$$4.isXMLDoc(a$$314) || !bc.test("<" + a$$314.nodeName + ">")) {
      JSCompiler_temp$$3 = a$$314.cloneNode(!0);
    } else {
      var a$$inline_29 = a$$314;
      var b$$inline_30 = c$$5.createElement("div");
      bh.appendChild(b$$inline_30), b$$inline_30.innerHTML = a$$inline_29.outerHTML;
      JSCompiler_temp$$3 = b$$inline_30.firstChild;
    }
    var h$$64 = JSCompiler_temp$$3;
    if ((!f$$4.support.noCloneEvent || !f$$4.support.noCloneChecked) && (a$$314.nodeType === 1 || a$$314.nodeType === 11) && !f$$4.isXMLDoc(a$$314)) {
      bk(a$$314, h$$64), d$$125 = bl(a$$314), e$$137 = bl(h$$64);
      g$$74 = 0;
      for (;d$$125[g$$74];++g$$74) {
        e$$137[g$$74] && bk(d$$125[g$$74], e$$137[g$$74]);
      }
    }
    if (b$$200) {
      bj(a$$314, h$$64);
      if (c$$151) {
        d$$125 = bl(a$$314), e$$137 = bl(h$$64);
        g$$74 = 0;
        for (;d$$125[g$$74];++g$$74) {
          bj(d$$125[g$$74], e$$137[g$$74]);
        }
      }
    }
    d$$125 = e$$137 = null;
    return h$$64;
  }, clean:function(a$$315, b$$201, d$$126, e$$138) {
    var g$$75;
    var h$$65;
    var i$$135;
    var j$$52 = [];
    b$$201 = b$$201 || c$$5, typeof b$$201.createElement == "undefined" && (b$$201 = b$$201.ownerDocument || b$$201[0] && b$$201[0].ownerDocument || c$$5);
    var k$$31 = 0;
    var l$$43;
    for (;(l$$43 = a$$315[k$$31]) != null;k$$31++) {
      typeof l$$43 == "number" && (l$$43 += "");
      if (!l$$43) {
        continue;
      }
      if (typeof l$$43 == "string") {
        if (!_$$1.test(l$$43)) {
          l$$43 = b$$201.createTextNode(l$$43);
        } else {
          l$$43 = l$$43.replace(Y, "<$1></$2>");
          var m$$21 = (Z.exec(l$$43) || ["", ""])[1].toLowerCase();
          var n$$73 = bg[m$$21] || bg._default;
          var o$$11 = n$$73[0];
          var p$$34 = b$$201.createElement("div");
          var q$$12 = bh.childNodes;
          var r$$14;
          b$$201 === c$$5 ? bh.appendChild(p$$34) : U(b$$201).appendChild(p$$34), p$$34.innerHTML = n$$73[1] + l$$43 + n$$73[2];
          for (;o$$11--;) {
            p$$34 = p$$34.lastChild;
          }
          if (!f$$4.support.tbody) {
            var s$$24 = $$$2.test(l$$43);
            var t$$9 = m$$21 === "table" && !s$$24 ? p$$34.firstChild && p$$34.firstChild.childNodes : n$$73[1] === "<table>" && !s$$24 ? p$$34.childNodes : [];
            i$$135 = t$$9.length - 1;
            for (;i$$135 >= 0;--i$$135) {
              f$$4.nodeName(t$$9[i$$135], "tbody") && !t$$9[i$$135].childNodes.length && t$$9[i$$135].parentNode.removeChild(t$$9[i$$135]);
            }
          }
          !f$$4.support.leadingWhitespace && X.test(l$$43) && p$$34.insertBefore(b$$201.createTextNode(X.exec(l$$43)[0]), p$$34.firstChild), l$$43 = p$$34.childNodes, p$$34 && (p$$34.parentNode.removeChild(p$$34), q$$12.length > 0 && (r$$14 = q$$12[q$$12.length - 1], r$$14 && r$$14.parentNode && r$$14.parentNode.removeChild(r$$14)));
        }
      }
      var u$$7;
      if (!f$$4.support.appendChecked) {
        if (l$$43[0] && typeof(u$$7 = l$$43.length) == "number") {
          i$$135 = 0;
          for (;i$$135 < u$$7;i$$135++) {
            bn(l$$43[i$$135]);
          }
        } else {
          bn(l$$43);
        }
      }
      l$$43.nodeType ? j$$52.push(l$$43) : j$$52 = f$$4.merge(j$$52, l$$43);
    }
    if (d$$126) {
      g$$75 = function(a$$316) {
        return !a$$316.type || be.test(a$$316.type);
      };
      k$$31 = 0;
      for (;j$$52[k$$31];k$$31++) {
        h$$65 = j$$52[k$$31];
        if (e$$138 && f$$4.nodeName(h$$65, "script") && (!h$$65.type || be.test(h$$65.type))) {
          e$$138.push(h$$65.parentNode ? h$$65.parentNode.removeChild(h$$65) : h$$65);
        } else {
          if (h$$65.nodeType === 1) {
            var v$$8 = f$$4.grep(h$$65.getElementsByTagName("script"), g$$75);
            j$$52.splice.apply(j$$52, [k$$31 + 1, 0].concat(v$$8));
          }
          d$$126.appendChild(h$$65);
        }
      }
    }
    return j$$52;
  }, cleanData:function(a$$317) {
    var b$$202;
    var c$$152;
    var d$$127 = f$$4.cache;
    var e$$139 = f$$4.event.special;
    var g$$76 = f$$4.support.deleteExpando;
    var h$$66 = 0;
    var i$$136;
    for (;(i$$136 = a$$317[h$$66]) != null;h$$66++) {
      if (i$$136.nodeName && f$$4.noData[i$$136.nodeName.toLowerCase()]) {
        continue;
      }
      c$$152 = i$$136[f$$4.expando];
      if (c$$152) {
        b$$202 = d$$127[c$$152];
        if (b$$202 && b$$202.events) {
          var j$$53;
          for (j$$53 in b$$202.events) {
            e$$139[j$$53] ? f$$4.event.remove(i$$136, j$$53) : f$$4.removeEvent(i$$136, j$$53, b$$202.handle);
          }
          b$$202.handle && (b$$202.handle.elem = null);
        }
        g$$76 ? delete i$$136[f$$4.expando] : i$$136.removeAttribute && i$$136.removeAttribute(f$$4.expando), delete d$$127[c$$152];
      }
    }
  }});
  var bp = /alpha\([^)]*\)/i;
  var bq = /opacity=([^)]*)/;
  var br = /([A-Z]|^ms)/g;
  var bs = /^[\-+]?(?:\d*\.)?\d+$/i;
  var bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i;
  var bu = /^([\-+])=([\-+.\de]+)/;
  var bv = /^margin/;
  var bw = {position:"absolute", visibility:"hidden", display:"block"};
  var bx = ["Top", "Right", "Bottom", "Left"];
  var by;
  var bz;
  var bA;
  f$$4.fn.css = function(a$$318, c$$153) {
    return f$$4.access(this, function(a$$319, c$$154, d$$128) {
      return d$$128 !== b$$9 ? f$$4.style(a$$319, c$$154, d$$128) : f$$4.css(a$$319, c$$154);
    }, a$$318, c$$153, arguments.length > 1);
  }, f$$4.extend({cssHooks:{opacity:{get:function(a$$320, b$$203) {
    if (b$$203) {
      var c$$155 = by(a$$320, "opacity");
      return c$$155 === "" ? "1" : c$$155;
    }
    return a$$320.style.opacity;
  }}}, cssNumber:{fillOpacity:!0, fontWeight:!0, lineHeight:!0, opacity:!0, orphans:!0, widows:!0, zIndex:!0, zoom:!0}, cssProps:{"float":f$$4.support.cssFloat ? "cssFloat" : "styleFloat"}, style:function(a$$321, c$$156, d$$129, e$$140) {
    if (!!a$$321 && a$$321.nodeType !== 3 && a$$321.nodeType !== 8 && !!a$$321.style) {
      var g$$77;
      var h$$67;
      var i$$137 = f$$4.camelCase(c$$156);
      var j$$54 = a$$321.style;
      var k$$32 = f$$4.cssHooks[i$$137];
      c$$156 = f$$4.cssProps[i$$137] || i$$137;
      if (d$$129 === b$$9) {
        if (k$$32 && "get" in k$$32 && (g$$77 = k$$32.get(a$$321, !1, e$$140)) !== b$$9) {
          return g$$77;
        }
        return j$$54[c$$156];
      }
      h$$67 = typeof d$$129, h$$67 === "string" && (g$$77 = bu.exec(d$$129)) && (d$$129 = +(g$$77[1] + 1) * +g$$77[2] + parseFloat(f$$4.css(a$$321, c$$156)), h$$67 = "number");
      if (d$$129 == null || h$$67 === "number" && isNaN(d$$129)) {
        return;
      }
      h$$67 === "number" && !f$$4.cssNumber[i$$137] && (d$$129 += "px");
      if (!k$$32 || !("set" in k$$32) || (d$$129 = k$$32.set(a$$321, d$$129)) !== b$$9) {
        try {
          j$$54[c$$156] = d$$129;
        } catch (l$$44) {
        }
      }
    }
  }, css:function(a$$322, c$$157, d$$130) {
    var e$$141;
    var g$$78;
    c$$157 = f$$4.camelCase(c$$157), g$$78 = f$$4.cssHooks[c$$157], c$$157 = f$$4.cssProps[c$$157] || c$$157, c$$157 === "cssFloat" && (c$$157 = "float");
    if (g$$78 && "get" in g$$78 && (e$$141 = g$$78.get(a$$322, !0, d$$130)) !== b$$9) {
      return e$$141;
    }
    if (by) {
      return by(a$$322, c$$157);
    }
  }, swap:function(a$$323, b$$204, c$$158) {
    var d$$131 = {};
    var e$$142;
    var f$$43;
    for (f$$43 in b$$204) {
      d$$131[f$$43] = a$$323.style[f$$43], a$$323.style[f$$43] = b$$204[f$$43];
    }
    e$$142 = c$$158.call(a$$323);
    for (f$$43 in b$$204) {
      a$$323.style[f$$43] = d$$131[f$$43];
    }
    return e$$142;
  }}), f$$4.curCSS = f$$4.css, c$$5.defaultView && c$$5.defaultView.getComputedStyle && (bz = function(a$$324, b$$205) {
    var c$$159;
    var d$$132;
    var e$$143;
    var g$$79;
    var h$$68 = a$$324.style;
    b$$205 = b$$205.replace(br, "-$1").toLowerCase(), (d$$132 = a$$324.ownerDocument.defaultView) && (e$$143 = d$$132.getComputedStyle(a$$324, null)) && (c$$159 = e$$143.getPropertyValue(b$$205), c$$159 === "" && !f$$4.contains(a$$324.ownerDocument.documentElement, a$$324) && (c$$159 = f$$4.style(a$$324, b$$205))), !f$$4.support.pixelMargin && e$$143 && bv.test(b$$205) && bt.test(c$$159) && (g$$79 = h$$68.width, h$$68.width = c$$159, c$$159 = e$$143.width, h$$68.width = g$$79);
    return c$$159;
  }), c$$5.documentElement.currentStyle && (bA = function(a$$325, b$$206) {
    var c$$160;
    var d$$133;
    var e$$144;
    var f$$44 = a$$325.currentStyle && a$$325.currentStyle[b$$206];
    var g$$80 = a$$325.style;
    f$$44 == null && g$$80 && (e$$144 = g$$80[b$$206]) && (f$$44 = e$$144), bt.test(f$$44) && (c$$160 = g$$80.left, d$$133 = a$$325.runtimeStyle && a$$325.runtimeStyle.left, d$$133 && (a$$325.runtimeStyle.left = a$$325.currentStyle.left), g$$80.left = b$$206 === "fontSize" ? "1em" : f$$44, f$$44 = g$$80.pixelLeft + "px", g$$80.left = c$$160, d$$133 && (a$$325.runtimeStyle.left = d$$133));
    return f$$44 === "" ? "auto" : f$$44;
  }), by = bz || bA, f$$4.each(["height", "width"], function(a$$326, b$$207) {
    f$$4.cssHooks[b$$207] = {get:function(a$$327, c$$161, d$$134) {
      if (c$$161) {
        return a$$327.offsetWidth !== 0 ? bB(a$$327, b$$207, d$$134) : f$$4.swap(a$$327, bw, function() {
          return bB(a$$327, b$$207, d$$134);
        });
      }
    }, set:function(a$$328, b$$208) {
      return bs.test(b$$208) ? b$$208 + "px" : b$$208;
    }};
  }), f$$4.support.opacity || (f$$4.cssHooks.opacity = {get:function(a$$329, b$$209) {
    return bq.test((b$$209 && a$$329.currentStyle ? a$$329.currentStyle.filter : a$$329.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b$$209 ? "1" : "";
  }, set:function(a$$330, b$$210) {
    var c$$162 = a$$330.style;
    var d$$135 = a$$330.currentStyle;
    var e$$145 = f$$4.isNumeric(b$$210) ? "alpha(opacity=" + b$$210 * 100 + ")" : "";
    var g$$81 = d$$135 && d$$135.filter || c$$162.filter || "";
    c$$162.zoom = 1;
    if (b$$210 >= 1 && f$$4.trim(g$$81.replace(bp, "")) === "") {
      c$$162.removeAttribute("filter");
      if (d$$135 && !d$$135.filter) {
        return;
      }
    }
    c$$162.filter = bp.test(g$$81) ? g$$81.replace(bp, e$$145) : g$$81 + " " + e$$145;
  }}), f$$4(function() {
    f$$4.support.reliableMarginRight || (f$$4.cssHooks.marginRight = {get:function(a$$331, b$$211) {
      return f$$4.swap(a$$331, {display:"inline-block"}, function() {
        return b$$211 ? by(a$$331, "margin-right") : a$$331.style.marginRight;
      });
    }});
  }), f$$4.expr && f$$4.expr.filters && (f$$4.expr.filters.hidden = function(a$$332) {
    var b$$212 = a$$332.offsetWidth;
    var c$$163 = a$$332.offsetHeight;
    return b$$212 === 0 && c$$163 === 0 || !f$$4.support.reliableHiddenOffsets && (a$$332.style && a$$332.style.display || f$$4.css(a$$332, "display")) === "none";
  }, f$$4.expr.filters.visible = function(a$$333) {
    return !f$$4.expr.filters.hidden(a$$333);
  }), f$$4.each({margin:"", padding:"", border:"Width"}, function(a$$334, b$$213) {
    f$$4.cssHooks[a$$334 + b$$213] = {expand:function(c$$164) {
      var d$$136;
      var e$$146 = typeof c$$164 == "string" ? c$$164.split(" ") : [c$$164];
      var f$$45 = {};
      d$$136 = 0;
      for (;d$$136 < 4;d$$136++) {
        f$$45[a$$334 + bx[d$$136] + b$$213] = e$$146[d$$136] || e$$146[d$$136 - 2] || e$$146[0];
      }
      return f$$45;
    }};
  });
  var bC = /%20/g;
  var bD = /\[\]$/;
  var bE = /\r?\n/g;
  var bF = /#.*$/;
  var bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg;
  var bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i;
  var bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/;
  var bJ = /^(?:GET|HEAD)$/;
  var bK = /^\/\//;
  var bL = /\?/;
  var bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  var bN = /^(?:select|textarea)/i;
  var bO = /\s+/;
  var bP = /([?&])_=[^&]*/;
  var bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/;
  var bR = f$$4.fn.load;
  var bS = {};
  var bT = {};
  var bU;
  var bV;
  var bW = ["*/"] + ["*"];
  try {
    bU = e$$47.href;
  } catch (bX) {
    bU = c$$5.createElement("a"), bU.href = "", bU = bU.href;
  }
  bV = bQ.exec(bU.toLowerCase()) || [], f$$4.fn.extend({load:function(a$$335, c$$165, d$$137) {
    if (typeof a$$335 != "string" && bR) {
      return bR.apply(this, arguments);
    }
    if (!this.length) {
      return this;
    }
    var e$$147 = a$$335.indexOf(" ");
    if (e$$147 >= 0) {
      var g$$82 = a$$335.slice(e$$147, a$$335.length);
      a$$335 = a$$335.slice(0, e$$147);
    }
    var h$$69 = "GET";
    c$$165 && (f$$4.isFunction(c$$165) ? (d$$137 = c$$165, c$$165 = b$$9) : typeof c$$165 == "object" && (c$$165 = f$$4.param(c$$165, f$$4.ajaxSettings.traditional), h$$69 = "POST"));
    var i$$138 = this;
    f$$4.ajax({url:a$$335, type:h$$69, dataType:"html", data:c$$165, complete:function(a$$336, b$$214, c$$166) {
      c$$166 = a$$336.responseText, a$$336.isResolved() && (a$$336.done(function(a$$337) {
        c$$166 = a$$337;
      }), i$$138.html(g$$82 ? f$$4("<div>").append(c$$166.replace(bM, "")).find(g$$82) : c$$166)), d$$137 && i$$138.each(d$$137, [c$$166, b$$214, a$$336]);
    }});
    return this;
  }, serialize:function() {
    return f$$4.param(this.serializeArray());
  }, serializeArray:function() {
    return this.map(function() {
      return this.elements ? f$$4.makeArray(this.elements) : this;
    }).filter(function() {
      return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type));
    }).map(function(a$$338, b$$215) {
      var c$$167 = f$$4(this).val();
      return c$$167 == null ? null : f$$4.isArray(c$$167) ? f$$4.map(c$$167, function(a$$339, c$$168) {
        return {name:b$$215.name, value:a$$339.replace(bE, "\r\n")};
      }) : {name:b$$215.name, value:c$$167.replace(bE, "\r\n")};
    }).get();
  }}), f$$4.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a$$340, b$$216) {
    f$$4.fn[b$$216] = function(a$$341) {
      return this.on(b$$216, a$$341);
    };
  }), f$$4.each(["get", "post"], function(a$$342, c$$169) {
    f$$4[c$$169] = function(a$$343, d$$138, e$$148, g$$83) {
      f$$4.isFunction(d$$138) && (g$$83 = g$$83 || e$$148, e$$148 = d$$138, d$$138 = b$$9);
      return f$$4.ajax({type:c$$169, url:a$$343, data:d$$138, success:e$$148, dataType:g$$83});
    };
  }), f$$4.extend({getScript:function(a$$344, c$$170) {
    return f$$4.get(a$$344, b$$9, c$$170, "script");
  }, getJSON:function(a$$345, b$$217, c$$171) {
    return f$$4.get(a$$345, b$$217, c$$171, "json");
  }, ajaxSetup:function(a$$346, b$$218) {
    b$$218 ? b$(a$$346, f$$4.ajaxSettings) : (b$$218 = a$$346, a$$346 = f$$4.ajaxSettings), b$(a$$346, b$$218);
    return a$$346;
  }, ajaxSettings:{url:bU, isLocal:bI.test(bV[1]), global:!0, type:"GET", contentType:"application/x-www-form-urlencoded; charset=UTF-8", processData:!0, async:!0, accepts:{xml:"application/xml, text/xml", html:"text/html", text:"text/plain", json:"application/json, text/javascript", "*":bW}, contents:{xml:/xml/, html:/html/, json:/json/}, responseFields:{xml:"responseXML", text:"responseText"}, converters:{"* text":a$$13.String, "text html":!0, "text json":f$$4.parseJSON, "text xml":f$$4.parseXML}, 
  flatOptions:{context:!0, url:!0}}, ajaxPrefilter:bY(bS), ajaxTransport:bY(bT), ajax:function(a$$347, c$$172) {
    function w$$15(a$$348, c$$173, l$$46, m$$23) {
      if (s$$25 !== 2) {
        s$$25 = 2, q$$13 && clearTimeout(q$$13), p$$35 = b$$9, n$$74 = m$$23 || "", v$$9.readyState = a$$348 > 0 ? 4 : 0;
        var o$$13;
        var r$$16;
        var u$$9;
        var w$$16 = c$$173;
        var JSCompiler_temp$$2;
        if (l$$46) {
          JSCompiler_inline_label_ca_42: {
            var a$$inline_32 = d$$139;
            var c$$inline_33 = v$$9;
            var d$$inline_34 = l$$46;
            var e$$inline_35 = a$$inline_32.contents;
            var f$$inline_36 = a$$inline_32.dataTypes;
            var g$$inline_37 = a$$inline_32.responseFields;
            var h$$inline_38;
            var i$$inline_39;
            var j$$inline_40;
            var k$$inline_41;
            for (i$$inline_39 in g$$inline_37) {
              i$$inline_39 in d$$inline_34 && (c$$inline_33[g$$inline_37[i$$inline_39]] = d$$inline_34[i$$inline_39]);
            }
            for (;f$$inline_36[0] === "*";) {
              f$$inline_36.shift(), h$$inline_38 === b$$9 && (h$$inline_38 = a$$inline_32.mimeType || c$$inline_33.getResponseHeader("content-type"));
            }
            if (h$$inline_38) {
              for (i$$inline_39 in e$$inline_35) {
                if (e$$inline_35[i$$inline_39] && e$$inline_35[i$$inline_39].test(h$$inline_38)) {
                  f$$inline_36.unshift(i$$inline_39);
                  break;
                }
              }
            }
            if (f$$inline_36[0] in d$$inline_34) {
              j$$inline_40 = f$$inline_36[0];
            } else {
              for (i$$inline_39 in d$$inline_34) {
                if (!f$$inline_36[0] || a$$inline_32.converters[i$$inline_39 + " " + f$$inline_36[0]]) {
                  j$$inline_40 = i$$inline_39;
                  break;
                }
                k$$inline_41 || (k$$inline_41 = i$$inline_39);
              }
              j$$inline_40 = j$$inline_40 || k$$inline_41;
            }
            if (j$$inline_40) {
              j$$inline_40 !== f$$inline_36[0] && f$$inline_36.unshift(j$$inline_40);
              JSCompiler_temp$$2 = d$$inline_34[j$$inline_40];
              break JSCompiler_inline_label_ca_42;
            }
            JSCompiler_temp$$2 = void 0;
          }
        } else {
          JSCompiler_temp$$2 = b$$9;
        }
        var x$$72 = JSCompiler_temp$$2;
        var y$$53;
        var z$$4;
        if (a$$348 >= 200 && a$$348 < 300 || a$$348 === 304) {
          if (d$$139.ifModified) {
            if (y$$53 = v$$9.getResponseHeader("Last-Modified")) {
              f$$4.lastModified[k$$33] = y$$53;
            }
            if (z$$4 = v$$9.getResponseHeader("Etag")) {
              f$$4.etag[k$$33] = z$$4;
            }
          }
          if (a$$348 === 304) {
            w$$16 = "notmodified", o$$13 = !0;
          } else {
            try {
              var JSCompiler_inline_result$$1;
              var a$$inline_43 = d$$139;
              var c$$inline_44 = x$$72;
              a$$inline_43.dataFilter && (c$$inline_44 = a$$inline_43.dataFilter(c$$inline_44, a$$inline_43.dataType));
              var d$$inline_45 = a$$inline_43.dataTypes;
              var e$$inline_46 = {};
              var g$$inline_47;
              var h$$inline_48;
              var i$$inline_49 = d$$inline_45.length;
              var j$$inline_50;
              var k$$inline_51 = d$$inline_45[0];
              var l$$inline_52;
              var m$$inline_53;
              var n$$inline_54;
              var o$$inline_55;
              var p$$inline_56;
              g$$inline_47 = 1;
              for (;g$$inline_47 < i$$inline_49;g$$inline_47++) {
                if (g$$inline_47 === 1) {
                  for (h$$inline_48 in a$$inline_43.converters) {
                    typeof h$$inline_48 == "string" && (e$$inline_46[h$$inline_48.toLowerCase()] = a$$inline_43.converters[h$$inline_48]);
                  }
                }
                l$$inline_52 = k$$inline_51, k$$inline_51 = d$$inline_45[g$$inline_47];
                if (k$$inline_51 === "*") {
                  k$$inline_51 = l$$inline_52;
                } else {
                  if (l$$inline_52 !== "*" && l$$inline_52 !== k$$inline_51) {
                    m$$inline_53 = l$$inline_52 + " " + k$$inline_51, n$$inline_54 = e$$inline_46[m$$inline_53] || e$$inline_46["* " + k$$inline_51];
                    if (!n$$inline_54) {
                      p$$inline_56 = b$$9;
                      for (o$$inline_55 in e$$inline_46) {
                        j$$inline_50 = o$$inline_55.split(" ");
                        if (j$$inline_50[0] === l$$inline_52 || j$$inline_50[0] === "*") {
                          p$$inline_56 = e$$inline_46[j$$inline_50[1] + " " + k$$inline_51];
                          if (p$$inline_56) {
                            o$$inline_55 = e$$inline_46[o$$inline_55], o$$inline_55 === !0 ? n$$inline_54 = p$$inline_56 : p$$inline_56 === !0 && (n$$inline_54 = o$$inline_55);
                            break;
                          }
                        }
                      }
                    }
                    !n$$inline_54 && !p$$inline_56 && f$$4.error("No conversion from " + m$$inline_53.replace(" ", " to ")), n$$inline_54 !== !0 && (c$$inline_44 = n$$inline_54 ? n$$inline_54(c$$inline_44) : p$$inline_56(o$$inline_55(c$$inline_44)));
                  }
                }
              }
              JSCompiler_inline_result$$1 = c$$inline_44;
              r$$16 = JSCompiler_inline_result$$1, w$$16 = "success", o$$13 = !0;
            } catch (A$$2) {
              w$$16 = "parsererror", u$$9 = A$$2;
            }
          }
        } else {
          u$$9 = w$$16;
          if (!w$$16 || a$$348) {
            w$$16 = "error", a$$348 < 0 && (a$$348 = 0);
          }
        }
        v$$9.status = a$$348, v$$9.statusText = "" + (c$$173 || w$$16), o$$13 ? h$$70.resolveWith(e$$149, [r$$16, w$$16, v$$9]) : h$$70.rejectWith(e$$149, [v$$9, w$$16, u$$9]), v$$9.statusCode(j$$55), j$$55 = b$$9, t$$10 && g$$84.trigger("ajax" + (o$$13 ? "Success" : "Error"), [v$$9, d$$139, o$$13 ? r$$16 : u$$9]), i$$139.fireWith(e$$149, [v$$9, w$$16]), t$$10 && (g$$84.trigger("ajaxComplete", [v$$9, d$$139]), --f$$4.active || f$$4.event.trigger("ajaxStop"));
      }
    }
    typeof a$$347 == "object" && (c$$172 = a$$347, a$$347 = b$$9), c$$172 = c$$172 || {};
    var d$$139 = f$$4.ajaxSetup({}, c$$172);
    var e$$149 = d$$139.context || d$$139;
    var g$$84 = e$$149 !== d$$139 && (e$$149.nodeType || e$$149 instanceof f$$4) ? f$$4(e$$149) : f$$4.event;
    var h$$70 = f$$4.Deferred();
    var i$$139 = f$$4.Callbacks("once memory");
    var j$$55 = d$$139.statusCode || {};
    var k$$33;
    var l$$45 = {};
    var m$$22 = {};
    var n$$74;
    var o$$12;
    var p$$35;
    var q$$13;
    var r$$15;
    var s$$25 = 0;
    var t$$10;
    var u$$8;
    var v$$9 = {readyState:0, setRequestHeader:function(a$$349, b$$219) {
      if (!s$$25) {
        var c$$174 = a$$349.toLowerCase();
        a$$349 = m$$22[c$$174] = m$$22[c$$174] || a$$349, l$$45[a$$349] = b$$219;
      }
      return this;
    }, getAllResponseHeaders:function() {
      return s$$25 === 2 ? n$$74 : null;
    }, getResponseHeader:function(a$$350) {
      var c$$175;
      if (s$$25 === 2) {
        if (!o$$12) {
          o$$12 = {};
          for (;c$$175 = bG.exec(n$$74);) {
            o$$12[c$$175[1].toLowerCase()] = c$$175[2];
          }
        }
        c$$175 = o$$12[a$$350.toLowerCase()];
      }
      return c$$175 === b$$9 ? null : c$$175;
    }, overrideMimeType:function(a$$351) {
      s$$25 || (d$$139.mimeType = a$$351);
      return this;
    }, abort:function(a$$352) {
      a$$352 = a$$352 || "abort", p$$35 && p$$35.abort(a$$352), w$$15(0, a$$352);
      return this;
    }};
    h$$70.promise(v$$9), v$$9.success = v$$9.done, v$$9.error = v$$9.fail, v$$9.complete = i$$139.add, v$$9.statusCode = function(a$$353) {
      if (a$$353) {
        var b$$220;
        if (s$$25 < 2) {
          for (b$$220 in a$$353) {
            j$$55[b$$220] = [j$$55[b$$220], a$$353[b$$220]];
          }
        } else {
          b$$220 = a$$353[v$$9.status], v$$9.then(b$$220, b$$220);
        }
      }
      return this;
    }, d$$139.url = ((a$$347 || d$$139.url) + "").replace(bF, "").replace(bK, bV[1] + "//"), d$$139.dataTypes = f$$4.trim(d$$139.dataType || "*").toLowerCase().split(bO), d$$139.crossDomain == null && (r$$15 = bQ.exec(d$$139.url.toLowerCase()), d$$139.crossDomain = !(!r$$15 || r$$15[1] == bV[1] && r$$15[2] == bV[2] && (r$$15[3] || (r$$15[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))), d$$139.data && d$$139.processData && typeof d$$139.data != "string" && (d$$139.data = 
    f$$4.param(d$$139.data, d$$139.traditional)), bZ(bS, d$$139, c$$172, v$$9);
    if (s$$25 === 2) {
      return !1;
    }
    t$$10 = d$$139.global, d$$139.type = d$$139.type.toUpperCase(), d$$139.hasContent = !bJ.test(d$$139.type), t$$10 && f$$4.active++ === 0 && f$$4.event.trigger("ajaxStart");
    if (!d$$139.hasContent) {
      d$$139.data && (d$$139.url += (bL.test(d$$139.url) ? "&" : "?") + d$$139.data, delete d$$139.data), k$$33 = d$$139.url;
      if (d$$139.cache === !1) {
        var x$$71 = f$$4.now();
        var y$$52 = d$$139.url.replace(bP, "$1_=" + x$$71);
        d$$139.url = y$$52 + (y$$52 === d$$139.url ? (bL.test(d$$139.url) ? "&" : "?") + "_=" + x$$71 : "");
      }
    }
    (d$$139.data && d$$139.hasContent && d$$139.contentType !== !1 || c$$172.contentType) && v$$9.setRequestHeader("Content-Type", d$$139.contentType), d$$139.ifModified && (k$$33 = k$$33 || d$$139.url, f$$4.lastModified[k$$33] && v$$9.setRequestHeader("If-Modified-Since", f$$4.lastModified[k$$33]), f$$4.etag[k$$33] && v$$9.setRequestHeader("If-None-Match", f$$4.etag[k$$33])), v$$9.setRequestHeader("Accept", d$$139.dataTypes[0] && d$$139.accepts[d$$139.dataTypes[0]] ? d$$139.accepts[d$$139.dataTypes[0]] + 
    (d$$139.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d$$139.accepts["*"]);
    for (u$$8 in d$$139.headers) {
      v$$9.setRequestHeader(u$$8, d$$139.headers[u$$8]);
    }
    if (d$$139.beforeSend && (d$$139.beforeSend.call(e$$149, v$$9, d$$139) === !1 || s$$25 === 2)) {
      v$$9.abort();
      return !1;
    }
    for (u$$8 in{success:1, error:1, complete:1}) {
      v$$9[u$$8](d$$139[u$$8]);
    }
    p$$35 = bZ(bT, d$$139, c$$172, v$$9);
    if (!p$$35) {
      w$$15(-1, "No Transport");
    } else {
      v$$9.readyState = 1, t$$10 && g$$84.trigger("ajaxSend", [v$$9, d$$139]), d$$139.async && d$$139.timeout > 0 && (q$$13 = setTimeout(function() {
        v$$9.abort("timeout");
      }, d$$139.timeout));
      try {
        s$$25 = 1, p$$35.send(l$$45, w$$15);
      } catch (z$$5) {
        if (s$$25 < 2) {
          w$$15(-1, z$$5);
        } else {
          throw z$$5;
        }
      }
    }
    return v$$9;
  }, param:function(a$$354, c$$176) {
    function e$$150(a$$355, b$$221) {
      b$$221 = f$$4.isFunction(b$$221) ? b$$221() : b$$221, d$$140[d$$140.length] = encodeURIComponent(a$$355) + "=" + encodeURIComponent(b$$221);
    }
    var d$$140 = [];
    c$$176 === b$$9 && (c$$176 = f$$4.ajaxSettings.traditional);
    if (f$$4.isArray(a$$354) || a$$354.jquery && !f$$4.isPlainObject(a$$354)) {
      f$$4.each(a$$354, function() {
        e$$150(this.name, this.value);
      });
    } else {
      var g$$85;
      for (g$$85 in a$$354) {
        b_(g$$85, a$$354[g$$85], c$$176, e$$150);
      }
    }
    return d$$140.join("&").replace(bC, "+");
  }}), f$$4.extend({active:0, lastModified:{}, etag:{}});
  var cc = f$$4.now();
  var cd = /(\=)\?(&|$)|\?\?/i;
  f$$4.ajaxSetup({jsonp:"callback", jsonpCallback:function() {
    return f$$4.expando + "_" + cc++;
  }}), f$$4.ajaxPrefilter("json jsonp", function(b$$222, c$$177, d$$141) {
    var e$$151 = typeof b$$222.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b$$222.contentType);
    if (b$$222.dataTypes[0] === "jsonp" || b$$222.jsonp !== !1 && (cd.test(b$$222.url) || e$$151 && cd.test(b$$222.data))) {
      var g$$86;
      var h$$71 = b$$222.jsonpCallback = f$$4.isFunction(b$$222.jsonpCallback) ? b$$222.jsonpCallback() : b$$222.jsonpCallback;
      var i$$140 = a$$13[h$$71];
      var j$$56 = b$$222.url;
      var k$$34 = b$$222.data;
      var l$$47 = "$1" + h$$71 + "$2";
      b$$222.jsonp !== !1 && (j$$56 = j$$56.replace(cd, l$$47), b$$222.url === j$$56 && (e$$151 && (k$$34 = k$$34.replace(cd, l$$47)), b$$222.data === k$$34 && (j$$56 += (/\?/.test(j$$56) ? "&" : "?") + b$$222.jsonp + "=" + h$$71))), b$$222.url = j$$56, b$$222.data = k$$34, a$$13[h$$71] = function(a$$356) {
        g$$86 = [a$$356];
      }, d$$141.always(function() {
        a$$13[h$$71] = i$$140, g$$86 && f$$4.isFunction(i$$140) && a$$13[h$$71](g$$86[0]);
      }), b$$222.converters["script json"] = function() {
        g$$86 || f$$4.error(h$$71 + " was not called");
        return g$$86[0];
      }, b$$222.dataTypes[0] = "json";
      return "script";
    }
  }), f$$4.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents:{script:/javascript|ecmascript/}, converters:{"text script":function(a$$357) {
    f$$4.globalEval(a$$357);
    return a$$357;
  }}}), f$$4.ajaxPrefilter("script", function(a$$358) {
    a$$358.cache === b$$9 && (a$$358.cache = !1), a$$358.crossDomain && (a$$358.type = "GET", a$$358.global = !1);
  }), f$$4.ajaxTransport("script", function(a$$359) {
    if (a$$359.crossDomain) {
      var d$$142;
      var e$$152 = c$$5.head || c$$5.getElementsByTagName("head")[0] || c$$5.documentElement;
      return {send:function(f$$46, g$$87) {
        d$$142 = c$$5.createElement("script"), d$$142.async = "async", a$$359.scriptCharset && (d$$142.charset = a$$359.scriptCharset), d$$142.src = a$$359.url, d$$142.onload = d$$142.onreadystatechange = function(a$$360, c$$178) {
          if (c$$178 || !d$$142.readyState || /loaded|complete/.test(d$$142.readyState)) {
            d$$142.onload = d$$142.onreadystatechange = null, e$$152 && d$$142.parentNode && e$$152.removeChild(d$$142), d$$142 = b$$9, c$$178 || g$$87(200, "success");
          }
        }, e$$152.insertBefore(d$$142, e$$152.firstChild);
      }, abort:function() {
        d$$142 && d$$142.onload(0, 1);
      }};
    }
  });
  var ce = a$$13.ActiveXObject ? function() {
    var a$$361;
    for (a$$361 in cg) {
      cg[a$$361](0, 1);
    }
  } : !1;
  var cf = 0;
  var cg;
  f$$4.ajaxSettings.xhr = a$$13.ActiveXObject ? function() {
    var JSCompiler_temp$$0;
    if (JSCompiler_temp$$0 = !this.isLocal && ch$$14()) {
    } else {
      JSCompiler_inline_label_ci_59: {
        try {
          JSCompiler_temp$$0 = new a$$13.ActiveXObject("Microsoft.XMLHTTP");
          break JSCompiler_inline_label_ci_59;
        } catch (b$$inline_58) {
        }
        JSCompiler_temp$$0 = void 0;
      }
    }
    return JSCompiler_temp$$0;
  } : ch$$14, function(a$$362) {
    f$$4.extend(f$$4.support, {ajax:!!a$$362, cors:!!a$$362 && "withCredentials" in a$$362});
  }(f$$4.ajaxSettings.xhr()), f$$4.support.ajax && f$$4.ajaxTransport(function(c$$179) {
    if (!c$$179.crossDomain || f$$4.support.cors) {
      var d$$143;
      return {send:function(e$$153, g$$88) {
        var h$$72 = c$$179.xhr();
        var i$$141;
        var j$$57;
        c$$179.username ? h$$72.open(c$$179.type, c$$179.url, c$$179.async, c$$179.username, c$$179.password) : h$$72.open(c$$179.type, c$$179.url, c$$179.async);
        if (c$$179.xhrFields) {
          for (j$$57 in c$$179.xhrFields) {
            h$$72[j$$57] = c$$179.xhrFields[j$$57];
          }
        }
        c$$179.mimeType && h$$72.overrideMimeType && h$$72.overrideMimeType(c$$179.mimeType), !c$$179.crossDomain && !e$$153["X-Requested-With"] && (e$$153["X-Requested-With"] = "XMLHttpRequest");
        try {
          for (j$$57 in e$$153) {
            h$$72.setRequestHeader(j$$57, e$$153[j$$57]);
          }
        } catch (k$$35) {
        }
        h$$72.send(c$$179.hasContent && c$$179.data || null), d$$143 = function(a$$363, e$$154) {
          var j$$58;
          var k$$36;
          var l$$48;
          var m$$24;
          var n$$75;
          try {
            if (d$$143 && (e$$154 || h$$72.readyState === 4)) {
              d$$143 = b$$9, i$$141 && (h$$72.onreadystatechange = f$$4.noop, ce && delete cg[i$$141]);
              if (e$$154) {
                h$$72.readyState !== 4 && h$$72.abort();
              } else {
                j$$58 = h$$72.status, l$$48 = h$$72.getAllResponseHeaders(), m$$24 = {}, n$$75 = h$$72.responseXML, n$$75 && n$$75.documentElement && (m$$24.xml = n$$75);
                try {
                  m$$24.text = h$$72.responseText;
                } catch (a$$364) {
                }
                try {
                  k$$36 = h$$72.statusText;
                } catch (o$$14) {
                  k$$36 = "";
                }
                !j$$58 && c$$179.isLocal && !c$$179.crossDomain ? j$$58 = m$$24.text ? 200 : 404 : j$$58 === 1223 && (j$$58 = 204);
              }
            }
          } catch (p$$36) {
            e$$154 || g$$88(-1, p$$36);
          }
          m$$24 && g$$88(j$$58, k$$36, m$$24, l$$48);
        }, !c$$179.async || h$$72.readyState === 4 ? d$$143() : (i$$141 = ++cf, ce && (cg || (cg = {}, f$$4(a$$13).unload(ce)), cg[i$$141] = d$$143), h$$72.onreadystatechange = d$$143);
      }, abort:function() {
        d$$143 && d$$143(0, 1);
      }};
    }
  });
  var cj = {};
  var ck;
  var cl;
  var cm = /^(?:toggle|show|hide)$/;
  var cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i;
  var co;
  var cp = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
  var cq;
  f$$4.fn.extend({show:function(a$$365, b$$223, c$$180) {
    var d$$144;
    var e$$155;
    if (a$$365 || a$$365 === 0) {
      return this.animate(ct("show", 3), a$$365, b$$223, c$$180);
    }
    var g$$89 = 0;
    var h$$73 = this.length;
    for (;g$$89 < h$$73;g$$89++) {
      d$$144 = this[g$$89], d$$144.style && (e$$155 = d$$144.style.display, !f$$4._data(d$$144, "olddisplay") && e$$155 === "none" && (e$$155 = d$$144.style.display = ""), (e$$155 === "" && f$$4.css(d$$144, "display") === "none" || !f$$4.contains(d$$144.ownerDocument.documentElement, d$$144)) && f$$4._data(d$$144, "olddisplay", cu(d$$144.nodeName)));
    }
    g$$89 = 0;
    for (;g$$89 < h$$73;g$$89++) {
      d$$144 = this[g$$89];
      if (d$$144.style) {
        e$$155 = d$$144.style.display;
        if (e$$155 === "" || e$$155 === "none") {
          d$$144.style.display = f$$4._data(d$$144, "olddisplay") || "";
        }
      }
    }
    return this;
  }, hide:function(a$$366, b$$224, c$$181) {
    if (a$$366 || a$$366 === 0) {
      return this.animate(ct("hide", 3), a$$366, b$$224, c$$181);
    }
    var d$$145;
    var e$$156;
    var g$$90 = 0;
    var h$$74 = this.length;
    for (;g$$90 < h$$74;g$$90++) {
      d$$145 = this[g$$90], d$$145.style && (e$$156 = f$$4.css(d$$145, "display"), e$$156 !== "none" && !f$$4._data(d$$145, "olddisplay") && f$$4._data(d$$145, "olddisplay", e$$156));
    }
    g$$90 = 0;
    for (;g$$90 < h$$74;g$$90++) {
      this[g$$90].style && (this[g$$90].style.display = "none");
    }
    return this;
  }, _toggle:f$$4.fn.toggle, toggle:function(a$$367, b$$225, c$$182) {
    var d$$146 = typeof a$$367 == "boolean";
    f$$4.isFunction(a$$367) && f$$4.isFunction(b$$225) ? this._toggle.apply(this, arguments) : a$$367 == null || d$$146 ? this.each(function() {
      var b$$226 = d$$146 ? a$$367 : f$$4(this).is(":hidden");
      f$$4(this)[b$$226 ? "show" : "hide"]();
    }) : this.animate(ct("toggle", 3), a$$367, b$$225, c$$182);
    return this;
  }, fadeTo:function(a$$368, b$$227, c$$183, d$$147) {
    return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity:b$$227}, a$$368, c$$183, d$$147);
  }, animate:function(a$$369, b$$228, c$$184, d$$148) {
    function g$$91() {
      e$$157.queue === !1 && f$$4._mark(this);
      var b$$229 = f$$4.extend({}, e$$157);
      var c$$185 = this.nodeType === 1;
      var d$$149 = c$$185 && f$$4(this).is(":hidden");
      var g$$92;
      var h$$75;
      var i$$142;
      var j$$59;
      var k$$37;
      var l$$49;
      var m$$25;
      var n$$76;
      var o$$15;
      var p$$37;
      var q$$14;
      b$$229.animatedProperties = {};
      for (i$$142 in a$$369) {
        g$$92 = f$$4.camelCase(i$$142), i$$142 !== g$$92 && (a$$369[g$$92] = a$$369[i$$142], delete a$$369[i$$142]);
        if ((k$$37 = f$$4.cssHooks[g$$92]) && "expand" in k$$37) {
          l$$49 = k$$37.expand(a$$369[g$$92]), delete a$$369[g$$92];
          for (i$$142 in l$$49) {
            i$$142 in a$$369 || (a$$369[i$$142] = l$$49[i$$142]);
          }
        }
      }
      for (g$$92 in a$$369) {
        h$$75 = a$$369[g$$92], f$$4.isArray(h$$75) ? (b$$229.animatedProperties[g$$92] = h$$75[1], h$$75 = a$$369[g$$92] = h$$75[0]) : b$$229.animatedProperties[g$$92] = b$$229.specialEasing && b$$229.specialEasing[g$$92] || b$$229.easing || "swing";
        if (h$$75 === "hide" && d$$149 || h$$75 === "show" && !d$$149) {
          return b$$229.complete.call(this);
        }
        c$$185 && (g$$92 === "height" || g$$92 === "width") && (b$$229.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f$$4.css(this, "display") === "inline" && f$$4.css(this, "float") === "none" && (!f$$4.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1));
      }
      b$$229.overflow != null && (this.style.overflow = "hidden");
      for (i$$142 in a$$369) {
        j$$59 = new f$$4.fx(this, b$$229, i$$142), h$$75 = a$$369[i$$142], cm.test(h$$75) ? (q$$14 = f$$4._data(this, "toggle" + i$$142) || (h$$75 === "toggle" ? d$$149 ? "show" : "hide" : 0), q$$14 ? (f$$4._data(this, "toggle" + i$$142, q$$14 === "show" ? "hide" : "show"), j$$59[q$$14]()) : j$$59[h$$75]()) : (m$$25 = cn.exec(h$$75), n$$76 = j$$59.cur(), m$$25 ? (o$$15 = parseFloat(m$$25[2]), p$$37 = m$$25[3] || (f$$4.cssNumber[i$$142] ? "" : "px"), p$$37 !== "px" && (f$$4.style(this, i$$142, (o$$15 || 
        1) + p$$37), n$$76 = (o$$15 || 1) / j$$59.cur() * n$$76, f$$4.style(this, i$$142, n$$76 + p$$37)), m$$25[1] && (o$$15 = (m$$25[1] === "-=" ? -1 : 1) * o$$15 + n$$76), j$$59.custom(n$$76, o$$15, p$$37)) : j$$59.custom(n$$76, h$$75, ""));
      }
      return !0;
    }
    var e$$157 = f$$4.speed(b$$228, c$$184, d$$148);
    if (f$$4.isEmptyObject(a$$369)) {
      return this.each(e$$157.complete, [!1]);
    }
    a$$369 = f$$4.extend({}, a$$369);
    return e$$157.queue === !1 ? this.each(g$$91) : this.queue(e$$157.queue, g$$91);
  }, stop:function(a$$370, c$$186, d$$150) {
    typeof a$$370 != "string" && (d$$150 = c$$186, c$$186 = a$$370, a$$370 = b$$9), c$$186 && a$$370 !== !1 && this.queue(a$$370 || "fx", []);
    return this.each(function() {
      var b$$230;
      var c$$187 = !1;
      var e$$158 = f$$4.timers;
      var g$$93 = f$$4._data(this);
      d$$150 || f$$4._unmark(!0, this);
      if (a$$370 == null) {
        for (b$$230 in g$$93) {
          if (g$$93[b$$230] && g$$93[b$$230].stop && b$$230.indexOf(".run") === b$$230.length - 4) {
            var e$$inline_63 = g$$93[b$$230];
            f$$4.removeData(this, b$$230, !0), e$$inline_63.stop(d$$150);
          }
        }
      } else {
        if (g$$93[b$$230 = a$$370 + ".run"] && g$$93[b$$230].stop) {
          var e$$inline_68 = g$$93[b$$230];
          f$$4.removeData(this, b$$230, !0), e$$inline_68.stop(d$$150);
        }
      }
      b$$230 = e$$158.length;
      for (;b$$230--;) {
        e$$158[b$$230].elem === this && (a$$370 == null || e$$158[b$$230].queue === a$$370) && (d$$150 ? e$$158[b$$230](!0) : e$$158[b$$230].saveState(), c$$187 = !0, e$$158.splice(b$$230, 1));
      }
      (!d$$150 || !c$$187) && f$$4.dequeue(this, a$$370);
    });
  }}), f$$4.each({slideDown:ct("show", 1), slideUp:ct("hide", 1), slideToggle:ct("toggle", 1), fadeIn:{opacity:"show"}, fadeOut:{opacity:"hide"}, fadeToggle:{opacity:"toggle"}}, function(a$$372, b$$232) {
    f$$4.fn[a$$372] = function(a$$373, c$$189, d$$151) {
      return this.animate(b$$232, a$$373, c$$189, d$$151);
    };
  }), f$$4.extend({speed:function(a$$374, b$$233, c$$190) {
    var d$$152 = a$$374 && typeof a$$374 == "object" ? f$$4.extend({}, a$$374) : {complete:c$$190 || !c$$190 && b$$233 || f$$4.isFunction(a$$374) && a$$374, duration:a$$374, easing:c$$190 && b$$233 || b$$233 && !f$$4.isFunction(b$$233) && b$$233};
    d$$152.duration = f$$4.fx.off ? 0 : typeof d$$152.duration == "number" ? d$$152.duration : d$$152.duration in f$$4.fx.speeds ? f$$4.fx.speeds[d$$152.duration] : f$$4.fx.speeds._default;
    if (d$$152.queue == null || d$$152.queue === !0) {
      d$$152.queue = "fx";
    }
    d$$152.old = d$$152.complete, d$$152.complete = function(a$$375) {
      f$$4.isFunction(d$$152.old) && d$$152.old.call(this), d$$152.queue ? f$$4.dequeue(this, d$$152.queue) : a$$375 !== !1 && f$$4._unmark(this);
    };
    return d$$152;
  }, easing:{linear:function(a$$376) {
    return a$$376;
  }, swing:function(a$$377) {
    return -Math.cos(a$$377 * Math.PI) / 2 + .5;
  }}, timers:[], fx:function(a$$378, b$$234, c$$191) {
    this.options = b$$234, this.elem = a$$378, this.prop = c$$191, b$$234.orig = b$$234.orig || {};
  }}), f$$4.fx.prototype = {update:function() {
    this.options.step && this.options.step.call(this.elem, this.now, this), (f$$4.fx.step[this.prop] || f$$4.fx.step._default)(this);
  }, cur:function() {
    if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
      return this.elem[this.prop];
    }
    var a$$379;
    var b$$235 = f$$4.css(this.elem, this.prop);
    return isNaN(a$$379 = parseFloat(b$$235)) ? !b$$235 || b$$235 === "auto" ? 0 : b$$235 : a$$379;
  }, custom:function(a$$380, c$$192, d$$153) {
    function h$$77(a$$381) {
      return e$$160.step(a$$381);
    }
    var e$$160 = this;
    var g$$94 = f$$4.fx;
    this.startTime = cq || cr(), this.end = c$$192, this.now = this.start = a$$380, this.pos = this.state = 0, this.unit = d$$153 || this.unit || (f$$4.cssNumber[this.prop] ? "" : "px"), h$$77.queue = this.options.queue, h$$77.elem = this.elem, h$$77.saveState = function() {
      f$$4._data(e$$160.elem, "fxshow" + e$$160.prop) === b$$9 && (e$$160.options.hide ? f$$4._data(e$$160.elem, "fxshow" + e$$160.prop, e$$160.start) : e$$160.options.show && f$$4._data(e$$160.elem, "fxshow" + e$$160.prop, e$$160.end));
    }, h$$77() && f$$4.timers.push(h$$77) && !co && (co = setInterval(g$$94.tick, g$$94.interval));
  }, show:function() {
    var a$$382 = f$$4._data(this.elem, "fxshow" + this.prop);
    this.options.orig[this.prop] = a$$382 || f$$4.style(this.elem, this.prop), this.options.show = !0, a$$382 !== b$$9 ? this.custom(this.cur(), a$$382) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f$$4(this.elem).show();
  }, hide:function() {
    this.options.orig[this.prop] = f$$4._data(this.elem, "fxshow" + this.prop) || f$$4.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0);
  }, step:function(a$$383) {
    var b$$236;
    var c$$193;
    var d$$154;
    var e$$161 = cq || cr();
    var g$$95 = !0;
    var h$$78 = this.elem;
    var i$$143 = this.options;
    if (a$$383 || e$$161 >= i$$143.duration + this.startTime) {
      this.now = this.end, this.pos = this.state = 1, this.update(), i$$143.animatedProperties[this.prop] = !0;
      for (b$$236 in i$$143.animatedProperties) {
        i$$143.animatedProperties[b$$236] !== !0 && (g$$95 = !1);
      }
      if (g$$95) {
        i$$143.overflow != null && !f$$4.support.shrinkWrapBlocks && f$$4.each(["", "X", "Y"], function(a$$384, b$$237) {
          h$$78.style["overflow" + b$$237] = i$$143.overflow[a$$384];
        }), i$$143.hide && f$$4(h$$78).hide();
        if (i$$143.hide || i$$143.show) {
          for (b$$236 in i$$143.animatedProperties) {
            f$$4.style(h$$78, b$$236, i$$143.orig[b$$236]), f$$4.removeData(h$$78, "fxshow" + b$$236, !0), f$$4.removeData(h$$78, "toggle" + b$$236, !0);
          }
        }
        d$$154 = i$$143.complete, d$$154 && (i$$143.complete = !1, d$$154.call(h$$78));
      }
      return !1;
    }
    i$$143.duration == Infinity ? this.now = e$$161 : (c$$193 = e$$161 - this.startTime, this.state = c$$193 / i$$143.duration, this.pos = f$$4.easing[i$$143.animatedProperties[this.prop]](this.state, c$$193, 0, 1, i$$143.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
    return !0;
  }}, f$$4.extend(f$$4.fx, {tick:function() {
    var a$$385;
    var b$$238 = f$$4.timers;
    var c$$194 = 0;
    for (;c$$194 < b$$238.length;c$$194++) {
      a$$385 = b$$238[c$$194], !a$$385() && b$$238[c$$194] === a$$385 && b$$238.splice(c$$194--, 1);
    }
    b$$238.length || f$$4.fx.stop();
  }, interval:13, stop:function() {
    clearInterval(co), co = null;
  }, speeds:{slow:600, fast:200, _default:400}, step:{opacity:function(a$$386) {
    f$$4.style(a$$386.elem, "opacity", a$$386.now);
  }, _default:function(a$$387) {
    a$$387.elem.style && a$$387.elem.style[a$$387.prop] != null ? a$$387.elem.style[a$$387.prop] = a$$387.now + a$$387.unit : a$$387.elem[a$$387.prop] = a$$387.now;
  }}}), f$$4.each(cp.concat.apply([], cp), function(a$$388, b$$239) {
    b$$239.indexOf("margin") && (f$$4.fx.step[b$$239] = function(a$$389) {
      f$$4.style(a$$389.elem, b$$239, Math.max(0, a$$389.now) + a$$389.unit);
    });
  }), f$$4.expr && f$$4.expr.filters && (f$$4.expr.filters.animated = function(a$$390) {
    return f$$4.grep(f$$4.timers, function(b$$240) {
      return a$$390 === b$$240.elem;
    }).length;
  });
  var cv;
  var cw = /^t(?:able|d|h)$/i;
  var cx = /^(?:body|html)$/i;
  "getBoundingClientRect" in c$$5.documentElement ? cv = function(a$$391, b$$241, c$$195, d$$155) {
    try {
      d$$155 = a$$391.getBoundingClientRect();
    } catch (e$$162) {
    }
    if (!d$$155 || !f$$4.contains(c$$195, a$$391)) {
      return d$$155 ? {top:d$$155.top, left:d$$155.left} : {top:0, left:0};
    }
    var g$$96 = b$$241.body;
    var h$$79 = cy(b$$241);
    var i$$144 = c$$195.clientTop || g$$96.clientTop || 0;
    var j$$60 = c$$195.clientLeft || g$$96.clientLeft || 0;
    var k$$38 = h$$79.pageYOffset || f$$4.support.boxModel && c$$195.scrollTop || g$$96.scrollTop;
    var l$$50 = h$$79.pageXOffset || f$$4.support.boxModel && c$$195.scrollLeft || g$$96.scrollLeft;
    var m$$26 = d$$155.top + k$$38 - i$$144;
    var n$$77 = d$$155.left + l$$50 - j$$60;
    return {top:m$$26, left:n$$77};
  } : cv = function(a$$392, b$$242, c$$196) {
    var d$$156;
    var e$$163 = a$$392.offsetParent;
    var g$$97 = a$$392;
    var h$$80 = b$$242.body;
    var i$$145 = b$$242.defaultView;
    var j$$61 = i$$145 ? i$$145.getComputedStyle(a$$392, null) : a$$392.currentStyle;
    var k$$39 = a$$392.offsetTop;
    var l$$51 = a$$392.offsetLeft;
    for (;(a$$392 = a$$392.parentNode) && a$$392 !== h$$80 && a$$392 !== c$$196;) {
      if (f$$4.support.fixedPosition && j$$61.position === "fixed") {
        break;
      }
      d$$156 = i$$145 ? i$$145.getComputedStyle(a$$392, null) : a$$392.currentStyle, k$$39 -= a$$392.scrollTop, l$$51 -= a$$392.scrollLeft, a$$392 === e$$163 && (k$$39 += a$$392.offsetTop, l$$51 += a$$392.offsetLeft, f$$4.support.doesNotAddBorder && (!f$$4.support.doesAddBorderForTableAndCells || !cw.test(a$$392.nodeName)) && (k$$39 += parseFloat(d$$156.borderTopWidth) || 0, l$$51 += parseFloat(d$$156.borderLeftWidth) || 0), g$$97 = e$$163, e$$163 = a$$392.offsetParent), f$$4.support.subtractsBorderForOverflowNotVisible && 
      d$$156.overflow !== "visible" && (k$$39 += parseFloat(d$$156.borderTopWidth) || 0, l$$51 += parseFloat(d$$156.borderLeftWidth) || 0), j$$61 = d$$156;
    }
    if (j$$61.position === "relative" || j$$61.position === "static") {
      k$$39 += h$$80.offsetTop, l$$51 += h$$80.offsetLeft;
    }
    f$$4.support.fixedPosition && j$$61.position === "fixed" && (k$$39 += Math.max(c$$196.scrollTop, h$$80.scrollTop), l$$51 += Math.max(c$$196.scrollLeft, h$$80.scrollLeft));
    return {top:k$$39, left:l$$51};
  }, f$$4.fn.offset = function(a$$393) {
    if (arguments.length) {
      return a$$393 === b$$9 ? this : this.each(function(b$$243) {
        f$$4.offset.setOffset(this, a$$393, b$$243);
      });
    }
    var c$$197 = this[0];
    var d$$157 = c$$197 && c$$197.ownerDocument;
    if (!d$$157) {
      return null;
    }
    if (c$$197 === d$$157.body) {
      return f$$4.offset.bodyOffset(c$$197);
    }
    return cv(c$$197, d$$157, d$$157.documentElement);
  }, f$$4.offset = {bodyOffset:function(a$$394) {
    var b$$244 = a$$394.offsetTop;
    var c$$198 = a$$394.offsetLeft;
    f$$4.support.doesNotIncludeMarginInBodyOffset && (b$$244 += parseFloat(f$$4.css(a$$394, "marginTop")) || 0, c$$198 += parseFloat(f$$4.css(a$$394, "marginLeft")) || 0);
    return {top:b$$244, left:c$$198};
  }, setOffset:function(a$$395, b$$245, c$$199) {
    var d$$158 = f$$4.css(a$$395, "position");
    d$$158 === "static" && (a$$395.style.position = "relative");
    var e$$164 = f$$4(a$$395);
    var g$$98 = e$$164.offset();
    var h$$81 = f$$4.css(a$$395, "top");
    var i$$146 = f$$4.css(a$$395, "left");
    var j$$62 = (d$$158 === "absolute" || d$$158 === "fixed") && f$$4.inArray("auto", [h$$81, i$$146]) > -1;
    var k$$40 = {};
    var l$$52 = {};
    var m$$27;
    var n$$78;
    j$$62 ? (l$$52 = e$$164.position(), m$$27 = l$$52.top, n$$78 = l$$52.left) : (m$$27 = parseFloat(h$$81) || 0, n$$78 = parseFloat(i$$146) || 0), f$$4.isFunction(b$$245) && (b$$245 = b$$245.call(a$$395, c$$199, g$$98)), b$$245.top != null && (k$$40.top = b$$245.top - g$$98.top + m$$27), b$$245.left != null && (k$$40.left = b$$245.left - g$$98.left + n$$78), "using" in b$$245 ? b$$245.using.call(a$$395, k$$40) : e$$164.css(k$$40);
  }}, f$$4.fn.extend({position:function() {
    if (!this[0]) {
      return null;
    }
    var a$$396 = this[0];
    var b$$246 = this.offsetParent();
    var c$$200 = this.offset();
    var d$$159 = cx.test(b$$246[0].nodeName) ? {top:0, left:0} : b$$246.offset();
    c$$200.top -= parseFloat(f$$4.css(a$$396, "marginTop")) || 0, c$$200.left -= parseFloat(f$$4.css(a$$396, "marginLeft")) || 0, d$$159.top += parseFloat(f$$4.css(b$$246[0], "borderTopWidth")) || 0, d$$159.left += parseFloat(f$$4.css(b$$246[0], "borderLeftWidth")) || 0;
    return {top:c$$200.top - d$$159.top, left:c$$200.left - d$$159.left};
  }, offsetParent:function() {
    return this.map(function() {
      var a$$397 = this.offsetParent || c$$5.body;
      for (;a$$397 && !cx.test(a$$397.nodeName) && f$$4.css(a$$397, "position") === "static";) {
        a$$397 = a$$397.offsetParent;
      }
      return a$$397;
    });
  }}), f$$4.each({scrollLeft:"pageXOffset", scrollTop:"pageYOffset"}, function(a$$398, c$$201) {
    var d$$160 = /Y/.test(c$$201);
    f$$4.fn[a$$398] = function(e$$165) {
      return f$$4.access(this, function(a$$399, e$$166, g$$99) {
        var h$$82 = cy(a$$399);
        if (g$$99 === b$$9) {
          return h$$82 ? c$$201 in h$$82 ? h$$82[c$$201] : f$$4.support.boxModel && h$$82.document.documentElement[e$$166] || h$$82.document.body[e$$166] : a$$399[e$$166];
        }
        h$$82 ? h$$82.scrollTo(d$$160 ? f$$4(h$$82).scrollLeft() : g$$99, d$$160 ? g$$99 : f$$4(h$$82).scrollTop()) : a$$399[e$$166] = g$$99;
      }, a$$398, e$$165, arguments.length, null);
    };
  }), f$$4.each({Height:"height", Width:"width"}, function(a$$400, c$$202) {
    var d$$161 = "client" + a$$400;
    var e$$167 = "scroll" + a$$400;
    var g$$100 = "offset" + a$$400;
    f$$4.fn["inner" + a$$400] = function() {
      var a$$401 = this[0];
      return a$$401 ? a$$401.style ? parseFloat(f$$4.css(a$$401, c$$202, "padding")) : this[c$$202]() : null;
    }, f$$4.fn["outer" + a$$400] = function(a$$402) {
      var b$$247 = this[0];
      return b$$247 ? b$$247.style ? parseFloat(f$$4.css(b$$247, c$$202, a$$402 ? "margin" : "border")) : this[c$$202]() : null;
    }, f$$4.fn[c$$202] = function(a$$403) {
      return f$$4.access(this, function(a$$404, c$$203, h$$83) {
        var i$$147;
        var j$$63;
        var k$$41;
        var l$$53;
        if (f$$4.isWindow(a$$404)) {
          i$$147 = a$$404.document, j$$63 = i$$147.documentElement[d$$161];
          return f$$4.support.boxModel && j$$63 || i$$147.body && i$$147.body[d$$161] || j$$63;
        }
        if (a$$404.nodeType === 9) {
          i$$147 = a$$404.documentElement;
          if (i$$147[d$$161] >= i$$147[e$$167]) {
            return i$$147[d$$161];
          }
          return Math.max(a$$404.body[e$$167], i$$147[e$$167], a$$404.body[g$$100], i$$147[g$$100]);
        }
        if (h$$83 === b$$9) {
          k$$41 = f$$4.css(a$$404, c$$203), l$$53 = parseFloat(k$$41);
          return f$$4.isNumeric(l$$53) ? l$$53 : k$$41;
        }
        f$$4(a$$404).css(c$$203, h$$83);
      }, c$$202, a$$403, arguments.length, null);
    };
  }), a$$13.jQuery = a$$13.$ = f$$4, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
    return f$$4;
  });
})(window);
(function(a$$405, b$$248) {
  function c$$204(b$$249, c$$205) {
    var e$$168 = b$$249.nodeName.toLowerCase();
    if ("area" === e$$168) {
      var f$$47 = b$$249.parentNode;
      var g$$101 = f$$47.name;
      var h$$84;
      return !b$$249.href || !g$$101 || f$$47.nodeName.toLowerCase() !== "map" ? !1 : (h$$84 = a$$405("img[usemap=#" + g$$101 + "]")[0], !!h$$84 && d$$162(h$$84));
    }
    return (/input|select|textarea|button|object/.test(e$$168) ? !b$$249.disabled : "a" == e$$168 ? b$$249.href || c$$205 : c$$205) && d$$162(b$$249);
  }
  function d$$162(b$$250) {
    return !a$$405(b$$250).parents().andSelf().filter(function() {
      return a$$405.curCSS(this, "visibility") === "hidden" || a$$405.expr.filters.hidden(this);
    }).length;
  }
  a$$405.ui = a$$405.ui || {};
  if (a$$405.ui.version) {
    return;
  }
  a$$405.extend(a$$405.ui, {version:"1.8.24", keyCode:{ALT:18, BACKSPACE:8, CAPS_LOCK:20, COMMA:188, COMMAND:91, COMMAND_LEFT:91, COMMAND_RIGHT:93, CONTROL:17, DELETE:46, DOWN:40, END:35, ENTER:13, ESCAPE:27, HOME:36, INSERT:45, LEFT:37, MENU:93, NUMPAD_ADD:107, NUMPAD_DECIMAL:110, NUMPAD_DIVIDE:111, NUMPAD_ENTER:108, NUMPAD_MULTIPLY:106, NUMPAD_SUBTRACT:109, PAGE_DOWN:34, PAGE_UP:33, PERIOD:190, RIGHT:39, SHIFT:16, SPACE:32, TAB:9, UP:38, WINDOWS:91}}), a$$405.fn.extend({propAttr:a$$405.fn.prop || 
  a$$405.fn.attr, _focus:a$$405.fn.focus, focus:function(b$$251, c$$206) {
    return typeof b$$251 == "number" ? this.each(function() {
      var d$$163 = this;
      setTimeout(function() {
        a$$405(d$$163).focus(), c$$206 && c$$206.call(d$$163);
      }, b$$251);
    }) : this._focus.apply(this, arguments);
  }, scrollParent:function() {
    var b$$252;
    return a$$405.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? b$$252 = this.parents().filter(function() {
      return /(relative|absolute|fixed)/.test(a$$405.curCSS(this, "position", 1)) && /(auto|scroll)/.test(a$$405.curCSS(this, "overflow", 1) + a$$405.curCSS(this, "overflow-y", 1) + a$$405.curCSS(this, "overflow-x", 1));
    }).eq(0) : b$$252 = this.parents().filter(function() {
      return /(auto|scroll)/.test(a$$405.curCSS(this, "overflow", 1) + a$$405.curCSS(this, "overflow-y", 1) + a$$405.curCSS(this, "overflow-x", 1));
    }).eq(0), /fixed/.test(this.css("position")) || !b$$252.length ? a$$405(document) : b$$252;
  }, zIndex:function(c$$207) {
    if (c$$207 !== b$$248) {
      return this.css("zIndex", c$$207);
    }
    if (this.length) {
      var d$$164 = a$$405(this[0]);
      var e$$169;
      var f$$48;
      for (;d$$164.length && d$$164[0] !== document;) {
        e$$169 = d$$164.css("position");
        if (e$$169 === "absolute" || e$$169 === "relative" || e$$169 === "fixed") {
          f$$48 = parseInt(d$$164.css("zIndex"), 10);
          if (!isNaN(f$$48) && f$$48 !== 0) {
            return f$$48;
          }
        }
        d$$164 = d$$164.parent();
      }
    }
    return 0;
  }, disableSelection:function() {
    return this.bind((a$$405.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a$$406) {
      a$$406.preventDefault();
    });
  }, enableSelection:function() {
    return this.unbind(".ui-disableSelection");
  }}), a$$405("<a>").outerWidth(1).jquery || a$$405.each(["Width", "Height"], function(c$$208, d$$165) {
    function h$$85(b$$253, c$$209, d$$166, f$$50) {
      return a$$405.each(e$$170, function() {
        c$$209 -= parseFloat(a$$405.curCSS(b$$253, "padding" + this, !0)) || 0, d$$166 && (c$$209 -= parseFloat(a$$405.curCSS(b$$253, "border" + this + "Width", !0)) || 0), f$$50 && (c$$209 -= parseFloat(a$$405.curCSS(b$$253, "margin" + this, !0)) || 0);
      }), c$$209;
    }
    var e$$170 = d$$165 === "Width" ? ["Left", "Right"] : ["Top", "Bottom"];
    var f$$49 = d$$165.toLowerCase();
    var g$$102 = {innerWidth:a$$405.fn.innerWidth, innerHeight:a$$405.fn.innerHeight, outerWidth:a$$405.fn.outerWidth, outerHeight:a$$405.fn.outerHeight};
    a$$405.fn["inner" + d$$165] = function(c$$210) {
      return c$$210 === b$$248 ? g$$102["inner" + d$$165].call(this) : this.each(function() {
        a$$405(this).css(f$$49, h$$85(this, c$$210) + "px");
      });
    }, a$$405.fn["outer" + d$$165] = function(b$$254, c$$211) {
      return typeof b$$254 != "number" ? g$$102["outer" + d$$165].call(this, b$$254) : this.each(function() {
        a$$405(this).css(f$$49, h$$85(this, b$$254, !0, c$$211) + "px");
      });
    };
  }), a$$405.extend(a$$405.expr[":"], {data:a$$405.expr.createPseudo ? a$$405.expr.createPseudo(function(b$$255) {
    return function(c$$212) {
      return !!a$$405.data(c$$212, b$$255);
    };
  }) : function(b$$256, c$$213, d$$167) {
    return !!a$$405.data(b$$256, d$$167[3]);
  }, focusable:function(b$$257) {
    return c$$204(b$$257, !isNaN(a$$405.attr(b$$257, "tabindex")));
  }, tabbable:function(b$$258) {
    var d$$168 = a$$405.attr(b$$258, "tabindex");
    var e$$171 = isNaN(d$$168);
    return (e$$171 || d$$168 >= 0) && c$$204(b$$258, !e$$171);
  }}), a$$405(function() {
    var b$$259 = document.body;
    var c$$214 = b$$259.appendChild(c$$214 = document.createElement("div"));
    c$$214.offsetHeight, a$$405.extend(c$$214.style, {minHeight:"100px", height:"auto", padding:0, borderWidth:0}), a$$405.support.minHeight = c$$214.offsetHeight === 100, a$$405.support.selectstart = "onselectstart" in c$$214, b$$259.removeChild(c$$214).style.display = "none";
  }), a$$405.curCSS || (a$$405.curCSS = a$$405.css), a$$405.extend(a$$405.ui, {plugin:{add:function(b$$260, c$$215, d$$169) {
    var e$$172 = a$$405.ui[b$$260].prototype;
    var f$$51;
    for (f$$51 in d$$169) {
      e$$172.plugins[f$$51] = e$$172.plugins[f$$51] || [], e$$172.plugins[f$$51].push([c$$215, d$$169[f$$51]]);
    }
  }, call:function(a$$407, b$$261, c$$216) {
    var d$$170 = a$$407.plugins[b$$261];
    if (!d$$170 || !a$$407.element[0].parentNode) {
      return;
    }
    var e$$173 = 0;
    for (;e$$173 < d$$170.length;e$$173++) {
      a$$407.options[d$$170[e$$173][0]] && d$$170[e$$173][1].apply(a$$407.element, c$$216);
    }
  }}, contains:function(a$$408, b$$262) {
    return document.compareDocumentPosition ? a$$408.compareDocumentPosition(b$$262) & 16 : a$$408 !== b$$262 && a$$408.contains(b$$262);
  }, hasScroll:function(b$$263, c$$217) {
    if (a$$405(b$$263).css("overflow") === "hidden") {
      return !1;
    }
    var d$$171 = c$$217 && c$$217 === "left" ? "scrollLeft" : "scrollTop";
    var e$$174 = !1;
    return b$$263[d$$171] > 0 ? !0 : (b$$263[d$$171] = 1, e$$174 = b$$263[d$$171] > 0, b$$263[d$$171] = 0, e$$174);
  }, isOverAxis:function(a$$409, b$$264, c$$218) {
    return a$$409 > b$$264 && a$$409 < b$$264 + c$$218;
  }, isOver:function(b$$265, c$$219, d$$172, e$$175, f$$52, g$$103) {
    return a$$405.ui.isOverAxis(b$$265, d$$172, f$$52) && a$$405.ui.isOverAxis(c$$219, e$$175, g$$103);
  }});
})(jQuery), function(a$$410, b$$266) {
  if (a$$410.cleanData) {
    var c$$220 = a$$410.cleanData;
    a$$410.cleanData = function(b$$267) {
      var d$$174 = 0;
      var e$$176;
      for (;(e$$176 = b$$267[d$$174]) != null;d$$174++) {
        try {
          a$$410(e$$176).triggerHandler("remove");
        } catch (f$$53) {
        }
      }
      c$$220(b$$267);
    };
  } else {
    var d$$173 = a$$410.fn.remove;
    a$$410.fn.remove = function(b$$268, c$$221) {
      return this.each(function() {
        return c$$221 || (!b$$268 || a$$410.filter(b$$268, [this]).length) && a$$410("*", this).add([this]).each(function() {
          try {
            a$$410(this).triggerHandler("remove");
          } catch (b$$269) {
          }
        }), d$$173.call(a$$410(this), b$$268, c$$221);
      });
    };
  }
  a$$410.widget = function(b$$270, c$$222, d$$175) {
    var e$$177 = b$$270.split(".")[0];
    var f$$54;
    b$$270 = b$$270.split(".")[1], f$$54 = e$$177 + "-" + b$$270, d$$175 || (d$$175 = c$$222, c$$222 = a$$410.Widget), a$$410.expr[":"][f$$54] = function(c$$223) {
      return !!a$$410.data(c$$223, b$$270);
    }, a$$410[e$$177] = a$$410[e$$177] || {}, a$$410[e$$177][b$$270] = function(a$$411, b$$271) {
      arguments.length && this._createWidget(a$$411, b$$271);
    };
    var g$$104 = new c$$222;
    g$$104.options = a$$410.extend(!0, {}, g$$104.options), a$$410[e$$177][b$$270].prototype = a$$410.extend(!0, g$$104, {namespace:e$$177, widgetName:b$$270, widgetEventPrefix:a$$410[e$$177][b$$270].prototype.widgetEventPrefix || b$$270, widgetBaseClass:f$$54}, d$$175), a$$410.widget.bridge(b$$270, a$$410[e$$177][b$$270]);
  }, a$$410.widget.bridge = function(c$$224, d$$176) {
    a$$410.fn[c$$224] = function(e$$178) {
      var f$$55 = typeof e$$178 == "string";
      var g$$105 = Array.prototype.slice.call(arguments, 1);
      var h$$86 = this;
      return e$$178 = !f$$55 && g$$105.length ? a$$410.extend.apply(null, [!0, e$$178].concat(g$$105)) : e$$178, f$$55 && e$$178.charAt(0) === "_" ? h$$86 : (f$$55 ? this.each(function() {
        var d$$177 = a$$410.data(this, c$$224);
        var f$$56 = d$$177 && a$$410.isFunction(d$$177[e$$178]) ? d$$177[e$$178].apply(d$$177, g$$105) : d$$177;
        if (f$$56 !== d$$177 && f$$56 !== b$$266) {
          return h$$86 = f$$56, !1;
        }
      }) : this.each(function() {
        var b$$272 = a$$410.data(this, c$$224);
        b$$272 ? b$$272.option(e$$178 || {})._init() : a$$410.data(this, c$$224, new d$$176(e$$178, this));
      }), h$$86);
    };
  }, a$$410.Widget = function(a$$412, b$$273) {
    arguments.length && this._createWidget(a$$412, b$$273);
  }, a$$410.Widget.prototype = {widgetName:"widget", widgetEventPrefix:"", options:{disabled:!1}, _createWidget:function(b$$274, c$$225) {
    a$$410.data(c$$225, this.widgetName, this), this.element = a$$410(c$$225), this.options = a$$410.extend(!0, {}, this.options, this._getCreateOptions(), b$$274);
    var d$$178 = this;
    this.element.bind("remove." + this.widgetName, function() {
      d$$178.destroy();
    }), this._create(), this._trigger("create"), this._init();
  }, _getCreateOptions:function() {
    return a$$410.metadata && a$$410.metadata.get(this.element[0])[this.widgetName];
  }, _create:function() {
  }, _init:function() {
  }, destroy:function() {
    this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled");
  }, widget:function() {
    return this.element;
  }, option:function(c$$226, d$$179) {
    var e$$179 = c$$226;
    if (arguments.length === 0) {
      return a$$410.extend({}, this.options);
    }
    if (typeof c$$226 == "string") {
      if (d$$179 === b$$266) {
        return this.options[c$$226];
      }
      e$$179 = {}, e$$179[c$$226] = d$$179;
    }
    return this._setOptions(e$$179), this;
  }, _setOptions:function(b$$275) {
    var c$$227 = this;
    return a$$410.each(b$$275, function(a$$413, b$$276) {
      c$$227._setOption(a$$413, b$$276);
    }), this;
  }, _setOption:function(a$$414, b$$277) {
    return this.options[a$$414] = b$$277, a$$414 === "disabled" && this.widget()[b$$277 ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", b$$277), this;
  }, enable:function() {
    return this._setOption("disabled", !1);
  }, disable:function() {
    return this._setOption("disabled", !0);
  }, _trigger:function(b$$278, c$$228, d$$180) {
    var e$$180;
    var f$$57;
    var g$$106 = this.options[b$$278];
    d$$180 = d$$180 || {}, c$$228 = a$$410.Event(c$$228), c$$228.type = (b$$278 === this.widgetEventPrefix ? b$$278 : this.widgetEventPrefix + b$$278).toLowerCase(), c$$228.target = this.element[0], f$$57 = c$$228.originalEvent;
    if (f$$57) {
      for (e$$180 in f$$57) {
        e$$180 in c$$228 || (c$$228[e$$180] = f$$57[e$$180]);
      }
    }
    return this.element.trigger(c$$228, d$$180), !(a$$410.isFunction(g$$106) && g$$106.call(this.element[0], c$$228, d$$180) === !1 || c$$228.isDefaultPrevented());
  }};
}(jQuery), function(a$$415, b$$279) {
  var c$$229 = !1;
  a$$415(document).mouseup(function(a$$416) {
    c$$229 = !1;
  }), a$$415.widget("ui.mouse", {options:{cancel:":input,option", distance:1, delay:0}, _mouseInit:function() {
    var b$$280 = this;
    this.element.bind("mousedown." + this.widgetName, function(a$$417) {
      return b$$280._mouseDown(a$$417);
    }).bind("click." + this.widgetName, function(c$$230) {
      if (!0 === a$$415.data(c$$230.target, b$$280.widgetName + ".preventClickEvent")) {
        return a$$415.removeData(c$$230.target, b$$280.widgetName + ".preventClickEvent"), c$$230.stopImmediatePropagation(), !1;
      }
    }), this.started = !1;
  }, _mouseDestroy:function() {
    this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && a$$415(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
  }, _mouseDown:function(b$$281) {
    if (c$$229) {
      return;
    }
    this._mouseStarted && this._mouseUp(b$$281), this._mouseDownEvent = b$$281;
    var d$$181 = this;
    var e$$181 = b$$281.which == 1;
    var f$$58 = typeof this.options.cancel == "string" && b$$281.target.nodeName ? a$$415(b$$281.target).closest(this.options.cancel).length : !1;
    if (!e$$181 || f$$58 || !this._mouseCapture(b$$281)) {
      return !0;
    }
    this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
      d$$181.mouseDelayMet = !0;
    }, this.options.delay));
    if (this._mouseDistanceMet(b$$281) && this.mouseDelayMet) {
      this._mouseStarted = this._mouseStart(b$$281) !== !1;
      if (!this._mouseStarted) {
        return b$$281.preventDefault(), !0;
      }
    }
    return !0 === a$$415.data(b$$281.target, this.widgetName + ".preventClickEvent") && a$$415.removeData(b$$281.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a$$418) {
      return d$$181._mouseMove(a$$418);
    }, this._mouseUpDelegate = function(a$$419) {
      return d$$181._mouseUp(a$$419);
    }, a$$415(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b$$281.preventDefault(), c$$229 = !0, !0;
  }, _mouseMove:function(b$$282) {
    return !a$$415.browser.msie || document.documentMode >= 9 || !!b$$282.button ? this._mouseStarted ? (this._mouseDrag(b$$282), b$$282.preventDefault()) : (this._mouseDistanceMet(b$$282) && this.mouseDelayMet && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b$$282) !== !1, this._mouseStarted ? this._mouseDrag(b$$282) : this._mouseUp(b$$282)), !this._mouseStarted) : this._mouseUp(b$$282);
  }, _mouseUp:function(b$$283) {
    return a$$415(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b$$283.target == this._mouseDownEvent.target && a$$415.data(b$$283.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b$$283)), !1;
  }, _mouseDistanceMet:function(a$$420) {
    return Math.max(Math.abs(this._mouseDownEvent.pageX - a$$420.pageX), Math.abs(this._mouseDownEvent.pageY - a$$420.pageY)) >= this.options.distance;
  }, _mouseDelayMet:function(a$$421) {
    return this.mouseDelayMet;
  }, _mouseStart:function(a$$422) {
  }, _mouseDrag:function(a$$423) {
  }, _mouseStop:function(a$$424) {
  }, _mouseCapture:function(a$$425) {
    return !0;
  }});
}(jQuery), function(a$$426, b$$284) {
  a$$426.widget("ui.draggable", a$$426.ui.mouse, {widgetEventPrefix:"drag", options:{addClasses:!0, appendTo:"parent", axis:!1, connectToSortable:!1, containment:!1, cursor:"auto", cursorAt:!1, grid:!1, handle:!1, helper:"original", iframeFix:!1, opacity:!1, refreshPositions:!1, revert:!1, revertDuration:500, scope:"default", scroll:!0, scrollSensitivity:20, scrollSpeed:20, snap:!1, snapMode:"both", snapTolerance:20, stack:!1, zIndex:!1}, _create:function() {
    this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit();
  }, destroy:function() {
    if (!this.element.data("draggable")) {
      return;
    }
    return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this;
  }, _mouseCapture:function(b$$285) {
    var c$$231 = this.options;
    return this.helper || c$$231.disabled || a$$426(b$$285.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(b$$285), this.handle ? (c$$231.iframeFix && a$$426(c$$231.iframeFix === !0 ? "iframe" : c$$231.iframeFix).each(function() {
      a$$426('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth + "px", height:this.offsetHeight + "px", position:"absolute", opacity:"0.001", zIndex:1E3}).css(a$$426(this).offset()).appendTo("body");
    }), !0) : !1);
  }, _mouseStart:function(b$$286) {
    var c$$232 = this.options;
    return this.helper = this._createHelper(b$$286), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a$$426.ui.ddmanager && (a$$426.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {top:this.offset.top - this.margins.top, left:this.offset.left - this.margins.left}, a$$426.extend(this.offset, {click:{left:b$$286.pageX - 
    this.offset.left, top:b$$286.pageY - this.offset.top}, parent:this._getParentOffset(), relative:this._getRelativeOffset()}), this.originalPosition = this.position = this._generatePosition(b$$286), this.originalPageX = b$$286.pageX, this.originalPageY = b$$286.pageY, c$$232.cursorAt && this._adjustOffsetFromHelper(c$$232.cursorAt), c$$232.containment && this._setContainment(), this._trigger("start", b$$286) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a$$426.ui.ddmanager && 
    !c$$232.dropBehaviour && a$$426.ui.ddmanager.prepareOffsets(this, b$$286), this._mouseDrag(b$$286, !0), a$$426.ui.ddmanager && a$$426.ui.ddmanager.dragStart(this, b$$286), !0);
  }, _mouseDrag:function(b$$287, c$$233) {
    this.position = this._generatePosition(b$$287), this.positionAbs = this._convertPositionTo("absolute");
    if (!c$$233) {
      var d$$182 = this._uiHash();
      if (this._trigger("drag", b$$287, d$$182) === !1) {
        return this._mouseUp({}), !1;
      }
      this.position = d$$182.position;
    }
    if (!this.options.axis || this.options.axis != "y") {
      this.helper[0].style.left = this.position.left + "px";
    }
    if (!this.options.axis || this.options.axis != "x") {
      this.helper[0].style.top = this.position.top + "px";
    }
    return a$$426.ui.ddmanager && a$$426.ui.ddmanager.drag(this, b$$287), !1;
  }, _mouseStop:function(b$$288) {
    var c$$234 = !1;
    a$$426.ui.ddmanager && !this.options.dropBehaviour && (c$$234 = a$$426.ui.ddmanager.drop(this, b$$288)), this.dropped && (c$$234 = this.dropped, this.dropped = !1);
    var d$$183 = this.element[0];
    var e$$182 = !1;
    for (;d$$183 && (d$$183 = d$$183.parentNode);) {
      d$$183 == document && (e$$182 = !0);
    }
    if (!e$$182 && this.options.helper === "original") {
      return !1;
    }
    if (this.options.revert == "invalid" && !c$$234 || this.options.revert == "valid" && c$$234 || this.options.revert === !0 || a$$426.isFunction(this.options.revert) && this.options.revert.call(this.element, c$$234)) {
      var f$$59 = this;
      a$$426(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
        f$$59._trigger("stop", b$$288) !== !1 && f$$59._clear();
      });
    } else {
      this._trigger("stop", b$$288) !== !1 && this._clear();
    }
    return !1;
  }, _mouseUp:function(b$$289) {
    return a$$426("div.ui-draggable-iframeFix").each(function() {
      this.parentNode.removeChild(this);
    }), a$$426.ui.ddmanager && a$$426.ui.ddmanager.dragStop(this, b$$289), a$$426.ui.mouse.prototype._mouseUp.call(this, b$$289);
  }, cancel:function() {
    return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this;
  }, _getHandle:function(b$$290) {
    var c$$235 = !this.options.handle || !a$$426(this.options.handle, this.element).length ? !0 : !1;
    return a$$426(this.options.handle, this.element).find("*").andSelf().each(function() {
      this == b$$290.target && (c$$235 = !0);
    }), c$$235;
  }, _createHelper:function(b$$291) {
    var c$$236 = this.options;
    var d$$184 = a$$426.isFunction(c$$236.helper) ? a$$426(c$$236.helper.apply(this.element[0], [b$$291])) : c$$236.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
    return d$$184.parents("body").length || d$$184.appendTo(c$$236.appendTo == "parent" ? this.element[0].parentNode : c$$236.appendTo), d$$184[0] != this.element[0] && !/(fixed|absolute)/.test(d$$184.css("position")) && d$$184.css("position", "absolute"), d$$184;
  }, _adjustOffsetFromHelper:function(b$$292) {
    typeof b$$292 == "string" && (b$$292 = b$$292.split(" ")), a$$426.isArray(b$$292) && (b$$292 = {left:+b$$292[0], top:+b$$292[1] || 0}), "left" in b$$292 && (this.offset.click.left = b$$292.left + this.margins.left), "right" in b$$292 && (this.offset.click.left = this.helperProportions.width - b$$292.right + this.margins.left), "top" in b$$292 && (this.offset.click.top = b$$292.top + this.margins.top), "bottom" in b$$292 && (this.offset.click.top = this.helperProportions.height - b$$292.bottom + 
    this.margins.top);
  }, _getParentOffset:function() {
    this.offsetParent = this.helper.offsetParent();
    var b$$293 = this.offsetParent.offset();
    this.cssPosition == "absolute" && this.scrollParent[0] != document && a$$426.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (b$$293.left += this.scrollParent.scrollLeft(), b$$293.top += this.scrollParent.scrollTop());
    if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a$$426.browser.msie) {
      b$$293 = {top:0, left:0};
    }
    return {top:b$$293.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left:b$$293.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)};
  }, _getRelativeOffset:function() {
    if (this.cssPosition == "relative") {
      var a$$427 = this.element.position();
      return {top:a$$427.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left:a$$427.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()};
    }
    return {top:0, left:0};
  }, _cacheMargins:function() {
    this.margins = {left:parseInt(this.element.css("marginLeft"), 10) || 0, top:parseInt(this.element.css("marginTop"), 10) || 0, right:parseInt(this.element.css("marginRight"), 10) || 0, bottom:parseInt(this.element.css("marginBottom"), 10) || 0};
  }, _cacheHelperProportions:function() {
    this.helperProportions = {width:this.helper.outerWidth(), height:this.helper.outerHeight()};
  }, _setContainment:function() {
    var b$$294 = this.options;
    b$$294.containment == "parent" && (b$$294.containment = this.helper[0].parentNode);
    if (b$$294.containment == "document" || b$$294.containment == "window") {
      this.containment = [b$$294.containment == "document" ? 0 : a$$426(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, b$$294.containment == "document" ? 0 : a$$426(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (b$$294.containment == "document" ? 0 : a$$426(window).scrollLeft()) + a$$426(b$$294.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (b$$294.containment == "document" ? 0 : a$$426(window).scrollTop()) + 
      (a$$426(b$$294.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
    }
    if (!/^(document|window|parent)$/.test(b$$294.containment) && b$$294.containment.constructor != Array) {
      var c$$237 = a$$426(b$$294.containment);
      var d$$185 = c$$237[0];
      if (!d$$185) {
        return;
      }
      var e$$183 = c$$237.offset();
      var f$$60 = a$$426(d$$185).css("overflow") != "hidden";
      this.containment = [(parseInt(a$$426(d$$185).css("borderLeftWidth"), 10) || 0) + (parseInt(a$$426(d$$185).css("paddingLeft"), 10) || 0), (parseInt(a$$426(d$$185).css("borderTopWidth"), 10) || 0) + (parseInt(a$$426(d$$185).css("paddingTop"), 10) || 0), (f$$60 ? Math.max(d$$185.scrollWidth, d$$185.offsetWidth) : d$$185.offsetWidth) - (parseInt(a$$426(d$$185).css("borderLeftWidth"), 10) || 0) - (parseInt(a$$426(d$$185).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - 
      this.margins.right, (f$$60 ? Math.max(d$$185.scrollHeight, d$$185.offsetHeight) : d$$185.offsetHeight) - (parseInt(a$$426(d$$185).css("borderTopWidth"), 10) || 0) - (parseInt(a$$426(d$$185).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c$$237;
    } else {
      b$$294.containment.constructor == Array && (this.containment = b$$294.containment);
    }
  }, _convertPositionTo:function(b$$295, c$$238) {
    c$$238 || (c$$238 = this.position);
    var d$$186 = b$$295 == "absolute" ? 1 : -1;
    var e$$184 = this.options;
    var f$$61 = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a$$426.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent;
    var g$$107 = /(html|body)/i.test(f$$61[0].tagName);
    return {top:c$$238.top + this.offset.relative.top * d$$186 + this.offset.parent.top * d$$186 - (a$$426.browser.safari && a$$426.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g$$107 ? 0 : f$$61.scrollTop()) * d$$186), left:c$$238.left + this.offset.relative.left * d$$186 + this.offset.parent.left * d$$186 - (a$$426.browser.safari && a$$426.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == 
    "fixed" ? -this.scrollParent.scrollLeft() : g$$107 ? 0 : f$$61.scrollLeft()) * d$$186)};
  }, _generatePosition:function(b$$296) {
    var c$$239 = this.options;
    var d$$187 = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a$$426.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent;
    var e$$185 = /(html|body)/i.test(d$$187[0].tagName);
    var f$$62 = b$$296.pageX;
    var g$$108 = b$$296.pageY;
    if (this.originalPosition) {
      var h$$87;
      if (this.containment) {
        if (this.relative_container) {
          var i$$148 = this.relative_container.offset();
          h$$87 = [this.containment[0] + i$$148.left, this.containment[1] + i$$148.top, this.containment[2] + i$$148.left, this.containment[3] + i$$148.top];
        } else {
          h$$87 = this.containment;
        }
        b$$296.pageX - this.offset.click.left < h$$87[0] && (f$$62 = h$$87[0] + this.offset.click.left), b$$296.pageY - this.offset.click.top < h$$87[1] && (g$$108 = h$$87[1] + this.offset.click.top), b$$296.pageX - this.offset.click.left > h$$87[2] && (f$$62 = h$$87[2] + this.offset.click.left), b$$296.pageY - this.offset.click.top > h$$87[3] && (g$$108 = h$$87[3] + this.offset.click.top);
      }
      if (c$$239.grid) {
        var j$$64 = c$$239.grid[1] ? this.originalPageY + Math.round((g$$108 - this.originalPageY) / c$$239.grid[1]) * c$$239.grid[1] : this.originalPageY;
        g$$108 = h$$87 ? j$$64 - this.offset.click.top < h$$87[1] || j$$64 - this.offset.click.top > h$$87[3] ? j$$64 - this.offset.click.top < h$$87[1] ? j$$64 + c$$239.grid[1] : j$$64 - c$$239.grid[1] : j$$64 : j$$64;
        var k$$42 = c$$239.grid[0] ? this.originalPageX + Math.round((f$$62 - this.originalPageX) / c$$239.grid[0]) * c$$239.grid[0] : this.originalPageX;
        f$$62 = h$$87 ? k$$42 - this.offset.click.left < h$$87[0] || k$$42 - this.offset.click.left > h$$87[2] ? k$$42 - this.offset.click.left < h$$87[0] ? k$$42 + c$$239.grid[0] : k$$42 - c$$239.grid[0] : k$$42 : k$$42;
      }
    }
    return {top:g$$108 - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a$$426.browser.safari && a$$426.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e$$185 ? 0 : d$$187.scrollTop()), left:f$$62 - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a$$426.browser.safari && a$$426.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? 
    -this.scrollParent.scrollLeft() : e$$185 ? 0 : d$$187.scrollLeft())};
  }, _clear:function() {
    this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1;
  }, _trigger:function(b$$297, c$$240, d$$188) {
    return d$$188 = d$$188 || this._uiHash(), a$$426.ui.plugin.call(this, b$$297, [c$$240, d$$188]), b$$297 == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), a$$426.Widget.prototype._trigger.call(this, b$$297, c$$240, d$$188);
  }, plugins:{}, _uiHash:function(a$$428) {
    return {helper:this.helper, position:this.position, originalPosition:this.originalPosition, offset:this.positionAbs};
  }}), a$$426.extend(a$$426.ui.draggable, {version:"1.8.24"}), a$$426.ui.plugin.add("draggable", "connectToSortable", {start:function(b$$298, c$$241) {
    var d$$189 = a$$426(this).data("draggable");
    var e$$186 = d$$189.options;
    var f$$63 = a$$426.extend({}, c$$241, {item:d$$189.element});
    d$$189.sortables = [], a$$426(e$$186.connectToSortable).each(function() {
      var c$$242 = a$$426.data(this, "sortable");
      c$$242 && !c$$242.options.disabled && (d$$189.sortables.push({instance:c$$242, shouldRevert:c$$242.options.revert}), c$$242.refreshPositions(), c$$242._trigger("activate", b$$298, f$$63));
    });
  }, stop:function(b$$299, c$$243) {
    var d$$190 = a$$426(this).data("draggable");
    var e$$187 = a$$426.extend({}, c$$243, {item:d$$190.element});
    a$$426.each(d$$190.sortables, function() {
      this.instance.isOver ? (this.instance.isOver = 0, d$$190.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(b$$299), this.instance.options.helper = this.instance.options._helper, d$$190.options.helper == "original" && this.instance.currentItem.css({top:"auto", left:"auto"})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b$$299, e$$187));
    });
  }, drag:function(b$$300, c$$244) {
    var d$$191 = a$$426(this).data("draggable");
    var e$$188 = this;
    a$$426.each(d$$191.sortables, function(f$$66) {
      this.instance.positionAbs = d$$191.positionAbs, this.instance.helperProportions = d$$191.helperProportions, this.instance.offset.click = d$$191.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a$$426(e$$188).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
        return c$$244.helper[0];
      }, b$$300.target = this.instance.currentItem[0], this.instance._mouseCapture(b$$300, !0), this.instance._mouseStart(b$$300, !0, !0), this.instance.offset.click.top = d$$191.offset.click.top, this.instance.offset.click.left = d$$191.offset.click.left, this.instance.offset.parent.left -= d$$191.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= d$$191.offset.parent.top - this.instance.offset.parent.top, d$$191._trigger("toSortable", b$$300), d$$191.dropped = 
      this.instance.element, d$$191.currentItem = d$$191.element, this.instance.fromOutside = d$$191), this.instance.currentItem && this.instance._mouseDrag(b$$300)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b$$300, this.instance._uiHash(this.instance)), this.instance._mouseStop(b$$300, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), 
      this.instance.placeholder && this.instance.placeholder.remove(), d$$191._trigger("fromSortable", b$$300), d$$191.dropped = !1);
    });
  }}), a$$426.ui.plugin.add("draggable", "cursor", {start:function(b$$302, c$$246) {
    var d$$193 = a$$426("body");
    var e$$190 = a$$426(this).data("draggable").options;
    d$$193.css("cursor") && (e$$190._cursor = d$$193.css("cursor")), d$$193.css("cursor", e$$190.cursor);
  }, stop:function(b$$303, c$$247) {
    var d$$194 = a$$426(this).data("draggable").options;
    d$$194._cursor && a$$426("body").css("cursor", d$$194._cursor);
  }}), a$$426.ui.plugin.add("draggable", "opacity", {start:function(b$$304, c$$248) {
    var d$$195 = a$$426(c$$248.helper);
    var e$$191 = a$$426(this).data("draggable").options;
    d$$195.css("opacity") && (e$$191._opacity = d$$195.css("opacity")), d$$195.css("opacity", e$$191.opacity);
  }, stop:function(b$$305, c$$249) {
    var d$$196 = a$$426(this).data("draggable").options;
    d$$196._opacity && a$$426(c$$249.helper).css("opacity", d$$196._opacity);
  }}), a$$426.ui.plugin.add("draggable", "scroll", {start:function(b$$306, c$$250) {
    var d$$197 = a$$426(this).data("draggable");
    d$$197.scrollParent[0] != document && d$$197.scrollParent[0].tagName != "HTML" && (d$$197.overflowOffset = d$$197.scrollParent.offset());
  }, drag:function(b$$307, c$$251) {
    var d$$198 = a$$426(this).data("draggable");
    var e$$192 = d$$198.options;
    var f$$67 = !1;
    if (d$$198.scrollParent[0] != document && d$$198.scrollParent[0].tagName != "HTML") {
      if (!e$$192.axis || e$$192.axis != "x") {
        d$$198.overflowOffset.top + d$$198.scrollParent[0].offsetHeight - b$$307.pageY < e$$192.scrollSensitivity ? d$$198.scrollParent[0].scrollTop = f$$67 = d$$198.scrollParent[0].scrollTop + e$$192.scrollSpeed : b$$307.pageY - d$$198.overflowOffset.top < e$$192.scrollSensitivity && (d$$198.scrollParent[0].scrollTop = f$$67 = d$$198.scrollParent[0].scrollTop - e$$192.scrollSpeed);
      }
      if (!e$$192.axis || e$$192.axis != "y") {
        d$$198.overflowOffset.left + d$$198.scrollParent[0].offsetWidth - b$$307.pageX < e$$192.scrollSensitivity ? d$$198.scrollParent[0].scrollLeft = f$$67 = d$$198.scrollParent[0].scrollLeft + e$$192.scrollSpeed : b$$307.pageX - d$$198.overflowOffset.left < e$$192.scrollSensitivity && (d$$198.scrollParent[0].scrollLeft = f$$67 = d$$198.scrollParent[0].scrollLeft - e$$192.scrollSpeed);
      }
    } else {
      if (!e$$192.axis || e$$192.axis != "x") {
        b$$307.pageY - a$$426(document).scrollTop() < e$$192.scrollSensitivity ? f$$67 = a$$426(document).scrollTop(a$$426(document).scrollTop() - e$$192.scrollSpeed) : a$$426(window).height() - (b$$307.pageY - a$$426(document).scrollTop()) < e$$192.scrollSensitivity && (f$$67 = a$$426(document).scrollTop(a$$426(document).scrollTop() + e$$192.scrollSpeed));
      }
      if (!e$$192.axis || e$$192.axis != "y") {
        b$$307.pageX - a$$426(document).scrollLeft() < e$$192.scrollSensitivity ? f$$67 = a$$426(document).scrollLeft(a$$426(document).scrollLeft() - e$$192.scrollSpeed) : a$$426(window).width() - (b$$307.pageX - a$$426(document).scrollLeft()) < e$$192.scrollSensitivity && (f$$67 = a$$426(document).scrollLeft(a$$426(document).scrollLeft() + e$$192.scrollSpeed));
      }
    }
    f$$67 !== !1 && a$$426.ui.ddmanager && !e$$192.dropBehaviour && a$$426.ui.ddmanager.prepareOffsets(d$$198, b$$307);
  }}), a$$426.ui.plugin.add("draggable", "snap", {start:function(b$$308, c$$252) {
    var d$$199 = a$$426(this).data("draggable");
    var e$$193 = d$$199.options;
    d$$199.snapElements = [], a$$426(e$$193.snap.constructor != String ? e$$193.snap.items || ":data(draggable)" : e$$193.snap).each(function() {
      var b$$309 = a$$426(this);
      var c$$253 = b$$309.offset();
      this != d$$199.element[0] && d$$199.snapElements.push({item:this, width:b$$309.outerWidth(), height:b$$309.outerHeight(), top:c$$253.top, left:c$$253.left});
    });
  }, drag:function(b$$310, c$$254) {
    var d$$200 = a$$426(this).data("draggable");
    var e$$194 = d$$200.options;
    var f$$68 = e$$194.snapTolerance;
    var g$$110 = c$$254.offset.left;
    var h$$89 = g$$110 + d$$200.helperProportions.width;
    var i$$150 = c$$254.offset.top;
    var j$$66 = i$$150 + d$$200.helperProportions.height;
    var k$$43 = d$$200.snapElements.length - 1;
    for (;k$$43 >= 0;k$$43--) {
      var l$$54 = d$$200.snapElements[k$$43].left;
      var m$$28 = l$$54 + d$$200.snapElements[k$$43].width;
      var n$$79 = d$$200.snapElements[k$$43].top;
      var o$$16 = n$$79 + d$$200.snapElements[k$$43].height;
      if (!(l$$54 - f$$68 < g$$110 && g$$110 < m$$28 + f$$68 && n$$79 - f$$68 < i$$150 && i$$150 < o$$16 + f$$68 || l$$54 - f$$68 < g$$110 && g$$110 < m$$28 + f$$68 && n$$79 - f$$68 < j$$66 && j$$66 < o$$16 + f$$68 || l$$54 - f$$68 < h$$89 && h$$89 < m$$28 + f$$68 && n$$79 - f$$68 < i$$150 && i$$150 < o$$16 + f$$68 || l$$54 - f$$68 < h$$89 && h$$89 < m$$28 + f$$68 && n$$79 - f$$68 < j$$66 && j$$66 < o$$16 + f$$68)) {
        d$$200.snapElements[k$$43].snapping && d$$200.options.snap.release && d$$200.options.snap.release.call(d$$200.element, b$$310, a$$426.extend(d$$200._uiHash(), {snapItem:d$$200.snapElements[k$$43].item})), d$$200.snapElements[k$$43].snapping = !1;
        continue;
      }
      if (e$$194.snapMode != "inner") {
        var p$$38 = Math.abs(n$$79 - j$$66) <= f$$68;
        var q$$15 = Math.abs(o$$16 - i$$150) <= f$$68;
        var r$$17 = Math.abs(l$$54 - h$$89) <= f$$68;
        var s$$26 = Math.abs(m$$28 - g$$110) <= f$$68;
        p$$38 && (c$$254.position.top = d$$200._convertPositionTo("relative", {top:n$$79 - d$$200.helperProportions.height, left:0}).top - d$$200.margins.top), q$$15 && (c$$254.position.top = d$$200._convertPositionTo("relative", {top:o$$16, left:0}).top - d$$200.margins.top), r$$17 && (c$$254.position.left = d$$200._convertPositionTo("relative", {top:0, left:l$$54 - d$$200.helperProportions.width}).left - d$$200.margins.left), s$$26 && (c$$254.position.left = d$$200._convertPositionTo("relative", 
        {top:0, left:m$$28}).left - d$$200.margins.left);
      }
      var t$$11 = p$$38 || q$$15 || r$$17 || s$$26;
      if (e$$194.snapMode != "outer") {
        p$$38 = Math.abs(n$$79 - i$$150) <= f$$68;
        q$$15 = Math.abs(o$$16 - j$$66) <= f$$68;
        r$$17 = Math.abs(l$$54 - g$$110) <= f$$68;
        s$$26 = Math.abs(m$$28 - h$$89) <= f$$68;
        p$$38 && (c$$254.position.top = d$$200._convertPositionTo("relative", {top:n$$79, left:0}).top - d$$200.margins.top), q$$15 && (c$$254.position.top = d$$200._convertPositionTo("relative", {top:o$$16 - d$$200.helperProportions.height, left:0}).top - d$$200.margins.top), r$$17 && (c$$254.position.left = d$$200._convertPositionTo("relative", {top:0, left:l$$54}).left - d$$200.margins.left), s$$26 && (c$$254.position.left = d$$200._convertPositionTo("relative", {top:0, left:m$$28 - d$$200.helperProportions.width}).left - 
        d$$200.margins.left);
      }
      !d$$200.snapElements[k$$43].snapping && (p$$38 || q$$15 || r$$17 || s$$26 || t$$11) && d$$200.options.snap.snap && d$$200.options.snap.snap.call(d$$200.element, b$$310, a$$426.extend(d$$200._uiHash(), {snapItem:d$$200.snapElements[k$$43].item})), d$$200.snapElements[k$$43].snapping = p$$38 || q$$15 || r$$17 || s$$26 || t$$11;
    }
  }}), a$$426.ui.plugin.add("draggable", "stack", {start:function(b$$311, c$$255) {
    var d$$201 = a$$426(this).data("draggable").options;
    var e$$195 = a$$426.makeArray(a$$426(d$$201.stack)).sort(function(b$$312, c$$256) {
      return (parseInt(a$$426(b$$312).css("zIndex"), 10) || 0) - (parseInt(a$$426(c$$256).css("zIndex"), 10) || 0);
    });
    if (!e$$195.length) {
      return;
    }
    var f$$69 = parseInt(e$$195[0].style.zIndex) || 0;
    a$$426(e$$195).each(function(a$$429) {
      this.style.zIndex = f$$69 + a$$429;
    }), this[0].style.zIndex = f$$69 + e$$195.length;
  }}), a$$426.ui.plugin.add("draggable", "zIndex", {start:function(b$$313, c$$257) {
    var d$$202 = a$$426(c$$257.helper);
    var e$$196 = a$$426(this).data("draggable").options;
    d$$202.css("zIndex") && (e$$196._zIndex = d$$202.css("zIndex")), d$$202.css("zIndex", e$$196.zIndex);
  }, stop:function(b$$314, c$$258) {
    var d$$203 = a$$426(this).data("draggable").options;
    d$$203._zIndex && a$$426(c$$258.helper).css("zIndex", d$$203._zIndex);
  }});
}(jQuery), function(a$$430, b$$315) {
  a$$430.widget("ui.droppable", {widgetEventPrefix:"drop", options:{accept:"*", activeClass:!1, addClasses:!0, greedy:!1, hoverClass:!1, scope:"default", tolerance:"intersect"}, _create:function() {
    var b$$316 = this.options;
    var c$$259 = b$$316.accept;
    this.isover = 0, this.isout = 1, this.accept = a$$430.isFunction(c$$259) ? c$$259 : function(a$$431) {
      return a$$431.is(c$$259);
    }, this.proportions = {width:this.element[0].offsetWidth, height:this.element[0].offsetHeight}, a$$430.ui.ddmanager.droppables[b$$316.scope] = a$$430.ui.ddmanager.droppables[b$$316.scope] || [], a$$430.ui.ddmanager.droppables[b$$316.scope].push(this), b$$316.addClasses && this.element.addClass("ui-droppable");
  }, destroy:function() {
    var b$$317 = a$$430.ui.ddmanager.droppables[this.options.scope];
    var c$$260 = 0;
    for (;c$$260 < b$$317.length;c$$260++) {
      b$$317[c$$260] == this && b$$317.splice(c$$260, 1);
    }
    return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"), this;
  }, _setOption:function(b$$318, c$$261) {
    b$$318 == "accept" && (this.accept = a$$430.isFunction(c$$261) ? c$$261 : function(a$$432) {
      return a$$432.is(c$$261);
    }), a$$430.Widget.prototype._setOption.apply(this, arguments);
  }, _activate:function(b$$319) {
    var c$$262 = a$$430.ui.ddmanager.current;
    this.options.activeClass && this.element.addClass(this.options.activeClass), c$$262 && this._trigger("activate", b$$319, this.ui(c$$262));
  }, _deactivate:function(b$$320) {
    var c$$263 = a$$430.ui.ddmanager.current;
    this.options.activeClass && this.element.removeClass(this.options.activeClass), c$$263 && this._trigger("deactivate", b$$320, this.ui(c$$263));
  }, _over:function(b$$321) {
    var c$$264 = a$$430.ui.ddmanager.current;
    if (!c$$264 || (c$$264.currentItem || c$$264.element)[0] == this.element[0]) {
      return;
    }
    this.accept.call(this.element[0], c$$264.currentItem || c$$264.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b$$321, this.ui(c$$264)));
  }, _out:function(b$$322) {
    var c$$265 = a$$430.ui.ddmanager.current;
    if (!c$$265 || (c$$265.currentItem || c$$265.element)[0] == this.element[0]) {
      return;
    }
    this.accept.call(this.element[0], c$$265.currentItem || c$$265.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b$$322, this.ui(c$$265)));
  }, _drop:function(b$$323, c$$266) {
    var d$$204 = c$$266 || a$$430.ui.ddmanager.current;
    if (!d$$204 || (d$$204.currentItem || d$$204.element)[0] == this.element[0]) {
      return !1;
    }
    var e$$197 = !1;
    return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
      var b$$324 = a$$430.data(this, "droppable");
      if (b$$324.options.greedy && !b$$324.options.disabled && b$$324.options.scope == d$$204.options.scope && b$$324.accept.call(b$$324.element[0], d$$204.currentItem || d$$204.element) && a$$430.ui.intersect(d$$204, a$$430.extend(b$$324, {offset:b$$324.element.offset()}), b$$324.options.tolerance)) {
        return e$$197 = !0, !1;
      }
    }), e$$197 ? !1 : this.accept.call(this.element[0], d$$204.currentItem || d$$204.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b$$323, this.ui(d$$204)), this.element) : !1;
  }, ui:function(a$$433) {
    return {draggable:a$$433.currentItem || a$$433.element, helper:a$$433.helper, position:a$$433.position, offset:a$$433.positionAbs};
  }}), a$$430.extend(a$$430.ui.droppable, {version:"1.8.24"}), a$$430.ui.intersect = function(b$$325, c$$267, d$$205) {
    if (!c$$267.offset) {
      return !1;
    }
    var e$$198 = (b$$325.positionAbs || b$$325.position.absolute).left;
    var f$$70 = e$$198 + b$$325.helperProportions.width;
    var g$$111 = (b$$325.positionAbs || b$$325.position.absolute).top;
    var h$$90 = g$$111 + b$$325.helperProportions.height;
    var i$$151 = c$$267.offset.left;
    var j$$67 = i$$151 + c$$267.proportions.width;
    var k$$44 = c$$267.offset.top;
    var l$$55 = k$$44 + c$$267.proportions.height;
    switch(d$$205) {
      case "fit":
        return i$$151 <= e$$198 && f$$70 <= j$$67 && k$$44 <= g$$111 && h$$90 <= l$$55;
      case "intersect":
        return i$$151 < e$$198 + b$$325.helperProportions.width / 2 && f$$70 - b$$325.helperProportions.width / 2 < j$$67 && k$$44 < g$$111 + b$$325.helperProportions.height / 2 && h$$90 - b$$325.helperProportions.height / 2 < l$$55;
      case "pointer":
        var m$$29 = (b$$325.positionAbs || b$$325.position.absolute).left + (b$$325.clickOffset || b$$325.offset.click).left;
        var n$$80 = (b$$325.positionAbs || b$$325.position.absolute).top + (b$$325.clickOffset || b$$325.offset.click).top;
        var o$$17 = a$$430.ui.isOver(n$$80, m$$29, k$$44, i$$151, c$$267.proportions.height, c$$267.proportions.width);
        return o$$17;
      case "touch":
        return (g$$111 >= k$$44 && g$$111 <= l$$55 || h$$90 >= k$$44 && h$$90 <= l$$55 || g$$111 < k$$44 && h$$90 > l$$55) && (e$$198 >= i$$151 && e$$198 <= j$$67 || f$$70 >= i$$151 && f$$70 <= j$$67 || e$$198 < i$$151 && f$$70 > j$$67);
      default:
        return !1;
    }
  }, a$$430.ui.ddmanager = {current:null, droppables:{"default":[]}, prepareOffsets:function(b$$326, c$$268) {
    var d$$206 = a$$430.ui.ddmanager.droppables[b$$326.options.scope] || [];
    var e$$199 = c$$268 ? c$$268.type : null;
    var f$$71 = (b$$326.currentItem || b$$326.element).find(":data(droppable)").andSelf();
    var h$$91 = 0;
    g: for (;h$$91 < d$$206.length;h$$91++) {
      if (d$$206[h$$91].options.disabled || b$$326 && !d$$206[h$$91].accept.call(d$$206[h$$91].element[0], b$$326.currentItem || b$$326.element)) {
        continue;
      }
      var i$$152 = 0;
      for (;i$$152 < f$$71.length;i$$152++) {
        if (f$$71[i$$152] == d$$206[h$$91].element[0]) {
          d$$206[h$$91].proportions.height = 0;
          continue g;
        }
      }
      d$$206[h$$91].visible = d$$206[h$$91].element.css("display") != "none";
      if (!d$$206[h$$91].visible) {
        continue;
      }
      e$$199 == "mousedown" && d$$206[h$$91]._activate.call(d$$206[h$$91], c$$268), d$$206[h$$91].offset = d$$206[h$$91].element.offset(), d$$206[h$$91].proportions = {width:d$$206[h$$91].element[0].offsetWidth, height:d$$206[h$$91].element[0].offsetHeight};
    }
  }, drop:function(b$$327, c$$269) {
    var d$$207 = !1;
    return a$$430.each(a$$430.ui.ddmanager.droppables[b$$327.options.scope] || [], function() {
      if (!this.options) {
        return;
      }
      !this.options.disabled && this.visible && a$$430.ui.intersect(b$$327, this, this.options.tolerance) && (d$$207 = this._drop.call(this, c$$269) || d$$207), !this.options.disabled && this.visible && this.accept.call(this.element[0], b$$327.currentItem || b$$327.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, c$$269));
    }), d$$207;
  }, dragStart:function(b$$328, c$$270) {
    b$$328.element.parents(":not(body,html)").bind("scroll.droppable", function() {
      b$$328.options.refreshPositions || a$$430.ui.ddmanager.prepareOffsets(b$$328, c$$270);
    });
  }, drag:function(b$$329, c$$271) {
    b$$329.options.refreshPositions && a$$430.ui.ddmanager.prepareOffsets(b$$329, c$$271), a$$430.each(a$$430.ui.ddmanager.droppables[b$$329.options.scope] || [], function() {
      if (this.options.disabled || this.greedyChild || !this.visible) {
        return;
      }
      var d$$208 = a$$430.ui.intersect(b$$329, this, this.options.tolerance);
      var e$$200 = !d$$208 && this.isover == 1 ? "isout" : d$$208 && this.isover == 0 ? "isover" : null;
      if (!e$$200) {
        return;
      }
      var f$$72;
      if (this.options.greedy) {
        var g$$112 = this.options.scope;
        var h$$92 = this.element.parents(":data(droppable)").filter(function() {
          return a$$430.data(this, "droppable").options.scope === g$$112;
        });
        h$$92.length && (f$$72 = a$$430.data(h$$92[0], "droppable"), f$$72.greedyChild = e$$200 == "isover" ? 1 : 0);
      }
      f$$72 && e$$200 == "isover" && (f$$72.isover = 0, f$$72.isout = 1, f$$72._out.call(f$$72, c$$271)), this[e$$200] = 1, this[e$$200 == "isout" ? "isover" : "isout"] = 0, this[e$$200 == "isover" ? "_over" : "_out"].call(this, c$$271), f$$72 && e$$200 == "isout" && (f$$72.isout = 0, f$$72.isover = 1, f$$72._over.call(f$$72, c$$271));
    });
  }, dragStop:function(b$$330, c$$272) {
    b$$330.element.parents(":not(body,html)").unbind("scroll.droppable"), b$$330.options.refreshPositions || a$$430.ui.ddmanager.prepareOffsets(b$$330, c$$272);
  }};
}(jQuery), function(a$$434, b$$331) {
  function d$$209(a$$450) {
    return !isNaN(parseInt(a$$450, 10));
  }
  function c$$273(a$$449) {
    return parseInt(a$$449, 10) || 0;
  }
  a$$434.widget("ui.resizable", a$$434.ui.mouse, {widgetEventPrefix:"resize", options:{alsoResize:!1, animate:!1, animateDuration:"slow", animateEasing:"swing", aspectRatio:!1, autoHide:!1, containment:!1, ghost:!1, grid:!1, handles:"e,s,se", helper:!1, maxHeight:null, maxWidth:null, minHeight:10, minWidth:10, zIndex:1E3}, _create:function() {
    var b$$332 = this;
    var c$$274 = this.options;
    this.element.addClass("ui-resizable"), a$$434.extend(this, {_aspectRatio:!!c$$274.aspectRatio, aspectRatio:c$$274.aspectRatio, originalElement:this.element, _proportionallyResizeElements:[], _helper:c$$274.helper || c$$274.ghost || c$$274.animate ? c$$274.helper || "ui-resizable-helper" : null}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(a$$434('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"), 
    width:this.element.outerWidth(), height:this.element.outerHeight(), top:this.element.css("top"), left:this.element.css("left")})), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({marginLeft:this.originalElement.css("marginLeft"), marginTop:this.originalElement.css("marginTop"), marginRight:this.originalElement.css("marginRight"), marginBottom:this.originalElement.css("marginBottom")}), this.originalElement.css({marginLeft:0, 
    marginTop:0, marginRight:0, marginBottom:0}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({position:"static", zoom:1, display:"block"})), this.originalElement.css({margin:this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = c$$274.handles || (a$$434(".ui-resizable-handle", this.element).length ? {n:".ui-resizable-n", e:".ui-resizable-e", 
    s:".ui-resizable-s", w:".ui-resizable-w", se:".ui-resizable-se", sw:".ui-resizable-sw", ne:".ui-resizable-ne", nw:".ui-resizable-nw"} : "e,s,se");
    if (this.handles.constructor == String) {
      this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw");
      var d$$210 = this.handles.split(",");
      this.handles = {};
      var e$$201 = 0;
      for (;e$$201 < d$$210.length;e$$201++) {
        var f$$73 = a$$434.trim(d$$210[e$$201]);
        var g$$113 = "ui-resizable-" + f$$73;
        var h$$93 = a$$434('<div class="ui-resizable-handle ' + g$$113 + '"></div>');
        h$$93.css({zIndex:c$$274.zIndex}), "se" == f$$73 && h$$93.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[f$$73] = ".ui-resizable-" + f$$73, this.element.append(h$$93);
      }
    }
    this._renderAxis = function(b$$333) {
      b$$333 = b$$333 || this.element;
      var c$$275;
      for (c$$275 in this.handles) {
        this.handles[c$$275].constructor == String && (this.handles[c$$275] = a$$434(this.handles[c$$275], this.element).show());
        if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
          var d$$211 = a$$434(this.handles[c$$275], this.element);
          var e$$202 = 0;
          e$$202 = /sw|ne|nw|se|n|s/.test(c$$275) ? d$$211.outerHeight() : d$$211.outerWidth();
          var f$$74 = ["padding", /ne|nw|n/.test(c$$275) ? "Top" : /se|sw|s/.test(c$$275) ? "Bottom" : /^e$/.test(c$$275) ? "Right" : "Left"].join("");
          b$$333.css(f$$74, e$$202), this._proportionallyResize();
        }
        if (!a$$434(this.handles[c$$275]).length) {
        }
      }
    }, this._renderAxis(this.element), this._handles = a$$434(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
      if (!b$$332.resizing) {
        if (this.className) {
          var a$$435 = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
        }
        b$$332.axis = a$$435 && a$$435[1] ? a$$435[1] : "se";
      }
    }), c$$274.autoHide && (this._handles.hide(), a$$434(this.element).addClass("ui-resizable-autohide").hover(function() {
      if (c$$274.disabled) {
        return;
      }
      a$$434(this).removeClass("ui-resizable-autohide"), b$$332._handles.show();
    }, function() {
      if (c$$274.disabled) {
        return;
      }
      b$$332.resizing || (a$$434(this).addClass("ui-resizable-autohide"), b$$332._handles.hide());
    })), this._mouseInit();
  }, destroy:function() {
    function b$$334(b$$335) {
      a$$434(b$$335).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
    }
    this._mouseDestroy();
    if (this.elementIsWrapper) {
      b$$334(this.element);
      var c$$276 = this.element;
      c$$276.after(this.originalElement.css({position:c$$276.css("position"), width:c$$276.outerWidth(), height:c$$276.outerHeight(), top:c$$276.css("top"), left:c$$276.css("left")})).remove();
    }
    return this.originalElement.css("resize", this.originalResizeStyle), b$$334(this.originalElement), this;
  }, _mouseCapture:function(b$$336) {
    var c$$277 = !1;
    var d$$212;
    for (d$$212 in this.handles) {
      a$$434(this.handles[d$$212])[0] == b$$336.target && (c$$277 = !0);
    }
    return !this.options.disabled && c$$277;
  }, _mouseStart:function(b$$337) {
    var d$$213 = this.options;
    var e$$203 = this.element.position();
    var f$$75 = this.element;
    this.resizing = !0, this.documentScroll = {top:a$$434(document).scrollTop(), left:a$$434(document).scrollLeft()}, (f$$75.is(".ui-draggable") || /absolute/.test(f$$75.css("position"))) && f$$75.css({position:"absolute", top:e$$203.top, left:e$$203.left}), this._renderProxy();
    var g$$114 = c$$273(this.helper.css("left"));
    var h$$94 = c$$273(this.helper.css("top"));
    d$$213.containment && (g$$114 += a$$434(d$$213.containment).scrollLeft() || 0, h$$94 += a$$434(d$$213.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {left:g$$114, top:h$$94}, this.size = this._helper ? {width:f$$75.outerWidth(), height:f$$75.outerHeight()} : {width:f$$75.width(), height:f$$75.height()}, this.originalSize = this._helper ? {width:f$$75.outerWidth(), height:f$$75.outerHeight()} : {width:f$$75.width(), height:f$$75.height()}, this.originalPosition = 
    {left:g$$114, top:h$$94}, this.sizeDiff = {width:f$$75.outerWidth() - f$$75.width(), height:f$$75.outerHeight() - f$$75.height()}, this.originalMousePosition = {left:b$$337.pageX, top:b$$337.pageY}, this.aspectRatio = typeof d$$213.aspectRatio == "number" ? d$$213.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
    var i$$153 = a$$434(".ui-resizable-" + this.axis).css("cursor");
    return a$$434("body").css("cursor", i$$153 == "auto" ? this.axis + "-resize" : i$$153), f$$75.addClass("ui-resizable-resizing"), this._propagate("start", b$$337), !0;
  }, _mouseDrag:function(b$$338) {
    var c$$278 = this.helper;
    var d$$214 = this.options;
    var f$$76 = this;
    var g$$115 = this.originalMousePosition;
    var h$$95 = this.axis;
    var i$$154 = b$$338.pageX - g$$115.left || 0;
    var j$$68 = b$$338.pageY - g$$115.top || 0;
    var k$$45 = this._change[h$$95];
    if (!k$$45) {
      return !1;
    }
    var l$$56 = k$$45.apply(this, [b$$338, i$$154, j$$68]);
    var m$$30 = a$$434.browser.msie && a$$434.browser.version < 7;
    var n$$81 = this.sizeDiff;
    this._updateVirtualBoundaries(b$$338.shiftKey);
    if (this._aspectRatio || b$$338.shiftKey) {
      l$$56 = this._updateRatio(l$$56, b$$338);
    }
    return l$$56 = this._respectSize(l$$56, b$$338), this._propagate("resize", b$$338), c$$278.css({top:this.position.top + "px", left:this.position.left + "px", width:this.size.width + "px", height:this.size.height + "px"}), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(l$$56), this._trigger("resize", b$$338, this.ui()), !1;
  }, _mouseStop:function(b$$339) {
    this.resizing = !1;
    var c$$279 = this.options;
    var d$$215 = this;
    if (this._helper) {
      var e$$205 = this._proportionallyResizeElements;
      var f$$77 = e$$205.length && /textarea/i.test(e$$205[0].nodeName);
      var g$$116 = f$$77 && a$$434.ui.hasScroll(e$$205[0], "left") ? 0 : d$$215.sizeDiff.height;
      var h$$96 = f$$77 ? 0 : d$$215.sizeDiff.width;
      var i$$155 = {width:d$$215.helper.width() - h$$96, height:d$$215.helper.height() - g$$116};
      var j$$69 = parseInt(d$$215.element.css("left"), 10) + (d$$215.position.left - d$$215.originalPosition.left) || null;
      var k$$46 = parseInt(d$$215.element.css("top"), 10) + (d$$215.position.top - d$$215.originalPosition.top) || null;
      c$$279.animate || this.element.css(a$$434.extend(i$$155, {top:k$$46, left:j$$69})), d$$215.helper.height(d$$215.size.height), d$$215.helper.width(d$$215.size.width), this._helper && !c$$279.animate && this._proportionallyResize();
    }
    return a$$434("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", b$$339), this._helper && this.helper.remove(), !1;
  }, _updateVirtualBoundaries:function(a$$436) {
    var b$$340 = this.options;
    var c$$280;
    var e$$206;
    var f$$78;
    var g$$117;
    var h$$97;
    h$$97 = {minWidth:d$$209(b$$340.minWidth) ? b$$340.minWidth : 0, maxWidth:d$$209(b$$340.maxWidth) ? b$$340.maxWidth : Infinity, minHeight:d$$209(b$$340.minHeight) ? b$$340.minHeight : 0, maxHeight:d$$209(b$$340.maxHeight) ? b$$340.maxHeight : Infinity};
    if (this._aspectRatio || a$$436) {
      c$$280 = h$$97.minHeight * this.aspectRatio, f$$78 = h$$97.minWidth / this.aspectRatio, e$$206 = h$$97.maxHeight * this.aspectRatio, g$$117 = h$$97.maxWidth / this.aspectRatio, c$$280 > h$$97.minWidth && (h$$97.minWidth = c$$280), f$$78 > h$$97.minHeight && (h$$97.minHeight = f$$78), e$$206 < h$$97.maxWidth && (h$$97.maxWidth = e$$206), g$$117 < h$$97.maxHeight && (h$$97.maxHeight = g$$117);
    }
    this._vBoundaries = h$$97;
  }, _updateCache:function(a$$437) {
    var b$$341 = this.options;
    this.offset = this.helper.offset(), d$$209(a$$437.left) && (this.position.left = a$$437.left), d$$209(a$$437.top) && (this.position.top = a$$437.top), d$$209(a$$437.height) && (this.size.height = a$$437.height), d$$209(a$$437.width) && (this.size.width = a$$437.width);
  }, _updateRatio:function(a$$438, b$$342) {
    var c$$281 = this.options;
    var e$$207 = this.position;
    var f$$79 = this.size;
    var g$$118 = this.axis;
    return d$$209(a$$438.height) ? a$$438.width = a$$438.height * this.aspectRatio : d$$209(a$$438.width) && (a$$438.height = a$$438.width / this.aspectRatio), g$$118 == "sw" && (a$$438.left = e$$207.left + (f$$79.width - a$$438.width), a$$438.top = null), g$$118 == "nw" && (a$$438.top = e$$207.top + (f$$79.height - a$$438.height), a$$438.left = e$$207.left + (f$$79.width - a$$438.width)), a$$438;
  }, _respectSize:function(a$$439, b$$343) {
    var c$$282 = this.helper;
    var e$$208 = this._vBoundaries;
    var f$$80 = this._aspectRatio || b$$343.shiftKey;
    var g$$119 = this.axis;
    var h$$98 = d$$209(a$$439.width) && e$$208.maxWidth && e$$208.maxWidth < a$$439.width;
    var i$$156 = d$$209(a$$439.height) && e$$208.maxHeight && e$$208.maxHeight < a$$439.height;
    var j$$70 = d$$209(a$$439.width) && e$$208.minWidth && e$$208.minWidth > a$$439.width;
    var k$$47 = d$$209(a$$439.height) && e$$208.minHeight && e$$208.minHeight > a$$439.height;
    j$$70 && (a$$439.width = e$$208.minWidth), k$$47 && (a$$439.height = e$$208.minHeight), h$$98 && (a$$439.width = e$$208.maxWidth), i$$156 && (a$$439.height = e$$208.maxHeight);
    var l$$57 = this.originalPosition.left + this.originalSize.width;
    var m$$31 = this.position.top + this.size.height;
    var n$$82 = /sw|nw|w/.test(g$$119);
    var o$$18 = /nw|ne|n/.test(g$$119);
    j$$70 && n$$82 && (a$$439.left = l$$57 - e$$208.minWidth), h$$98 && n$$82 && (a$$439.left = l$$57 - e$$208.maxWidth), k$$47 && o$$18 && (a$$439.top = m$$31 - e$$208.minHeight), i$$156 && o$$18 && (a$$439.top = m$$31 - e$$208.maxHeight);
    var p$$39 = !a$$439.width && !a$$439.height;
    return p$$39 && !a$$439.left && a$$439.top ? a$$439.top = null : p$$39 && !a$$439.top && a$$439.left && (a$$439.left = null), a$$439;
  }, _proportionallyResize:function() {
    var b$$344 = this.options;
    if (!this._proportionallyResizeElements.length) {
      return;
    }
    var c$$283 = this.helper || this.element;
    var d$$216 = 0;
    for (;d$$216 < this._proportionallyResizeElements.length;d$$216++) {
      var e$$209 = this._proportionallyResizeElements[d$$216];
      if (!this.borderDif) {
        var f$$81 = [e$$209.css("borderTopWidth"), e$$209.css("borderRightWidth"), e$$209.css("borderBottomWidth"), e$$209.css("borderLeftWidth")];
        var g$$120 = [e$$209.css("paddingTop"), e$$209.css("paddingRight"), e$$209.css("paddingBottom"), e$$209.css("paddingLeft")];
        this.borderDif = a$$434.map(f$$81, function(a$$440, b$$345) {
          var c$$284 = parseInt(a$$440, 10) || 0;
          var d$$217 = parseInt(g$$120[b$$345], 10) || 0;
          return c$$284 + d$$217;
        });
      }
      if (!a$$434.browser.msie || !a$$434(c$$283).is(":hidden") && !a$$434(c$$283).parents(":hidden").length) {
        e$$209.css({height:c$$283.height() - this.borderDif[0] - this.borderDif[2] || 0, width:c$$283.width() - this.borderDif[1] - this.borderDif[3] || 0});
      } else {
      }
    }
  }, _renderProxy:function() {
    var b$$346 = this.element;
    var c$$285 = this.options;
    this.elementOffset = b$$346.offset();
    if (this._helper) {
      this.helper = this.helper || a$$434('<div style="overflow:hidden;"></div>');
      var d$$218 = a$$434.browser.msie && a$$434.browser.version < 7;
      var e$$210 = d$$218 ? 1 : 0;
      var f$$82 = d$$218 ? 2 : -1;
      this.helper.addClass(this._helper).css({width:this.element.outerWidth() + f$$82, height:this.element.outerHeight() + f$$82, position:"absolute", left:this.elementOffset.left - e$$210 + "px", top:this.elementOffset.top - e$$210 + "px", zIndex:++c$$285.zIndex}), this.helper.appendTo("body").disableSelection();
    } else {
      this.helper = this.element;
    }
  }, _change:{e:function(a$$441, b$$347, c$$286) {
    return {width:this.originalSize.width + b$$347};
  }, w:function(a$$442, b$$348, c$$287) {
    var d$$219 = this.options;
    var e$$211 = this.originalSize;
    var f$$83 = this.originalPosition;
    return {left:f$$83.left + b$$348, width:e$$211.width - b$$348};
  }, n:function(a$$443, b$$349, c$$288) {
    var d$$220 = this.options;
    var e$$212 = this.originalSize;
    var f$$84 = this.originalPosition;
    return {top:f$$84.top + c$$288, height:e$$212.height - c$$288};
  }, s:function(a$$444, b$$350, c$$289) {
    return {height:this.originalSize.height + c$$289};
  }, se:function(b$$351, c$$290, d$$221) {
    return a$$434.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b$$351, c$$290, d$$221]));
  }, sw:function(b$$352, c$$291, d$$222) {
    return a$$434.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b$$352, c$$291, d$$222]));
  }, ne:function(b$$353, c$$292, d$$223) {
    return a$$434.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b$$353, c$$292, d$$223]));
  }, nw:function(b$$354, c$$293, d$$224) {
    return a$$434.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b$$354, c$$293, d$$224]));
  }}, _propagate:function(b$$355, c$$294) {
    a$$434.ui.plugin.call(this, b$$355, [c$$294, this.ui()]), b$$355 != "resize" && this._trigger(b$$355, c$$294, this.ui());
  }, plugins:{}, ui:function() {
    return {originalElement:this.originalElement, element:this.element, helper:this.helper, position:this.position, size:this.size, originalSize:this.originalSize, originalPosition:this.originalPosition};
  }}), a$$434.extend(a$$434.ui.resizable, {version:"1.8.24"}), a$$434.ui.plugin.add("resizable", "alsoResize", {start:function(b$$356, c$$295) {
    function f$$85(b$$357) {
      a$$434(b$$357).each(function() {
        var b$$358 = a$$434(this);
        b$$358.data("resizable-alsoresize", {width:parseInt(b$$358.width(), 10), height:parseInt(b$$358.height(), 10), left:parseInt(b$$358.css("left"), 10), top:parseInt(b$$358.css("top"), 10)});
      });
    }
    var d$$225 = a$$434(this).data("resizable");
    var e$$213 = d$$225.options;
    typeof e$$213.alsoResize == "object" && !e$$213.alsoResize.parentNode ? e$$213.alsoResize.length ? (e$$213.alsoResize = e$$213.alsoResize[0], f$$85(e$$213.alsoResize)) : a$$434.each(e$$213.alsoResize, function(a$$445) {
      f$$85(a$$445);
    }) : f$$85(e$$213.alsoResize);
  }, resize:function(b$$359, c$$296) {
    function i$$157(b$$360, d$$227) {
      a$$434(b$$360).each(function() {
        var b$$361 = a$$434(this);
        var e$$215 = a$$434(this).data("resizable-alsoresize");
        var f$$87 = {};
        var g$$122 = d$$227 && d$$227.length ? d$$227 : b$$361.parents(c$$296.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
        a$$434.each(g$$122, function(a$$446, b$$362) {
          var c$$297 = (e$$215[b$$362] || 0) + (h$$99[b$$362] || 0);
          c$$297 && c$$297 >= 0 && (f$$87[b$$362] = c$$297 || null);
        }), b$$361.css(f$$87);
      });
    }
    var d$$226 = a$$434(this).data("resizable");
    var e$$214 = d$$226.options;
    var f$$86 = d$$226.originalSize;
    var g$$121 = d$$226.originalPosition;
    var h$$99 = {height:d$$226.size.height - f$$86.height || 0, width:d$$226.size.width - f$$86.width || 0, top:d$$226.position.top - g$$121.top || 0, left:d$$226.position.left - g$$121.left || 0};
    typeof e$$214.alsoResize == "object" && !e$$214.alsoResize.nodeType ? a$$434.each(e$$214.alsoResize, function(a$$447, b$$363) {
      i$$157(a$$447, b$$363);
    }) : i$$157(e$$214.alsoResize);
  }, stop:function(b$$364, c$$298) {
    a$$434(this).removeData("resizable-alsoresize");
  }}), a$$434.ui.plugin.add("resizable", "animate", {stop:function(b$$365, c$$299) {
    var d$$228 = a$$434(this).data("resizable");
    var e$$216 = d$$228.options;
    var f$$88 = d$$228._proportionallyResizeElements;
    var g$$123 = f$$88.length && /textarea/i.test(f$$88[0].nodeName);
    var h$$100 = g$$123 && a$$434.ui.hasScroll(f$$88[0], "left") ? 0 : d$$228.sizeDiff.height;
    var i$$158 = g$$123 ? 0 : d$$228.sizeDiff.width;
    var j$$71 = {width:d$$228.size.width - i$$158, height:d$$228.size.height - h$$100};
    var k$$48 = parseInt(d$$228.element.css("left"), 10) + (d$$228.position.left - d$$228.originalPosition.left) || null;
    var l$$58 = parseInt(d$$228.element.css("top"), 10) + (d$$228.position.top - d$$228.originalPosition.top) || null;
    d$$228.element.animate(a$$434.extend(j$$71, l$$58 && k$$48 ? {top:l$$58, left:k$$48} : {}), {duration:e$$216.animateDuration, easing:e$$216.animateEasing, step:function() {
      var c$$300 = {width:parseInt(d$$228.element.css("width"), 10), height:parseInt(d$$228.element.css("height"), 10), top:parseInt(d$$228.element.css("top"), 10), left:parseInt(d$$228.element.css("left"), 10)};
      f$$88 && f$$88.length && a$$434(f$$88[0]).css({width:c$$300.width, height:c$$300.height}), d$$228._updateCache(c$$300), d$$228._propagate("resize", b$$365);
    }});
  }}), a$$434.ui.plugin.add("resizable", "containment", {start:function(b$$366, d$$229) {
    var e$$217 = a$$434(this).data("resizable");
    var f$$89 = e$$217.options;
    var g$$124 = e$$217.element;
    var h$$101 = f$$89.containment;
    var i$$159 = h$$101 instanceof a$$434 ? h$$101.get(0) : /parent/.test(h$$101) ? g$$124.parent().get(0) : h$$101;
    if (!i$$159) {
      return;
    }
    e$$217.containerElement = a$$434(i$$159);
    if (/document/.test(h$$101) || h$$101 == document) {
      e$$217.containerOffset = {left:0, top:0}, e$$217.containerPosition = {left:0, top:0}, e$$217.parentData = {element:a$$434(document), left:0, top:0, width:a$$434(document).width(), height:a$$434(document).height() || document.body.parentNode.scrollHeight};
    } else {
      var j$$72 = a$$434(i$$159);
      var k$$49 = [];
      a$$434(["Top", "Right", "Left", "Bottom"]).each(function(a$$448, b$$367) {
        k$$49[a$$448] = c$$273(j$$72.css("padding" + b$$367));
      }), e$$217.containerOffset = j$$72.offset(), e$$217.containerPosition = j$$72.position(), e$$217.containerSize = {height:j$$72.innerHeight() - k$$49[3], width:j$$72.innerWidth() - k$$49[1]};
      var l$$59 = e$$217.containerOffset;
      var m$$32 = e$$217.containerSize.height;
      var n$$83 = e$$217.containerSize.width;
      var o$$19 = a$$434.ui.hasScroll(i$$159, "left") ? i$$159.scrollWidth : n$$83;
      var p$$40 = a$$434.ui.hasScroll(i$$159) ? i$$159.scrollHeight : m$$32;
      e$$217.parentData = {element:i$$159, left:l$$59.left, top:l$$59.top, width:o$$19, height:p$$40};
    }
  }, resize:function(b$$368, c$$301) {
    var d$$230 = a$$434(this).data("resizable");
    var e$$218 = d$$230.options;
    var f$$90 = d$$230.containerSize;
    var g$$125 = d$$230.containerOffset;
    var h$$102 = d$$230.size;
    var i$$160 = d$$230.position;
    var j$$73 = d$$230._aspectRatio || b$$368.shiftKey;
    var k$$50 = {top:0, left:0};
    var l$$60 = d$$230.containerElement;
    l$$60[0] != document && /static/.test(l$$60.css("position")) && (k$$50 = g$$125), i$$160.left < (d$$230._helper ? g$$125.left : 0) && (d$$230.size.width = d$$230.size.width + (d$$230._helper ? d$$230.position.left - g$$125.left : d$$230.position.left - k$$50.left), j$$73 && (d$$230.size.height = d$$230.size.width / d$$230.aspectRatio), d$$230.position.left = e$$218.helper ? g$$125.left : 0), i$$160.top < (d$$230._helper ? g$$125.top : 0) && (d$$230.size.height = d$$230.size.height + (d$$230._helper ? 
    d$$230.position.top - g$$125.top : d$$230.position.top), j$$73 && (d$$230.size.width = d$$230.size.height * d$$230.aspectRatio), d$$230.position.top = d$$230._helper ? g$$125.top : 0), d$$230.offset.left = d$$230.parentData.left + d$$230.position.left, d$$230.offset.top = d$$230.parentData.top + d$$230.position.top;
    var m$$33 = Math.abs((d$$230._helper ? d$$230.offset.left - k$$50.left : d$$230.offset.left - k$$50.left) + d$$230.sizeDiff.width);
    var n$$84 = Math.abs((d$$230._helper ? d$$230.offset.top - k$$50.top : d$$230.offset.top - g$$125.top) + d$$230.sizeDiff.height);
    var o$$20 = d$$230.containerElement.get(0) == d$$230.element.parent().get(0);
    var p$$41 = /relative|absolute/.test(d$$230.containerElement.css("position"));
    o$$20 && p$$41 && (m$$33 -= d$$230.parentData.left), m$$33 + d$$230.size.width >= d$$230.parentData.width && (d$$230.size.width = d$$230.parentData.width - m$$33, j$$73 && (d$$230.size.height = d$$230.size.width / d$$230.aspectRatio)), n$$84 + d$$230.size.height >= d$$230.parentData.height && (d$$230.size.height = d$$230.parentData.height - n$$84, j$$73 && (d$$230.size.width = d$$230.size.height * d$$230.aspectRatio));
  }, stop:function(b$$369, c$$302) {
    var d$$231 = a$$434(this).data("resizable");
    var e$$219 = d$$231.options;
    var f$$91 = d$$231.position;
    var g$$126 = d$$231.containerOffset;
    var h$$103 = d$$231.containerPosition;
    var i$$161 = d$$231.containerElement;
    var j$$74 = a$$434(d$$231.helper);
    var k$$51 = j$$74.offset();
    var l$$61 = j$$74.outerWidth() - d$$231.sizeDiff.width;
    var m$$34 = j$$74.outerHeight() - d$$231.sizeDiff.height;
    d$$231._helper && !e$$219.animate && /relative/.test(i$$161.css("position")) && a$$434(this).css({left:k$$51.left - h$$103.left - g$$126.left, width:l$$61, height:m$$34}), d$$231._helper && !e$$219.animate && /static/.test(i$$161.css("position")) && a$$434(this).css({left:k$$51.left - h$$103.left - g$$126.left, width:l$$61, height:m$$34});
  }}), a$$434.ui.plugin.add("resizable", "ghost", {start:function(b$$370, c$$303) {
    var d$$232 = a$$434(this).data("resizable");
    var e$$220 = d$$232.options;
    var f$$92 = d$$232.size;
    d$$232.ghost = d$$232.originalElement.clone(), d$$232.ghost.css({opacity:.25, display:"block", position:"relative", height:f$$92.height, width:f$$92.width, margin:0, left:0, top:0}).addClass("ui-resizable-ghost").addClass(typeof e$$220.ghost == "string" ? e$$220.ghost : ""), d$$232.ghost.appendTo(d$$232.helper);
  }, resize:function(b$$371, c$$304) {
    var d$$233 = a$$434(this).data("resizable");
    var e$$221 = d$$233.options;
    d$$233.ghost && d$$233.ghost.css({position:"relative", height:d$$233.size.height, width:d$$233.size.width});
  }, stop:function(b$$372, c$$305) {
    var d$$234 = a$$434(this).data("resizable");
    var e$$222 = d$$234.options;
    d$$234.ghost && d$$234.helper && d$$234.helper.get(0).removeChild(d$$234.ghost.get(0));
  }}), a$$434.ui.plugin.add("resizable", "grid", {resize:function(b$$373, c$$306) {
    var d$$235 = a$$434(this).data("resizable");
    var e$$223 = d$$235.options;
    var f$$93 = d$$235.size;
    var g$$127 = d$$235.originalSize;
    var h$$104 = d$$235.originalPosition;
    var i$$162 = d$$235.axis;
    var j$$75 = e$$223._aspectRatio || b$$373.shiftKey;
    e$$223.grid = typeof e$$223.grid == "number" ? [e$$223.grid, e$$223.grid] : e$$223.grid;
    var k$$52 = Math.round((f$$93.width - g$$127.width) / (e$$223.grid[0] || 1)) * (e$$223.grid[0] || 1);
    var l$$62 = Math.round((f$$93.height - g$$127.height) / (e$$223.grid[1] || 1)) * (e$$223.grid[1] || 1);
    /^(se|s|e)$/.test(i$$162) ? (d$$235.size.width = g$$127.width + k$$52, d$$235.size.height = g$$127.height + l$$62) : /^(ne)$/.test(i$$162) ? (d$$235.size.width = g$$127.width + k$$52, d$$235.size.height = g$$127.height + l$$62, d$$235.position.top = h$$104.top - l$$62) : /^(sw)$/.test(i$$162) ? (d$$235.size.width = g$$127.width + k$$52, d$$235.size.height = g$$127.height + l$$62, d$$235.position.left = h$$104.left - k$$52) : (d$$235.size.width = g$$127.width + k$$52, d$$235.size.height = g$$127.height + 
    l$$62, d$$235.position.top = h$$104.top - l$$62, d$$235.position.left = h$$104.left - k$$52);
  }});
}(jQuery), function(a$$451, b$$374) {
  a$$451.widget("ui.selectable", a$$451.ui.mouse, {options:{appendTo:"body", autoRefresh:!0, distance:0, filter:"*", tolerance:"touch"}, _create:function() {
    var b$$375 = this;
    this.element.addClass("ui-selectable"), this.dragged = !1;
    var c$$307;
    this.refresh = function() {
      c$$307 = a$$451(b$$375.options.filter, b$$375.element[0]), c$$307.addClass("ui-selectee"), c$$307.each(function() {
        var b$$376 = a$$451(this);
        var c$$308 = b$$376.offset();
        a$$451.data(this, "selectable-item", {element:this, $element:b$$376, left:c$$308.left, top:c$$308.top, right:c$$308.left + b$$376.outerWidth(), bottom:c$$308.top + b$$376.outerHeight(), startselected:!1, selected:b$$376.hasClass("ui-selected"), selecting:b$$376.hasClass("ui-selecting"), unselecting:b$$376.hasClass("ui-unselecting")});
      });
    }, this.refresh(), this.selectees = c$$307.addClass("ui-selectee"), this._mouseInit(), this.helper = a$$451("<div class='ui-selectable-helper'></div>");
  }, destroy:function() {
    return this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"), this._mouseDestroy(), this;
  }, _mouseStart:function(b$$377) {
    var c$$309 = this;
    this.opos = [b$$377.pageX, b$$377.pageY];
    if (this.options.disabled) {
      return;
    }
    var d$$236 = this.options;
    this.selectees = a$$451(d$$236.filter, this.element[0]), this._trigger("start", b$$377), a$$451(d$$236.appendTo).append(this.helper), this.helper.css({left:b$$377.clientX, top:b$$377.clientY, width:0, height:0}), d$$236.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
      var d$$237 = a$$451.data(this, "selectable-item");
      d$$237.startselected = !0, !b$$377.metaKey && !b$$377.ctrlKey && (d$$237.$element.removeClass("ui-selected"), d$$237.selected = !1, d$$237.$element.addClass("ui-unselecting"), d$$237.unselecting = !0, c$$309._trigger("unselecting", b$$377, {unselecting:d$$237.element}));
    }), a$$451(b$$377.target).parents().andSelf().each(function() {
      var d$$238 = a$$451.data(this, "selectable-item");
      if (d$$238) {
        var e$$224 = !b$$377.metaKey && !b$$377.ctrlKey || !d$$238.$element.hasClass("ui-selected");
        return d$$238.$element.removeClass(e$$224 ? "ui-unselecting" : "ui-selected").addClass(e$$224 ? "ui-selecting" : "ui-unselecting"), d$$238.unselecting = !e$$224, d$$238.selecting = e$$224, d$$238.selected = e$$224, e$$224 ? c$$309._trigger("selecting", b$$377, {selecting:d$$238.element}) : c$$309._trigger("unselecting", b$$377, {unselecting:d$$238.element}), !1;
      }
    });
  }, _mouseDrag:function(b$$378) {
    var c$$310 = this;
    this.dragged = !0;
    if (this.options.disabled) {
      return;
    }
    var d$$239 = this.options;
    var e$$225 = this.opos[0];
    var f$$94 = this.opos[1];
    var g$$128 = b$$378.pageX;
    var h$$105 = b$$378.pageY;
    if (e$$225 > g$$128) {
      var i$$163 = g$$128;
      g$$128 = e$$225, e$$225 = i$$163;
    }
    if (f$$94 > h$$105) {
      i$$163 = h$$105;
      h$$105 = f$$94, f$$94 = i$$163;
    }
    return this.helper.css({left:e$$225, top:f$$94, width:g$$128 - e$$225, height:h$$105 - f$$94}), this.selectees.each(function() {
      var i$$164 = a$$451.data(this, "selectable-item");
      if (!i$$164 || i$$164.element == c$$310.element[0]) {
        return;
      }
      var j$$76 = !1;
      d$$239.tolerance == "touch" ? j$$76 = !(i$$164.left > g$$128 || i$$164.right < e$$225 || i$$164.top > h$$105 || i$$164.bottom < f$$94) : d$$239.tolerance == "fit" && (j$$76 = i$$164.left > e$$225 && i$$164.right < g$$128 && i$$164.top > f$$94 && i$$164.bottom < h$$105), j$$76 ? (i$$164.selected && (i$$164.$element.removeClass("ui-selected"), i$$164.selected = !1), i$$164.unselecting && (i$$164.$element.removeClass("ui-unselecting"), i$$164.unselecting = !1), i$$164.selecting || (i$$164.$element.addClass("ui-selecting"), 
      i$$164.selecting = !0, c$$310._trigger("selecting", b$$378, {selecting:i$$164.element}))) : (i$$164.selecting && ((b$$378.metaKey || b$$378.ctrlKey) && i$$164.startselected ? (i$$164.$element.removeClass("ui-selecting"), i$$164.selecting = !1, i$$164.$element.addClass("ui-selected"), i$$164.selected = !0) : (i$$164.$element.removeClass("ui-selecting"), i$$164.selecting = !1, i$$164.startselected && (i$$164.$element.addClass("ui-unselecting"), i$$164.unselecting = !0), c$$310._trigger("unselecting", 
      b$$378, {unselecting:i$$164.element}))), i$$164.selected && !b$$378.metaKey && !b$$378.ctrlKey && !i$$164.startselected && (i$$164.$element.removeClass("ui-selected"), i$$164.selected = !1, i$$164.$element.addClass("ui-unselecting"), i$$164.unselecting = !0, c$$310._trigger("unselecting", b$$378, {unselecting:i$$164.element})));
    }), !1;
  }, _mouseStop:function(b$$379) {
    var c$$311 = this;
    this.dragged = !1;
    var d$$240 = this.options;
    return a$$451(".ui-unselecting", this.element[0]).each(function() {
      var d$$241 = a$$451.data(this, "selectable-item");
      d$$241.$element.removeClass("ui-unselecting"), d$$241.unselecting = !1, d$$241.startselected = !1, c$$311._trigger("unselected", b$$379, {unselected:d$$241.element});
    }), a$$451(".ui-selecting", this.element[0]).each(function() {
      var d$$242 = a$$451.data(this, "selectable-item");
      d$$242.$element.removeClass("ui-selecting").addClass("ui-selected"), d$$242.selecting = !1, d$$242.selected = !0, d$$242.startselected = !0, c$$311._trigger("selected", b$$379, {selected:d$$242.element});
    }), this._trigger("stop", b$$379), this.helper.remove(), !1;
  }}), a$$451.extend(a$$451.ui.selectable, {version:"1.8.24"});
}(jQuery), function(a$$452, b$$380) {
  a$$452.widget("ui.sortable", a$$452.ui.mouse, {widgetEventPrefix:"sort", ready:!1, options:{appendTo:"parent", axis:!1, connectWith:!1, containment:!1, cursor:"auto", cursorAt:!1, dropOnEmpty:!0, forcePlaceholderSize:!1, forceHelperSize:!1, grid:!1, handle:!1, helper:"original", items:"> *", opacity:!1, placeholder:!1, revert:!1, scroll:!0, scrollSensitivity:20, scrollSpeed:20, scope:"default", tolerance:"intersect", zIndex:1E3}, _create:function() {
    var a$$453 = this.options;
    this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? a$$453.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0;
  }, destroy:function() {
    a$$452.Widget.prototype.destroy.call(this), this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
    var b$$381 = this.items.length - 1;
    for (;b$$381 >= 0;b$$381--) {
      this.items[b$$381].item.removeData(this.widgetName + "-item");
    }
    return this;
  }, _setOption:function(b$$382, c$$312) {
    b$$382 === "disabled" ? (this.options[b$$382] = c$$312, this.widget()[c$$312 ? "addClass" : "removeClass"]("ui-sortable-disabled")) : a$$452.Widget.prototype._setOption.apply(this, arguments);
  }, _mouseCapture:function(b$$383, c$$313) {
    var d$$243 = this;
    if (this.reverting) {
      return !1;
    }
    if (this.options.disabled || this.options.type == "static") {
      return !1;
    }
    this._refreshItems(b$$383);
    var e$$226 = null;
    var f$$95 = this;
    var g$$129 = a$$452(b$$383.target).parents().each(function() {
      if (a$$452.data(this, d$$243.widgetName + "-item") == f$$95) {
        return e$$226 = a$$452(this), !1;
      }
    });
    a$$452.data(b$$383.target, d$$243.widgetName + "-item") == f$$95 && (e$$226 = a$$452(b$$383.target));
    if (!e$$226) {
      return !1;
    }
    if (this.options.handle && !c$$313) {
      var h$$106 = !1;
      a$$452(this.options.handle, e$$226).find("*").andSelf().each(function() {
        this == b$$383.target && (h$$106 = !0);
      });
      if (!h$$106) {
        return !1;
      }
    }
    return this.currentItem = e$$226, this._removeCurrentsFromItems(), !0;
  }, _mouseStart:function(b$$384, c$$314, d$$244) {
    var e$$227 = this.options;
    var f$$96 = this;
    this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b$$384), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {top:this.offset.top - this.margins.top, left:this.offset.left - this.margins.left}, a$$452.extend(this.offset, {click:{left:b$$384.pageX - this.offset.left, top:b$$384.pageY - this.offset.top}, parent:this._getParentOffset(), relative:this._getRelativeOffset()}), 
    this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(b$$384), this.originalPageX = b$$384.pageX, this.originalPageY = b$$384.pageY, e$$227.cursorAt && this._adjustOffsetFromHelper(e$$227.cursorAt), this.domPosition = {prev:this.currentItem.prev()[0], parent:this.currentItem.parent()[0]}, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), e$$227.containment && this._setContainment(), 
    e$$227.cursor && (a$$452("body").css("cursor") && (this._storedCursor = a$$452("body").css("cursor")), a$$452("body").css("cursor", e$$227.cursor)), e$$227.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", e$$227.opacity)), e$$227.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", e$$227.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != 
    "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b$$384, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
    if (!d$$244) {
      var g$$130 = this.containers.length - 1;
      for (;g$$130 >= 0;g$$130--) {
        this.containers[g$$130]._trigger("activate", b$$384, f$$96._uiHash(this));
      }
    }
    return a$$452.ui.ddmanager && (a$$452.ui.ddmanager.current = this), a$$452.ui.ddmanager && !e$$227.dropBehaviour && a$$452.ui.ddmanager.prepareOffsets(this, b$$384), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b$$384), !0;
  }, _mouseDrag:function(b$$385) {
    this.position = this._generatePosition(b$$385), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
    if (this.options.scroll) {
      var c$$315 = this.options;
      var d$$245 = !1;
      this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b$$385.pageY < c$$315.scrollSensitivity ? this.scrollParent[0].scrollTop = d$$245 = this.scrollParent[0].scrollTop + c$$315.scrollSpeed : b$$385.pageY - this.overflowOffset.top < c$$315.scrollSensitivity && (this.scrollParent[0].scrollTop = d$$245 = this.scrollParent[0].scrollTop - c$$315.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - 
      b$$385.pageX < c$$315.scrollSensitivity ? this.scrollParent[0].scrollLeft = d$$245 = this.scrollParent[0].scrollLeft + c$$315.scrollSpeed : b$$385.pageX - this.overflowOffset.left < c$$315.scrollSensitivity && (this.scrollParent[0].scrollLeft = d$$245 = this.scrollParent[0].scrollLeft - c$$315.scrollSpeed)) : (b$$385.pageY - a$$452(document).scrollTop() < c$$315.scrollSensitivity ? d$$245 = a$$452(document).scrollTop(a$$452(document).scrollTop() - c$$315.scrollSpeed) : a$$452(window).height() - 
      (b$$385.pageY - a$$452(document).scrollTop()) < c$$315.scrollSensitivity && (d$$245 = a$$452(document).scrollTop(a$$452(document).scrollTop() + c$$315.scrollSpeed)), b$$385.pageX - a$$452(document).scrollLeft() < c$$315.scrollSensitivity ? d$$245 = a$$452(document).scrollLeft(a$$452(document).scrollLeft() - c$$315.scrollSpeed) : a$$452(window).width() - (b$$385.pageX - a$$452(document).scrollLeft()) < c$$315.scrollSensitivity && (d$$245 = a$$452(document).scrollLeft(a$$452(document).scrollLeft() + 
      c$$315.scrollSpeed))), d$$245 !== !1 && a$$452.ui.ddmanager && !c$$315.dropBehaviour && a$$452.ui.ddmanager.prepareOffsets(this, b$$385);
    }
    this.positionAbs = this._convertPositionTo("absolute");
    if (!this.options.axis || this.options.axis != "y") {
      this.helper[0].style.left = this.position.left + "px";
    }
    if (!this.options.axis || this.options.axis != "x") {
      this.helper[0].style.top = this.position.top + "px";
    }
    var e$$228 = this.items.length - 1;
    for (;e$$228 >= 0;e$$228--) {
      var f$$97 = this.items[e$$228];
      var g$$131 = f$$97.item[0];
      var h$$107 = this._intersectsWithPointer(f$$97);
      if (!h$$107) {
        continue;
      }
      if (f$$97.instance !== this.currentContainer) {
        continue;
      }
      if (g$$131 != this.currentItem[0] && this.placeholder[h$$107 == 1 ? "next" : "prev"]()[0] != g$$131 && !a$$452.ui.contains(this.placeholder[0], g$$131) && (this.options.type == "semi-dynamic" ? !a$$452.ui.contains(this.element[0], g$$131) : !0)) {
        this.direction = h$$107 == 1 ? "down" : "up";
        if (this.options.tolerance == "pointer" || this._intersectsWithSides(f$$97)) {
          this._rearrange(b$$385, f$$97);
        } else {
          break;
        }
        this._trigger("change", b$$385, this._uiHash());
        break;
      }
    }
    return this._contactContainers(b$$385), a$$452.ui.ddmanager && a$$452.ui.ddmanager.drag(this, b$$385), this._trigger("sort", b$$385, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1;
  }, _mouseStop:function(b$$386, c$$316) {
    if (!b$$386) {
      return;
    }
    a$$452.ui.ddmanager && !this.options.dropBehaviour && a$$452.ui.ddmanager.drop(this, b$$386);
    if (this.options.revert) {
      var d$$246 = this;
      var e$$229 = d$$246.placeholder.offset();
      d$$246.reverting = !0, a$$452(this.helper).animate({left:e$$229.left - this.offset.parent.left - d$$246.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft), top:e$$229.top - this.offset.parent.top - d$$246.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)}, parseInt(this.options.revert, 10) || 500, function() {
        d$$246._clear(b$$386);
      });
    } else {
      this._clear(b$$386, c$$316);
    }
    return !1;
  }, cancel:function() {
    var b$$387 = this;
    if (this.dragging) {
      this._mouseUp({target:null}), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
      var c$$317 = this.containers.length - 1;
      for (;c$$317 >= 0;c$$317--) {
        this.containers[c$$317]._trigger("deactivate", null, b$$387._uiHash(this)), this.containers[c$$317].containerCache.over && (this.containers[c$$317]._trigger("out", null, b$$387._uiHash(this)), this.containers[c$$317].containerCache.over = 0);
      }
    }
    return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), a$$452.extend(this, {helper:null, dragging:!1, reverting:!1, _noFinalSort:null}), this.domPosition.prev ? a$$452(this.domPosition.prev).after(this.currentItem) : a$$452(this.domPosition.parent).prepend(this.currentItem)), this;
  }, serialize:function(b$$388) {
    var c$$318 = this._getItemsAsjQuery(b$$388 && b$$388.connected);
    var d$$247 = [];
    return b$$388 = b$$388 || {}, a$$452(c$$318).each(function() {
      var c$$319 = (a$$452(b$$388.item || this).attr(b$$388.attribute || "id") || "").match(b$$388.expression || /(.+)[-=_](.+)/);
      c$$319 && d$$247.push((b$$388.key || c$$319[1] + "[]") + "=" + (b$$388.key && b$$388.expression ? c$$319[1] : c$$319[2]));
    }), !d$$247.length && b$$388.key && d$$247.push(b$$388.key + "="), d$$247.join("&");
  }, toArray:function(b$$389) {
    var c$$320 = this._getItemsAsjQuery(b$$389 && b$$389.connected);
    var d$$248 = [];
    return b$$389 = b$$389 || {}, c$$320.each(function() {
      d$$248.push(a$$452(b$$389.item || this).attr(b$$389.attribute || "id") || "");
    }), d$$248;
  }, _intersectsWith:function(a$$454) {
    var b$$390 = this.positionAbs.left;
    var c$$321 = b$$390 + this.helperProportions.width;
    var d$$249 = this.positionAbs.top;
    var e$$230 = d$$249 + this.helperProportions.height;
    var f$$98 = a$$454.left;
    var g$$132 = f$$98 + a$$454.width;
    var h$$108 = a$$454.top;
    var i$$165 = h$$108 + a$$454.height;
    var j$$77 = this.offset.click.top;
    var k$$53 = this.offset.click.left;
    var l$$63 = d$$249 + j$$77 > h$$108 && d$$249 + j$$77 < i$$165 && b$$390 + k$$53 > f$$98 && b$$390 + k$$53 < g$$132;
    return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > a$$454[this.floating ? "width" : "height"] ? l$$63 : f$$98 < b$$390 + this.helperProportions.width / 2 && c$$321 - this.helperProportions.width / 2 < g$$132 && h$$108 < d$$249 + this.helperProportions.height / 2 && e$$230 - this.helperProportions.height / 2 < i$$165;
  }, _intersectsWithPointer:function(b$$391) {
    var c$$322 = this.options.axis === "x" || a$$452.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, b$$391.top, b$$391.height);
    var d$$250 = this.options.axis === "y" || a$$452.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, b$$391.left, b$$391.width);
    var e$$231 = c$$322 && d$$250;
    var f$$99 = this._getDragVerticalDirection();
    var g$$133 = this._getDragHorizontalDirection();
    return e$$231 ? this.floating ? g$$133 && g$$133 == "right" || f$$99 == "down" ? 2 : 1 : f$$99 && (f$$99 == "down" ? 2 : 1) : !1;
  }, _intersectsWithSides:function(b$$392) {
    var c$$323 = a$$452.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, b$$392.top + b$$392.height / 2, b$$392.height);
    var d$$251 = a$$452.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, b$$392.left + b$$392.width / 2, b$$392.width);
    var e$$232 = this._getDragVerticalDirection();
    var f$$100 = this._getDragHorizontalDirection();
    return this.floating && f$$100 ? f$$100 == "right" && d$$251 || f$$100 == "left" && !d$$251 : e$$232 && (e$$232 == "down" && c$$323 || e$$232 == "up" && !c$$323);
  }, _getDragVerticalDirection:function() {
    var a$$455 = this.positionAbs.top - this.lastPositionAbs.top;
    return a$$455 != 0 && (a$$455 > 0 ? "down" : "up");
  }, _getDragHorizontalDirection:function() {
    var a$$456 = this.positionAbs.left - this.lastPositionAbs.left;
    return a$$456 != 0 && (a$$456 > 0 ? "right" : "left");
  }, refresh:function(a$$457) {
    return this._refreshItems(a$$457), this.refreshPositions(), this;
  }, _connectWith:function() {
    var a$$458 = this.options;
    return a$$458.connectWith.constructor == String ? [a$$458.connectWith] : a$$458.connectWith;
  }, _getItemsAsjQuery:function(b$$393) {
    var c$$324 = this;
    var d$$252 = [];
    var e$$233 = [];
    var f$$101 = this._connectWith();
    if (f$$101 && b$$393) {
      var g$$134 = f$$101.length - 1;
      for (;g$$134 >= 0;g$$134--) {
        var h$$109 = a$$452(f$$101[g$$134]);
        var i$$166 = h$$109.length - 1;
        for (;i$$166 >= 0;i$$166--) {
          var j$$78 = a$$452.data(h$$109[i$$166], this.widgetName);
          j$$78 && j$$78 != this && !j$$78.options.disabled && e$$233.push([a$$452.isFunction(j$$78.options.items) ? j$$78.options.items.call(j$$78.element) : a$$452(j$$78.options.items, j$$78.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), j$$78]);
        }
      }
    }
    e$$233.push([a$$452.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options:this.options, item:this.currentItem}) : a$$452(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
    g$$134 = e$$233.length - 1;
    for (;g$$134 >= 0;g$$134--) {
      e$$233[g$$134][0].each(function() {
        d$$252.push(this);
      });
    }
    return a$$452(d$$252);
  }, _removeCurrentsFromItems:function() {
    var a$$459 = this.currentItem.find(":data(" + this.widgetName + "-item)");
    var b$$394 = 0;
    for (;b$$394 < this.items.length;b$$394++) {
      var c$$325 = 0;
      for (;c$$325 < a$$459.length;c$$325++) {
        a$$459[c$$325] == this.items[b$$394].item[0] && this.items.splice(b$$394, 1);
      }
    }
  }, _refreshItems:function(b$$395) {
    this.items = [], this.containers = [this];
    var c$$326 = this.items;
    var d$$253 = this;
    var e$$234 = [[a$$452.isFunction(this.options.items) ? this.options.items.call(this.element[0], b$$395, {item:this.currentItem}) : a$$452(this.options.items, this.element), this]];
    var f$$102 = this._connectWith();
    if (f$$102 && this.ready) {
      var g$$135 = f$$102.length - 1;
      for (;g$$135 >= 0;g$$135--) {
        var h$$110 = a$$452(f$$102[g$$135]);
        var i$$167 = h$$110.length - 1;
        for (;i$$167 >= 0;i$$167--) {
          var j$$79 = a$$452.data(h$$110[i$$167], this.widgetName);
          j$$79 && j$$79 != this && !j$$79.options.disabled && (e$$234.push([a$$452.isFunction(j$$79.options.items) ? j$$79.options.items.call(j$$79.element[0], b$$395, {item:this.currentItem}) : a$$452(j$$79.options.items, j$$79.element), j$$79]), this.containers.push(j$$79));
        }
      }
    }
    g$$135 = e$$234.length - 1;
    for (;g$$135 >= 0;g$$135--) {
      var k$$54 = e$$234[g$$135][1];
      var l$$64 = e$$234[g$$135][0];
      i$$167 = 0;
      var m$$35 = l$$64.length;
      for (;i$$167 < m$$35;i$$167++) {
        var n$$85 = a$$452(l$$64[i$$167]);
        n$$85.data(this.widgetName + "-item", k$$54), c$$326.push({item:n$$85, instance:k$$54, width:0, height:0, left:0, top:0});
      }
    }
  }, refreshPositions:function(b$$396) {
    this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
    var c$$327 = this.items.length - 1;
    for (;c$$327 >= 0;c$$327--) {
      var d$$254 = this.items[c$$327];
      if (d$$254.instance != this.currentContainer && this.currentContainer && d$$254.item[0] != this.currentItem[0]) {
        continue;
      }
      var e$$235 = this.options.toleranceElement ? a$$452(this.options.toleranceElement, d$$254.item) : d$$254.item;
      b$$396 || (d$$254.width = e$$235.outerWidth(), d$$254.height = e$$235.outerHeight());
      var f$$103 = e$$235.offset();
      d$$254.left = f$$103.left, d$$254.top = f$$103.top;
    }
    if (this.options.custom && this.options.custom.refreshContainers) {
      this.options.custom.refreshContainers.call(this);
    } else {
      c$$327 = this.containers.length - 1;
      for (;c$$327 >= 0;c$$327--) {
        f$$103 = this.containers[c$$327].element.offset();
        this.containers[c$$327].containerCache.left = f$$103.left, this.containers[c$$327].containerCache.top = f$$103.top, this.containers[c$$327].containerCache.width = this.containers[c$$327].element.outerWidth(), this.containers[c$$327].containerCache.height = this.containers[c$$327].element.outerHeight();
      }
    }
    return this;
  }, _createPlaceholder:function(b$$397) {
    var c$$328 = b$$397 || this;
    var d$$255 = c$$328.options;
    if (!d$$255.placeholder || d$$255.placeholder.constructor == String) {
      var e$$236 = d$$255.placeholder;
      d$$255.placeholder = {element:function() {
        var b$$398 = a$$452(document.createElement(c$$328.currentItem[0].nodeName)).addClass(e$$236 || c$$328.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
        return e$$236 || (b$$398.style.visibility = "hidden"), b$$398;
      }, update:function(a$$460, b$$399) {
        if (e$$236 && !d$$255.forcePlaceholderSize) {
          return;
        }
        b$$399.height() || b$$399.height(c$$328.currentItem.innerHeight() - parseInt(c$$328.currentItem.css("paddingTop") || 0, 10) - parseInt(c$$328.currentItem.css("paddingBottom") || 0, 10)), b$$399.width() || b$$399.width(c$$328.currentItem.innerWidth() - parseInt(c$$328.currentItem.css("paddingLeft") || 0, 10) - parseInt(c$$328.currentItem.css("paddingRight") || 0, 10));
      }};
    }
    c$$328.placeholder = a$$452(d$$255.placeholder.element.call(c$$328.element, c$$328.currentItem)), c$$328.currentItem.after(c$$328.placeholder), d$$255.placeholder.update(c$$328, c$$328.placeholder);
  }, _contactContainers:function(b$$400) {
    var c$$329 = null;
    var d$$256 = null;
    var e$$237 = this.containers.length - 1;
    for (;e$$237 >= 0;e$$237--) {
      if (a$$452.ui.contains(this.currentItem[0], this.containers[e$$237].element[0])) {
        continue;
      }
      if (this._intersectsWith(this.containers[e$$237].containerCache)) {
        if (c$$329 && a$$452.ui.contains(this.containers[e$$237].element[0], c$$329.element[0])) {
          continue;
        }
        c$$329 = this.containers[e$$237], d$$256 = e$$237;
      } else {
        this.containers[e$$237].containerCache.over && (this.containers[e$$237]._trigger("out", b$$400, this._uiHash(this)), this.containers[e$$237].containerCache.over = 0);
      }
    }
    if (!c$$329) {
      return;
    }
    if (this.containers.length === 1) {
      this.containers[d$$256]._trigger("over", b$$400, this._uiHash(this)), this.containers[d$$256].containerCache.over = 1;
    } else {
      if (this.currentContainer != this.containers[d$$256]) {
        var f$$104 = 1E4;
        var g$$136 = null;
        var h$$111 = this.positionAbs[this.containers[d$$256].floating ? "left" : "top"];
        var i$$168 = this.items.length - 1;
        for (;i$$168 >= 0;i$$168--) {
          if (!a$$452.ui.contains(this.containers[d$$256].element[0], this.items[i$$168].item[0])) {
            continue;
          }
          var j$$80 = this.containers[d$$256].floating ? this.items[i$$168].item.offset().left : this.items[i$$168].item.offset().top;
          Math.abs(j$$80 - h$$111) < f$$104 && (f$$104 = Math.abs(j$$80 - h$$111), g$$136 = this.items[i$$168], this.direction = j$$80 - h$$111 > 0 ? "down" : "up");
        }
        if (!g$$136 && !this.options.dropOnEmpty) {
          return;
        }
        this.currentContainer = this.containers[d$$256], g$$136 ? this._rearrange(b$$400, g$$136, null, !0) : this._rearrange(b$$400, null, this.containers[d$$256].element, !0), this._trigger("change", b$$400, this._uiHash()), this.containers[d$$256]._trigger("change", b$$400, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d$$256]._trigger("over", b$$400, this._uiHash(this)), this.containers[d$$256].containerCache.over = 1;
      }
    }
  }, _createHelper:function(b$$401) {
    var c$$330 = this.options;
    var d$$257 = a$$452.isFunction(c$$330.helper) ? a$$452(c$$330.helper.apply(this.element[0], [b$$401, this.currentItem])) : c$$330.helper == "clone" ? this.currentItem.clone() : this.currentItem;
    return d$$257.parents("body").length || a$$452(c$$330.appendTo != "parent" ? c$$330.appendTo : this.currentItem[0].parentNode)[0].appendChild(d$$257[0]), d$$257[0] == this.currentItem[0] && (this._storedCSS = {width:this.currentItem[0].style.width, height:this.currentItem[0].style.height, position:this.currentItem.css("position"), top:this.currentItem.css("top"), left:this.currentItem.css("left")}), (d$$257[0].style.width == "" || c$$330.forceHelperSize) && d$$257.width(this.currentItem.width()), 
    (d$$257[0].style.height == "" || c$$330.forceHelperSize) && d$$257.height(this.currentItem.height()), d$$257;
  }, _adjustOffsetFromHelper:function(b$$402) {
    typeof b$$402 == "string" && (b$$402 = b$$402.split(" ")), a$$452.isArray(b$$402) && (b$$402 = {left:+b$$402[0], top:+b$$402[1] || 0}), "left" in b$$402 && (this.offset.click.left = b$$402.left + this.margins.left), "right" in b$$402 && (this.offset.click.left = this.helperProportions.width - b$$402.right + this.margins.left), "top" in b$$402 && (this.offset.click.top = b$$402.top + this.margins.top), "bottom" in b$$402 && (this.offset.click.top = this.helperProportions.height - b$$402.bottom + 
    this.margins.top);
  }, _getParentOffset:function() {
    this.offsetParent = this.helper.offsetParent();
    var b$$403 = this.offsetParent.offset();
    this.cssPosition == "absolute" && this.scrollParent[0] != document && a$$452.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (b$$403.left += this.scrollParent.scrollLeft(), b$$403.top += this.scrollParent.scrollTop());
    if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a$$452.browser.msie) {
      b$$403 = {top:0, left:0};
    }
    return {top:b$$403.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left:b$$403.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)};
  }, _getRelativeOffset:function() {
    if (this.cssPosition == "relative") {
      var a$$461 = this.currentItem.position();
      return {top:a$$461.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left:a$$461.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()};
    }
    return {top:0, left:0};
  }, _cacheMargins:function() {
    this.margins = {left:parseInt(this.currentItem.css("marginLeft"), 10) || 0, top:parseInt(this.currentItem.css("marginTop"), 10) || 0};
  }, _cacheHelperProportions:function() {
    this.helperProportions = {width:this.helper.outerWidth(), height:this.helper.outerHeight()};
  }, _setContainment:function() {
    var b$$404 = this.options;
    b$$404.containment == "parent" && (b$$404.containment = this.helper[0].parentNode);
    if (b$$404.containment == "document" || b$$404.containment == "window") {
      this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a$$452(b$$404.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (a$$452(b$$404.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
    }
    if (!/^(document|window|parent)$/.test(b$$404.containment)) {
      var c$$331 = a$$452(b$$404.containment)[0];
      var d$$258 = a$$452(b$$404.containment).offset();
      var e$$238 = a$$452(c$$331).css("overflow") != "hidden";
      this.containment = [d$$258.left + (parseInt(a$$452(c$$331).css("borderLeftWidth"), 10) || 0) + (parseInt(a$$452(c$$331).css("paddingLeft"), 10) || 0) - this.margins.left, d$$258.top + (parseInt(a$$452(c$$331).css("borderTopWidth"), 10) || 0) + (parseInt(a$$452(c$$331).css("paddingTop"), 10) || 0) - this.margins.top, d$$258.left + (e$$238 ? Math.max(c$$331.scrollWidth, c$$331.offsetWidth) : c$$331.offsetWidth) - (parseInt(a$$452(c$$331).css("borderLeftWidth"), 10) || 0) - (parseInt(a$$452(c$$331).css("paddingRight"), 
      10) || 0) - this.helperProportions.width - this.margins.left, d$$258.top + (e$$238 ? Math.max(c$$331.scrollHeight, c$$331.offsetHeight) : c$$331.offsetHeight) - (parseInt(a$$452(c$$331).css("borderTopWidth"), 10) || 0) - (parseInt(a$$452(c$$331).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top];
    }
  }, _convertPositionTo:function(b$$405, c$$332) {
    c$$332 || (c$$332 = this.position);
    var d$$259 = b$$405 == "absolute" ? 1 : -1;
    var e$$239 = this.options;
    var f$$105 = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a$$452.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent;
    var g$$137 = /(html|body)/i.test(f$$105[0].tagName);
    return {top:c$$332.top + this.offset.relative.top * d$$259 + this.offset.parent.top * d$$259 - (a$$452.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g$$137 ? 0 : f$$105.scrollTop()) * d$$259), left:c$$332.left + this.offset.relative.left * d$$259 + this.offset.parent.left * d$$259 - (a$$452.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g$$137 ? 0 : f$$105.scrollLeft()) * 
    d$$259)};
  }, _generatePosition:function(b$$406) {
    var c$$333 = this.options;
    var d$$260 = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a$$452.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent;
    var e$$240 = /(html|body)/i.test(d$$260[0].tagName);
    this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
    var f$$106 = b$$406.pageX;
    var g$$138 = b$$406.pageY;
    if (this.originalPosition) {
      this.containment && (b$$406.pageX - this.offset.click.left < this.containment[0] && (f$$106 = this.containment[0] + this.offset.click.left), b$$406.pageY - this.offset.click.top < this.containment[1] && (g$$138 = this.containment[1] + this.offset.click.top), b$$406.pageX - this.offset.click.left > this.containment[2] && (f$$106 = this.containment[2] + this.offset.click.left), b$$406.pageY - this.offset.click.top > this.containment[3] && (g$$138 = this.containment[3] + this.offset.click.top));
      if (c$$333.grid) {
        var h$$112 = this.originalPageY + Math.round((g$$138 - this.originalPageY) / c$$333.grid[1]) * c$$333.grid[1];
        g$$138 = this.containment ? h$$112 - this.offset.click.top < this.containment[1] || h$$112 - this.offset.click.top > this.containment[3] ? h$$112 - this.offset.click.top < this.containment[1] ? h$$112 + c$$333.grid[1] : h$$112 - c$$333.grid[1] : h$$112 : h$$112;
        var i$$169 = this.originalPageX + Math.round((f$$106 - this.originalPageX) / c$$333.grid[0]) * c$$333.grid[0];
        f$$106 = this.containment ? i$$169 - this.offset.click.left < this.containment[0] || i$$169 - this.offset.click.left > this.containment[2] ? i$$169 - this.offset.click.left < this.containment[0] ? i$$169 + c$$333.grid[0] : i$$169 - c$$333.grid[0] : i$$169 : i$$169;
      }
    }
    return {top:g$$138 - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a$$452.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e$$240 ? 0 : d$$260.scrollTop()), left:f$$106 - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a$$452.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e$$240 ? 0 : d$$260.scrollLeft())};
  }, _rearrange:function(a$$462, b$$407, c$$334, d$$261) {
    c$$334 ? c$$334[0].appendChild(this.placeholder[0]) : b$$407.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? b$$407.item[0] : b$$407.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
    var e$$241 = this;
    var f$$107 = this.counter;
    window.setTimeout(function() {
      f$$107 == e$$241.counter && e$$241.refreshPositions(!d$$261);
    }, 0);
  }, _clear:function(b$$408, c$$335) {
    this.reverting = !1;
    var d$$262 = [];
    var e$$242 = this;
    !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;
    if (this.helper[0] == this.currentItem[0]) {
      var f$$108;
      for (f$$108 in this._storedCSS) {
        if (this._storedCSS[f$$108] == "auto" || this._storedCSS[f$$108] == "static") {
          this._storedCSS[f$$108] = "";
        }
      }
      this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
    } else {
      this.currentItem.show();
    }
    this.fromOutside && !c$$335 && d$$262.push(function(a$$463) {
      this._trigger("receive", a$$463, this._uiHash(this.fromOutside));
    }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !c$$335 && d$$262.push(function(a$$464) {
      this._trigger("update", a$$464, this._uiHash());
    }), this !== this.currentContainer && (c$$335 || (d$$262.push(function(a$$465) {
      this._trigger("remove", a$$465, this._uiHash());
    }), d$$262.push(function(a$$466) {
      return function(b$$409) {
        a$$466._trigger("receive", b$$409, this._uiHash(this));
      };
    }.call(this, this.currentContainer)), d$$262.push(function(a$$467) {
      return function(b$$410) {
        a$$467._trigger("update", b$$410, this._uiHash(this));
      };
    }.call(this, this.currentContainer))));
    f$$108 = this.containers.length - 1;
    for (;f$$108 >= 0;f$$108--) {
      c$$335 || d$$262.push(function(a$$468) {
        return function(b$$411) {
          a$$468._trigger("deactivate", b$$411, this._uiHash(this));
        };
      }.call(this, this.containers[f$$108])), this.containers[f$$108].containerCache.over && (d$$262.push(function(a$$469) {
        return function(b$$412) {
          a$$469._trigger("out", b$$412, this._uiHash(this));
        };
      }.call(this, this.containers[f$$108])), this.containers[f$$108].containerCache.over = 0);
    }
    this._storedCursor && a$$452("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex), this.dragging = !1;
    if (this.cancelHelperRemoval) {
      if (!c$$335) {
        this._trigger("beforeStop", b$$408, this._uiHash());
        f$$108 = 0;
        for (;f$$108 < d$$262.length;f$$108++) {
          d$$262[f$$108].call(this, b$$408);
        }
        this._trigger("stop", b$$408, this._uiHash());
      }
      return this.fromOutside = !1, !1;
    }
    c$$335 || this._trigger("beforeStop", b$$408, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null;
    if (!c$$335) {
      f$$108 = 0;
      for (;f$$108 < d$$262.length;f$$108++) {
        d$$262[f$$108].call(this, b$$408);
      }
      this._trigger("stop", b$$408, this._uiHash());
    }
    return this.fromOutside = !1, !0;
  }, _trigger:function() {
    a$$452.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
  }, _uiHash:function(b$$413) {
    var c$$336 = b$$413 || this;
    return {helper:c$$336.helper, placeholder:c$$336.placeholder || a$$452([]), position:c$$336.position, originalPosition:c$$336.originalPosition, offset:c$$336.positionAbs, item:c$$336.currentItem, sender:b$$413 ? b$$413.element : null};
  }}), a$$452.extend(a$$452.ui.sortable, {version:"1.8.24"});
}(jQuery), jQuery.effects || function(a$$470, b$$414) {
  function c$$337(b$$415) {
    var c$$338;
    return b$$415 && b$$415.constructor == Array && b$$415.length == 3 ? b$$415 : (c$$338 = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b$$415)) ? [parseInt(c$$338[1], 10), parseInt(c$$338[2], 10), parseInt(c$$338[3], 10)] : (c$$338 = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b$$415)) ? [parseFloat(c$$338[1]) * 2.55, parseFloat(c$$338[2]) * 2.55, parseFloat(c$$338[3]) * 2.55] : (c$$338 = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b$$415)) ? 
    [parseInt(c$$338[1], 16), parseInt(c$$338[2], 16), parseInt(c$$338[3], 16)] : (c$$338 = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b$$415)) ? [parseInt(c$$338[1] + c$$338[1], 16), parseInt(c$$338[2] + c$$338[2], 16), parseInt(c$$338[3] + c$$338[3], 16)] : (c$$338 = /rgba\(0, 0, 0, 0\)/.exec(b$$415)) ? e$$243.transparent : e$$243[a$$470.trim(b$$415).toLowerCase()];
  }
  function h$$113() {
    var a$$471 = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle;
    var b$$417 = {};
    var c$$339;
    var d$$265;
    if (a$$471 && a$$471.length && a$$471[0] && a$$471[a$$471[0]]) {
      var e$$245 = a$$471.length;
      for (;e$$245--;) {
        c$$339 = a$$471[e$$245], typeof a$$471[c$$339] == "string" && (d$$265 = c$$339.replace(/\-(\w)/g, function(a$$472, b$$418) {
          return b$$418.toUpperCase();
        }), b$$417[d$$265] = a$$471[c$$339]);
      }
    } else {
      for (c$$339 in a$$471) {
        typeof a$$471[c$$339] == "string" && (b$$417[c$$339] = a$$471[c$$339]);
      }
    }
    return b$$417;
  }
  function i$$170(b$$419) {
    var c$$340;
    var d$$266;
    for (c$$340 in b$$419) {
      d$$266 = b$$419[c$$340], (d$$266 == null || a$$470.isFunction(d$$266) || c$$340 in g$$139 || /scrollbar/.test(c$$340) || !/color/i.test(c$$340) && isNaN(parseFloat(d$$266))) && delete b$$419[c$$340];
    }
    return b$$419;
  }
  function j$$81(a$$473, b$$420) {
    var c$$341 = {_:0};
    var d$$267;
    for (d$$267 in b$$420) {
      a$$473[d$$267] != b$$420[d$$267] && (c$$341[d$$267] = b$$420[d$$267]);
    }
    return c$$341;
  }
  function k$$55(b$$421, c$$342, d$$268, e$$246) {
    typeof b$$421 == "object" && (e$$246 = c$$342, d$$268 = null, c$$342 = b$$421, b$$421 = c$$342.effect), a$$470.isFunction(c$$342) && (e$$246 = c$$342, d$$268 = null, c$$342 = {});
    if (typeof c$$342 == "number" || a$$470.fx.speeds[c$$342]) {
      e$$246 = d$$268, d$$268 = c$$342, c$$342 = {};
    }
    return a$$470.isFunction(d$$268) && (e$$246 = d$$268, d$$268 = null), c$$342 = c$$342 || {}, d$$268 = d$$268 || c$$342.duration, d$$268 = a$$470.fx.off ? 0 : typeof d$$268 == "number" ? d$$268 : d$$268 in a$$470.fx.speeds ? a$$470.fx.speeds[d$$268] : a$$470.fx.speeds._default, e$$246 = e$$246 || c$$342.complete, [b$$421, c$$342, d$$268, e$$246];
  }
  function l$$65(b$$422) {
    return !b$$422 || typeof b$$422 == "number" || a$$470.fx.speeds[b$$422] ? !0 : typeof b$$422 == "string" && !a$$470.effects[b$$422] ? !0 : !1;
  }
  a$$470.effects = {}, a$$470.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function(b$$423, e$$247) {
    a$$470.fx.step[e$$247] = function(a$$474) {
      var JSCompiler_temp$$11;
      if (JSCompiler_temp$$11 = a$$474.colorInit) {
      } else {
        var JSCompiler_inline_result$$12;
        var b$$inline_70 = a$$474.elem;
        var d$$inline_71 = e$$247;
        var e$$inline_72;
        do {
          e$$inline_72 = (a$$470.curCSS || a$$470.css)(b$$inline_70, d$$inline_71);
          if (e$$inline_72 != "" && e$$inline_72 != "transparent" || a$$470.nodeName(b$$inline_70, "body")) {
            break;
          }
          d$$inline_71 = "backgroundColor";
        } while (b$$inline_70 = b$$inline_70.parentNode);
        JSCompiler_inline_result$$12 = c$$337(e$$inline_72);
        JSCompiler_temp$$11 = (a$$474.start = JSCompiler_inline_result$$12, a$$474.end = c$$337(a$$474.end), a$$474.colorInit = !0);
      }
      JSCompiler_temp$$11, a$$474.elem.style[e$$247] = "rgb(" + Math.max(Math.min(parseInt(a$$474.pos * (a$$474.end[0] - a$$474.start[0]) + a$$474.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(a$$474.pos * (a$$474.end[1] - a$$474.start[1]) + a$$474.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(a$$474.pos * (a$$474.end[2] - a$$474.start[2]) + a$$474.start[2], 10), 255), 0) + ")";
    };
  });
  var e$$243 = {aqua:[0, 255, 255], azure:[240, 255, 255], beige:[245, 245, 220], black:[0, 0, 0], blue:[0, 0, 255], brown:[165, 42, 42], cyan:[0, 255, 255], darkblue:[0, 0, 139], darkcyan:[0, 139, 139], darkgrey:[169, 169, 169], darkgreen:[0, 100, 0], darkkhaki:[189, 183, 107], darkmagenta:[139, 0, 139], darkolivegreen:[85, 107, 47], darkorange:[255, 140, 0], darkorchid:[153, 50, 204], darkred:[139, 0, 0], darksalmon:[233, 150, 122], darkviolet:[148, 0, 211], fuchsia:[255, 0, 255], gold:[255, 215, 
  0], green:[0, 128, 0], indigo:[75, 0, 130], khaki:[240, 230, 140], lightblue:[173, 216, 230], lightcyan:[224, 255, 255], lightgreen:[144, 238, 144], lightgrey:[211, 211, 211], lightpink:[255, 182, 193], lightyellow:[255, 255, 224], lime:[0, 255, 0], magenta:[255, 0, 255], maroon:[128, 0, 0], navy:[0, 0, 128], olive:[128, 128, 0], orange:[255, 165, 0], pink:[255, 192, 203], purple:[128, 0, 128], violet:[128, 0, 128], red:[255, 0, 0], silver:[192, 192, 192], white:[255, 255, 255], yellow:[255, 255, 
  0], transparent:[255, 255, 255]};
  var f$$109 = ["add", "remove", "toggle"];
  var g$$139 = {border:1, borderBottom:1, borderColor:1, borderLeft:1, borderRight:1, borderTop:1, borderWidth:1, margin:1, padding:1};
  a$$470.effects.animateClass = function(b$$424, c$$343, d$$269, e$$248) {
    return a$$470.isFunction(d$$269) && (e$$248 = d$$269, d$$269 = null), this.queue(function() {
      var g$$140 = a$$470(this);
      var k$$56 = g$$140.attr("style") || " ";
      var l$$66 = i$$170(h$$113.call(this));
      var m$$37;
      var n$$86 = g$$140.attr("class") || "";
      a$$470.each(f$$109, function(a$$475, c$$344) {
        b$$424[c$$344] && g$$140[c$$344 + "Class"](b$$424[c$$344]);
      }), m$$37 = i$$170(h$$113.call(this)), g$$140.attr("class", n$$86), g$$140.animate(j$$81(l$$66, m$$37), {queue:!1, duration:c$$343, easing:d$$269, complete:function() {
        a$$470.each(f$$109, function(a$$476, c$$345) {
          b$$424[c$$345] && g$$140[c$$345 + "Class"](b$$424[c$$345]);
        }), typeof g$$140.attr("style") == "object" ? (g$$140.attr("style").cssText = "", g$$140.attr("style").cssText = k$$56) : g$$140.attr("style", k$$56), e$$248 && e$$248.apply(this, arguments), a$$470.dequeue(this);
      }});
    });
  }, a$$470.fn.extend({_addClass:a$$470.fn.addClass, addClass:function(b$$425, c$$346, d$$270, e$$249) {
    return c$$346 ? a$$470.effects.animateClass.apply(this, [{add:b$$425}, c$$346, d$$270, e$$249]) : this._addClass(b$$425);
  }, _removeClass:a$$470.fn.removeClass, removeClass:function(b$$426, c$$347, d$$271, e$$250) {
    return c$$347 ? a$$470.effects.animateClass.apply(this, [{remove:b$$426}, c$$347, d$$271, e$$250]) : this._removeClass(b$$426);
  }, _toggleClass:a$$470.fn.toggleClass, toggleClass:function(c$$348, d$$272, e$$251, f$$110, g$$141) {
    return typeof d$$272 == "boolean" || d$$272 === b$$414 ? e$$251 ? a$$470.effects.animateClass.apply(this, [d$$272 ? {add:c$$348} : {remove:c$$348}, e$$251, f$$110, g$$141]) : this._toggleClass(c$$348, d$$272) : a$$470.effects.animateClass.apply(this, [{toggle:c$$348}, d$$272, e$$251, f$$110]);
  }, switchClass:function(b$$427, c$$349, d$$273, e$$252, f$$111) {
    return a$$470.effects.animateClass.apply(this, [{add:c$$349, remove:b$$427}, d$$273, e$$252, f$$111]);
  }}), a$$470.extend(a$$470.effects, {version:"1.8.24", save:function(a$$477, b$$428) {
    var c$$350 = 0;
    for (;c$$350 < b$$428.length;c$$350++) {
      b$$428[c$$350] !== null && a$$477.data("ec.storage." + b$$428[c$$350], a$$477[0].style[b$$428[c$$350]]);
    }
  }, restore:function(a$$478, b$$429) {
    var c$$351 = 0;
    for (;c$$351 < b$$429.length;c$$351++) {
      b$$429[c$$351] !== null && a$$478.css(b$$429[c$$351], a$$478.data("ec.storage." + b$$429[c$$351]));
    }
  }, setMode:function(a$$479, b$$430) {
    return b$$430 == "toggle" && (b$$430 = a$$479.is(":hidden") ? "show" : "hide"), b$$430;
  }, getBaseline:function(a$$480, b$$431) {
    var c$$352;
    var d$$274;
    switch(a$$480[0]) {
      case "top":
        c$$352 = 0;
        break;
      case "middle":
        c$$352 = .5;
        break;
      case "bottom":
        c$$352 = 1;
        break;
      default:
        c$$352 = a$$480[0] / b$$431.height;
    }
    switch(a$$480[1]) {
      case "left":
        d$$274 = 0;
        break;
      case "center":
        d$$274 = .5;
        break;
      case "right":
        d$$274 = 1;
        break;
      default:
        d$$274 = a$$480[1] / b$$431.width;
    }
    return {x:d$$274, y:c$$352};
  }, createWrapper:function(b$$432) {
    if (b$$432.parent().is(".ui-effects-wrapper")) {
      return b$$432.parent();
    }
    var c$$353 = {width:b$$432.outerWidth(!0), height:b$$432.outerHeight(!0), "float":b$$432.css("float")};
    var d$$275 = a$$470("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%", background:"transparent", border:"none", margin:0, padding:0});
    var e$$253 = document.activeElement;
    try {
    } catch (f$$112) {
      e$$253 = document.body;
    }
    return b$$432.wrap(d$$275), (b$$432[0] === e$$253 || a$$470.contains(b$$432[0], e$$253)) && a$$470(e$$253).focus(), d$$275 = b$$432.parent(), b$$432.css("position") == "static" ? (d$$275.css({position:"relative"}), b$$432.css({position:"relative"})) : (a$$470.extend(c$$353, {position:b$$432.css("position"), zIndex:b$$432.css("z-index")}), a$$470.each(["top", "left", "bottom", "right"], function(a$$481, d$$276) {
      c$$353[d$$276] = b$$432.css(d$$276), isNaN(parseInt(c$$353[d$$276], 10)) && (c$$353[d$$276] = "auto");
    }), b$$432.css({position:"relative", top:0, left:0, right:"auto", bottom:"auto"})), d$$275.css(c$$353).show();
  }, removeWrapper:function(b$$433) {
    var c$$354;
    var d$$277 = document.activeElement;
    return b$$433.parent().is(".ui-effects-wrapper") ? (c$$354 = b$$433.parent().replaceWith(b$$433), (b$$433[0] === d$$277 || a$$470.contains(b$$433[0], d$$277)) && a$$470(d$$277).focus(), c$$354) : b$$433;
  }, setTransition:function(b$$434, c$$355, d$$278, e$$254) {
    return e$$254 = e$$254 || {}, a$$470.each(c$$355, function(a$$482, c$$356) {
      var f$$113 = b$$434.cssUnit(c$$356);
      f$$113[0] > 0 && (e$$254[c$$356] = f$$113[0] * d$$278 + f$$113[1]);
    }), e$$254;
  }}), a$$470.fn.extend({effect:function(b$$435, c$$357, d$$279, e$$255) {
    var f$$114 = k$$55.apply(this, arguments);
    var g$$142 = {options:f$$114[1], duration:f$$114[2], callback:f$$114[3]};
    var h$$114 = g$$142.options.mode;
    var i$$171 = a$$470.effects[b$$435];
    return a$$470.fx.off || !i$$171 ? h$$114 ? this[h$$114](g$$142.duration, g$$142.callback) : this.each(function() {
      g$$142.callback && g$$142.callback.call(this);
    }) : i$$171.call(this, g$$142);
  }, _show:a$$470.fn.show, show:function(a$$483) {
    if (l$$65(a$$483)) {
      return this._show.apply(this, arguments);
    }
    var b$$436 = k$$55.apply(this, arguments);
    return b$$436[1].mode = "show", this.effect.apply(this, b$$436);
  }, _hide:a$$470.fn.hide, hide:function(a$$484) {
    if (l$$65(a$$484)) {
      return this._hide.apply(this, arguments);
    }
    var b$$437 = k$$55.apply(this, arguments);
    return b$$437[1].mode = "hide", this.effect.apply(this, b$$437);
  }, __toggle:a$$470.fn.toggle, toggle:function(b$$438) {
    if (l$$65(b$$438) || typeof b$$438 == "boolean" || a$$470.isFunction(b$$438)) {
      return this.__toggle.apply(this, arguments);
    }
    var c$$358 = k$$55.apply(this, arguments);
    return c$$358[1].mode = "toggle", this.effect.apply(this, c$$358);
  }, cssUnit:function(b$$439) {
    var c$$359 = this.css(b$$439);
    var d$$280 = [];
    return a$$470.each(["em", "px", "%", "pt"], function(a$$485, b$$440) {
      c$$359.indexOf(b$$440) > 0 && (d$$280 = [parseFloat(c$$359), b$$440]);
    }), d$$280;
  }});
  var m$$36 = {};
  a$$470.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(a$$486, b$$441) {
    m$$36[b$$441] = function(b$$442) {
      return Math.pow(b$$442, a$$486 + 2);
    };
  }), a$$470.extend(m$$36, {Sine:function(a$$487) {
    return 1 - Math.cos(a$$487 * Math.PI / 2);
  }, Circ:function(a$$488) {
    return 1 - Math.sqrt(1 - a$$488 * a$$488);
  }, Elastic:function(a$$489) {
    return a$$489 === 0 || a$$489 === 1 ? a$$489 : -Math.pow(2, 8 * (a$$489 - 1)) * Math.sin(((a$$489 - 1) * 80 - 7.5) * Math.PI / 15);
  }, Back:function(a$$490) {
    return a$$490 * a$$490 * (3 * a$$490 - 2);
  }, Bounce:function(a$$491) {
    var b$$443;
    var c$$360 = 4;
    for (;a$$491 < ((b$$443 = Math.pow(2, --c$$360)) - 1) / 11;) {
    }
    return 1 / Math.pow(4, 3 - c$$360) - 7.5625 * Math.pow((b$$443 * 3 - 2) / 22 - a$$491, 2);
  }}), a$$470.each(m$$36, function(b$$444, c$$361) {
    a$$470.easing["easeIn" + b$$444] = c$$361, a$$470.easing["easeOut" + b$$444] = function(a$$492) {
      return 1 - c$$361(1 - a$$492);
    }, a$$470.easing["easeInOut" + b$$444] = function(a$$493) {
      return a$$493 < .5 ? c$$361(a$$493 * 2) / 2 : c$$361(a$$493 * -2 + 2) / -2 + 1;
    };
  });
}(jQuery), function(a$$494, b$$445) {
  a$$494.effects.blind = function(b$$446) {
    return this.queue(function() {
      var c$$362 = a$$494(this);
      var d$$281 = ["position", "top", "bottom", "left", "right"];
      var e$$256 = a$$494.effects.setMode(c$$362, b$$446.options.mode || "hide");
      var f$$115 = b$$446.options.direction || "vertical";
      a$$494.effects.save(c$$362, d$$281), c$$362.show();
      var g$$143 = a$$494.effects.createWrapper(c$$362).css({overflow:"hidden"});
      var h$$115 = f$$115 == "vertical" ? "height" : "width";
      var i$$172 = f$$115 == "vertical" ? g$$143.height() : g$$143.width();
      e$$256 == "show" && g$$143.css(h$$115, 0);
      var j$$82 = {};
      j$$82[h$$115] = e$$256 == "show" ? i$$172 : 0, g$$143.animate(j$$82, b$$446.duration, b$$446.options.easing, function() {
        e$$256 == "hide" && c$$362.hide(), a$$494.effects.restore(c$$362, d$$281), a$$494.effects.removeWrapper(c$$362), b$$446.callback && b$$446.callback.apply(c$$362[0], arguments), c$$362.dequeue();
      });
    });
  };
}(jQuery), function(a$$495, b$$447) {
  a$$495.effects.bounce = function(b$$448) {
    return this.queue(function() {
      var c$$363 = a$$495(this);
      var d$$282 = ["position", "top", "bottom", "left", "right"];
      var e$$257 = a$$495.effects.setMode(c$$363, b$$448.options.mode || "effect");
      var f$$116 = b$$448.options.direction || "up";
      var g$$144 = b$$448.options.distance || 20;
      var h$$116 = b$$448.options.times || 5;
      var i$$173 = b$$448.duration || 250;
      /show|hide/.test(e$$257) && d$$282.push("opacity"), a$$495.effects.save(c$$363, d$$282), c$$363.show(), a$$495.effects.createWrapper(c$$363);
      var j$$83 = f$$116 == "up" || f$$116 == "down" ? "top" : "left";
      var k$$57 = f$$116 == "up" || f$$116 == "left" ? "pos" : "neg";
      g$$144 = b$$448.options.distance || (j$$83 == "top" ? c$$363.outerHeight(!0) / 3 : c$$363.outerWidth(!0) / 3);
      e$$257 == "show" && c$$363.css("opacity", 0).css(j$$83, k$$57 == "pos" ? -g$$144 : g$$144), e$$257 == "hide" && (g$$144 = g$$144 / (h$$116 * 2)), e$$257 != "hide" && h$$116--;
      if (e$$257 == "show") {
        var l$$67 = {opacity:1};
        l$$67[j$$83] = (k$$57 == "pos" ? "+=" : "-=") + g$$144, c$$363.animate(l$$67, i$$173 / 2, b$$448.options.easing), g$$144 = g$$144 / 2, h$$116--;
      }
      var m$$38 = 0;
      for (;m$$38 < h$$116;m$$38++) {
        var n$$87 = {};
        var p$$42 = {};
        n$$87[j$$83] = (k$$57 == "pos" ? "-=" : "+=") + g$$144, p$$42[j$$83] = (k$$57 == "pos" ? "+=" : "-=") + g$$144, c$$363.animate(n$$87, i$$173 / 2, b$$448.options.easing).animate(p$$42, i$$173 / 2, b$$448.options.easing), g$$144 = e$$257 == "hide" ? g$$144 * 2 : g$$144 / 2;
      }
      if (e$$257 == "hide") {
        l$$67 = {opacity:0};
        l$$67[j$$83] = (k$$57 == "pos" ? "-=" : "+=") + g$$144, c$$363.animate(l$$67, i$$173 / 2, b$$448.options.easing, function() {
          c$$363.hide(), a$$495.effects.restore(c$$363, d$$282), a$$495.effects.removeWrapper(c$$363), b$$448.callback && b$$448.callback.apply(this, arguments);
        });
      } else {
        n$$87 = {};
        p$$42 = {};
        n$$87[j$$83] = (k$$57 == "pos" ? "-=" : "+=") + g$$144, p$$42[j$$83] = (k$$57 == "pos" ? "+=" : "-=") + g$$144, c$$363.animate(n$$87, i$$173 / 2, b$$448.options.easing).animate(p$$42, i$$173 / 2, b$$448.options.easing, function() {
          a$$495.effects.restore(c$$363, d$$282), a$$495.effects.removeWrapper(c$$363), b$$448.callback && b$$448.callback.apply(this, arguments);
        });
      }
      c$$363.queue("fx", function() {
        c$$363.dequeue();
      }), c$$363.dequeue();
    });
  };
}(jQuery), function(a$$496, b$$449) {
  a$$496.effects.clip = function(b$$450) {
    return this.queue(function() {
      var c$$364 = a$$496(this);
      var d$$283 = ["position", "top", "bottom", "left", "right", "height", "width"];
      var e$$258 = a$$496.effects.setMode(c$$364, b$$450.options.mode || "hide");
      var f$$117 = b$$450.options.direction || "vertical";
      a$$496.effects.save(c$$364, d$$283), c$$364.show();
      var g$$145 = a$$496.effects.createWrapper(c$$364).css({overflow:"hidden"});
      var h$$117 = c$$364[0].tagName == "IMG" ? g$$145 : c$$364;
      var JSCompiler_object_inline_size_92 = f$$117 == "vertical" ? "height" : "width";
      var JSCompiler_object_inline_position_93 = f$$117 == "vertical" ? "top" : "left";
      var j$$84 = f$$117 == "vertical" ? h$$117.height() : h$$117.width();
      e$$258 == "show" && (h$$117.css(JSCompiler_object_inline_size_92, 0), h$$117.css(JSCompiler_object_inline_position_93, j$$84 / 2));
      var k$$58 = {};
      k$$58[JSCompiler_object_inline_size_92] = e$$258 == "show" ? j$$84 : 0, k$$58[JSCompiler_object_inline_position_93] = e$$258 == "show" ? 0 : j$$84 / 2, h$$117.animate(k$$58, {queue:!1, duration:b$$450.duration, easing:b$$450.options.easing, complete:function() {
        e$$258 == "hide" && c$$364.hide(), a$$496.effects.restore(c$$364, d$$283), a$$496.effects.removeWrapper(c$$364), b$$450.callback && b$$450.callback.apply(c$$364[0], arguments), c$$364.dequeue();
      }});
    });
  };
}(jQuery), function(a$$497, b$$451) {
  a$$497.effects.drop = function(b$$452) {
    return this.queue(function() {
      var c$$365 = a$$497(this);
      var d$$284 = ["position", "top", "bottom", "left", "right", "opacity"];
      var e$$259 = a$$497.effects.setMode(c$$365, b$$452.options.mode || "hide");
      var f$$118 = b$$452.options.direction || "left";
      a$$497.effects.save(c$$365, d$$284), c$$365.show(), a$$497.effects.createWrapper(c$$365);
      var g$$146 = f$$118 == "up" || f$$118 == "down" ? "top" : "left";
      var h$$118 = f$$118 == "up" || f$$118 == "left" ? "pos" : "neg";
      var i$$175 = b$$452.options.distance || (g$$146 == "top" ? c$$365.outerHeight(!0) / 2 : c$$365.outerWidth(!0) / 2);
      e$$259 == "show" && c$$365.css("opacity", 0).css(g$$146, h$$118 == "pos" ? -i$$175 : i$$175);
      var j$$85 = {opacity:e$$259 == "show" ? 1 : 0};
      j$$85[g$$146] = (e$$259 == "show" ? h$$118 == "pos" ? "+=" : "-=" : h$$118 == "pos" ? "-=" : "+=") + i$$175, c$$365.animate(j$$85, {queue:!1, duration:b$$452.duration, easing:b$$452.options.easing, complete:function() {
        e$$259 == "hide" && c$$365.hide(), a$$497.effects.restore(c$$365, d$$284), a$$497.effects.removeWrapper(c$$365), b$$452.callback && b$$452.callback.apply(this, arguments), c$$365.dequeue();
      }});
    });
  };
}(jQuery), function(a$$498, b$$453) {
  a$$498.effects.explode = function(b$$454) {
    return this.queue(function() {
      var c$$366 = b$$454.options.pieces ? Math.round(Math.sqrt(b$$454.options.pieces)) : 3;
      var d$$285 = b$$454.options.pieces ? Math.round(Math.sqrt(b$$454.options.pieces)) : 3;
      b$$454.options.mode = b$$454.options.mode == "toggle" ? a$$498(this).is(":visible") ? "hide" : "show" : b$$454.options.mode;
      var e$$260 = a$$498(this).show().css("visibility", "hidden");
      var f$$119 = e$$260.offset();
      f$$119.top -= parseInt(e$$260.css("marginTop"), 10) || 0, f$$119.left -= parseInt(e$$260.css("marginLeft"), 10) || 0;
      var g$$147 = e$$260.outerWidth(!0);
      var h$$119 = e$$260.outerHeight(!0);
      var i$$176 = 0;
      for (;i$$176 < c$$366;i$$176++) {
        var j$$86 = 0;
        for (;j$$86 < d$$285;j$$86++) {
          e$$260.clone().appendTo("body").wrap("<div></div>").css({position:"absolute", visibility:"visible", left:-j$$86 * (g$$147 / d$$285), top:-i$$176 * (h$$119 / c$$366)}).parent().addClass("ui-effects-explode").css({position:"absolute", overflow:"hidden", width:g$$147 / d$$285, height:h$$119 / c$$366, left:f$$119.left + j$$86 * (g$$147 / d$$285) + (b$$454.options.mode == "show" ? (j$$86 - Math.floor(d$$285 / 2)) * (g$$147 / d$$285) : 0), top:f$$119.top + i$$176 * (h$$119 / c$$366) + (b$$454.options.mode == 
          "show" ? (i$$176 - Math.floor(c$$366 / 2)) * (h$$119 / c$$366) : 0), opacity:b$$454.options.mode == "show" ? 0 : 1}).animate({left:f$$119.left + j$$86 * (g$$147 / d$$285) + (b$$454.options.mode == "show" ? 0 : (j$$86 - Math.floor(d$$285 / 2)) * (g$$147 / d$$285)), top:f$$119.top + i$$176 * (h$$119 / c$$366) + (b$$454.options.mode == "show" ? 0 : (i$$176 - Math.floor(c$$366 / 2)) * (h$$119 / c$$366)), opacity:b$$454.options.mode == "show" ? 1 : 0}, b$$454.duration || 500);
        }
      }
      setTimeout(function() {
        b$$454.options.mode == "show" ? e$$260.css({visibility:"visible"}) : e$$260.css({visibility:"visible"}).hide(), b$$454.callback && b$$454.callback.apply(e$$260[0]), e$$260.dequeue(), a$$498("div.ui-effects-explode").remove();
      }, b$$454.duration || 500);
    });
  };
}(jQuery), function(a$$499, b$$455) {
  a$$499.effects.fade = function(b$$456) {
    return this.queue(function() {
      var c$$367 = a$$499(this);
      var d$$286 = a$$499.effects.setMode(c$$367, b$$456.options.mode || "hide");
      c$$367.animate({opacity:d$$286}, {queue:!1, duration:b$$456.duration, easing:b$$456.options.easing, complete:function() {
        b$$456.callback && b$$456.callback.apply(this, arguments), c$$367.dequeue();
      }});
    });
  };
}(jQuery), function(a$$500, b$$457) {
  a$$500.effects.fold = function(b$$458) {
    return this.queue(function() {
      var c$$368 = a$$500(this);
      var d$$287 = ["position", "top", "bottom", "left", "right"];
      var e$$261 = a$$500.effects.setMode(c$$368, b$$458.options.mode || "hide");
      var f$$120 = b$$458.options.size || 15;
      var g$$148 = !!b$$458.options.horizFirst;
      var h$$120 = b$$458.duration ? b$$458.duration / 2 : a$$500.fx.speeds._default / 2;
      a$$500.effects.save(c$$368, d$$287), c$$368.show();
      var i$$177 = a$$500.effects.createWrapper(c$$368).css({overflow:"hidden"});
      var j$$87 = e$$261 == "show" != g$$148;
      var k$$59 = j$$87 ? ["width", "height"] : ["height", "width"];
      var l$$68 = j$$87 ? [i$$177.width(), i$$177.height()] : [i$$177.height(), i$$177.width()];
      var m$$39 = /([0-9]+)%/.exec(f$$120);
      m$$39 && (f$$120 = parseInt(m$$39[1], 10) / 100 * l$$68[e$$261 == "hide" ? 0 : 1]), e$$261 == "show" && i$$177.css(g$$148 ? {height:0, width:f$$120} : {height:f$$120, width:0});
      var n$$88 = {};
      var p$$43 = {};
      n$$88[k$$59[0]] = e$$261 == "show" ? l$$68[0] : f$$120, p$$43[k$$59[1]] = e$$261 == "show" ? l$$68[1] : 0, i$$177.animate(n$$88, h$$120, b$$458.options.easing).animate(p$$43, h$$120, b$$458.options.easing, function() {
        e$$261 == "hide" && c$$368.hide(), a$$500.effects.restore(c$$368, d$$287), a$$500.effects.removeWrapper(c$$368), b$$458.callback && b$$458.callback.apply(c$$368[0], arguments), c$$368.dequeue();
      });
    });
  };
}(jQuery), function(a$$501, b$$459) {
  a$$501.effects.highlight = function(b$$460) {
    return this.queue(function() {
      var c$$369 = a$$501(this);
      var d$$288 = ["backgroundImage", "backgroundColor", "opacity"];
      var e$$262 = a$$501.effects.setMode(c$$369, b$$460.options.mode || "show");
      var f$$121 = {backgroundColor:c$$369.css("backgroundColor")};
      e$$262 == "hide" && (f$$121.opacity = 0), a$$501.effects.save(c$$369, d$$288), c$$369.show().css({backgroundImage:"none", backgroundColor:b$$460.options.color || "#ffff99"}).animate(f$$121, {queue:!1, duration:b$$460.duration, easing:b$$460.options.easing, complete:function() {
        e$$262 == "hide" && c$$369.hide(), a$$501.effects.restore(c$$369, d$$288), e$$262 == "show" && !a$$501.support.opacity && this.style.removeAttribute("filter"), b$$460.callback && b$$460.callback.apply(this, arguments), c$$369.dequeue();
      }});
    });
  };
}(jQuery), function(a$$502, b$$461) {
  a$$502.effects.pulsate = function(b$$462) {
    return this.queue(function() {
      var c$$370 = a$$502(this);
      var d$$289 = a$$502.effects.setMode(c$$370, b$$462.options.mode || "show");
      var e$$263 = (b$$462.options.times || 5) * 2 - 1;
      var f$$122 = b$$462.duration ? b$$462.duration / 2 : a$$502.fx.speeds._default / 2;
      var g$$149 = c$$370.is(":visible");
      var h$$121 = 0;
      g$$149 || (c$$370.css("opacity", 0).show(), h$$121 = 1), (d$$289 == "hide" && g$$149 || d$$289 == "show" && !g$$149) && e$$263--;
      var i$$178 = 0;
      for (;i$$178 < e$$263;i$$178++) {
        c$$370.animate({opacity:h$$121}, f$$122, b$$462.options.easing), h$$121 = (h$$121 + 1) % 2;
      }
      c$$370.animate({opacity:h$$121}, f$$122, b$$462.options.easing, function() {
        h$$121 == 0 && c$$370.hide(), b$$462.callback && b$$462.callback.apply(this, arguments);
      }), c$$370.queue("fx", function() {
        c$$370.dequeue();
      }).dequeue();
    });
  };
}(jQuery), function(a$$503, b$$463) {
  a$$503.effects.puff = function(b$$464) {
    return this.queue(function() {
      var c$$371 = a$$503(this);
      var d$$290 = a$$503.effects.setMode(c$$371, b$$464.options.mode || "hide");
      var e$$264 = parseInt(b$$464.options.percent, 10) || 150;
      var f$$123 = e$$264 / 100;
      var g$$150 = {height:c$$371.height(), width:c$$371.width()};
      a$$503.extend(b$$464.options, {fade:!0, mode:d$$290, percent:d$$290 == "hide" ? e$$264 : 100, from:d$$290 == "hide" ? g$$150 : {height:g$$150.height * f$$123, width:g$$150.width * f$$123}}), c$$371.effect("scale", b$$464.options, b$$464.duration, b$$464.callback), c$$371.dequeue();
    });
  }, a$$503.effects.scale = function(b$$465) {
    return this.queue(function() {
      var c$$372 = a$$503(this);
      var d$$291 = a$$503.extend(!0, {}, b$$465.options);
      var e$$265 = a$$503.effects.setMode(c$$372, b$$465.options.mode || "effect");
      var f$$124 = parseInt(b$$465.options.percent, 10) || (parseInt(b$$465.options.percent, 10) == 0 ? 0 : e$$265 == "hide" ? 0 : 100);
      var g$$151 = b$$465.options.direction || "both";
      var h$$122 = b$$465.options.origin;
      e$$265 != "effect" && (d$$291.origin = h$$122 || ["middle", "center"], d$$291.restore = !0);
      var i$$179 = {height:c$$372.height(), width:c$$372.width()};
      c$$372.from = b$$465.options.from || (e$$265 == "show" ? {height:0, width:0} : i$$179);
      var JSCompiler_object_inline_y_94 = g$$151 != "horizontal" ? f$$124 / 100 : 1;
      var JSCompiler_object_inline_x_95 = g$$151 != "vertical" ? f$$124 / 100 : 1;
      c$$372.to = {height:i$$179.height * JSCompiler_object_inline_y_94, width:i$$179.width * JSCompiler_object_inline_x_95}, b$$465.options.fade && (e$$265 == "show" && (c$$372.from.opacity = 0, c$$372.to.opacity = 1), e$$265 == "hide" && (c$$372.from.opacity = 1, c$$372.to.opacity = 0)), d$$291.from = c$$372.from, d$$291.to = c$$372.to, d$$291.mode = e$$265, c$$372.effect("size", d$$291, b$$465.duration, b$$465.callback), c$$372.dequeue();
    });
  }, a$$503.effects.size = function(b$$466) {
    return this.queue(function() {
      var c$$373 = a$$503(this);
      var d$$292 = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"];
      var e$$266 = ["position", "top", "bottom", "left", "right", "overflow", "opacity"];
      var f$$125 = ["width", "height", "overflow"];
      var g$$152 = ["fontSize"];
      var h$$123 = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"];
      var i$$180 = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"];
      var j$$89 = a$$503.effects.setMode(c$$373, b$$466.options.mode || "effect");
      var k$$60 = b$$466.options.restore || !1;
      var l$$69 = b$$466.options.scale || "both";
      var m$$40 = b$$466.options.origin;
      var n$$89 = {height:c$$373.height(), width:c$$373.width()};
      c$$373.from = b$$466.options.from || n$$89, c$$373.to = b$$466.options.to || n$$89;
      if (m$$40) {
        var p$$44 = a$$503.effects.getBaseline(m$$40, n$$89);
        c$$373.from.top = (n$$89.height - c$$373.from.height) * p$$44.y, c$$373.from.left = (n$$89.width - c$$373.from.width) * p$$44.x, c$$373.to.top = (n$$89.height - c$$373.to.height) * p$$44.y, c$$373.to.left = (n$$89.width - c$$373.to.width) * p$$44.x;
      }
      var JSCompiler_object_inline_y_100 = c$$373.from.height / n$$89.height;
      var JSCompiler_object_inline_x_101 = c$$373.from.width / n$$89.width;
      var JSCompiler_object_inline_y_102 = c$$373.to.height / n$$89.height;
      var JSCompiler_object_inline_x_103 = c$$373.to.width / n$$89.width;
      if (l$$69 == "box" || l$$69 == "both") {
        JSCompiler_object_inline_y_100 != JSCompiler_object_inline_y_102 && (d$$292 = d$$292.concat(h$$123), c$$373.from = a$$503.effects.setTransition(c$$373, h$$123, JSCompiler_object_inline_y_100, c$$373.from), c$$373.to = a$$503.effects.setTransition(c$$373, h$$123, JSCompiler_object_inline_y_102, c$$373.to)), JSCompiler_object_inline_x_101 != JSCompiler_object_inline_x_103 && (d$$292 = d$$292.concat(i$$180), c$$373.from = a$$503.effects.setTransition(c$$373, i$$180, JSCompiler_object_inline_x_101, 
        c$$373.from), c$$373.to = a$$503.effects.setTransition(c$$373, i$$180, JSCompiler_object_inline_x_103, c$$373.to));
      }
      (l$$69 == "content" || l$$69 == "both") && JSCompiler_object_inline_y_100 != JSCompiler_object_inline_y_102 && (d$$292 = d$$292.concat(g$$152), c$$373.from = a$$503.effects.setTransition(c$$373, g$$152, JSCompiler_object_inline_y_100, c$$373.from), c$$373.to = a$$503.effects.setTransition(c$$373, g$$152, JSCompiler_object_inline_y_102, c$$373.to)), a$$503.effects.save(c$$373, k$$60 ? d$$292 : e$$266), c$$373.show(), a$$503.effects.createWrapper(c$$373), c$$373.css("overflow", "hidden").css(c$$373.from);
      if (l$$69 == "content" || l$$69 == "both") {
        h$$123 = h$$123.concat(["marginTop", "marginBottom"]).concat(g$$152), i$$180 = i$$180.concat(["marginLeft", "marginRight"]), f$$125 = d$$292.concat(h$$123).concat(i$$180), c$$373.find("*[width]").each(function() {
          var c$$374 = a$$503(this);
          k$$60 && a$$503.effects.save(c$$374, f$$125);
          var JSCompiler_object_inline_height_96 = c$$374.height();
          var JSCompiler_object_inline_width_97 = c$$374.width();
          c$$374.from = {height:JSCompiler_object_inline_height_96 * JSCompiler_object_inline_y_100, width:JSCompiler_object_inline_width_97 * JSCompiler_object_inline_x_101}, c$$374.to = {height:JSCompiler_object_inline_height_96 * JSCompiler_object_inline_y_102, width:JSCompiler_object_inline_width_97 * JSCompiler_object_inline_x_103}, JSCompiler_object_inline_y_100 != JSCompiler_object_inline_y_102 && (c$$374.from = a$$503.effects.setTransition(c$$374, h$$123, JSCompiler_object_inline_y_100, c$$374.from), 
          c$$374.to = a$$503.effects.setTransition(c$$374, h$$123, JSCompiler_object_inline_y_102, c$$374.to)), JSCompiler_object_inline_x_101 != JSCompiler_object_inline_x_103 && (c$$374.from = a$$503.effects.setTransition(c$$374, i$$180, JSCompiler_object_inline_x_101, c$$374.from), c$$374.to = a$$503.effects.setTransition(c$$374, i$$180, JSCompiler_object_inline_x_103, c$$374.to)), c$$374.css(c$$374.from), c$$374.animate(c$$374.to, b$$466.duration, b$$466.options.easing, function() {
            k$$60 && a$$503.effects.restore(c$$374, f$$125);
          });
        });
      }
      c$$373.animate(c$$373.to, {queue:!1, duration:b$$466.duration, easing:b$$466.options.easing, complete:function() {
        c$$373.to.opacity === 0 && c$$373.css("opacity", c$$373.from.opacity), j$$89 == "hide" && c$$373.hide(), a$$503.effects.restore(c$$373, k$$60 ? d$$292 : e$$266), a$$503.effects.removeWrapper(c$$373), b$$466.callback && b$$466.callback.apply(this, arguments), c$$373.dequeue();
      }});
    });
  };
}(jQuery), function(a$$504, b$$467) {
  a$$504.effects.shake = function(b$$468) {
    return this.queue(function() {
      var c$$375 = a$$504(this);
      var d$$294 = ["position", "top", "bottom", "left", "right"];
      var e$$267 = a$$504.effects.setMode(c$$375, b$$468.options.mode || "effect");
      var f$$126 = b$$468.options.direction || "left";
      var g$$153 = b$$468.options.distance || 20;
      var h$$124 = b$$468.options.times || 3;
      var i$$181 = b$$468.duration || b$$468.options.duration || 140;
      a$$504.effects.save(c$$375, d$$294), c$$375.show(), a$$504.effects.createWrapper(c$$375);
      var j$$90 = f$$126 == "up" || f$$126 == "down" ? "top" : "left";
      var k$$61 = f$$126 == "up" || f$$126 == "left" ? "pos" : "neg";
      var l$$70 = {};
      var m$$41 = {};
      var n$$90 = {};
      l$$70[j$$90] = (k$$61 == "pos" ? "-=" : "+=") + g$$153, m$$41[j$$90] = (k$$61 == "pos" ? "+=" : "-=") + g$$153 * 2, n$$90[j$$90] = (k$$61 == "pos" ? "-=" : "+=") + g$$153 * 2, c$$375.animate(l$$70, i$$181, b$$468.options.easing);
      var p$$45 = 1;
      for (;p$$45 < h$$124;p$$45++) {
        c$$375.animate(m$$41, i$$181, b$$468.options.easing).animate(n$$90, i$$181, b$$468.options.easing);
      }
      c$$375.animate(m$$41, i$$181, b$$468.options.easing).animate(l$$70, i$$181 / 2, b$$468.options.easing, function() {
        a$$504.effects.restore(c$$375, d$$294), a$$504.effects.removeWrapper(c$$375), b$$468.callback && b$$468.callback.apply(this, arguments);
      }), c$$375.queue("fx", function() {
        c$$375.dequeue();
      }), c$$375.dequeue();
    });
  };
}(jQuery), function(a$$505, b$$469) {
  a$$505.effects.slide = function(b$$470) {
    return this.queue(function() {
      var c$$376 = a$$505(this);
      var d$$295 = ["position", "top", "bottom", "left", "right"];
      var e$$268 = a$$505.effects.setMode(c$$376, b$$470.options.mode || "show");
      var f$$127 = b$$470.options.direction || "left";
      a$$505.effects.save(c$$376, d$$295), c$$376.show(), a$$505.effects.createWrapper(c$$376).css({overflow:"hidden"});
      var g$$154 = f$$127 == "up" || f$$127 == "down" ? "top" : "left";
      var h$$125 = f$$127 == "up" || f$$127 == "left" ? "pos" : "neg";
      var i$$182 = b$$470.options.distance || (g$$154 == "top" ? c$$376.outerHeight(!0) : c$$376.outerWidth(!0));
      e$$268 == "show" && c$$376.css(g$$154, h$$125 == "pos" ? isNaN(i$$182) ? "-" + i$$182 : -i$$182 : i$$182);
      var j$$91 = {};
      j$$91[g$$154] = (e$$268 == "show" ? h$$125 == "pos" ? "+=" : "-=" : h$$125 == "pos" ? "-=" : "+=") + i$$182, c$$376.animate(j$$91, {queue:!1, duration:b$$470.duration, easing:b$$470.options.easing, complete:function() {
        e$$268 == "hide" && c$$376.hide(), a$$505.effects.restore(c$$376, d$$295), a$$505.effects.removeWrapper(c$$376), b$$470.callback && b$$470.callback.apply(this, arguments), c$$376.dequeue();
      }});
    });
  };
}(jQuery), function(a$$506, b$$471) {
  a$$506.effects.transfer = function(b$$472) {
    return this.queue(function() {
      var c$$377 = a$$506(this);
      var d$$296 = a$$506(b$$472.options.to);
      var e$$269 = d$$296.offset();
      var f$$128 = {top:e$$269.top, left:e$$269.left, height:d$$296.innerHeight(), width:d$$296.innerWidth()};
      var g$$155 = c$$377.offset();
      var h$$126 = a$$506('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b$$472.options.className).css({top:g$$155.top, left:g$$155.left, height:c$$377.innerHeight(), width:c$$377.innerWidth(), position:"absolute"}).animate(f$$128, b$$472.duration, b$$472.options.easing, function() {
        h$$126.remove(), b$$472.callback && b$$472.callback.apply(c$$377[0], arguments), c$$377.dequeue();
      });
    });
  };
}(jQuery), function(a$$507, b$$473) {
  a$$507.widget("ui.accordion", {options:{active:0, animated:"slide", autoHeight:!0, clearStyle:!1, collapsible:!1, event:"click", fillSpace:!1, header:"> li > :first-child,> :not(li):even", icons:{header:"ui-icon-triangle-1-e", headerSelected:"ui-icon-triangle-1-s"}, navigation:!1, navigationFilter:function() {
    return this.href.toLowerCase() === location.href.toLowerCase();
  }}, _create:function() {
    var b$$474 = this;
    var c$$378 = b$$474.options;
    b$$474.running = 0, b$$474.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"), b$$474.headers = b$$474.element.find(c$$378.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function() {
      if (c$$378.disabled) {
        return;
      }
      a$$507(this).addClass("ui-state-hover");
    }).bind("mouseleave.accordion", function() {
      if (c$$378.disabled) {
        return;
      }
      a$$507(this).removeClass("ui-state-hover");
    }).bind("focus.accordion", function() {
      if (c$$378.disabled) {
        return;
      }
      a$$507(this).addClass("ui-state-focus");
    }).bind("blur.accordion", function() {
      if (c$$378.disabled) {
        return;
      }
      a$$507(this).removeClass("ui-state-focus");
    }), b$$474.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
    if (c$$378.navigation) {
      var d$$297 = b$$474.element.find("a").filter(c$$378.navigationFilter).eq(0);
      if (d$$297.length) {
        var e$$270 = d$$297.closest(".ui-accordion-header");
        e$$270.length ? b$$474.active = e$$270 : b$$474.active = d$$297.closest(".ui-accordion-content").prev();
      }
    }
    b$$474.active = b$$474._findActive(b$$474.active || c$$378.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"), b$$474.active.next().addClass("ui-accordion-content-active"), b$$474._createIcons(), b$$474.resize(), b$$474.element.attr("role", "tablist"), b$$474.headers.attr("role", "tab").bind("keydown.accordion", function(a$$508) {
      return b$$474._keydown(a$$508);
    }).next().attr("role", "tabpanel"), b$$474.headers.not(b$$474.active || "").attr({"aria-expanded":"false", "aria-selected":"false", tabIndex:-1}).next().hide(), b$$474.active.length ? b$$474.active.attr({"aria-expanded":"true", "aria-selected":"true", tabIndex:0}) : b$$474.headers.eq(0).attr("tabIndex", 0), a$$507.browser.safari || b$$474.headers.find("a").attr("tabIndex", -1), c$$378.event && b$$474.headers.bind(c$$378.event.split(" ").join(".accordion ") + ".accordion", function(a$$509) {
      b$$474._clickHandler.call(b$$474, a$$509, this), a$$509.preventDefault();
    });
  }, _createIcons:function() {
    var b$$475 = this.options;
    b$$475.icons && (a$$507("<span></span>").addClass("ui-icon " + b$$475.icons.header).prependTo(this.headers), this.active.children(".ui-icon").toggleClass(b$$475.icons.header).toggleClass(b$$475.icons.headerSelected), this.element.addClass("ui-accordion-icons"));
  }, _destroyIcons:function() {
    this.headers.children(".ui-icon").remove(), this.element.removeClass("ui-accordion-icons");
  }, destroy:function() {
    var b$$476 = this.options;
    this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"), this.headers.find("a").removeAttr("tabIndex"), this._destroyIcons();
    var c$$379 = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
    return (b$$476.autoHeight || b$$476.fillHeight) && c$$379.css("height", ""), a$$507.Widget.prototype.destroy.call(this);
  }, _setOption:function(b$$477, c$$380) {
    a$$507.Widget.prototype._setOption.apply(this, arguments), b$$477 == "active" && this.activate(c$$380), b$$477 == "icons" && (this._destroyIcons(), c$$380 && this._createIcons()), b$$477 == "disabled" && this.headers.add(this.headers.next())[c$$380 ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled");
  }, _keydown:function(b$$478) {
    if (this.options.disabled || b$$478.altKey || b$$478.ctrlKey) {
      return;
    }
    var c$$381 = a$$507.ui.keyCode;
    var d$$298 = this.headers.length;
    var e$$271 = this.headers.index(b$$478.target);
    var f$$129 = !1;
    switch(b$$478.keyCode) {
      case c$$381.RIGHT:
      ;
      case c$$381.DOWN:
        f$$129 = this.headers[(e$$271 + 1) % d$$298];
        break;
      case c$$381.LEFT:
      ;
      case c$$381.UP:
        f$$129 = this.headers[(e$$271 - 1 + d$$298) % d$$298];
        break;
      case c$$381.SPACE:
      ;
      case c$$381.ENTER:
        this._clickHandler({target:b$$478.target}, b$$478.target), b$$478.preventDefault();
    }
    return f$$129 ? (a$$507(b$$478.target).attr("tabIndex", -1), a$$507(f$$129).attr("tabIndex", 0), f$$129.focus(), !1) : !0;
  }, resize:function() {
    var b$$479 = this.options;
    var c$$382;
    if (b$$479.fillSpace) {
      if (a$$507.browser.msie) {
        var d$$299 = this.element.parent().css("overflow");
        this.element.parent().css("overflow", "hidden");
      }
      c$$382 = this.element.parent().height(), a$$507.browser.msie && this.element.parent().css("overflow", d$$299), this.headers.each(function() {
        c$$382 -= a$$507(this).outerHeight(!0);
      }), this.headers.next().each(function() {
        a$$507(this).height(Math.max(0, c$$382 - a$$507(this).innerHeight() + a$$507(this).height()));
      }).css("overflow", "auto");
    } else {
      b$$479.autoHeight && (c$$382 = 0, this.headers.next().each(function() {
        c$$382 = Math.max(c$$382, a$$507(this).height("").height());
      }).height(c$$382));
    }
    return this;
  }, activate:function(a$$510) {
    this.options.active = a$$510;
    var b$$480 = this._findActive(a$$510)[0];
    return this._clickHandler({target:b$$480}, b$$480), this;
  }, _findActive:function(b$$481) {
    return b$$481 ? typeof b$$481 == "number" ? this.headers.filter(":eq(" + b$$481 + ")") : this.headers.not(this.headers.not(b$$481)) : b$$481 === !1 ? a$$507([]) : this.headers.filter(":eq(0)");
  }, _clickHandler:function(b$$482, c$$383) {
    var d$$300 = this.options;
    if (d$$300.disabled) {
      return;
    }
    if (!b$$482.target) {
      if (!d$$300.collapsible) {
        return;
      }
      this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d$$300.icons.headerSelected).addClass(d$$300.icons.header), this.active.next().addClass("ui-accordion-content-active");
      var e$$272 = this.active.next();
      var f$$130 = {options:d$$300, newHeader:a$$507([]), oldHeader:d$$300.active, newContent:a$$507([]), oldContent:e$$272};
      var g$$156 = this.active = a$$507([]);
      this._toggle(g$$156, e$$272, f$$130);
      return;
    }
    var h$$127 = a$$507(b$$482.currentTarget || c$$383);
    var i$$183 = h$$127[0] === this.active[0];
    d$$300.active = d$$300.collapsible && i$$183 ? !1 : this.headers.index(h$$127);
    if (this.running || !d$$300.collapsible && i$$183) {
      return;
    }
    var j$$92 = this.active;
    g$$156 = h$$127.next();
    e$$272 = this.active.next();
    f$$130 = {options:d$$300, newHeader:i$$183 && d$$300.collapsible ? a$$507([]) : h$$127, oldHeader:this.active, newContent:i$$183 && d$$300.collapsible ? a$$507([]) : g$$156, oldContent:e$$272};
    var k$$62 = this.headers.index(this.active[0]) > this.headers.index(h$$127[0]);
    this.active = i$$183 ? a$$507([]) : h$$127, this._toggle(g$$156, e$$272, f$$130, i$$183, k$$62), j$$92.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d$$300.icons.headerSelected).addClass(d$$300.icons.header), i$$183 || (h$$127.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d$$300.icons.header).addClass(d$$300.icons.headerSelected), h$$127.next().addClass("ui-accordion-content-active"));
  }, _toggle:function(b$$483, c$$384, d$$301, e$$273, f$$131) {
    function i$$184() {
      if (!g$$157) {
        return;
      }
      return g$$157._completed.apply(g$$157, arguments);
    }
    var g$$157 = this;
    var h$$128 = g$$157.options;
    g$$157.toShow = b$$483, g$$157.toHide = c$$384, g$$157.data = d$$301;
    g$$157._trigger("changestart", null, g$$157.data), g$$157.running = c$$384.size() === 0 ? b$$483.size() : c$$384.size();
    if (h$$128.animated) {
      var j$$93 = {};
      h$$128.collapsible && e$$273 ? j$$93 = {toShow:a$$507([]), toHide:c$$384, complete:i$$184, down:f$$131, autoHeight:h$$128.autoHeight || h$$128.fillSpace} : j$$93 = {toShow:b$$483, toHide:c$$384, complete:i$$184, down:f$$131, autoHeight:h$$128.autoHeight || h$$128.fillSpace}, h$$128.proxied || (h$$128.proxied = h$$128.animated), h$$128.proxiedDuration || (h$$128.proxiedDuration = h$$128.duration), h$$128.animated = a$$507.isFunction(h$$128.proxied) ? h$$128.proxied(j$$93) : h$$128.proxied, h$$128.duration = 
      a$$507.isFunction(h$$128.proxiedDuration) ? h$$128.proxiedDuration(j$$93) : h$$128.proxiedDuration;
      var k$$63 = a$$507.ui.accordion.animations;
      var l$$71 = h$$128.duration;
      var m$$42 = h$$128.animated;
      m$$42 && !k$$63[m$$42] && !a$$507.easing[m$$42] && (m$$42 = "slide"), k$$63[m$$42] || (k$$63[m$$42] = function(a$$511) {
        this.slide(a$$511, {easing:m$$42, duration:l$$71 || 700});
      }), k$$63[m$$42](j$$93);
    } else {
      h$$128.collapsible && e$$273 ? b$$483.toggle() : (c$$384.hide(), b$$483.show()), i$$184(!0);
    }
    c$$384.prev().attr({"aria-expanded":"false", "aria-selected":"false", tabIndex:-1}).blur(), b$$483.prev().attr({"aria-expanded":"true", "aria-selected":"true", tabIndex:0}).focus();
  }, _completed:function(a$$512) {
    this.running = a$$512 ? 0 : --this.running;
    if (this.running) {
      return;
    }
    this.options.clearStyle && this.toShow.add(this.toHide).css({height:"", overflow:""}), this.toHide.removeClass("ui-accordion-content-active"), this.toHide.length && (this.toHide.parent()[0].className = this.toHide.parent()[0].className), this._trigger("change", null, this.data);
  }}), a$$507.extend(a$$507.ui.accordion, {version:"1.8.24", animations:{slide:function(b$$484, c$$385) {
    b$$484 = a$$507.extend({easing:"swing", duration:300}, b$$484, c$$385);
    if (!b$$484.toHide.size()) {
      b$$484.toShow.animate({height:"show", paddingTop:"show", paddingBottom:"show"}, b$$484);
      return;
    }
    if (!b$$484.toShow.size()) {
      b$$484.toHide.animate({height:"hide", paddingTop:"hide", paddingBottom:"hide"}, b$$484);
      return;
    }
    var d$$302 = b$$484.toShow.css("overflow");
    var e$$274 = 0;
    var f$$132 = {};
    var g$$158 = {};
    var h$$129 = ["height", "paddingTop", "paddingBottom"];
    var i$$185;
    var j$$94 = b$$484.toShow;
    i$$185 = j$$94[0].style.width, j$$94.width(j$$94.parent().width() - parseFloat(j$$94.css("paddingLeft")) - parseFloat(j$$94.css("paddingRight")) - (parseFloat(j$$94.css("borderLeftWidth")) || 0) - (parseFloat(j$$94.css("borderRightWidth")) || 0)), a$$507.each(h$$129, function(c$$386, d$$303) {
      g$$158[d$$303] = "hide";
      var e$$275 = ("" + a$$507.css(b$$484.toShow[0], d$$303)).match(/^([\d+-.]+)(.*)$/);
      f$$132[d$$303] = {value:e$$275[1], unit:e$$275[2] || "px"};
    }), b$$484.toShow.css({height:0, overflow:"hidden"}).show(), b$$484.toHide.filter(":hidden").each(b$$484.complete).end().filter(":visible").animate(g$$158, {step:function(a$$513, c$$387) {
      c$$387.prop == "height" && (e$$274 = c$$387.end - c$$387.start === 0 ? 0 : (c$$387.now - c$$387.start) / (c$$387.end - c$$387.start)), b$$484.toShow[0].style[c$$387.prop] = e$$274 * f$$132[c$$387.prop].value + f$$132[c$$387.prop].unit;
    }, duration:b$$484.duration, easing:b$$484.easing, complete:function() {
      b$$484.autoHeight || b$$484.toShow.css("height", ""), b$$484.toShow.css({width:i$$185, overflow:d$$302}), b$$484.complete();
    }});
  }, bounceslide:function(a$$514) {
    this.slide(a$$514, {easing:a$$514.down ? "easeOutBounce" : "swing", duration:a$$514.down ? 1E3 : 200});
  }}});
}(jQuery), function(a$$515, b$$485) {
  var c$$388 = 0;
  a$$515.widget("ui.autocomplete", {options:{appendTo:"body", autoFocus:!1, delay:300, minLength:1, position:{my:"left top", at:"left bottom", collision:"none"}, source:null}, pending:0, _create:function() {
    var b$$486 = this;
    var c$$389 = this.element[0].ownerDocument;
    var d$$304;
    this.isMultiLine = this.element.is("textarea"), this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({role:"textbox", "aria-autocomplete":"list", "aria-haspopup":"true"}).bind("keydown.autocomplete", function(c$$390) {
      if (b$$486.options.disabled || b$$486.element.propAttr("readOnly")) {
        return;
      }
      d$$304 = !1;
      var e$$276 = a$$515.ui.keyCode;
      switch(c$$390.keyCode) {
        case e$$276.PAGE_UP:
          b$$486._move("previousPage", c$$390);
          break;
        case e$$276.PAGE_DOWN:
          b$$486._move("nextPage", c$$390);
          break;
        case e$$276.UP:
          b$$486._keyEvent("previous", c$$390);
          break;
        case e$$276.DOWN:
          b$$486._keyEvent("next", c$$390);
          break;
        case e$$276.ENTER:
        ;
        case e$$276.NUMPAD_ENTER:
          b$$486.menu.active && (d$$304 = !0, c$$390.preventDefault());
        case e$$276.TAB:
          if (!b$$486.menu.active) {
            return;
          }
          b$$486.menu.select(c$$390);
          break;
        case e$$276.ESCAPE:
          b$$486.element.val(b$$486.term), b$$486.close(c$$390);
          break;
        default:
          clearTimeout(b$$486.searching), b$$486.searching = setTimeout(function() {
            b$$486.term != b$$486.element.val() && (b$$486.selectedItem = null, b$$486.search(null, c$$390));
          }, b$$486.options.delay);
      }
    }).bind("keypress.autocomplete", function(a$$516) {
      d$$304 && (d$$304 = !1, a$$516.preventDefault());
    }).bind("focus.autocomplete", function() {
      if (b$$486.options.disabled) {
        return;
      }
      b$$486.selectedItem = null, b$$486.previous = b$$486.element.val();
    }).bind("blur.autocomplete", function(a$$517) {
      if (b$$486.options.disabled) {
        return;
      }
      clearTimeout(b$$486.searching), b$$486.closing = setTimeout(function() {
        b$$486.close(a$$517), b$$486._change(a$$517);
      }, 150);
    }), this._initSource(), this.menu = a$$515("<ul></ul>").addClass("ui-autocomplete").appendTo(a$$515(this.options.appendTo || "body", c$$389)[0]).mousedown(function(c$$391) {
      var d$$305 = b$$486.menu.element[0];
      a$$515(c$$391.target).closest(".ui-menu-item").length || setTimeout(function() {
        a$$515(document).one("mousedown", function(c$$392) {
          c$$392.target !== b$$486.element[0] && c$$392.target !== d$$305 && !a$$515.ui.contains(d$$305, c$$392.target) && b$$486.close();
        });
      }, 1), setTimeout(function() {
        clearTimeout(b$$486.closing);
      }, 13);
    }).menu({focus:function(a$$518, c$$393) {
      var d$$306 = c$$393.item.data("item.autocomplete");
      !1 !== b$$486._trigger("focus", a$$518, {item:d$$306}) && /^key/.test(a$$518.originalEvent.type) && b$$486.element.val(d$$306.value);
    }, selected:function(a$$519, d$$307) {
      var e$$277 = d$$307.item.data("item.autocomplete");
      var f$$133 = b$$486.previous;
      b$$486.element[0] !== c$$389.activeElement && (b$$486.element.focus(), b$$486.previous = f$$133, setTimeout(function() {
        b$$486.previous = f$$133, b$$486.selectedItem = e$$277;
      }, 1)), !1 !== b$$486._trigger("select", a$$519, {item:e$$277}) && b$$486.element.val(e$$277.value), b$$486.term = b$$486.element.val(), b$$486.close(a$$519), b$$486.selectedItem = e$$277;
    }, blur:function(a$$520, c$$394) {
      b$$486.menu.element.is(":visible") && b$$486.element.val() !== b$$486.term && b$$486.element.val(b$$486.term);
    }}).zIndex(this.element.zIndex() + 1).css({top:0, left:0}).hide().data("menu"), a$$515.fn.bgiframe && this.menu.element.bgiframe(), b$$486.beforeunloadHandler = function() {
      b$$486.element.removeAttr("autocomplete");
    }, a$$515(window).bind("beforeunload", b$$486.beforeunloadHandler);
  }, destroy:function() {
    this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), this.menu.element.remove(), a$$515(window).unbind("beforeunload", this.beforeunloadHandler), a$$515.Widget.prototype.destroy.call(this);
  }, _setOption:function(b$$487, c$$395) {
    a$$515.Widget.prototype._setOption.apply(this, arguments), b$$487 === "source" && this._initSource(), b$$487 === "appendTo" && this.menu.element.appendTo(a$$515(c$$395 || "body", this.element[0].ownerDocument)[0]), b$$487 === "disabled" && c$$395 && this.xhr && this.xhr.abort();
  }, _initSource:function() {
    var b$$488 = this;
    var c$$396;
    var d$$308;
    a$$515.isArray(this.options.source) ? (c$$396 = this.options.source, this.source = function(b$$489, d$$309) {
      d$$309(a$$515.ui.autocomplete.filter(c$$396, b$$489.term));
    }) : typeof this.options.source == "string" ? (d$$308 = this.options.source, this.source = function(c$$397, e$$278) {
      b$$488.xhr && b$$488.xhr.abort(), b$$488.xhr = a$$515.ajax({url:d$$308, data:c$$397, dataType:"json", success:function(a$$521, b$$490) {
        e$$278(a$$521);
      }, error:function() {
        e$$278([]);
      }});
    }) : this.source = this.options.source;
  }, search:function(a$$522, b$$491) {
    a$$522 = a$$522 != null ? a$$522 : this.element.val(), this.term = this.element.val();
    if (a$$522.length < this.options.minLength) {
      return this.close(b$$491);
    }
    clearTimeout(this.closing);
    if (this._trigger("search", b$$491) === !1) {
      return;
    }
    return this._search(a$$522);
  }, _search:function(a$$523) {
    this.pending++, this.element.addClass("ui-autocomplete-loading"), this.source({term:a$$523}, this._response());
  }, _response:function() {
    var a$$524 = this;
    var b$$492 = ++c$$388;
    return function(d$$310) {
      b$$492 === c$$388 && a$$524.__response(d$$310), a$$524.pending--, a$$524.pending || a$$524.element.removeClass("ui-autocomplete-loading");
    };
  }, __response:function(a$$525) {
    !this.options.disabled && a$$525 && a$$525.length ? (a$$525 = this._normalize(a$$525), this._suggest(a$$525), this._trigger("open")) : this.close();
  }, close:function(a$$526) {
    clearTimeout(this.closing), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", a$$526));
  }, _change:function(a$$527) {
    this.previous !== this.element.val() && this._trigger("change", a$$527, {item:this.selectedItem});
  }, _normalize:function(b$$493) {
    return b$$493.length && b$$493[0].label && b$$493[0].value ? b$$493 : a$$515.map(b$$493, function(b$$494) {
      return typeof b$$494 == "string" ? {label:b$$494, value:b$$494} : a$$515.extend({label:b$$494.label || b$$494.value, value:b$$494.value || b$$494.label}, b$$494);
    });
  }, _suggest:function(b$$495) {
    var c$$398 = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
    this._renderMenu(c$$398, b$$495), this.menu.deactivate(), this.menu.refresh(), c$$398.show(), this._resizeMenu(), c$$398.position(a$$515.extend({of:this.element}, this.options.position)), this.options.autoFocus && this.menu.next(new a$$515.Event("mouseover"));
  }, _resizeMenu:function() {
    var a$$528 = this.menu.element;
    a$$528.outerWidth(Math.max(a$$528.width("").outerWidth() + 1, this.element.outerWidth()));
  }, _renderMenu:function(b$$496, c$$399) {
    var d$$311 = this;
    a$$515.each(c$$399, function(a$$529, c$$400) {
      d$$311._renderItem(b$$496, c$$400);
    });
  }, _renderItem:function(b$$497, c$$401) {
    return a$$515("<li></li>").data("item.autocomplete", c$$401).append(a$$515("<a></a>").text(c$$401.label)).appendTo(b$$497);
  }, _move:function(a$$530, b$$498) {
    if (!this.menu.element.is(":visible")) {
      this.search(null, b$$498);
      return;
    }
    if (this.menu.first() && /^previous/.test(a$$530) || this.menu.last() && /^next/.test(a$$530)) {
      this.element.val(this.term), this.menu.deactivate();
      return;
    }
    this.menu[a$$530](b$$498);
  }, widget:function() {
    return this.menu.element;
  }, _keyEvent:function(a$$531, b$$499) {
    if (!this.isMultiLine || this.menu.element.is(":visible")) {
      this._move(a$$531, b$$499), b$$499.preventDefault();
    }
  }}), a$$515.extend(a$$515.ui.autocomplete, {escapeRegex:function(a$$532) {
    return a$$532.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }, filter:function(b$$500, c$$402) {
    var d$$312 = new RegExp(a$$515.ui.autocomplete.escapeRegex(c$$402), "i");
    return a$$515.grep(b$$500, function(a$$533) {
      return d$$312.test(a$$533.label || a$$533.value || a$$533);
    });
  }});
}(jQuery), function(a$$534) {
  a$$534.widget("ui.menu", {_create:function() {
    var b$$501 = this;
    this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox", "aria-activedescendant":"ui-active-menuitem"}).click(function(c$$403) {
      if (!a$$534(c$$403.target).closest(".ui-menu-item a").length) {
        return;
      }
      c$$403.preventDefault(), b$$501.select(c$$403);
    }), this.refresh();
  }, refresh:function() {
    var b$$502 = this;
    var c$$404 = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
    c$$404.children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function(c$$405) {
      b$$502.activate(c$$405, a$$534(this).parent());
    }).mouseleave(function() {
      b$$502.deactivate();
    });
  }, activate:function(a$$535, b$$503) {
    this.deactivate();
    if (this.hasScroll()) {
      var c$$406 = b$$503.offset().top - this.element.offset().top;
      var d$$313 = this.element.scrollTop();
      var e$$279 = this.element.height();
      c$$406 < 0 ? this.element.scrollTop(d$$313 + c$$406) : c$$406 >= e$$279 && this.element.scrollTop(d$$313 + c$$406 - e$$279 + b$$503.height());
    }
    this.active = b$$503.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(), this._trigger("focus", a$$535, {item:b$$503});
  }, deactivate:function() {
    if (!this.active) {
      return;
    }
    this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null;
  }, next:function(a$$536) {
    this.move("next", ".ui-menu-item:first", a$$536);
  }, previous:function(a$$537) {
    this.move("prev", ".ui-menu-item:last", a$$537);
  }, first:function() {
    return this.active && !this.active.prevAll(".ui-menu-item").length;
  }, last:function() {
    return this.active && !this.active.nextAll(".ui-menu-item").length;
  }, move:function(a$$538, b$$504, c$$407) {
    if (!this.active) {
      this.activate(c$$407, this.element.children(b$$504));
      return;
    }
    var d$$314 = this.active[a$$538 + "All"](".ui-menu-item").eq(0);
    d$$314.length ? this.activate(c$$407, d$$314) : this.activate(c$$407, this.element.children(b$$504));
  }, nextPage:function(b$$505) {
    if (this.hasScroll()) {
      if (!this.active || this.last()) {
        this.activate(b$$505, this.element.children(".ui-menu-item:first"));
        return;
      }
      var c$$408 = this.active.offset().top;
      var d$$315 = this.element.height();
      var e$$280 = this.element.children(".ui-menu-item").filter(function() {
        var b$$506 = a$$534(this).offset().top - c$$408 - d$$315 + a$$534(this).height();
        return b$$506 < 10 && b$$506 > -10;
      });
      e$$280.length || (e$$280 = this.element.children(".ui-menu-item:last")), this.activate(b$$505, e$$280);
    } else {
      this.activate(b$$505, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"));
    }
  }, previousPage:function(b$$507) {
    if (this.hasScroll()) {
      if (!this.active || this.first()) {
        this.activate(b$$507, this.element.children(".ui-menu-item:last"));
        return;
      }
      var c$$409 = this.active.offset().top;
      var d$$316 = this.element.height();
      var e$$281 = this.element.children(".ui-menu-item").filter(function() {
        var b$$508 = a$$534(this).offset().top - c$$409 + d$$316 - a$$534(this).height();
        return b$$508 < 10 && b$$508 > -10;
      });
      e$$281.length || (e$$281 = this.element.children(".ui-menu-item:first")), this.activate(b$$507, e$$281);
    } else {
      this.activate(b$$507, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"));
    }
  }, hasScroll:function() {
    return this.element.height() < this.element[a$$534.fn.prop ? "prop" : "attr"]("scrollHeight");
  }, select:function(a$$539) {
    this._trigger("selected", a$$539, {item:this.active});
  }});
}(jQuery), function(a$$540, b$$509) {
  function k$$64(b$$511) {
    var c$$411 = b$$511.name;
    var d$$318 = b$$511.form;
    var e$$283 = a$$540([]);
    return c$$411 && (d$$318 ? e$$283 = a$$540(d$$318).find("[name='" + c$$411 + "']") : e$$283 = a$$540("[name='" + c$$411 + "']", b$$511.ownerDocument).filter(function() {
      return !this.form;
    })), e$$283;
  }
  function j$$95() {
    var b$$510 = a$$540(this).find(":ui-button");
    setTimeout(function() {
      b$$510.button("refresh");
    }, 1);
  }
  var c$$410;
  var d$$317;
  var e$$282;
  var f$$134;
  var g$$159 = "ui-button ui-widget ui-state-default ui-corner-all";
  var h$$130 = "ui-state-hover ui-state-active ";
  var i$$186 = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only";
  a$$540.widget("ui.button", {options:{disabled:null, text:!0, label:null, icons:{primary:null, secondary:null}}, _create:function() {
    this.element.closest("form").unbind("reset.button").bind("reset.button", j$$95), typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.propAttr("disabled") : this.element.propAttr("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
    var b$$512 = this;
    var h$$131 = this.options;
    var i$$187 = this.type === "checkbox" || this.type === "radio";
    var l$$72 = "ui-state-hover" + (i$$187 ? "" : " ui-state-active");
    var m$$43 = "ui-state-focus";
    h$$131.label === null && (h$$131.label = this.buttonElement.html()), this.buttonElement.addClass(g$$159).attr("role", "button").bind("mouseenter.button", function() {
      if (h$$131.disabled) {
        return;
      }
      a$$540(this).addClass("ui-state-hover"), this === c$$410 && a$$540(this).addClass("ui-state-active");
    }).bind("mouseleave.button", function() {
      if (h$$131.disabled) {
        return;
      }
      a$$540(this).removeClass(l$$72);
    }).bind("click.button", function(a$$541) {
      h$$131.disabled && (a$$541.preventDefault(), a$$541.stopImmediatePropagation());
    }), this.element.bind("focus.button", function() {
      b$$512.buttonElement.addClass(m$$43);
    }).bind("blur.button", function() {
      b$$512.buttonElement.removeClass(m$$43);
    }), i$$187 && (this.element.bind("change.button", function() {
      if (f$$134) {
        return;
      }
      b$$512.refresh();
    }), this.buttonElement.bind("mousedown.button", function(a$$542) {
      if (h$$131.disabled) {
        return;
      }
      f$$134 = !1, d$$317 = a$$542.pageX, e$$282 = a$$542.pageY;
    }).bind("mouseup.button", function(a$$543) {
      if (h$$131.disabled) {
        return;
      }
      if (d$$317 !== a$$543.pageX || e$$282 !== a$$543.pageY) {
        f$$134 = !0;
      }
    })), this.type === "checkbox" ? this.buttonElement.bind("click.button", function() {
      if (h$$131.disabled || f$$134) {
        return !1;
      }
      a$$540(this).toggleClass("ui-state-active"), b$$512.buttonElement.attr("aria-pressed", b$$512.element[0].checked);
    }) : this.type === "radio" ? this.buttonElement.bind("click.button", function() {
      if (h$$131.disabled || f$$134) {
        return !1;
      }
      a$$540(this).addClass("ui-state-active"), b$$512.buttonElement.attr("aria-pressed", "true");
      var c$$412 = b$$512.element[0];
      k$$64(c$$412).not(c$$412).map(function() {
        return a$$540(this).button("widget")[0];
      }).removeClass("ui-state-active").attr("aria-pressed", "false");
    }) : (this.buttonElement.bind("mousedown.button", function() {
      if (h$$131.disabled) {
        return !1;
      }
      a$$540(this).addClass("ui-state-active"), c$$410 = this, a$$540(document).one("mouseup", function() {
        c$$410 = null;
      });
    }).bind("mouseup.button", function() {
      if (h$$131.disabled) {
        return !1;
      }
      a$$540(this).removeClass("ui-state-active");
    }).bind("keydown.button", function(b$$513) {
      if (h$$131.disabled) {
        return !1;
      }
      (b$$513.keyCode == a$$540.ui.keyCode.SPACE || b$$513.keyCode == a$$540.ui.keyCode.ENTER) && a$$540(this).addClass("ui-state-active");
    }).bind("keyup.button", function() {
      a$$540(this).removeClass("ui-state-active");
    }), this.buttonElement.is("a") && this.buttonElement.keyup(function(b$$514) {
      b$$514.keyCode === a$$540.ui.keyCode.SPACE && a$$540(this).click();
    })), this._setOption("disabled", h$$131.disabled), this._resetButton();
  }, _determineButtonType:function() {
    this.element.is(":checkbox") ? this.type = "checkbox" : this.element.is(":radio") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button";
    if (this.type === "checkbox" || this.type === "radio") {
      var a$$544 = this.element.parents().filter(":last");
      var b$$515 = "label[for='" + this.element.attr("id") + "']";
      this.buttonElement = a$$544.find(b$$515), this.buttonElement.length || (a$$544 = a$$544.length ? a$$544.siblings() : this.element.siblings(), this.buttonElement = a$$544.filter(b$$515), this.buttonElement.length || (this.buttonElement = a$$544.find(b$$515))), this.element.addClass("ui-helper-hidden-accessible");
      var c$$413 = this.element.is(":checked");
      c$$413 && this.buttonElement.addClass("ui-state-active"), this.buttonElement.attr("aria-pressed", c$$413);
    } else {
      this.buttonElement = this.element;
    }
  }, widget:function() {
    return this.buttonElement;
  }, destroy:function() {
    this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(g$$159 + " " + h$$130 + " " + i$$186).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title"), a$$540.Widget.prototype.destroy.call(this);
  }, _setOption:function(b$$516, c$$414) {
    a$$540.Widget.prototype._setOption.apply(this, arguments);
    if (b$$516 === "disabled") {
      c$$414 ? this.element.propAttr("disabled", !0) : this.element.propAttr("disabled", !1);
      return;
    }
    this._resetButton();
  }, refresh:function() {
    var b$$517 = this.element.is(":disabled");
    b$$517 !== this.options.disabled && this._setOption("disabled", b$$517), this.type === "radio" ? k$$64(this.element[0]).each(function() {
      a$$540(this).is(":checked") ? a$$540(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : a$$540(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false");
    }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"));
  }, _resetButton:function() {
    if (this.type === "input") {
      this.options.label && this.element.val(this.options.label);
      return;
    }
    var b$$518 = this.buttonElement.removeClass(i$$186);
    var c$$415 = a$$540("<span></span>", this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(b$$518.empty()).text();
    var d$$319 = this.options.icons;
    var e$$284 = d$$319.primary && d$$319.secondary;
    var f$$135 = [];
    d$$319.primary || d$$319.secondary ? (this.options.text && f$$135.push("ui-button-text-icon" + (e$$284 ? "s" : d$$319.primary ? "-primary" : "-secondary")), d$$319.primary && b$$518.prepend("<span class='ui-button-icon-primary ui-icon " + d$$319.primary + "'></span>"), d$$319.secondary && b$$518.append("<span class='ui-button-icon-secondary ui-icon " + d$$319.secondary + "'></span>"), this.options.text || (f$$135.push(e$$284 ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || 
    b$$518.attr("title", c$$415))) : f$$135.push("ui-button-text-only"), b$$518.addClass(f$$135.join(" "));
  }}), a$$540.widget("ui.buttonset", {options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"}, _create:function() {
    this.element.addClass("ui-buttonset");
  }, _init:function() {
    this.refresh();
  }, _setOption:function(b$$519, c$$416) {
    b$$519 === "disabled" && this.buttons.button("option", b$$519, c$$416), a$$540.Widget.prototype._setOption.apply(this, arguments);
  }, refresh:function() {
    var b$$520 = this.element.css("direction") === "rtl";
    this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
      return a$$540(this).button("widget")[0];
    }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b$$520 ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(b$$520 ? "ui-corner-left" : "ui-corner-right").end().end();
  }, destroy:function() {
    this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
      return a$$540(this).button("widget")[0];
    }).removeClass("ui-corner-left ui-corner-right").end().button("destroy"), a$$540.Widget.prototype.destroy.call(this);
  }});
}(jQuery), function($$$3, undefined$$1) {
  function Datepicker() {
    this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", 
    this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {closeText:"Done", prevText:"Prev", nextText:"Next", currentText:"Today", monthNames:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort:["Sun", 
    "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin:["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader:"Wk", dateFormat:"mm/dd/yy", firstDay:0, isRTL:!1, showMonthAfterYear:!1, yearSuffix:""}, this._defaults = {showOn:"focus", showAnim:"fadeIn", showOptions:{}, defaultDate:null, appendText:"", buttonText:"...", buttonImage:"", buttonImageOnly:!1, hideIfNoPrevNext:!1, navigationAsDateFormat:!1, gotoCurrent:!1, changeMonth:!1, changeYear:!1, yearRange:"c-10:c+10", showOtherMonths:!1, selectOtherMonths:!1, 
    showWeek:!1, calculateWeek:this.iso8601Week, shortYearCutoff:"+10", minDate:null, maxDate:null, duration:"fast", beforeShowDay:null, beforeShow:null, onSelect:null, onChangeMonthYear:null, onClose:null, numberOfMonths:1, showCurrentAtPos:0, stepMonths:1, stepBigMonths:12, altField:"", altFormat:"", constrainInput:!0, showButtonPanel:!1, autoSize:!1, disabled:!1}, $$$3.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($$$3('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'));
  }
  function bindHover(a$$545) {
    var b$$521 = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return a$$545.bind("mouseout", function(a$$546) {
      var c$$417 = $$$3(a$$546.target).closest(b$$521);
      if (!c$$417.length) {
        return;
      }
      c$$417.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover");
    }).bind("mouseover", function(c$$418) {
      var d$$320 = $$$3(c$$418.target).closest(b$$521);
      if ($$$3.datepicker._isDisabledDatepicker(instActive.inline ? a$$545.parent()[0] : instActive.input[0]) || !d$$320.length) {
        return;
      }
      d$$320.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), d$$320.addClass("ui-state-hover"), d$$320.hasClass("ui-datepicker-prev") && d$$320.addClass("ui-datepicker-prev-hover"), d$$320.hasClass("ui-datepicker-next") && d$$320.addClass("ui-datepicker-next-hover");
    });
  }
  function extendRemove(a$$547, b$$522) {
    $$$3.extend(a$$547, b$$522);
    var c$$419;
    for (c$$419 in b$$522) {
      if (b$$522[c$$419] == null || b$$522[c$$419] == undefined$$1) {
        a$$547[c$$419] = b$$522[c$$419];
      }
    }
  }
  $$$3.extend($$$3.ui, {datepicker:{version:"1.8.24"}});
  var PROP_NAME = "datepicker";
  var dpuuid = (new Date).getTime();
  var instActive;
  $$$3.extend(Datepicker.prototype, {markerClassName:"hasDatepicker", maxRows:4, log:function() {
    this.debug && console.log.apply("", arguments);
  }, _widgetDatepicker:function() {
    return this.dpDiv;
  }, setDefaults:function(a$$549) {
    return extendRemove(this._defaults, a$$549 || {}), this;
  }, _attachDatepicker:function(target$$27, settings) {
    var inlineSettings = null;
    var attrName;
    for (attrName in this._defaults) {
      var attrValue = target$$27.getAttribute("date:" + attrName);
      if (attrValue) {
        inlineSettings = inlineSettings || {};
        try {
          inlineSettings[attrName] = eval(attrValue);
        } catch (err) {
          inlineSettings[attrName] = attrValue;
        }
      }
    }
    var nodeName = target$$27.nodeName.toLowerCase();
    var inline = nodeName == "div" || nodeName == "span";
    target$$27.id || (this.uuid += 1, target$$27.id = "dp" + this.uuid);
    var inst = this._newInst($$$3(target$$27), inline);
    inst.settings = $$$3.extend({}, settings || {}, inlineSettings || {}), nodeName == "input" ? this._connectDatepicker(target$$27, inst) : inline && this._inlineDatepicker(target$$27, inst);
  }, _newInst:function(a$$550, b$$523) {
    var c$$420 = a$$550[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
    return {id:c$$420, input:a$$550, selectedDay:0, selectedMonth:0, selectedYear:0, drawMonth:0, drawYear:0, inline:b$$523, dpDiv:b$$523 ? bindHover($$$3('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv};
  }, _connectDatepicker:function(a$$551, b$$524) {
    var c$$421 = $$$3(a$$551);
    b$$524.append = $$$3([]), b$$524.trigger = $$$3([]);
    if (c$$421.hasClass(this.markerClassName)) {
      return;
    }
    this._attachments(c$$421, b$$524), c$$421.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(a$$552, c$$422, d$$321) {
      b$$524.settings[c$$422] = d$$321;
    }).bind("getData.datepicker", function(a$$553, c$$423) {
      return this._get(b$$524, c$$423);
    }), this._autoSize(b$$524), $$$3.data(a$$551, PROP_NAME, b$$524), b$$524.settings.disabled && this._disableDatepicker(a$$551);
  }, _attachments:function(a$$554, b$$525) {
    var c$$424 = this._get(b$$525, "appendText");
    var d$$322 = this._get(b$$525, "isRTL");
    b$$525.append && b$$525.append.remove(), c$$424 && (b$$525.append = $$$3('<span class="' + this._appendClass + '">' + c$$424 + "</span>"), a$$554[d$$322 ? "before" : "after"](b$$525.append)), a$$554.unbind("focus", this._showDatepicker), b$$525.trigger && b$$525.trigger.remove();
    var e$$285 = this._get(b$$525, "showOn");
    (e$$285 == "focus" || e$$285 == "both") && a$$554.focus(this._showDatepicker);
    if (e$$285 == "button" || e$$285 == "both") {
      var f$$136 = this._get(b$$525, "buttonText");
      var g$$160 = this._get(b$$525, "buttonImage");
      b$$525.trigger = $$$3(this._get(b$$525, "buttonImageOnly") ? $$$3("<img/>").addClass(this._triggerClass).attr({src:g$$160, alt:f$$136, title:f$$136}) : $$$3('<button type="button"></button>').addClass(this._triggerClass).html(g$$160 == "" ? f$$136 : $$$3("<img/>").attr({src:g$$160, alt:f$$136, title:f$$136}))), a$$554[d$$322 ? "before" : "after"](b$$525.trigger), b$$525.trigger.click(function() {
        return $$$3.datepicker._datepickerShowing && $$$3.datepicker._lastInput == a$$554[0] ? $$$3.datepicker._hideDatepicker() : $$$3.datepicker._datepickerShowing && $$$3.datepicker._lastInput != a$$554[0] ? ($$$3.datepicker._hideDatepicker(), $$$3.datepicker._showDatepicker(a$$554[0])) : $$$3.datepicker._showDatepicker(a$$554[0]), !1;
      });
    }
  }, _autoSize:function(a$$555) {
    if (this._get(a$$555, "autoSize") && !a$$555.inline) {
      var b$$526 = new Date(2009, 11, 20);
      var c$$425 = this._get(a$$555, "dateFormat");
      if (c$$425.match(/[DM]/)) {
        var d$$323 = function(a$$556) {
          var b$$527 = 0;
          var c$$426 = 0;
          var d$$324 = 0;
          for (;d$$324 < a$$556.length;d$$324++) {
            a$$556[d$$324].length > b$$527 && (b$$527 = a$$556[d$$324].length, c$$426 = d$$324);
          }
          return c$$426;
        };
        b$$526.setMonth(d$$323(this._get(a$$555, c$$425.match(/MM/) ? "monthNames" : "monthNamesShort"))), b$$526.setDate(d$$323(this._get(a$$555, c$$425.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - b$$526.getDay());
      }
      a$$555.input.attr("size", this._formatDate(a$$555, b$$526).length);
    }
  }, _inlineDatepicker:function(a$$557, b$$528) {
    var c$$427 = $$$3(a$$557);
    if (c$$427.hasClass(this.markerClassName)) {
      return;
    }
    c$$427.addClass(this.markerClassName).append(b$$528.dpDiv).bind("setData.datepicker", function(a$$558, c$$428, d$$325) {
      b$$528.settings[c$$428] = d$$325;
    }).bind("getData.datepicker", function(a$$559, c$$429) {
      return this._get(b$$528, c$$429);
    }), $$$3.data(a$$557, PROP_NAME, b$$528), this._setDate(b$$528, this._getDefaultDate(b$$528), !0), this._updateDatepicker(b$$528), this._updateAlternate(b$$528), b$$528.settings.disabled && this._disableDatepicker(a$$557), b$$528.dpDiv.css("display", "block");
  }, _dialogDatepicker:function(a$$560, b$$529, c$$430, d$$326, e$$286) {
    var f$$137 = this._dialogInst;
    if (!f$$137) {
      this.uuid += 1;
      var g$$161 = "dp" + this.uuid;
      this._dialogInput = $$$3('<input type="text" id="' + g$$161 + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $$$3("body").append(this._dialogInput), f$$137 = this._dialogInst = this._newInst(this._dialogInput, !1), f$$137.settings = {}, $$$3.data(this._dialogInput[0], PROP_NAME, f$$137);
    }
    extendRemove(f$$137.settings, d$$326 || {}), b$$529 = b$$529 && b$$529.constructor == Date ? this._formatDate(f$$137, b$$529) : b$$529, this._dialogInput.val(b$$529), this._pos = e$$286 ? e$$286.length ? e$$286 : [e$$286.pageX, e$$286.pageY] : null;
    if (!this._pos) {
      var h$$132 = document.documentElement.clientWidth;
      var i$$188 = document.documentElement.clientHeight;
      var j$$96 = document.documentElement.scrollLeft || document.body.scrollLeft;
      var k$$65 = document.documentElement.scrollTop || document.body.scrollTop;
      this._pos = [h$$132 / 2 - 100 + j$$96, i$$188 / 2 - 150 + k$$65];
    }
    return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), f$$137.settings.onSelect = c$$430, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $$$3.blockUI && $$$3.blockUI(this.dpDiv), $$$3.data(this._dialogInput[0], PROP_NAME, f$$137), this;
  }, _destroyDatepicker:function(a$$561) {
    var b$$530 = $$$3(a$$561);
    var c$$431 = $$$3.data(a$$561, PROP_NAME);
    if (!b$$530.hasClass(this.markerClassName)) {
      return;
    }
    var d$$327 = a$$561.nodeName.toLowerCase();
    $$$3.removeData(a$$561, PROP_NAME), d$$327 == "input" ? (c$$431.append.remove(), c$$431.trigger.remove(), b$$530.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (d$$327 == "div" || d$$327 == "span") && b$$530.removeClass(this.markerClassName).empty();
  }, _enableDatepicker:function(a$$562) {
    var b$$531 = $$$3(a$$562);
    var c$$432 = $$$3.data(a$$562, PROP_NAME);
    if (!b$$531.hasClass(this.markerClassName)) {
      return;
    }
    var d$$328 = a$$562.nodeName.toLowerCase();
    if (d$$328 == "input") {
      a$$562.disabled = !1, c$$432.trigger.filter("button").each(function() {
        this.disabled = !1;
      }).end().filter("img").css({opacity:"1.0", cursor:""});
    } else {
      if (d$$328 == "div" || d$$328 == "span") {
        var e$$287 = b$$531.children("." + this._inlineClass);
        e$$287.children().removeClass("ui-state-disabled"), e$$287.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled");
      }
    }
    this._disabledInputs = $$$3.map(this._disabledInputs, function(b$$532) {
      return b$$532 == a$$562 ? null : b$$532;
    });
  }, _disableDatepicker:function(a$$563) {
    var b$$533 = $$$3(a$$563);
    var c$$433 = $$$3.data(a$$563, PROP_NAME);
    if (!b$$533.hasClass(this.markerClassName)) {
      return;
    }
    var d$$329 = a$$563.nodeName.toLowerCase();
    if (d$$329 == "input") {
      a$$563.disabled = !0, c$$433.trigger.filter("button").each(function() {
        this.disabled = !0;
      }).end().filter("img").css({opacity:"0.5", cursor:"default"});
    } else {
      if (d$$329 == "div" || d$$329 == "span") {
        var e$$288 = b$$533.children("." + this._inlineClass);
        e$$288.children().addClass("ui-state-disabled"), e$$288.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled");
      }
    }
    this._disabledInputs = $$$3.map(this._disabledInputs, function(b$$534) {
      return b$$534 == a$$563 ? null : b$$534;
    }), this._disabledInputs[this._disabledInputs.length] = a$$563;
  }, _isDisabledDatepicker:function(a$$564) {
    if (!a$$564) {
      return !1;
    }
    var b$$535 = 0;
    for (;b$$535 < this._disabledInputs.length;b$$535++) {
      if (this._disabledInputs[b$$535] == a$$564) {
        return !0;
      }
    }
    return !1;
  }, _getInst:function(a$$565) {
    try {
      return $$$3.data(a$$565, PROP_NAME);
    } catch (b$$536) {
      throw "Missing instance data for this datepicker";
    }
  }, _optionDatepicker:function(a$$566, b$$537, c$$434) {
    var d$$330 = this._getInst(a$$566);
    if (arguments.length == 2 && typeof b$$537 == "string") {
      return b$$537 == "defaults" ? $$$3.extend({}, $$$3.datepicker._defaults) : d$$330 ? b$$537 == "all" ? $$$3.extend({}, d$$330.settings) : this._get(d$$330, b$$537) : null;
    }
    var e$$289 = b$$537 || {};
    typeof b$$537 == "string" && (e$$289 = {}, e$$289[b$$537] = c$$434);
    if (d$$330) {
      this._curInst == d$$330 && this._hideDatepicker();
      var f$$138 = this._getDateDatepicker(a$$566, !0);
      var g$$162 = this._getMinMaxDate(d$$330, "min");
      var h$$133 = this._getMinMaxDate(d$$330, "max");
      extendRemove(d$$330.settings, e$$289), g$$162 !== null && e$$289.dateFormat !== undefined$$1 && e$$289.minDate === undefined$$1 && (d$$330.settings.minDate = this._formatDate(d$$330, g$$162)), h$$133 !== null && e$$289.dateFormat !== undefined$$1 && e$$289.maxDate === undefined$$1 && (d$$330.settings.maxDate = this._formatDate(d$$330, h$$133)), this._attachments($$$3(a$$566), d$$330), this._autoSize(d$$330), this._setDate(d$$330, f$$138), this._updateAlternate(d$$330), this._updateDatepicker(d$$330);
    }
  }, _changeDatepicker:function(a$$567, b$$538, c$$435) {
    this._optionDatepicker(a$$567, b$$538, c$$435);
  }, _refreshDatepicker:function(a$$568) {
    var b$$539 = this._getInst(a$$568);
    b$$539 && this._updateDatepicker(b$$539);
  }, _setDateDatepicker:function(a$$569, b$$540) {
    var c$$436 = this._getInst(a$$569);
    c$$436 && (this._setDate(c$$436, b$$540), this._updateDatepicker(c$$436), this._updateAlternate(c$$436));
  }, _getDateDatepicker:function(a$$570, b$$541) {
    var c$$437 = this._getInst(a$$570);
    return c$$437 && !c$$437.inline && this._setDateFromField(c$$437, b$$541), c$$437 ? this._getDate(c$$437) : null;
  }, _doKeyDown:function(a$$571) {
    var b$$542 = $$$3.datepicker._getInst(a$$571.target);
    var c$$438 = !0;
    var d$$331 = b$$542.dpDiv.is(".ui-datepicker-rtl");
    b$$542._keyEvent = !0;
    if ($$$3.datepicker._datepickerShowing) {
      switch(a$$571.keyCode) {
        case 9:
          $$$3.datepicker._hideDatepicker(), c$$438 = !1;
          break;
        case 13:
          var e$$290 = $$$3("td." + $$$3.datepicker._dayOverClass + ":not(." + $$$3.datepicker._currentClass + ")", b$$542.dpDiv);
          e$$290[0] && $$$3.datepicker._selectDay(a$$571.target, b$$542.selectedMonth, b$$542.selectedYear, e$$290[0]);
          var f$$139 = $$$3.datepicker._get(b$$542, "onSelect");
          if (f$$139) {
            var g$$163 = $$$3.datepicker._formatDate(b$$542);
            f$$139.apply(b$$542.input ? b$$542.input[0] : null, [g$$163, b$$542]);
          } else {
            $$$3.datepicker._hideDatepicker();
          }
          return !1;
        case 27:
          $$$3.datepicker._hideDatepicker();
          break;
        case 33:
          $$$3.datepicker._adjustDate(a$$571.target, a$$571.ctrlKey ? -$$$3.datepicker._get(b$$542, "stepBigMonths") : -$$$3.datepicker._get(b$$542, "stepMonths"), "M");
          break;
        case 34:
          $$$3.datepicker._adjustDate(a$$571.target, a$$571.ctrlKey ? +$$$3.datepicker._get(b$$542, "stepBigMonths") : +$$$3.datepicker._get(b$$542, "stepMonths"), "M");
          break;
        case 35:
          (a$$571.ctrlKey || a$$571.metaKey) && $$$3.datepicker._clearDate(a$$571.target), c$$438 = a$$571.ctrlKey || a$$571.metaKey;
          break;
        case 36:
          (a$$571.ctrlKey || a$$571.metaKey) && $$$3.datepicker._gotoToday(a$$571.target), c$$438 = a$$571.ctrlKey || a$$571.metaKey;
          break;
        case 37:
          (a$$571.ctrlKey || a$$571.metaKey) && $$$3.datepicker._adjustDate(a$$571.target, d$$331 ? 1 : -1, "D"), c$$438 = a$$571.ctrlKey || a$$571.metaKey, a$$571.originalEvent.altKey && $$$3.datepicker._adjustDate(a$$571.target, a$$571.ctrlKey ? -$$$3.datepicker._get(b$$542, "stepBigMonths") : -$$$3.datepicker._get(b$$542, "stepMonths"), "M");
          break;
        case 38:
          (a$$571.ctrlKey || a$$571.metaKey) && $$$3.datepicker._adjustDate(a$$571.target, -7, "D"), c$$438 = a$$571.ctrlKey || a$$571.metaKey;
          break;
        case 39:
          (a$$571.ctrlKey || a$$571.metaKey) && $$$3.datepicker._adjustDate(a$$571.target, d$$331 ? -1 : 1, "D"), c$$438 = a$$571.ctrlKey || a$$571.metaKey, a$$571.originalEvent.altKey && $$$3.datepicker._adjustDate(a$$571.target, a$$571.ctrlKey ? +$$$3.datepicker._get(b$$542, "stepBigMonths") : +$$$3.datepicker._get(b$$542, "stepMonths"), "M");
          break;
        case 40:
          (a$$571.ctrlKey || a$$571.metaKey) && $$$3.datepicker._adjustDate(a$$571.target, 7, "D"), c$$438 = a$$571.ctrlKey || a$$571.metaKey;
          break;
        default:
          c$$438 = !1;
      }
    } else {
      a$$571.keyCode == 36 && a$$571.ctrlKey ? $$$3.datepicker._showDatepicker(this) : c$$438 = !1;
    }
    c$$438 && (a$$571.preventDefault(), a$$571.stopPropagation());
  }, _doKeyPress:function(a$$572) {
    var b$$543 = $$$3.datepicker._getInst(a$$572.target);
    if ($$$3.datepicker._get(b$$543, "constrainInput")) {
      var c$$439 = $$$3.datepicker._possibleChars($$$3.datepicker._get(b$$543, "dateFormat"));
      var d$$332 = String.fromCharCode(a$$572.charCode == undefined$$1 ? a$$572.keyCode : a$$572.charCode);
      return a$$572.ctrlKey || a$$572.metaKey || d$$332 < " " || !c$$439 || c$$439.indexOf(d$$332) > -1;
    }
  }, _doKeyUp:function(a$$573) {
    var b$$544 = $$$3.datepicker._getInst(a$$573.target);
    if (b$$544.input.val() != b$$544.lastVal) {
      try {
        var c$$440 = $$$3.datepicker.parseDate($$$3.datepicker._get(b$$544, "dateFormat"), b$$544.input ? b$$544.input.val() : null, $$$3.datepicker._getFormatConfig(b$$544));
        c$$440 && ($$$3.datepicker._setDateFromField(b$$544), $$$3.datepicker._updateAlternate(b$$544), $$$3.datepicker._updateDatepicker(b$$544));
      } catch (d$$333) {
        $$$3.datepicker.log(d$$333);
      }
    }
    return !0;
  }, _showDatepicker:function(a$$574) {
    a$$574 = a$$574.target || a$$574, a$$574.nodeName.toLowerCase() != "input" && (a$$574 = $$$3("input", a$$574.parentNode)[0]);
    if ($$$3.datepicker._isDisabledDatepicker(a$$574) || $$$3.datepicker._lastInput == a$$574) {
      return;
    }
    var b$$545 = $$$3.datepicker._getInst(a$$574);
    $$$3.datepicker._curInst && $$$3.datepicker._curInst != b$$545 && ($$$3.datepicker._curInst.dpDiv.stop(!0, !0), b$$545 && $$$3.datepicker._datepickerShowing && $$$3.datepicker._hideDatepicker($$$3.datepicker._curInst.input[0]));
    var c$$441 = $$$3.datepicker._get(b$$545, "beforeShow");
    var d$$334 = c$$441 ? c$$441.apply(a$$574, [a$$574, b$$545]) : {};
    if (d$$334 === !1) {
      return;
    }
    extendRemove(b$$545.settings, d$$334), b$$545.lastVal = null, $$$3.datepicker._lastInput = a$$574, $$$3.datepicker._setDateFromField(b$$545), $$$3.datepicker._inDialog && (a$$574.value = ""), $$$3.datepicker._pos || ($$$3.datepicker._pos = $$$3.datepicker._findPos(a$$574), $$$3.datepicker._pos[1] += a$$574.offsetHeight);
    var e$$291 = !1;
    $$$3(a$$574).parents().each(function() {
      return e$$291 |= $$$3(this).css("position") == "fixed", !e$$291;
    }), e$$291 && $$$3.browser.opera && ($$$3.datepicker._pos[0] -= document.documentElement.scrollLeft, $$$3.datepicker._pos[1] -= document.documentElement.scrollTop);
    var f$$140 = {left:$$$3.datepicker._pos[0], top:$$$3.datepicker._pos[1]};
    $$$3.datepicker._pos = null, b$$545.dpDiv.empty(), b$$545.dpDiv.css({position:"absolute", display:"block", top:"-1000px"}), $$$3.datepicker._updateDatepicker(b$$545), f$$140 = $$$3.datepicker._checkOffset(b$$545, f$$140, e$$291), b$$545.dpDiv.css({position:$$$3.datepicker._inDialog && $$$3.blockUI ? "static" : e$$291 ? "fixed" : "absolute", display:"none", left:f$$140.left + "px", top:f$$140.top + "px"});
    if (!b$$545.inline) {
      var g$$164 = $$$3.datepicker._get(b$$545, "showAnim");
      var h$$134 = $$$3.datepicker._get(b$$545, "duration");
      var i$$189 = function() {
        var a$$575 = b$$545.dpDiv.find("iframe.ui-datepicker-cover");
        if (!!a$$575.length) {
          var c$$442 = $$$3.datepicker._getBorders(b$$545.dpDiv);
          a$$575.css({left:-c$$442[0], top:-c$$442[1], width:b$$545.dpDiv.outerWidth(), height:b$$545.dpDiv.outerHeight()});
        }
      };
      b$$545.dpDiv.zIndex($$$3(a$$574).zIndex() + 1), $$$3.datepicker._datepickerShowing = !0, $$$3.effects && $$$3.effects[g$$164] ? b$$545.dpDiv.show(g$$164, $$$3.datepicker._get(b$$545, "showOptions"), h$$134, i$$189) : b$$545.dpDiv[g$$164 || "show"](g$$164 ? h$$134 : null, i$$189), (!g$$164 || !h$$134) && i$$189(), b$$545.input.is(":visible") && !b$$545.input.is(":disabled") && b$$545.input.focus(), $$$3.datepicker._curInst = b$$545;
    }
  }, _updateDatepicker:function(a$$576) {
    var b$$546 = this;
    b$$546.maxRows = 4;
    var c$$443 = $$$3.datepicker._getBorders(a$$576.dpDiv);
    instActive = a$$576, a$$576.dpDiv.empty().append(this._generateHTML(a$$576)), this._attachHandlers(a$$576);
    var d$$335 = a$$576.dpDiv.find("iframe.ui-datepicker-cover");
    !d$$335.length || d$$335.css({left:-c$$443[0], top:-c$$443[1], width:a$$576.dpDiv.outerWidth(), height:a$$576.dpDiv.outerHeight()}), a$$576.dpDiv.find("." + this._dayOverClass + " a").mouseover();
    var e$$292 = this._getNumberOfMonths(a$$576);
    var f$$141 = e$$292[1];
    var g$$165 = 17;
    a$$576.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), f$$141 > 1 && a$$576.dpDiv.addClass("ui-datepicker-multi-" + f$$141).css("width", g$$165 * f$$141 + "em"), a$$576.dpDiv[(e$$292[0] != 1 || e$$292[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), a$$576.dpDiv[(this._get(a$$576, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), a$$576 == $$$3.datepicker._curInst && $$$3.datepicker._datepickerShowing && a$$576.input && 
    a$$576.input.is(":visible") && !a$$576.input.is(":disabled") && a$$576.input[0] != document.activeElement && a$$576.input.focus();
    if (a$$576.yearshtml) {
      var h$$135 = a$$576.yearshtml;
      setTimeout(function() {
        h$$135 === a$$576.yearshtml && a$$576.yearshtml && a$$576.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a$$576.yearshtml), h$$135 = a$$576.yearshtml = null;
      }, 0);
    }
  }, _getBorders:function(a$$577) {
    function b$$547(a$$578) {
      return {thin:1, medium:2, thick:3}[a$$578] || a$$578;
    }
    return [parseFloat(b$$547(a$$577.css("border-left-width"))), parseFloat(b$$547(a$$577.css("border-top-width")))];
  }, _checkOffset:function(a$$579, b$$548, c$$444) {
    var d$$336 = a$$579.dpDiv.outerWidth();
    var e$$293 = a$$579.dpDiv.outerHeight();
    var f$$142 = a$$579.input ? a$$579.input.outerWidth() : 0;
    var g$$166 = a$$579.input ? a$$579.input.outerHeight() : 0;
    var h$$136 = document.documentElement.clientWidth + (c$$444 ? 0 : $$$3(document).scrollLeft());
    var i$$190 = document.documentElement.clientHeight + (c$$444 ? 0 : $$$3(document).scrollTop());
    return b$$548.left -= this._get(a$$579, "isRTL") ? d$$336 - f$$142 : 0, b$$548.left -= c$$444 && b$$548.left == a$$579.input.offset().left ? $$$3(document).scrollLeft() : 0, b$$548.top -= c$$444 && b$$548.top == a$$579.input.offset().top + g$$166 ? $$$3(document).scrollTop() : 0, b$$548.left -= Math.min(b$$548.left, b$$548.left + d$$336 > h$$136 && h$$136 > d$$336 ? Math.abs(b$$548.left + d$$336 - h$$136) : 0), b$$548.top -= Math.min(b$$548.top, b$$548.top + e$$293 > i$$190 && i$$190 > e$$293 ? 
    Math.abs(e$$293 + g$$166) : 0), b$$548;
  }, _findPos:function(a$$580) {
    var b$$549 = this._getInst(a$$580);
    var c$$445 = this._get(b$$549, "isRTL");
    for (;a$$580 && (a$$580.type == "hidden" || a$$580.nodeType != 1 || $$$3.expr.filters.hidden(a$$580));) {
      a$$580 = a$$580[c$$445 ? "previousSibling" : "nextSibling"];
    }
    var d$$337 = $$$3(a$$580).offset();
    return [d$$337.left, d$$337.top];
  }, _hideDatepicker:function(a$$581) {
    var b$$550 = this._curInst;
    if (!b$$550 || a$$581 && b$$550 != $$$3.data(a$$581, PROP_NAME)) {
      return;
    }
    if (this._datepickerShowing) {
      var c$$446 = this._get(b$$550, "showAnim");
      var d$$338 = this._get(b$$550, "duration");
      var e$$294 = function() {
        $$$3.datepicker._tidyDialog(b$$550);
      };
      $$$3.effects && $$$3.effects[c$$446] ? b$$550.dpDiv.hide(c$$446, $$$3.datepicker._get(b$$550, "showOptions"), d$$338, e$$294) : b$$550.dpDiv[c$$446 == "slideDown" ? "slideUp" : c$$446 == "fadeIn" ? "fadeOut" : "hide"](c$$446 ? d$$338 : null, e$$294), c$$446 || e$$294(), this._datepickerShowing = !1;
      var f$$143 = this._get(b$$550, "onClose");
      f$$143 && f$$143.apply(b$$550.input ? b$$550.input[0] : null, [b$$550.input ? b$$550.input.val() : "", b$$550]), this._lastInput = null, this._inDialog && (this._dialogInput.css({position:"absolute", left:"0", top:"-100px"}), $$$3.blockUI && ($$$3.unblockUI(), $$$3("body").append(this.dpDiv))), this._inDialog = !1;
    }
  }, _tidyDialog:function(a$$582) {
    a$$582.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
  }, _checkExternalClick:function(a$$583) {
    if (!$$$3.datepicker._curInst) {
      return;
    }
    var b$$551 = $$$3(a$$583.target);
    var c$$447 = $$$3.datepicker._getInst(b$$551[0]);
    (b$$551[0].id != $$$3.datepicker._mainDivId && b$$551.parents("#" + $$$3.datepicker._mainDivId).length == 0 && !b$$551.hasClass($$$3.datepicker.markerClassName) && !b$$551.closest("." + $$$3.datepicker._triggerClass).length && $$$3.datepicker._datepickerShowing && (!$$$3.datepicker._inDialog || !$$$3.blockUI) || b$$551.hasClass($$$3.datepicker.markerClassName) && $$$3.datepicker._curInst != c$$447) && $$$3.datepicker._hideDatepicker();
  }, _adjustDate:function(a$$584, b$$552, c$$448) {
    var d$$339 = $$$3(a$$584);
    var e$$295 = this._getInst(d$$339[0]);
    if (this._isDisabledDatepicker(d$$339[0])) {
      return;
    }
    this._adjustInstDate(e$$295, b$$552 + (c$$448 == "M" ? this._get(e$$295, "showCurrentAtPos") : 0), c$$448), this._updateDatepicker(e$$295);
  }, _gotoToday:function(a$$585) {
    var b$$553 = $$$3(a$$585);
    var c$$449 = this._getInst(b$$553[0]);
    if (this._get(c$$449, "gotoCurrent") && c$$449.currentDay) {
      c$$449.selectedDay = c$$449.currentDay, c$$449.drawMonth = c$$449.selectedMonth = c$$449.currentMonth, c$$449.drawYear = c$$449.selectedYear = c$$449.currentYear;
    } else {
      var d$$340 = new Date;
      c$$449.selectedDay = d$$340.getDate(), c$$449.drawMonth = c$$449.selectedMonth = d$$340.getMonth(), c$$449.drawYear = c$$449.selectedYear = d$$340.getFullYear();
    }
    this._notifyChange(c$$449), this._adjustDate(b$$553);
  }, _selectMonthYear:function(a$$586, b$$554, c$$450) {
    var d$$341 = $$$3(a$$586);
    var e$$296 = this._getInst(d$$341[0]);
    e$$296["selected" + (c$$450 == "M" ? "Month" : "Year")] = e$$296["draw" + (c$$450 == "M" ? "Month" : "Year")] = parseInt(b$$554.options[b$$554.selectedIndex].value, 10), this._notifyChange(e$$296), this._adjustDate(d$$341);
  }, _selectDay:function(a$$587, b$$555, c$$451, d$$342) {
    var e$$297 = $$$3(a$$587);
    if ($$$3(d$$342).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e$$297[0])) {
      return;
    }
    var f$$144 = this._getInst(e$$297[0]);
    f$$144.selectedDay = f$$144.currentDay = $$$3("a", d$$342).html(), f$$144.selectedMonth = f$$144.currentMonth = b$$555, f$$144.selectedYear = f$$144.currentYear = c$$451, this._selectDate(a$$587, this._formatDate(f$$144, f$$144.currentDay, f$$144.currentMonth, f$$144.currentYear));
  }, _clearDate:function(a$$588) {
    var b$$556 = $$$3(a$$588);
    var c$$452 = this._getInst(b$$556[0]);
    this._selectDate(b$$556, "");
  }, _selectDate:function(a$$589, b$$557) {
    var c$$453 = $$$3(a$$589);
    var d$$343 = this._getInst(c$$453[0]);
    b$$557 = b$$557 != null ? b$$557 : this._formatDate(d$$343), d$$343.input && d$$343.input.val(b$$557), this._updateAlternate(d$$343);
    var e$$298 = this._get(d$$343, "onSelect");
    e$$298 ? e$$298.apply(d$$343.input ? d$$343.input[0] : null, [b$$557, d$$343]) : d$$343.input && d$$343.input.trigger("change"), d$$343.inline ? this._updateDatepicker(d$$343) : (this._hideDatepicker(), this._lastInput = d$$343.input[0], typeof d$$343.input[0] != "object" && d$$343.input.focus(), this._lastInput = null);
  }, _updateAlternate:function(a$$590) {
    var b$$558 = this._get(a$$590, "altField");
    if (b$$558) {
      var c$$454 = this._get(a$$590, "altFormat") || this._get(a$$590, "dateFormat");
      var d$$344 = this._getDate(a$$590);
      var e$$299 = this.formatDate(c$$454, d$$344, this._getFormatConfig(a$$590));
      $$$3(b$$558).each(function() {
        $$$3(this).val(e$$299);
      });
    }
  }, noWeekends:function(a$$591) {
    var b$$559 = a$$591.getDay();
    return [b$$559 > 0 && b$$559 < 6, ""];
  }, iso8601Week:function(a$$592) {
    var b$$560 = new Date(a$$592.getTime());
    b$$560.setDate(b$$560.getDate() + 4 - (b$$560.getDay() || 7));
    var c$$455 = b$$560.getTime();
    return b$$560.setMonth(0), b$$560.setDate(1), Math.floor(Math.round((c$$455 - b$$560) / 864E5) / 7) + 1;
  }, parseDate:function(a$$593, b$$561, c$$456) {
    function q$$17() {
      if (b$$561.charAt(r$$18) != a$$593.charAt(s$$27)) {
        throw "Unexpected literal at position " + r$$18;
      }
      r$$18++;
    }
    function p$$46(a$$595, c$$459, d$$347) {
      var e$$302 = $$$3.map(n$$91(a$$595) ? d$$347 : c$$459, function(a$$596, b$$563) {
        return [[b$$563, a$$596]];
      }).sort(function(a$$597, b$$564) {
        return -(a$$597[1].length - b$$564[1].length);
      });
      var f$$147 = -1;
      $$$3.each(e$$302, function(a$$598, c$$460) {
        var d$$348 = c$$460[1];
        if (b$$561.substr(r$$18, d$$348.length).toLowerCase() == d$$348.toLowerCase()) {
          return f$$147 = c$$460[0], r$$18 += d$$348.length, !1;
        }
      });
      if (f$$147 != -1) {
        return f$$147 + 1;
      }
      throw "Unknown name at position " + r$$18;
    }
    function o$$21(a$$594) {
      var c$$458 = n$$91(a$$594);
      var d$$346 = a$$594 == "@" ? 14 : a$$594 == "!" ? 20 : a$$594 == "y" && c$$458 ? 4 : a$$594 == "o" ? 3 : 2;
      var e$$301 = new RegExp("^\\d{1," + d$$346 + "}");
      var f$$146 = b$$561.substring(r$$18).match(e$$301);
      if (!f$$146) {
        throw "Missing number at position " + r$$18;
      }
      return r$$18 += f$$146[0].length, parseInt(f$$146[0], 10);
    }
    function n$$91(b$$562) {
      var c$$457 = s$$27 + 1 < a$$593.length && a$$593.charAt(s$$27 + 1) == b$$562;
      return c$$457 && s$$27++, c$$457;
    }
    if (a$$593 == null || b$$561 == null) {
      throw "Invalid arguments";
    }
    b$$561 = typeof b$$561 == "object" ? b$$561.toString() : b$$561 + "";
    if (b$$561 == "") {
      return null;
    }
    var d$$345 = (c$$456 ? c$$456.shortYearCutoff : null) || this._defaults.shortYearCutoff;
    d$$345 = typeof d$$345 != "string" ? d$$345 : (new Date).getFullYear() % 100 + parseInt(d$$345, 10);
    var e$$300 = (c$$456 ? c$$456.dayNamesShort : null) || this._defaults.dayNamesShort;
    var f$$145 = (c$$456 ? c$$456.dayNames : null) || this._defaults.dayNames;
    var g$$167 = (c$$456 ? c$$456.monthNamesShort : null) || this._defaults.monthNamesShort;
    var h$$137 = (c$$456 ? c$$456.monthNames : null) || this._defaults.monthNames;
    var i$$191 = -1;
    var j$$97 = -1;
    var k$$66 = -1;
    var l$$73 = -1;
    var m$$44 = !1;
    var r$$18 = 0;
    var s$$27 = 0;
    for (;s$$27 < a$$593.length;s$$27++) {
      if (m$$44) {
        a$$593.charAt(s$$27) == "'" && !n$$91("'") ? m$$44 = !1 : q$$17();
      } else {
        switch(a$$593.charAt(s$$27)) {
          case "d":
            k$$66 = o$$21("d");
            break;
          case "D":
            p$$46("D", e$$300, f$$145);
            break;
          case "o":
            l$$73 = o$$21("o");
            break;
          case "m":
            j$$97 = o$$21("m");
            break;
          case "M":
            j$$97 = p$$46("M", g$$167, h$$137);
            break;
          case "y":
            i$$191 = o$$21("y");
            break;
          case "@":
            var t$$12 = new Date(o$$21("@"));
            i$$191 = t$$12.getFullYear(), j$$97 = t$$12.getMonth() + 1, k$$66 = t$$12.getDate();
            break;
          case "!":
            t$$12 = new Date((o$$21("!") - this._ticksTo1970) / 1E4);
            i$$191 = t$$12.getFullYear(), j$$97 = t$$12.getMonth() + 1, k$$66 = t$$12.getDate();
            break;
          case "'":
            n$$91("'") ? q$$17() : m$$44 = !0;
            break;
          default:
            q$$17();
        }
      }
    }
    if (r$$18 < b$$561.length) {
      throw "Extra/unparsed characters found in date: " + b$$561.substring(r$$18);
    }
    i$$191 == -1 ? i$$191 = (new Date).getFullYear() : i$$191 < 100 && (i$$191 += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (i$$191 <= d$$345 ? 0 : -100));
    if (l$$73 > -1) {
      j$$97 = 1, k$$66 = l$$73;
      do {
        var u$$10 = this._getDaysInMonth(i$$191, j$$97 - 1);
        if (k$$66 <= u$$10) {
          break;
        }
        j$$97++, k$$66 -= u$$10;
      } while (!0);
    }
    t$$12 = this._daylightSavingAdjust(new Date(i$$191, j$$97 - 1, k$$66));
    if (t$$12.getFullYear() != i$$191 || t$$12.getMonth() + 1 != j$$97 || t$$12.getDate() != k$$66) {
      throw "Invalid date";
    }
    return t$$12;
  }, ATOM:"yy-mm-dd", COOKIE:"D, dd M yy", ISO_8601:"yy-mm-dd", RFC_822:"D, d M y", RFC_850:"DD, dd-M-y", RFC_1036:"D, d M y", RFC_1123:"D, d M yy", RFC_2822:"D, d M yy", RSS:"D, d M y", TICKS:"!", TIMESTAMP:"@", W3C:"yy-mm-dd", _ticksTo1970:(718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1E7, formatDate:function(a$$599, b$$565, c$$461) {
    function j$$98(a$$601, b$$568, c$$464, d$$351) {
      return h$$138(a$$601) ? d$$351[b$$568] : c$$464[b$$568];
    }
    function i$$192(a$$600, b$$567, c$$463) {
      var d$$350 = "" + b$$567;
      if (h$$138(a$$600)) {
        for (;d$$350.length < c$$463;) {
          d$$350 = "0" + d$$350;
        }
      }
      return d$$350;
    }
    function h$$138(b$$566) {
      var c$$462 = m$$45 + 1 < a$$599.length && a$$599.charAt(m$$45 + 1) == b$$566;
      return c$$462 && m$$45++, c$$462;
    }
    if (!b$$565) {
      return "";
    }
    var d$$349 = (c$$461 ? c$$461.dayNamesShort : null) || this._defaults.dayNamesShort;
    var e$$303 = (c$$461 ? c$$461.dayNames : null) || this._defaults.dayNames;
    var f$$148 = (c$$461 ? c$$461.monthNamesShort : null) || this._defaults.monthNamesShort;
    var g$$168 = (c$$461 ? c$$461.monthNames : null) || this._defaults.monthNames;
    var k$$67 = "";
    var l$$74 = !1;
    if (b$$565) {
      var m$$45 = 0;
      for (;m$$45 < a$$599.length;m$$45++) {
        if (l$$74) {
          a$$599.charAt(m$$45) == "'" && !h$$138("'") ? l$$74 = !1 : k$$67 += a$$599.charAt(m$$45);
        } else {
          switch(a$$599.charAt(m$$45)) {
            case "d":
              k$$67 += i$$192("d", b$$565.getDate(), 2);
              break;
            case "D":
              k$$67 += j$$98("D", b$$565.getDay(), d$$349, e$$303);
              break;
            case "o":
              k$$67 += i$$192("o", Math.round(((new Date(b$$565.getFullYear(), b$$565.getMonth(), b$$565.getDate())).getTime() - (new Date(b$$565.getFullYear(), 0, 0)).getTime()) / 864E5), 3);
              break;
            case "m":
              k$$67 += i$$192("m", b$$565.getMonth() + 1, 2);
              break;
            case "M":
              k$$67 += j$$98("M", b$$565.getMonth(), f$$148, g$$168);
              break;
            case "y":
              k$$67 += h$$138("y") ? b$$565.getFullYear() : (b$$565.getYear() % 100 < 10 ? "0" : "") + b$$565.getYear() % 100;
              break;
            case "@":
              k$$67 += b$$565.getTime();
              break;
            case "!":
              k$$67 += b$$565.getTime() * 1E4 + this._ticksTo1970;
              break;
            case "'":
              h$$138("'") ? k$$67 += "'" : l$$74 = !0;
              break;
            default:
              k$$67 += a$$599.charAt(m$$45);
          }
        }
      }
    }
    return k$$67;
  }, _possibleChars:function(a$$602) {
    function d$$352() {
      var b$$570 = "'";
      var c$$466 = e$$304 + 1 < a$$602.length && a$$602.charAt(e$$304 + 1) == b$$570;
      return c$$466 && e$$304++, c$$466;
    }
    var b$$569 = "";
    var c$$465 = !1;
    var e$$304 = 0;
    for (;e$$304 < a$$602.length;e$$304++) {
      if (c$$465) {
        a$$602.charAt(e$$304) == "'" && !d$$352() ? c$$465 = !1 : b$$569 += a$$602.charAt(e$$304);
      } else {
        switch(a$$602.charAt(e$$304)) {
          case "d":
          ;
          case "m":
          ;
          case "y":
          ;
          case "@":
            b$$569 += "0123456789";
            break;
          case "D":
          ;
          case "M":
            return null;
          case "'":
            d$$352() ? b$$569 += "'" : c$$465 = !0;
            break;
          default:
            b$$569 += a$$602.charAt(e$$304);
        }
      }
    }
    return b$$569;
  }, _get:function(a$$603, b$$571) {
    return a$$603.settings[b$$571] !== undefined$$1 ? a$$603.settings[b$$571] : this._defaults[b$$571];
  }, _setDateFromField:function(a$$604, b$$572) {
    if (a$$604.input.val() == a$$604.lastVal) {
      return;
    }
    var c$$467 = this._get(a$$604, "dateFormat");
    var d$$353 = a$$604.lastVal = a$$604.input ? a$$604.input.val() : null;
    var e$$305;
    var f$$149;
    e$$305 = f$$149 = this._getDefaultDate(a$$604);
    var g$$169 = this._getFormatConfig(a$$604);
    try {
      e$$305 = this.parseDate(c$$467, d$$353, g$$169) || f$$149;
    } catch (h$$139) {
      this.log(h$$139), d$$353 = b$$572 ? "" : d$$353;
    }
    a$$604.selectedDay = e$$305.getDate(), a$$604.drawMonth = a$$604.selectedMonth = e$$305.getMonth(), a$$604.drawYear = a$$604.selectedYear = e$$305.getFullYear(), a$$604.currentDay = d$$353 ? e$$305.getDate() : 0, a$$604.currentMonth = d$$353 ? e$$305.getMonth() : 0, a$$604.currentYear = d$$353 ? e$$305.getFullYear() : 0, this._adjustInstDate(a$$604);
  }, _getDefaultDate:function(a$$605) {
    return this._restrictMinMax(a$$605, this._determineDate(a$$605, this._get(a$$605, "defaultDate"), new Date));
  }, _determineDate:function(a$$606, b$$573, c$$468) {
    function e$$306(b$$575) {
      try {
        return $$$3.datepicker.parseDate($$$3.datepicker._get(a$$606, "dateFormat"), b$$575, $$$3.datepicker._getFormatConfig(a$$606));
      } catch (c$$469) {
      }
      var d$$355 = (b$$575.toLowerCase().match(/^c/) ? $$$3.datepicker._getDate(a$$606) : null) || new Date;
      var e$$307 = d$$355.getFullYear();
      var f$$151 = d$$355.getMonth();
      var g$$170 = d$$355.getDate();
      var h$$140 = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
      var i$$193 = h$$140.exec(b$$575);
      for (;i$$193;) {
        switch(i$$193[2] || "d") {
          case "d":
          ;
          case "D":
            g$$170 += parseInt(i$$193[1], 10);
            break;
          case "w":
          ;
          case "W":
            g$$170 += parseInt(i$$193[1], 10) * 7;
            break;
          case "m":
          ;
          case "M":
            f$$151 += parseInt(i$$193[1], 10), g$$170 = Math.min(g$$170, $$$3.datepicker._getDaysInMonth(e$$307, f$$151));
            break;
          case "y":
          ;
          case "Y":
            e$$307 += parseInt(i$$193[1], 10), g$$170 = Math.min(g$$170, $$$3.datepicker._getDaysInMonth(e$$307, f$$151));
        }
        i$$193 = h$$140.exec(b$$575);
      }
      return new Date(e$$307, f$$151, g$$170);
    }
    function d$$354(a$$607) {
      var b$$574 = new Date;
      return b$$574.setDate(b$$574.getDate() + a$$607), b$$574;
    }
    var f$$150 = b$$573 == null || b$$573 === "" ? c$$468 : typeof b$$573 == "string" ? e$$306(b$$573) : typeof b$$573 == "number" ? isNaN(b$$573) ? c$$468 : d$$354(b$$573) : new Date(b$$573.getTime());
    return f$$150 = f$$150 && f$$150.toString() == "Invalid Date" ? c$$468 : f$$150, f$$150 && (f$$150.setHours(0), f$$150.setMinutes(0), f$$150.setSeconds(0), f$$150.setMilliseconds(0)), this._daylightSavingAdjust(f$$150);
  }, _daylightSavingAdjust:function(a$$608) {
    return a$$608 ? (a$$608.setHours(a$$608.getHours() > 12 ? a$$608.getHours() + 2 : 0), a$$608) : null;
  }, _setDate:function(a$$609, b$$576, c$$470) {
    var d$$356 = !b$$576;
    var e$$308 = a$$609.selectedMonth;
    var f$$152 = a$$609.selectedYear;
    var g$$171 = this._restrictMinMax(a$$609, this._determineDate(a$$609, b$$576, new Date));
    a$$609.selectedDay = a$$609.currentDay = g$$171.getDate(), a$$609.drawMonth = a$$609.selectedMonth = a$$609.currentMonth = g$$171.getMonth(), a$$609.drawYear = a$$609.selectedYear = a$$609.currentYear = g$$171.getFullYear(), (e$$308 != a$$609.selectedMonth || f$$152 != a$$609.selectedYear) && !c$$470 && this._notifyChange(a$$609), this._adjustInstDate(a$$609), a$$609.input && a$$609.input.val(d$$356 ? "" : this._formatDate(a$$609));
  }, _getDate:function(a$$610) {
    var b$$577 = !a$$610.currentYear || a$$610.input && a$$610.input.val() == "" ? null : this._daylightSavingAdjust(new Date(a$$610.currentYear, a$$610.currentMonth, a$$610.currentDay));
    return b$$577;
  }, _attachHandlers:function(a$$611) {
    var b$$578 = this._get(a$$611, "stepMonths");
    var c$$471 = "#" + a$$611.id.replace(/\\\\/g, "\\");
    a$$611.dpDiv.find("[data-handler]").map(function() {
      var a$$612 = {prev:function() {
        window["DP_jQuery_" + dpuuid].datepicker._adjustDate(c$$471, -b$$578, "M");
      }, next:function() {
        window["DP_jQuery_" + dpuuid].datepicker._adjustDate(c$$471, +b$$578, "M");
      }, hide:function() {
        window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker();
      }, today:function() {
        window["DP_jQuery_" + dpuuid].datepicker._gotoToday(c$$471);
      }, selectDay:function() {
        return window["DP_jQuery_" + dpuuid].datepicker._selectDay(c$$471, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
      }, selectMonth:function() {
        return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(c$$471, this, "M"), !1;
      }, selectYear:function() {
        return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(c$$471, this, "Y"), !1;
      }};
      $$$3(this).bind(this.getAttribute("data-event"), a$$612[this.getAttribute("data-handler")]);
    });
  }, _generateHTML:function(a$$613) {
    var b$$579 = new Date;
    b$$579 = this._daylightSavingAdjust(new Date(b$$579.getFullYear(), b$$579.getMonth(), b$$579.getDate()));
    var c$$472 = this._get(a$$613, "isRTL");
    var d$$357 = this._get(a$$613, "showButtonPanel");
    var e$$309 = this._get(a$$613, "hideIfNoPrevNext");
    var f$$153 = this._get(a$$613, "navigationAsDateFormat");
    var g$$172 = this._getNumberOfMonths(a$$613);
    var h$$141 = this._get(a$$613, "showCurrentAtPos");
    var i$$194 = this._get(a$$613, "stepMonths");
    var j$$99 = g$$172[0] != 1 || g$$172[1] != 1;
    var k$$68 = this._daylightSavingAdjust(a$$613.currentDay ? new Date(a$$613.currentYear, a$$613.currentMonth, a$$613.currentDay) : new Date(9999, 9, 9));
    var l$$75 = this._getMinMaxDate(a$$613, "min");
    var m$$46 = this._getMinMaxDate(a$$613, "max");
    var n$$92 = a$$613.drawMonth - h$$141;
    var o$$22 = a$$613.drawYear;
    n$$92 < 0 && (n$$92 += 12, o$$22--);
    if (m$$46) {
      var p$$47 = this._daylightSavingAdjust(new Date(m$$46.getFullYear(), m$$46.getMonth() - g$$172[0] * g$$172[1] + 1, m$$46.getDate()));
      p$$47 = l$$75 && p$$47 < l$$75 ? l$$75 : p$$47;
      for (;this._daylightSavingAdjust(new Date(o$$22, n$$92, 1)) > p$$47;) {
        n$$92--, n$$92 < 0 && (n$$92 = 11, o$$22--);
      }
    }
    a$$613.drawMonth = n$$92, a$$613.drawYear = o$$22;
    var q$$18 = this._get(a$$613, "prevText");
    q$$18 = f$$153 ? this.formatDate(q$$18, this._daylightSavingAdjust(new Date(o$$22, n$$92 - i$$194, 1)), this._getFormatConfig(a$$613)) : q$$18;
    var r$$19 = this._canAdjustMonth(a$$613, -1, o$$22, n$$92) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + q$$18 + '"><span class="ui-icon ui-icon-circle-triangle-' + (c$$472 ? "e" : "w") + '">' + q$$18 + "</span></a>" : e$$309 ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + q$$18 + '"><span class="ui-icon ui-icon-circle-triangle-' + (c$$472 ? "e" : "w") + '">' + q$$18 + "</span></a>";
    var s$$28 = this._get(a$$613, "nextText");
    s$$28 = f$$153 ? this.formatDate(s$$28, this._daylightSavingAdjust(new Date(o$$22, n$$92 + i$$194, 1)), this._getFormatConfig(a$$613)) : s$$28;
    var t$$13 = this._canAdjustMonth(a$$613, 1, o$$22, n$$92) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + s$$28 + '"><span class="ui-icon ui-icon-circle-triangle-' + (c$$472 ? "w" : "e") + '">' + s$$28 + "</span></a>" : e$$309 ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + s$$28 + '"><span class="ui-icon ui-icon-circle-triangle-' + (c$$472 ? "w" : "e") + '">' + s$$28 + "</span></a>";
    var u$$11 = this._get(a$$613, "currentText");
    var v$$10 = this._get(a$$613, "gotoCurrent") && a$$613.currentDay ? k$$68 : b$$579;
    u$$11 = f$$153 ? this.formatDate(u$$11, v$$10, this._getFormatConfig(a$$613)) : u$$11;
    var w$$17 = a$$613.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(a$$613, "closeText") + "</button>";
    var x$$73 = d$$357 ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (c$$472 ? w$$17 : "") + (this._isInRange(a$$613, v$$10) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + u$$11 + "</button>" : "") + (c$$472 ? "" : w$$17) + "</div>" : "";
    var y$$54 = parseInt(this._get(a$$613, "firstDay"), 10);
    y$$54 = isNaN(y$$54) ? 0 : y$$54;
    var z$$6 = this._get(a$$613, "showWeek");
    var A$$3 = this._get(a$$613, "dayNames");
    var B$$2 = this._get(a$$613, "dayNamesShort");
    var C$$2 = this._get(a$$613, "dayNamesMin");
    var D$$2 = this._get(a$$613, "monthNames");
    var E$$2 = this._get(a$$613, "monthNamesShort");
    var F$$2 = this._get(a$$613, "beforeShowDay");
    var G$$2 = this._get(a$$613, "showOtherMonths");
    var H$$2 = this._get(a$$613, "selectOtherMonths");
    var I$$2 = this._get(a$$613, "calculateWeek") || this.iso8601Week;
    var J$$2 = this._getDefaultDate(a$$613);
    var K$$1 = "";
    var L$$1 = 0;
    for (;L$$1 < g$$172[0];L$$1++) {
      var M$$1 = "";
      this.maxRows = 4;
      var N$$1 = 0;
      for (;N$$1 < g$$172[1];N$$1++) {
        var O$$1 = this._daylightSavingAdjust(new Date(o$$22, n$$92, a$$613.selectedDay));
        var P$$1 = " ui-corner-all";
        var Q$$1 = "";
        if (j$$99) {
          Q$$1 += '<div class="ui-datepicker-group';
          if (g$$172[1] > 1) {
            switch(N$$1) {
              case 0:
                Q$$1 += " ui-datepicker-group-first", P$$1 = " ui-corner-" + (c$$472 ? "right" : "left");
                break;
              case g$$172[1] - 1:
                Q$$1 += " ui-datepicker-group-last", P$$1 = " ui-corner-" + (c$$472 ? "left" : "right");
                break;
              default:
                Q$$1 += " ui-datepicker-group-middle", P$$1 = "";
            }
          }
          Q$$1 += '">';
        }
        Q$$1 += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + P$$1 + '">' + (/all|left/.test(P$$1) && L$$1 == 0 ? c$$472 ? t$$13 : r$$19 : "") + (/all|right/.test(P$$1) && L$$1 == 0 ? c$$472 ? r$$19 : t$$13 : "") + this._generateMonthYearHeader(a$$613, n$$92, o$$22, l$$75, m$$46, L$$1 > 0 || N$$1 > 0, D$$2, E$$2) + '</div><table class="ui-datepicker-calendar"><thead>' + "<tr>";
        var R$$1 = z$$6 ? '<th class="ui-datepicker-week-col">' + this._get(a$$613, "weekHeader") + "</th>" : "";
        var S$$1 = 0;
        for (;S$$1 < 7;S$$1++) {
          var T$$3 = (S$$1 + y$$54) % 7;
          R$$1 += "<th" + ((S$$1 + y$$54 + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + A$$3[T$$3] + '">' + C$$2[T$$3] + "</span></th>";
        }
        Q$$1 += R$$1 + "</tr></thead><tbody>";
        var U$$1 = this._getDaysInMonth(o$$22, n$$92);
        o$$22 == a$$613.selectedYear && n$$92 == a$$613.selectedMonth && (a$$613.selectedDay = Math.min(a$$613.selectedDay, U$$1));
        var V$$1 = (this._getFirstDayOfMonth(o$$22, n$$92) - y$$54 + 7) % 7;
        var W$$1 = Math.ceil((V$$1 + U$$1) / 7);
        var X$$1 = j$$99 ? this.maxRows > W$$1 ? this.maxRows : W$$1 : W$$1;
        this.maxRows = X$$1;
        var Y$$1 = this._daylightSavingAdjust(new Date(o$$22, n$$92, 1 - V$$1));
        var Z$$1 = 0;
        for (;Z$$1 < X$$1;Z$$1++) {
          Q$$1 += "<tr>";
          var _$$2 = z$$6 ? '<td class="ui-datepicker-week-col">' + this._get(a$$613, "calculateWeek")(Y$$1) + "</td>" : "";
          S$$1 = 0;
          for (;S$$1 < 7;S$$1++) {
            var ba$$1 = F$$2 ? F$$2.apply(a$$613.input ? a$$613.input[0] : null, [Y$$1]) : [!0, ""];
            var bb$$1 = Y$$1.getMonth() != n$$92;
            var bc$$1 = bb$$1 && !H$$2 || !ba$$1[0] || l$$75 && Y$$1 < l$$75 || m$$46 && Y$$1 > m$$46;
            _$$2 += '<td class="' + ((S$$1 + y$$54 + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (bb$$1 ? " ui-datepicker-other-month" : "") + (Y$$1.getTime() == O$$1.getTime() && n$$92 == a$$613.selectedMonth && a$$613._keyEvent || J$$2.getTime() == Y$$1.getTime() && J$$2.getTime() == O$$1.getTime() ? " " + this._dayOverClass : "") + (bc$$1 ? " " + this._unselectableClass + " ui-state-disabled" : "") + (bb$$1 && !G$$2 ? "" : " " + ba$$1[1] + (Y$$1.getTime() == k$$68.getTime() ? " " + this._currentClass : 
            "") + (Y$$1.getTime() == b$$579.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!bb$$1 || G$$2) && ba$$1[2] ? ' title="' + ba$$1[2] + '"' : "") + (bc$$1 ? "" : ' data-handler="selectDay" data-event="click" data-month="' + Y$$1.getMonth() + '" data-year="' + Y$$1.getFullYear() + '"') + ">" + (bb$$1 && !G$$2 ? "&#xa0;" : bc$$1 ? '<span class="ui-state-default">' + Y$$1.getDate() + "</span>" : '<a class="ui-state-default' + (Y$$1.getTime() == b$$579.getTime() ? " ui-state-highlight" : 
            "") + (Y$$1.getTime() == k$$68.getTime() ? " ui-state-active" : "") + (bb$$1 ? " ui-priority-secondary" : "") + '" href="#">' + Y$$1.getDate() + "</a>") + "</td>", Y$$1.setDate(Y$$1.getDate() + 1), Y$$1 = this._daylightSavingAdjust(Y$$1);
          }
          Q$$1 += _$$2 + "</tr>";
        }
        n$$92++, n$$92 > 11 && (n$$92 = 0, o$$22++), Q$$1 += "</tbody></table>" + (j$$99 ? "</div>" + (g$$172[0] > 0 && N$$1 == g$$172[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), M$$1 += Q$$1;
      }
      K$$1 += M$$1;
    }
    return K$$1 += x$$73 + ($$$3.browser.msie && parseInt($$$3.browser.version, 10) < 7 && !a$$613.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), a$$613._keyEvent = !1, K$$1;
  }, _generateMonthYearHeader:function(a$$614, b$$580, c$$473, d$$358, e$$310, f$$154, g$$173, h$$142) {
    var i$$195 = this._get(a$$614, "changeMonth");
    var j$$100 = this._get(a$$614, "changeYear");
    var k$$69 = this._get(a$$614, "showMonthAfterYear");
    var l$$76 = '<div class="ui-datepicker-title">';
    var m$$47 = "";
    if (f$$154 || !i$$195) {
      m$$47 += '<span class="ui-datepicker-month">' + g$$173[b$$580] + "</span>";
    } else {
      var n$$93 = d$$358 && d$$358.getFullYear() == c$$473;
      var o$$23 = e$$310 && e$$310.getFullYear() == c$$473;
      m$$47 += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
      var p$$48 = 0;
      for (;p$$48 < 12;p$$48++) {
        (!n$$93 || p$$48 >= d$$358.getMonth()) && (!o$$23 || p$$48 <= e$$310.getMonth()) && (m$$47 += '<option value="' + p$$48 + '"' + (p$$48 == b$$580 ? ' selected="selected"' : "") + ">" + h$$142[p$$48] + "</option>");
      }
      m$$47 += "</select>";
    }
    k$$69 || (l$$76 += m$$47 + (f$$154 || !i$$195 || !j$$100 ? "&#xa0;" : ""));
    if (!a$$614.yearshtml) {
      a$$614.yearshtml = "";
      if (f$$154 || !j$$100) {
        l$$76 += '<span class="ui-datepicker-year">' + c$$473 + "</span>";
      } else {
        var q$$19 = this._get(a$$614, "yearRange").split(":");
        var r$$20 = (new Date).getFullYear();
        var s$$29 = function(a$$615) {
          var b$$581 = a$$615.match(/c[+-].*/) ? c$$473 + parseInt(a$$615.substring(1), 10) : a$$615.match(/[+-].*/) ? r$$20 + parseInt(a$$615, 10) : parseInt(a$$615, 10);
          return isNaN(b$$581) ? r$$20 : b$$581;
        };
        var t$$14 = s$$29(q$$19[0]);
        var u$$12 = Math.max(t$$14, s$$29(q$$19[1] || ""));
        t$$14 = d$$358 ? Math.max(t$$14, d$$358.getFullYear()) : t$$14, u$$12 = e$$310 ? Math.min(u$$12, e$$310.getFullYear()) : u$$12, a$$614.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
        for (;t$$14 <= u$$12;t$$14++) {
          a$$614.yearshtml += '<option value="' + t$$14 + '"' + (t$$14 == c$$473 ? ' selected="selected"' : "") + ">" + t$$14 + "</option>";
        }
        a$$614.yearshtml += "</select>", l$$76 += a$$614.yearshtml, a$$614.yearshtml = null;
      }
    }
    return l$$76 += this._get(a$$614, "yearSuffix"), k$$69 && (l$$76 += (f$$154 || !i$$195 || !j$$100 ? "&#xa0;" : "") + m$$47), l$$76 += "</div>", l$$76;
  }, _adjustInstDate:function(a$$616, b$$582, c$$474) {
    var d$$359 = a$$616.drawYear + (c$$474 == "Y" ? b$$582 : 0);
    var e$$311 = a$$616.drawMonth + (c$$474 == "M" ? b$$582 : 0);
    var f$$155 = Math.min(a$$616.selectedDay, this._getDaysInMonth(d$$359, e$$311)) + (c$$474 == "D" ? b$$582 : 0);
    var g$$174 = this._restrictMinMax(a$$616, this._daylightSavingAdjust(new Date(d$$359, e$$311, f$$155)));
    a$$616.selectedDay = g$$174.getDate(), a$$616.drawMonth = a$$616.selectedMonth = g$$174.getMonth(), a$$616.drawYear = a$$616.selectedYear = g$$174.getFullYear(), (c$$474 == "M" || c$$474 == "Y") && this._notifyChange(a$$616);
  }, _restrictMinMax:function(a$$617, b$$583) {
    var c$$475 = this._getMinMaxDate(a$$617, "min");
    var d$$360 = this._getMinMaxDate(a$$617, "max");
    var e$$312 = c$$475 && b$$583 < c$$475 ? c$$475 : b$$583;
    return e$$312 = d$$360 && e$$312 > d$$360 ? d$$360 : e$$312, e$$312;
  }, _notifyChange:function(a$$618) {
    var b$$584 = this._get(a$$618, "onChangeMonthYear");
    b$$584 && b$$584.apply(a$$618.input ? a$$618.input[0] : null, [a$$618.selectedYear, a$$618.selectedMonth + 1, a$$618]);
  }, _getNumberOfMonths:function(a$$619) {
    var b$$585 = this._get(a$$619, "numberOfMonths");
    return b$$585 == null ? [1, 1] : typeof b$$585 == "number" ? [1, b$$585] : b$$585;
  }, _getMinMaxDate:function(a$$620, b$$586) {
    return this._determineDate(a$$620, this._get(a$$620, b$$586 + "Date"), null);
  }, _getDaysInMonth:function(a$$621, b$$587) {
    return 32 - this._daylightSavingAdjust(new Date(a$$621, b$$587, 32)).getDate();
  }, _getFirstDayOfMonth:function(a$$622, b$$588) {
    return (new Date(a$$622, b$$588, 1)).getDay();
  }, _canAdjustMonth:function(a$$623, b$$589, c$$476, d$$361) {
    var e$$313 = this._getNumberOfMonths(a$$623);
    var f$$156 = this._daylightSavingAdjust(new Date(c$$476, d$$361 + (b$$589 < 0 ? b$$589 : e$$313[0] * e$$313[1]), 1));
    return b$$589 < 0 && f$$156.setDate(this._getDaysInMonth(f$$156.getFullYear(), f$$156.getMonth())), this._isInRange(a$$623, f$$156);
  }, _isInRange:function(a$$624, b$$590) {
    var c$$477 = this._getMinMaxDate(a$$624, "min");
    var d$$362 = this._getMinMaxDate(a$$624, "max");
    return (!c$$477 || b$$590.getTime() >= c$$477.getTime()) && (!d$$362 || b$$590.getTime() <= d$$362.getTime());
  }, _getFormatConfig:function(a$$625) {
    var b$$591 = this._get(a$$625, "shortYearCutoff");
    return b$$591 = typeof b$$591 != "string" ? b$$591 : (new Date).getFullYear() % 100 + parseInt(b$$591, 10), {shortYearCutoff:b$$591, dayNamesShort:this._get(a$$625, "dayNamesShort"), dayNames:this._get(a$$625, "dayNames"), monthNamesShort:this._get(a$$625, "monthNamesShort"), monthNames:this._get(a$$625, "monthNames")};
  }, _formatDate:function(a$$626, b$$592, c$$478, d$$363) {
    b$$592 || (a$$626.currentDay = a$$626.selectedDay, a$$626.currentMonth = a$$626.selectedMonth, a$$626.currentYear = a$$626.selectedYear);
    var e$$314 = b$$592 ? typeof b$$592 == "object" ? b$$592 : this._daylightSavingAdjust(new Date(d$$363, c$$478, b$$592)) : this._daylightSavingAdjust(new Date(a$$626.currentYear, a$$626.currentMonth, a$$626.currentDay));
    return this.formatDate(this._get(a$$626, "dateFormat"), e$$314, this._getFormatConfig(a$$626));
  }}), $$$3.fn.datepicker = function(a$$627) {
    if (!this.length) {
      return this;
    }
    $$$3.datepicker.initialized || ($$$3(document).mousedown($$$3.datepicker._checkExternalClick).find("body").append($$$3.datepicker.dpDiv), $$$3.datepicker.initialized = !0);
    var b$$593 = Array.prototype.slice.call(arguments, 1);
    return typeof a$$627 != "string" || a$$627 != "isDisabled" && a$$627 != "getDate" && a$$627 != "widget" ? a$$627 == "option" && arguments.length == 2 && typeof arguments[1] == "string" ? $$$3.datepicker["_" + a$$627 + "Datepicker"].apply($$$3.datepicker, [this[0]].concat(b$$593)) : this.each(function() {
      typeof a$$627 == "string" ? $$$3.datepicker["_" + a$$627 + "Datepicker"].apply($$$3.datepicker, [this].concat(b$$593)) : $$$3.datepicker._attachDatepicker(this, a$$627);
    }) : $$$3.datepicker["_" + a$$627 + "Datepicker"].apply($$$3.datepicker, [this[0]].concat(b$$593));
  }, $$$3.datepicker = new Datepicker, $$$3.datepicker.initialized = !1, $$$3.datepicker.uuid = (new Date).getTime(), $$$3.datepicker.version = "1.8.24", window["DP_jQuery_" + dpuuid] = $$$3;
}(jQuery), function(a$$628, b$$594) {
  var c$$479 = "ui-dialog ui-widget ui-widget-content ui-corner-all ";
  var d$$364 = {buttons:!0, height:!0, maxHeight:!0, maxWidth:!0, minHeight:!0, minWidth:!0, width:!0};
  var e$$315 = {maxHeight:!0, maxWidth:!0, minHeight:!0, minWidth:!0};
  a$$628.widget("ui.dialog", {options:{autoOpen:!0, buttons:{}, closeOnEscape:!0, closeText:"close", dialogClass:"", draggable:!0, hide:null, height:"auto", maxHeight:!1, maxWidth:!1, minHeight:150, minWidth:150, modal:!1, position:{my:"center", at:"center", collision:"fit", using:function(b$$595) {
    var c$$480 = a$$628(this).css(b$$595).offset().top;
    c$$480 < 0 && a$$628(this).css("top", b$$595.top - c$$480);
  }}, resizable:!0, show:null, stack:!0, title:"", width:300, zIndex:1E3}, _create:function() {
    this.originalTitle = this.element.attr("title"), typeof this.originalTitle != "string" && (this.originalTitle = ""), this.options.title = this.options.title || this.originalTitle;
    var b$$596 = this;
    var d$$365 = b$$596.options;
    var e$$316 = d$$365.title || "&#160;";
    var f$$157 = a$$628.ui.dialog.getTitleId(b$$596.element);
    var g$$175 = (b$$596.uiDialog = a$$628("<div></div>")).appendTo(document.body).hide().addClass(c$$479 + d$$365.dialogClass).css({zIndex:d$$365.zIndex}).attr("tabIndex", -1).css("outline", 0).keydown(function(c$$481) {
      d$$365.closeOnEscape && !c$$481.isDefaultPrevented() && c$$481.keyCode && c$$481.keyCode === a$$628.ui.keyCode.ESCAPE && (b$$596.close(c$$481), c$$481.preventDefault());
    }).attr({role:"dialog", "aria-labelledby":f$$157}).mousedown(function(a$$629) {
      b$$596.moveToTop(!1, a$$629);
    });
    var h$$143 = b$$596.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g$$175);
    var i$$196 = (b$$596.uiDialogTitlebar = a$$628("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g$$175);
    var j$$101 = a$$628('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function() {
      j$$101.addClass("ui-state-hover");
    }, function() {
      j$$101.removeClass("ui-state-hover");
    }).focus(function() {
      j$$101.addClass("ui-state-focus");
    }).blur(function() {
      j$$101.removeClass("ui-state-focus");
    }).click(function(a$$630) {
      return b$$596.close(a$$630), !1;
    }).appendTo(i$$196);
    var k$$70 = (b$$596.uiDialogTitlebarCloseText = a$$628("<span></span>")).addClass("ui-icon ui-icon-closethick").text(d$$365.closeText).appendTo(j$$101);
    var l$$77 = a$$628("<span></span>").addClass("ui-dialog-title").attr("id", f$$157).html(e$$316).prependTo(i$$196);
    a$$628.isFunction(d$$365.beforeclose) && !a$$628.isFunction(d$$365.beforeClose) && (d$$365.beforeClose = d$$365.beforeclose), i$$196.find("*").add(i$$196).disableSelection(), d$$365.draggable && a$$628.fn.draggable && b$$596._makeDraggable(), d$$365.resizable && a$$628.fn.resizable && b$$596._makeResizable(), b$$596._createButtons(d$$365.buttons), b$$596._isOpen = !1, a$$628.fn.bgiframe && g$$175.bgiframe();
  }, _init:function() {
    this.options.autoOpen && this.open();
  }, destroy:function() {
    var a$$631 = this;
    return a$$631.overlay && a$$631.overlay.destroy(), a$$631.uiDialog.hide(), a$$631.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), a$$631.uiDialog.remove(), a$$631.originalTitle && a$$631.element.attr("title", a$$631.originalTitle), a$$631;
  }, widget:function() {
    return this.uiDialog;
  }, close:function(b$$597) {
    var c$$482 = this;
    var d$$366;
    var e$$317;
    if (!1 === c$$482._trigger("beforeClose", b$$597)) {
      return;
    }
    return c$$482.overlay && c$$482.overlay.destroy(), c$$482.uiDialog.unbind("keypress.ui-dialog"), c$$482._isOpen = !1, c$$482.options.hide ? c$$482.uiDialog.hide(c$$482.options.hide, function() {
      c$$482._trigger("close", b$$597);
    }) : (c$$482.uiDialog.hide(), c$$482._trigger("close", b$$597)), a$$628.ui.dialog.overlay.resize(), c$$482.options.modal && (d$$366 = 0, a$$628(".ui-dialog").each(function() {
      this !== c$$482.uiDialog[0] && (e$$317 = a$$628(this).css("z-index"), isNaN(e$$317) || (d$$366 = Math.max(d$$366, e$$317)));
    }), a$$628.ui.dialog.maxZ = d$$366), c$$482;
  }, isOpen:function() {
    return this._isOpen;
  }, moveToTop:function(b$$598, c$$483) {
    var d$$367 = this;
    var e$$318 = d$$367.options;
    var f$$158;
    return e$$318.modal && !b$$598 || !e$$318.stack && !e$$318.modal ? d$$367._trigger("focus", c$$483) : (e$$318.zIndex > a$$628.ui.dialog.maxZ && (a$$628.ui.dialog.maxZ = e$$318.zIndex), d$$367.overlay && (a$$628.ui.dialog.maxZ += 1, d$$367.overlay.$el.css("z-index", a$$628.ui.dialog.overlay.maxZ = a$$628.ui.dialog.maxZ)), f$$158 = {scrollTop:d$$367.element.scrollTop(), scrollLeft:d$$367.element.scrollLeft()}, a$$628.ui.dialog.maxZ += 1, d$$367.uiDialog.css("z-index", a$$628.ui.dialog.maxZ), d$$367.element.attr(f$$158), 
    d$$367._trigger("focus", c$$483), d$$367);
  }, open:function() {
    if (this._isOpen) {
      return;
    }
    var b$$599 = this;
    var c$$484 = b$$599.options;
    var d$$368 = b$$599.uiDialog;
    return b$$599.overlay = c$$484.modal ? new a$$628.ui.dialog.overlay(b$$599) : null, b$$599._size(), b$$599._position(c$$484.position), d$$368.show(c$$484.show), b$$599.moveToTop(!0), c$$484.modal && d$$368.bind("keydown.ui-dialog", function(b$$600) {
      if (b$$600.keyCode !== a$$628.ui.keyCode.TAB) {
        return;
      }
      var c$$485 = a$$628(":tabbable", this);
      var d$$369 = c$$485.filter(":first");
      var e$$319 = c$$485.filter(":last");
      if (b$$600.target === e$$319[0] && !b$$600.shiftKey) {
        return d$$369.focus(1), !1;
      }
      if (b$$600.target === d$$369[0] && b$$600.shiftKey) {
        return e$$319.focus(1), !1;
      }
    }), a$$628(b$$599.element.find(":tabbable").get().concat(d$$368.find(".ui-dialog-buttonpane :tabbable").get().concat(d$$368.get()))).eq(0).focus(), b$$599._isOpen = !0, b$$599._trigger("open"), b$$599;
  }, _createButtons:function(b$$601) {
    var c$$486 = this;
    var d$$370 = !1;
    var e$$320 = a$$628("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
    var f$$159 = a$$628("<div></div>").addClass("ui-dialog-buttonset").appendTo(e$$320);
    c$$486.uiDialog.find(".ui-dialog-buttonpane").remove(), typeof b$$601 == "object" && b$$601 !== null && a$$628.each(b$$601, function() {
      return !(d$$370 = !0);
    }), d$$370 && (a$$628.each(b$$601, function(b$$602, d$$371) {
      d$$371 = a$$628.isFunction(d$$371) ? {click:d$$371, text:b$$602} : d$$371;
      var e$$321 = a$$628('<button type="button"></button>').click(function() {
        d$$371.click.apply(c$$486.element[0], arguments);
      }).appendTo(f$$159);
      a$$628.each(d$$371, function(a$$632, b$$603) {
        if (a$$632 === "click") {
          return;
        }
        a$$632 in e$$321 ? e$$321[a$$632](b$$603) : e$$321.attr(a$$632, b$$603);
      }), a$$628.fn.button && e$$321.button();
    }), e$$320.appendTo(c$$486.uiDialog));
  }, _makeDraggable:function() {
    function f$$160(a$$633) {
      return {position:a$$633.position, offset:a$$633.offset};
    }
    var b$$604 = this;
    var c$$487 = b$$604.options;
    var d$$372 = a$$628(document);
    var e$$322;
    b$$604.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close", handle:".ui-dialog-titlebar", containment:"document", start:function(d$$373, g$$176) {
      e$$322 = c$$487.height === "auto" ? "auto" : a$$628(this).height(), a$$628(this).height(a$$628(this).height()).addClass("ui-dialog-dragging"), b$$604._trigger("dragStart", d$$373, f$$160(g$$176));
    }, drag:function(a$$634, c$$488) {
      b$$604._trigger("drag", a$$634, f$$160(c$$488));
    }, stop:function(g$$177, h$$144) {
      c$$487.position = [h$$144.position.left - d$$372.scrollLeft(), h$$144.position.top - d$$372.scrollTop()], a$$628(this).removeClass("ui-dialog-dragging").height(e$$322), b$$604._trigger("dragStop", g$$177, f$$160(h$$144)), a$$628.ui.dialog.overlay.resize();
    }});
  }, _makeResizable:function(c$$489) {
    function h$$145(a$$635) {
      return {originalPosition:a$$635.originalPosition, originalSize:a$$635.originalSize, position:a$$635.position, size:a$$635.size};
    }
    c$$489 = c$$489 === b$$594 ? this.options.resizable : c$$489;
    var d$$374 = this;
    var e$$323 = d$$374.options;
    var f$$161 = d$$374.uiDialog.css("position");
    var g$$178 = typeof c$$489 == "string" ? c$$489 : "n,e,s,w,se,sw,ne,nw";
    d$$374.uiDialog.resizable({cancel:".ui-dialog-content", containment:"document", alsoResize:d$$374.element, maxWidth:e$$323.maxWidth, maxHeight:e$$323.maxHeight, minWidth:e$$323.minWidth, minHeight:d$$374._minHeight(), handles:g$$178, start:function(b$$605, c$$490) {
      a$$628(this).addClass("ui-dialog-resizing"), d$$374._trigger("resizeStart", b$$605, h$$145(c$$490));
    }, resize:function(a$$636, b$$606) {
      d$$374._trigger("resize", a$$636, h$$145(b$$606));
    }, stop:function(b$$607, c$$491) {
      a$$628(this).removeClass("ui-dialog-resizing"), e$$323.height = a$$628(this).height(), e$$323.width = a$$628(this).width(), d$$374._trigger("resizeStop", b$$607, h$$145(c$$491)), a$$628.ui.dialog.overlay.resize();
    }}).css("position", f$$161).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se");
  }, _minHeight:function() {
    var a$$637 = this.options;
    return a$$637.height === "auto" ? a$$637.minHeight : Math.min(a$$637.minHeight, a$$637.height);
  }, _position:function(b$$608) {
    var c$$492 = [];
    var d$$375 = [0, 0];
    var e$$324;
    if (b$$608) {
      if (typeof b$$608 == "string" || typeof b$$608 == "object" && "0" in b$$608) {
        c$$492 = b$$608.split ? b$$608.split(" ") : [b$$608[0], b$$608[1]], c$$492.length === 1 && (c$$492[1] = c$$492[0]), a$$628.each(["left", "top"], function(a$$638, b$$609) {
          +c$$492[a$$638] === c$$492[a$$638] && (d$$375[a$$638] = c$$492[a$$638], c$$492[a$$638] = b$$609);
        }), b$$608 = {my:c$$492.join(" "), at:c$$492.join(" "), offset:d$$375.join(" ")};
      }
      b$$608 = a$$628.extend({}, a$$628.ui.dialog.prototype.options.position, b$$608);
    } else {
      b$$608 = a$$628.ui.dialog.prototype.options.position;
    }
    e$$324 = this.uiDialog.is(":visible"), e$$324 || this.uiDialog.show(), this.uiDialog.css({top:0, left:0}).position(a$$628.extend({of:window}, b$$608)), e$$324 || this.uiDialog.hide();
  }, _setOptions:function(b$$610) {
    var c$$493 = this;
    var f$$162 = {};
    var g$$179 = !1;
    a$$628.each(b$$610, function(a$$639, b$$611) {
      c$$493._setOption(a$$639, b$$611), a$$639 in d$$364 && (g$$179 = !0), a$$639 in e$$315 && (f$$162[a$$639] = b$$611);
    }), g$$179 && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", f$$162);
  }, _setOption:function(b$$612, d$$376) {
    var e$$325 = this;
    var f$$163 = e$$325.uiDialog;
    switch(b$$612) {
      case "beforeclose":
        b$$612 = "beforeClose";
        break;
      case "buttons":
        e$$325._createButtons(d$$376);
        break;
      case "closeText":
        e$$325.uiDialogTitlebarCloseText.text("" + d$$376);
        break;
      case "dialogClass":
        f$$163.removeClass(e$$325.options.dialogClass).addClass(c$$479 + d$$376);
        break;
      case "disabled":
        d$$376 ? f$$163.addClass("ui-dialog-disabled") : f$$163.removeClass("ui-dialog-disabled");
        break;
      case "draggable":
        var g$$180 = f$$163.is(":data(draggable)");
        g$$180 && !d$$376 && f$$163.draggable("destroy"), !g$$180 && d$$376 && e$$325._makeDraggable();
        break;
      case "position":
        e$$325._position(d$$376);
        break;
      case "resizable":
        var h$$146 = f$$163.is(":data(resizable)");
        h$$146 && !d$$376 && f$$163.resizable("destroy"), h$$146 && typeof d$$376 == "string" && f$$163.resizable("option", "handles", d$$376), !h$$146 && d$$376 !== !1 && e$$325._makeResizable(d$$376);
        break;
      case "title":
        a$$628(".ui-dialog-title", e$$325.uiDialogTitlebar).html("" + (d$$376 || "&#160;"));
    }
    a$$628.Widget.prototype._setOption.apply(e$$325, arguments);
  }, _size:function() {
    var b$$613 = this.options;
    var c$$494;
    var d$$377;
    var e$$326 = this.uiDialog.is(":visible");
    this.element.show().css({width:"auto", minHeight:0, height:0}), b$$613.minWidth > b$$613.width && (b$$613.width = b$$613.minWidth), c$$494 = this.uiDialog.css({height:"auto", width:b$$613.width}).height(), d$$377 = Math.max(0, b$$613.minHeight - c$$494);
    if (b$$613.height === "auto") {
      if (a$$628.support.minHeight) {
        this.element.css({minHeight:d$$377, height:"auto"});
      } else {
        this.uiDialog.show();
        var f$$164 = this.element.css("height", "auto").height();
        e$$326 || this.uiDialog.hide(), this.element.height(Math.max(f$$164, d$$377));
      }
    } else {
      this.element.height(Math.max(b$$613.height - c$$494, 0));
    }
    this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
  }}), a$$628.extend(a$$628.ui.dialog, {version:"1.8.24", uuid:0, maxZ:0, getTitleId:function(a$$640) {
    var b$$614 = a$$640.attr("id");
    return b$$614 || (this.uuid += 1, b$$614 = this.uuid), "ui-dialog-title-" + b$$614;
  }, overlay:function(b$$615) {
    this.$el = a$$628.ui.dialog.overlay.create(b$$615);
  }}), a$$628.extend(a$$628.ui.dialog.overlay, {instances:[], oldInstances:[], maxZ:0, events:a$$628.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(a$$641) {
    return a$$641 + ".dialog-overlay";
  }).join(" "), create:function(b$$616) {
    this.instances.length === 0 && (setTimeout(function() {
      a$$628.ui.dialog.overlay.instances.length && a$$628(document).bind(a$$628.ui.dialog.overlay.events, function(b$$617) {
        if (a$$628(b$$617.target).zIndex() < a$$628.ui.dialog.overlay.maxZ) {
          return !1;
        }
      });
    }, 1), a$$628(document).bind("keydown.dialog-overlay", function(c$$496) {
      b$$616.options.closeOnEscape && !c$$496.isDefaultPrevented() && c$$496.keyCode && c$$496.keyCode === a$$628.ui.keyCode.ESCAPE && (b$$616.close(c$$496), c$$496.preventDefault());
    }), a$$628(window).bind("resize.dialog-overlay", a$$628.ui.dialog.overlay.resize));
    var c$$495 = (this.oldInstances.pop() || a$$628("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(), height:this.height()});
    return a$$628.fn.bgiframe && c$$495.bgiframe(), this.instances.push(c$$495), c$$495;
  }, destroy:function(b$$618) {
    var c$$497 = a$$628.inArray(b$$618, this.instances);
    c$$497 != -1 && this.oldInstances.push(this.instances.splice(c$$497, 1)[0]), this.instances.length === 0 && a$$628([document, window]).unbind(".dialog-overlay"), b$$618.remove();
    var d$$378 = 0;
    a$$628.each(this.instances, function() {
      d$$378 = Math.max(d$$378, this.css("z-index"));
    }), this.maxZ = d$$378;
  }, height:function() {
    var b$$619;
    var c$$498;
    return a$$628.browser.msie && a$$628.browser.version < 7 ? (b$$619 = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), c$$498 = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), b$$619 < c$$498 ? a$$628(window).height() + "px" : b$$619 + "px") : a$$628(document).height() + "px";
  }, width:function() {
    var b$$620;
    var c$$499;
    return a$$628.browser.msie ? (b$$620 = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), c$$499 = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), b$$620 < c$$499 ? a$$628(window).width() + "px" : b$$620 + "px") : a$$628(document).width() + "px";
  }, resize:function() {
    var b$$621 = a$$628([]);
    a$$628.each(a$$628.ui.dialog.overlay.instances, function() {
      b$$621 = b$$621.add(this);
    }), b$$621.css({width:0, height:0}).css({width:a$$628.ui.dialog.overlay.width(), height:a$$628.ui.dialog.overlay.height()});
  }}), a$$628.extend(a$$628.ui.dialog.overlay.prototype, {destroy:function() {
    a$$628.ui.dialog.overlay.destroy(this.$el);
  }});
}(jQuery), function(a$$642, b$$622) {
  a$$642.ui = a$$642.ui || {};
  var c$$500 = /left|center|right/;
  var d$$379 = /top|center|bottom/;
  var e$$327 = "center";
  var f$$165 = {};
  var g$$181 = a$$642.fn.position;
  var h$$147 = a$$642.fn.offset;
  a$$642.fn.position = function(b$$623) {
    if (!b$$623 || !b$$623.of) {
      return g$$181.apply(this, arguments);
    }
    b$$623 = a$$642.extend({}, b$$623);
    var h$$148 = a$$642(b$$623.of);
    var i$$197 = h$$148[0];
    var j$$102 = (b$$623.collision || "flip").split(" ");
    var k$$71 = b$$623.offset ? b$$623.offset.split(" ") : [0, 0];
    var l$$78;
    var m$$48;
    var n$$94;
    return i$$197.nodeType === 9 ? (l$$78 = h$$148.width(), m$$48 = h$$148.height(), n$$94 = {top:0, left:0}) : i$$197.setTimeout ? (l$$78 = h$$148.width(), m$$48 = h$$148.height(), n$$94 = {top:h$$148.scrollTop(), left:h$$148.scrollLeft()}) : i$$197.preventDefault ? (b$$623.at = "left top", l$$78 = m$$48 = 0, n$$94 = {top:b$$623.of.pageY, left:b$$623.of.pageX}) : (l$$78 = h$$148.outerWidth(), m$$48 = h$$148.outerHeight(), n$$94 = h$$148.offset()), a$$642.each(["my", "at"], function() {
      var a$$643 = (b$$623[this] || "").split(" ");
      a$$643.length === 1 && (a$$643 = c$$500.test(a$$643[0]) ? a$$643.concat([e$$327]) : d$$379.test(a$$643[0]) ? [e$$327].concat(a$$643) : [e$$327, e$$327]), a$$643[0] = c$$500.test(a$$643[0]) ? a$$643[0] : e$$327, a$$643[1] = d$$379.test(a$$643[1]) ? a$$643[1] : e$$327, b$$623[this] = a$$643;
    }), j$$102.length === 1 && (j$$102[1] = j$$102[0]), k$$71[0] = parseInt(k$$71[0], 10) || 0, k$$71.length === 1 && (k$$71[1] = k$$71[0]), k$$71[1] = parseInt(k$$71[1], 10) || 0, b$$623.at[0] === "right" ? n$$94.left += l$$78 : b$$623.at[0] === e$$327 && (n$$94.left += l$$78 / 2), b$$623.at[1] === "bottom" ? n$$94.top += m$$48 : b$$623.at[1] === e$$327 && (n$$94.top += m$$48 / 2), n$$94.left += k$$71[0], n$$94.top += k$$71[1], this.each(function() {
      var c$$501 = a$$642(this);
      var d$$380 = c$$501.outerWidth();
      var g$$182 = c$$501.outerHeight();
      var h$$149 = parseInt(a$$642.curCSS(this, "marginLeft", !0)) || 0;
      var i$$198 = parseInt(a$$642.curCSS(this, "marginTop", !0)) || 0;
      var o$$24 = d$$380 + h$$149 + (parseInt(a$$642.curCSS(this, "marginRight", !0)) || 0);
      var p$$49 = g$$182 + i$$198 + (parseInt(a$$642.curCSS(this, "marginBottom", !0)) || 0);
      var q$$20 = a$$642.extend({}, n$$94);
      var r$$21;
      b$$623.my[0] === "right" ? q$$20.left -= d$$380 : b$$623.my[0] === e$$327 && (q$$20.left -= d$$380 / 2), b$$623.my[1] === "bottom" ? q$$20.top -= g$$182 : b$$623.my[1] === e$$327 && (q$$20.top -= g$$182 / 2), f$$165.fractions || (q$$20.left = Math.round(q$$20.left), q$$20.top = Math.round(q$$20.top)), r$$21 = {left:q$$20.left - h$$149, top:q$$20.top - i$$198}, a$$642.each(["left", "top"], function(c$$502, e$$328) {
        a$$642.ui.position[j$$102[c$$502]] && a$$642.ui.position[j$$102[c$$502]][e$$328](q$$20, {targetWidth:l$$78, targetHeight:m$$48, elemWidth:d$$380, elemHeight:g$$182, collisionPosition:r$$21, collisionWidth:o$$24, collisionHeight:p$$49, offset:k$$71, my:b$$623.my, at:b$$623.at});
      }), a$$642.fn.bgiframe && c$$501.bgiframe(), c$$501.offset(a$$642.extend(q$$20, {using:b$$623.using}));
    });
  }, a$$642.ui.position = {fit:{left:function(b$$624, c$$503) {
    var d$$381 = a$$642(window);
    var e$$329 = c$$503.collisionPosition.left + c$$503.collisionWidth - d$$381.width() - d$$381.scrollLeft();
    b$$624.left = e$$329 > 0 ? b$$624.left - e$$329 : Math.max(b$$624.left - c$$503.collisionPosition.left, b$$624.left);
  }, top:function(b$$625, c$$504) {
    var d$$382 = a$$642(window);
    var e$$330 = c$$504.collisionPosition.top + c$$504.collisionHeight - d$$382.height() - d$$382.scrollTop();
    b$$625.top = e$$330 > 0 ? b$$625.top - e$$330 : Math.max(b$$625.top - c$$504.collisionPosition.top, b$$625.top);
  }}, flip:{left:function(b$$626, c$$505) {
    if (c$$505.at[0] === e$$327) {
      return;
    }
    var d$$383 = a$$642(window);
    var f$$166 = c$$505.collisionPosition.left + c$$505.collisionWidth - d$$383.width() - d$$383.scrollLeft();
    var g$$183 = c$$505.my[0] === "left" ? -c$$505.elemWidth : c$$505.my[0] === "right" ? c$$505.elemWidth : 0;
    var h$$150 = c$$505.at[0] === "left" ? c$$505.targetWidth : -c$$505.targetWidth;
    var i$$199 = -2 * c$$505.offset[0];
    b$$626.left += c$$505.collisionPosition.left < 0 ? g$$183 + h$$150 + i$$199 : f$$166 > 0 ? g$$183 + h$$150 + i$$199 : 0;
  }, top:function(b$$627, c$$506) {
    if (c$$506.at[1] === e$$327) {
      return;
    }
    var d$$384 = a$$642(window);
    var f$$167 = c$$506.collisionPosition.top + c$$506.collisionHeight - d$$384.height() - d$$384.scrollTop();
    var g$$184 = c$$506.my[1] === "top" ? -c$$506.elemHeight : c$$506.my[1] === "bottom" ? c$$506.elemHeight : 0;
    var h$$151 = c$$506.at[1] === "top" ? c$$506.targetHeight : -c$$506.targetHeight;
    var i$$200 = -2 * c$$506.offset[1];
    b$$627.top += c$$506.collisionPosition.top < 0 ? g$$184 + h$$151 + i$$200 : f$$167 > 0 ? g$$184 + h$$151 + i$$200 : 0;
  }}}, a$$642.offset.setOffset || (a$$642.offset.setOffset = function(b$$628, c$$507) {
    /static/.test(a$$642.curCSS(b$$628, "position")) && (b$$628.style.position = "relative");
    var d$$385 = a$$642(b$$628);
    var e$$331 = d$$385.offset();
    var f$$168 = parseInt(a$$642.curCSS(b$$628, "top", !0), 10) || 0;
    var g$$185 = parseInt(a$$642.curCSS(b$$628, "left", !0), 10) || 0;
    var h$$152 = {top:c$$507.top - e$$331.top + f$$168, left:c$$507.left - e$$331.left + g$$185};
    "using" in c$$507 ? c$$507.using.call(b$$628, h$$152) : d$$385.css(h$$152);
  }, a$$642.fn.offset = function(b$$629) {
    var c$$508 = this[0];
    return !c$$508 || !c$$508.ownerDocument ? null : b$$629 ? a$$642.isFunction(b$$629) ? this.each(function(c$$509) {
      a$$642(this).offset(b$$629.call(this, c$$509, a$$642(this).offset()));
    }) : this.each(function() {
      a$$642.offset.setOffset(this, b$$629);
    }) : h$$147.call(this);
  }), a$$642.curCSS || (a$$642.curCSS = a$$642.css), function() {
    var b$$630 = document.getElementsByTagName("body")[0];
    var c$$510 = document.createElement("div");
    var d$$386;
    var e$$332;
    var g$$186;
    var h$$153;
    var i$$201;
    d$$386 = document.createElement(b$$630 ? "div" : "body"), g$$186 = {visibility:"hidden", width:0, height:0, border:0, margin:0, background:"none"}, b$$630 && a$$642.extend(g$$186, {position:"absolute", left:"-1000px", top:"-1000px"});
    var j$$103;
    for (j$$103 in g$$186) {
      d$$386.style[j$$103] = g$$186[j$$103];
    }
    d$$386.appendChild(c$$510), e$$332 = b$$630 || document.documentElement, e$$332.insertBefore(d$$386, e$$332.firstChild), c$$510.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;", h$$153 = a$$642(c$$510).offset(function(a$$644, b$$631) {
      return b$$631;
    }).offset(), d$$386.innerHTML = "", e$$332.removeChild(d$$386), i$$201 = h$$153.top + h$$153.left + (b$$630 ? 2E3 : 0), f$$165.fractions = i$$201 > 21 && i$$201 < 22;
  }();
}(jQuery), function(a$$645, b$$632) {
  a$$645.widget("ui.progressbar", {options:{value:0, max:100}, min:0, _create:function() {
    this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar", "aria-valuemin":this.min, "aria-valuemax":this.options.max, "aria-valuenow":this._value()}), this.valueDiv = a$$645("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue();
  }, destroy:function() {
    this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove(), a$$645.Widget.prototype.destroy.apply(this, arguments);
  }, value:function(a$$646) {
    return a$$646 === b$$632 ? this._value() : (this._setOption("value", a$$646), this);
  }, _setOption:function(b$$633, c$$511) {
    b$$633 === "value" && (this.options.value = c$$511, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), a$$645.Widget.prototype._setOption.apply(this, arguments);
  }, _value:function() {
    var a$$647 = this.options.value;
    return typeof a$$647 != "number" && (a$$647 = 0), Math.min(this.options.max, Math.max(this.min, a$$647));
  }, _percentage:function() {
    return 100 * this._value() / this.options.max;
  }, _refreshValue:function() {
    var a$$648 = this.value();
    var b$$634 = this._percentage();
    this.oldValue !== a$$648 && (this.oldValue = a$$648, this._trigger("change")), this.valueDiv.toggle(a$$648 > this.min).toggleClass("ui-corner-right", a$$648 === this.options.max).width(b$$634.toFixed(0) + "%"), this.element.attr("aria-valuenow", a$$648);
  }}), a$$645.extend(a$$645.ui.progressbar, {version:"1.8.24"});
}(jQuery), function(a$$649, b$$635) {
  var c$$512 = 5;
  a$$649.widget("ui.slider", a$$649.ui.mouse, {widgetEventPrefix:"slide", options:{animate:!1, distance:0, max:100, min:0, orientation:"horizontal", range:!1, step:1, value:0, values:null}, _create:function() {
    var b$$636 = this;
    var d$$387 = this.options;
    var e$$333 = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all");
    var f$$169 = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>";
    var g$$187 = d$$387.values && d$$387.values.length || 1;
    var h$$154 = [];
    this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (d$$387.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = a$$649([]), d$$387.range && (d$$387.range === !0 && (d$$387.values || (d$$387.values = [this.options.min, this.options.min]), d$$387.values.length && d$$387.values.length !== 
    2 && (d$$387.values = [d$$387.values[0], d$$387.values[0]])), this.range = a$$649("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (d$$387.range === "min" || d$$387.range === "max" ? " ui-slider-range-" + d$$387.range : "")));
    var i$$202 = e$$333.length;
    for (;i$$202 < g$$187;i$$202 += 1) {
      h$$154.push(f$$169);
    }
    this.handles = e$$333.add(a$$649(h$$154.join("")).appendTo(b$$636.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function(a$$650) {
      a$$650.preventDefault();
    }).hover(function() {
      d$$387.disabled || a$$649(this).addClass("ui-state-hover");
    }, function() {
      a$$649(this).removeClass("ui-state-hover");
    }).focus(function() {
      d$$387.disabled ? a$$649(this).blur() : (a$$649(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), a$$649(this).addClass("ui-state-focus"));
    }).blur(function() {
      a$$649(this).removeClass("ui-state-focus");
    }), this.handles.each(function(b$$637) {
      a$$649(this).data("index.ui-slider-handle", b$$637);
    }), this.handles.keydown(function(d$$388) {
      var e$$334 = a$$649(this).data("index.ui-slider-handle");
      var f$$170;
      var g$$188;
      var h$$155;
      var i$$203;
      if (b$$636.options.disabled) {
        return;
      }
      switch(d$$388.keyCode) {
        case a$$649.ui.keyCode.HOME:
        ;
        case a$$649.ui.keyCode.END:
        ;
        case a$$649.ui.keyCode.PAGE_UP:
        ;
        case a$$649.ui.keyCode.PAGE_DOWN:
        ;
        case a$$649.ui.keyCode.UP:
        ;
        case a$$649.ui.keyCode.RIGHT:
        ;
        case a$$649.ui.keyCode.DOWN:
        ;
        case a$$649.ui.keyCode.LEFT:
          d$$388.preventDefault();
          if (!b$$636._keySliding) {
            b$$636._keySliding = !0, a$$649(this).addClass("ui-state-active"), f$$170 = b$$636._start(d$$388, e$$334);
            if (f$$170 === !1) {
              return;
            }
          }
        ;
      }
      i$$203 = b$$636.options.step, b$$636.options.values && b$$636.options.values.length ? g$$188 = h$$155 = b$$636.values(e$$334) : g$$188 = h$$155 = b$$636.value();
      switch(d$$388.keyCode) {
        case a$$649.ui.keyCode.HOME:
          h$$155 = b$$636.options.min;
          break;
        case a$$649.ui.keyCode.END:
          h$$155 = b$$636.options.max;
          break;
        case a$$649.ui.keyCode.PAGE_UP:
          h$$155 = b$$636._trimAlignValue(g$$188 + (b$$636.options.max - b$$636.options.min) / c$$512);
          break;
        case a$$649.ui.keyCode.PAGE_DOWN:
          h$$155 = b$$636._trimAlignValue(g$$188 - (b$$636.options.max - b$$636.options.min) / c$$512);
          break;
        case a$$649.ui.keyCode.UP:
        ;
        case a$$649.ui.keyCode.RIGHT:
          if (g$$188 === b$$636.options.max) {
            return;
          }
          h$$155 = b$$636._trimAlignValue(g$$188 + i$$203);
          break;
        case a$$649.ui.keyCode.DOWN:
        ;
        case a$$649.ui.keyCode.LEFT:
          if (g$$188 === b$$636.options.min) {
            return;
          }
          h$$155 = b$$636._trimAlignValue(g$$188 - i$$203);
      }
      b$$636._slide(d$$388, e$$334, h$$155);
    }).keyup(function(c$$513) {
      var d$$389 = a$$649(this).data("index.ui-slider-handle");
      b$$636._keySliding && (b$$636._keySliding = !1, b$$636._stop(c$$513, d$$389), b$$636._change(c$$513, d$$389), a$$649(this).removeClass("ui-state-active"));
    }), this._refreshValue(), this._animateOff = !1;
  }, destroy:function() {
    return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this;
  }, _mouseCapture:function(b$$638) {
    var c$$514 = this.options;
    var d$$390;
    var e$$335;
    var f$$171;
    var g$$189;
    var h$$156;
    var i$$204;
    var j$$104;
    var k$$72;
    var l$$79;
    return c$$514.disabled ? !1 : (this.elementSize = {width:this.element.outerWidth(), height:this.element.outerHeight()}, this.elementOffset = this.element.offset(), d$$390 = {x:b$$638.pageX, y:b$$638.pageY}, e$$335 = this._normValueFromMouse(d$$390), f$$171 = this.options.max - this.options.min + 1, h$$156 = this, this.handles.each(function(b$$639) {
      var c$$515 = Math.abs(e$$335 - h$$156.values(b$$639));
      f$$171 > c$$515 && (f$$171 = c$$515, g$$189 = a$$649(this), i$$204 = b$$639);
    }), c$$514.range === !0 && this.values(1) === c$$514.min && (i$$204 += 1, g$$189 = a$$649(this.handles[i$$204])), j$$104 = this._start(b$$638, i$$204), j$$104 === !1 ? !1 : (this._mouseSliding = !0, h$$156._handleIndex = i$$204, g$$189.addClass("ui-state-active").focus(), k$$72 = g$$189.offset(), l$$79 = !a$$649(b$$638.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = l$$79 ? {left:0, top:0} : {left:b$$638.pageX - k$$72.left - g$$189.width() / 2, top:b$$638.pageY - k$$72.top - 
    g$$189.height() / 2 - (parseInt(g$$189.css("borderTopWidth"), 10) || 0) - (parseInt(g$$189.css("borderBottomWidth"), 10) || 0) + (parseInt(g$$189.css("marginTop"), 10) || 0)}, this.handles.hasClass("ui-state-hover") || this._slide(b$$638, i$$204, e$$335), this._animateOff = !0, !0));
  }, _mouseStart:function(a$$651) {
    return !0;
  }, _mouseDrag:function(a$$652) {
    var b$$640 = {x:a$$652.pageX, y:a$$652.pageY};
    var c$$516 = this._normValueFromMouse(b$$640);
    return this._slide(a$$652, this._handleIndex, c$$516), !1;
  }, _mouseStop:function(a$$653) {
    return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a$$653, this._handleIndex), this._change(a$$653, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1;
  }, _detectOrientation:function() {
    this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal";
  }, _normValueFromMouse:function(a$$654) {
    var b$$641;
    var c$$517;
    var d$$391;
    var e$$336;
    var f$$172;
    return this.orientation === "horizontal" ? (b$$641 = this.elementSize.width, c$$517 = a$$654.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b$$641 = this.elementSize.height, c$$517 = a$$654.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), d$$391 = c$$517 / b$$641, d$$391 > 1 && (d$$391 = 1), d$$391 < 0 && (d$$391 = 0), this.orientation === "vertical" && (d$$391 = 1 - d$$391), e$$336 = this.options.max - this.options.min, f$$172 = 
    this.options.min + d$$391 * e$$336, this._trimAlignValue(f$$172);
  }, _start:function(a$$655, b$$642) {
    var c$$518 = {handle:this.handles[b$$642], value:this.value()};
    return this.options.values && this.options.values.length && (c$$518.value = this.values(b$$642), c$$518.values = this.values()), this._trigger("start", a$$655, c$$518);
  }, _slide:function(a$$656, b$$643, c$$519) {
    var d$$392;
    var e$$337;
    var f$$173;
    this.options.values && this.options.values.length ? (d$$392 = this.values(b$$643 ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (b$$643 === 0 && c$$519 > d$$392 || b$$643 === 1 && c$$519 < d$$392) && (c$$519 = d$$392), c$$519 !== this.values(b$$643) && (e$$337 = this.values(), e$$337[b$$643] = c$$519, f$$173 = this._trigger("slide", a$$656, {handle:this.handles[b$$643], value:c$$519, values:e$$337}), d$$392 = this.values(b$$643 ? 0 : 1), f$$173 !== !1 && this.values(b$$643, 
    c$$519, !0))) : c$$519 !== this.value() && (f$$173 = this._trigger("slide", a$$656, {handle:this.handles[b$$643], value:c$$519}), f$$173 !== !1 && this.value(c$$519));
  }, _stop:function(a$$657, b$$644) {
    var c$$520 = {handle:this.handles[b$$644], value:this.value()};
    this.options.values && this.options.values.length && (c$$520.value = this.values(b$$644), c$$520.values = this.values()), this._trigger("stop", a$$657, c$$520);
  }, _change:function(a$$658, b$$645) {
    if (!this._keySliding && !this._mouseSliding) {
      var c$$521 = {handle:this.handles[b$$645], value:this.value()};
      this.options.values && this.options.values.length && (c$$521.value = this.values(b$$645), c$$521.values = this.values()), this._trigger("change", a$$658, c$$521);
    }
  }, value:function(a$$659) {
    if (arguments.length) {
      this.options.value = this._trimAlignValue(a$$659), this._refreshValue(), this._change(null, 0);
      return;
    }
    return this._value();
  }, values:function(b$$646, c$$522) {
    var d$$393;
    var e$$338;
    var f$$174;
    if (arguments.length > 1) {
      this.options.values[b$$646] = this._trimAlignValue(c$$522), this._refreshValue(), this._change(null, b$$646);
      return;
    }
    if (!arguments.length) {
      return this._values();
    }
    if (!a$$649.isArray(arguments[0])) {
      return this.options.values && this.options.values.length ? this._values(b$$646) : this.value();
    }
    d$$393 = this.options.values, e$$338 = arguments[0];
    f$$174 = 0;
    for (;f$$174 < d$$393.length;f$$174 += 1) {
      d$$393[f$$174] = this._trimAlignValue(e$$338[f$$174]), this._change(null, f$$174);
    }
    this._refreshValue();
  }, _setOption:function(b$$647, c$$523) {
    var d$$394;
    var e$$339 = 0;
    a$$649.isArray(this.options.values) && (e$$339 = this.options.values.length), a$$649.Widget.prototype._setOption.apply(this, arguments);
    switch(b$$647) {
      case "disabled":
        c$$523 ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.propAttr("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.propAttr("disabled", !1), this.element.removeClass("ui-disabled"));
        break;
      case "orientation":
        this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
        break;
      case "value":
        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
        break;
      case "values":
        this._animateOff = !0, this._refreshValue();
        d$$394 = 0;
        for (;d$$394 < e$$339;d$$394 += 1) {
          this._change(null, d$$394);
        }
        this._animateOff = !1;
    }
  }, _value:function() {
    var a$$660 = this.options.value;
    return a$$660 = this._trimAlignValue(a$$660), a$$660;
  }, _values:function(a$$661) {
    var b$$648;
    var c$$524;
    var d$$395;
    if (arguments.length) {
      return b$$648 = this.options.values[a$$661], b$$648 = this._trimAlignValue(b$$648), b$$648;
    }
    c$$524 = this.options.values.slice();
    d$$395 = 0;
    for (;d$$395 < c$$524.length;d$$395 += 1) {
      c$$524[d$$395] = this._trimAlignValue(c$$524[d$$395]);
    }
    return c$$524;
  }, _trimAlignValue:function(a$$662) {
    if (a$$662 <= this.options.min) {
      return this.options.min;
    }
    if (a$$662 >= this.options.max) {
      return this.options.max;
    }
    var b$$649 = this.options.step > 0 ? this.options.step : 1;
    var c$$525 = (a$$662 - this.options.min) % b$$649;
    var d$$396 = a$$662 - c$$525;
    return Math.abs(c$$525) * 2 >= b$$649 && (d$$396 += c$$525 > 0 ? b$$649 : -b$$649), parseFloat(d$$396.toFixed(5));
  }, _valueMin:function() {
    return this.options.min;
  }, _valueMax:function() {
    return this.options.max;
  }, _refreshValue:function() {
    var b$$650 = this.options.range;
    var c$$526 = this.options;
    var d$$397 = this;
    var e$$340 = this._animateOff ? !1 : c$$526.animate;
    var f$$175;
    var g$$190 = {};
    var h$$157;
    var i$$205;
    var j$$105;
    var k$$73;
    this.options.values && this.options.values.length ? this.handles.each(function(b$$651, i$$206) {
      f$$175 = (d$$397.values(b$$651) - d$$397.options.min) / (d$$397.options.max - d$$397.options.min) * 100, g$$190[d$$397.orientation === "horizontal" ? "left" : "bottom"] = f$$175 + "%", a$$649(this).stop(1, 1)[e$$340 ? "animate" : "css"](g$$190, c$$526.animate), d$$397.options.range === !0 && (d$$397.orientation === "horizontal" ? (b$$651 === 0 && d$$397.range.stop(1, 1)[e$$340 ? "animate" : "css"]({left:f$$175 + "%"}, c$$526.animate), b$$651 === 1 && d$$397.range[e$$340 ? "animate" : "css"]({width:f$$175 - 
      h$$157 + "%"}, {queue:!1, duration:c$$526.animate})) : (b$$651 === 0 && d$$397.range.stop(1, 1)[e$$340 ? "animate" : "css"]({bottom:f$$175 + "%"}, c$$526.animate), b$$651 === 1 && d$$397.range[e$$340 ? "animate" : "css"]({height:f$$175 - h$$157 + "%"}, {queue:!1, duration:c$$526.animate}))), h$$157 = f$$175;
    }) : (i$$205 = this.value(), j$$105 = this.options.min, k$$73 = this.options.max, f$$175 = k$$73 !== j$$105 ? (i$$205 - j$$105) / (k$$73 - j$$105) * 100 : 0, g$$190[d$$397.orientation === "horizontal" ? "left" : "bottom"] = f$$175 + "%", this.handle.stop(1, 1)[e$$340 ? "animate" : "css"](g$$190, c$$526.animate), b$$650 === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[e$$340 ? "animate" : "css"]({width:f$$175 + "%"}, c$$526.animate), b$$650 === "max" && this.orientation === 
    "horizontal" && this.range[e$$340 ? "animate" : "css"]({width:100 - f$$175 + "%"}, {queue:!1, duration:c$$526.animate}), b$$650 === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[e$$340 ? "animate" : "css"]({height:f$$175 + "%"}, c$$526.animate), b$$650 === "max" && this.orientation === "vertical" && this.range[e$$340 ? "animate" : "css"]({height:100 - f$$175 + "%"}, {queue:!1, duration:c$$526.animate}));
  }}), a$$649.extend(a$$649.ui.slider, {version:"1.8.24"});
}(jQuery), function(a$$663, b$$652) {
  var c$$527 = 0;
  var d$$398 = 0;
  a$$663.widget("ui.tabs", {options:{add:null, ajaxOptions:null, cache:!1, cookie:null, collapsible:!1, disable:null, disabled:[], enable:null, event:"click", fx:null, idPrefix:"ui-tabs-", load:null, panelTemplate:"<div></div>", remove:null, select:null, show:null, spinner:"<em>Loading&#8230;</em>", tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"}, _create:function() {
    this._tabify(!0);
  }, _setOption:function(a$$664, b$$653) {
    if (a$$664 == "selected") {
      if (this.options.collapsible && b$$653 == this.options.selected) {
        return;
      }
      this.select(b$$653);
    } else {
      this.options[a$$664] = b$$653, this._tabify();
    }
  }, _tabId:function(a$$665) {
    return a$$665.title && a$$665.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + ++c$$527;
  }, _sanitizeSelector:function(a$$666) {
    return a$$666.replace(/:/g, "\\:");
  }, _cookie:function() {
    var b$$654 = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++d$$398);
    return a$$663.cookie.apply(null, [b$$654].concat(a$$663.makeArray(arguments)));
  }, _ui:function(a$$667, b$$655) {
    return {tab:a$$667, panel:b$$655, index:this.anchors.index(a$$667)};
  }, _cleanup:function() {
    this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function() {
      var b$$656 = a$$663(this);
      b$$656.html(b$$656.data("label.tabs")).removeData("label.tabs");
    });
  }, _tabify:function(c$$528) {
    function m$$49(b$$657, c$$529) {
      b$$657.css("display", ""), !a$$663.support.opacity && c$$529.opacity && b$$657[0].style.removeAttribute("filter");
    }
    var d$$399 = this;
    var e$$342 = this.options;
    var f$$177 = /^#.+/;
    this.list = this.element.find("ol,ul").eq(0), this.lis = a$$663(" > li:has(a[href])", this.list), this.anchors = this.lis.map(function() {
      return a$$663("a", this)[0];
    }), this.panels = a$$663([]), this.anchors.each(function(b$$658, c$$530) {
      var g$$192 = a$$663(c$$530).attr("href");
      var h$$159 = g$$192.split("#")[0];
      var i$$208;
      h$$159 && (h$$159 === location.toString().split("#")[0] || (i$$208 = a$$663("base")[0]) && h$$159 === i$$208.href) && (g$$192 = c$$530.hash, c$$530.href = g$$192);
      if (f$$177.test(g$$192)) {
        d$$399.panels = d$$399.panels.add(d$$399.element.find(d$$399._sanitizeSelector(g$$192)));
      } else {
        if (g$$192 && g$$192 !== "#") {
          a$$663.data(c$$530, "href.tabs", g$$192), a$$663.data(c$$530, "load.tabs", g$$192.replace(/#.*$/, ""));
          var j$$107 = d$$399._tabId(c$$530);
          c$$530.href = "#" + j$$107;
          var k$$75 = d$$399.element.find("#" + j$$107);
          k$$75.length || (k$$75 = a$$663(e$$342.panelTemplate).attr("id", j$$107).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(d$$399.panels[b$$658 - 1] || d$$399.list), k$$75.data("destroy.tabs", !0)), d$$399.panels = d$$399.panels.add(k$$75);
        } else {
          e$$342.disabled.push(b$$658);
        }
      }
    }), c$$528 ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"), this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.lis.addClass("ui-state-default ui-corner-top"), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"), e$$342.selected === b$$652 ? (location.hash && this.anchors.each(function(a$$668, b$$659) {
      if (b$$659.hash == location.hash) {
        return e$$342.selected = a$$668, !1;
      }
    }), typeof e$$342.selected != "number" && e$$342.cookie && (e$$342.selected = parseInt(d$$399._cookie(), 10)), typeof e$$342.selected != "number" && this.lis.filter(".ui-tabs-selected").length && (e$$342.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))), e$$342.selected = e$$342.selected || (this.lis.length ? 0 : -1)) : e$$342.selected === null && (e$$342.selected = -1), e$$342.selected = e$$342.selected >= 0 && this.anchors[e$$342.selected] || e$$342.selected < 0 ? e$$342.selected : 
    0, e$$342.disabled = a$$663.unique(e$$342.disabled.concat(a$$663.map(this.lis.filter(".ui-state-disabled"), function(a$$669, b$$660) {
      return d$$399.lis.index(a$$669);
    }))).sort(), a$$663.inArray(e$$342.selected, e$$342.disabled) != -1 && e$$342.disabled.splice(a$$663.inArray(e$$342.selected, e$$342.disabled), 1), this.panels.addClass("ui-tabs-hide"), this.lis.removeClass("ui-tabs-selected ui-state-active"), e$$342.selected >= 0 && this.anchors.length && (d$$399.element.find(d$$399._sanitizeSelector(d$$399.anchors[e$$342.selected].hash)).removeClass("ui-tabs-hide"), this.lis.eq(e$$342.selected).addClass("ui-tabs-selected ui-state-active"), d$$399.element.queue("tabs", 
    function() {
      d$$399._trigger("show", null, d$$399._ui(d$$399.anchors[e$$342.selected], d$$399.element.find(d$$399._sanitizeSelector(d$$399.anchors[e$$342.selected].hash))[0]));
    }), this.load(e$$342.selected)), a$$663(window).bind("unload", function() {
      d$$399.lis.add(d$$399.anchors).unbind(".tabs"), d$$399.lis = d$$399.anchors = d$$399.panels = null;
    })) : e$$342.selected = this.lis.index(this.lis.filter(".ui-tabs-selected")), this.element[e$$342.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"), e$$342.cookie && this._cookie(e$$342.selected, e$$342.cookie);
    var g$$191 = 0;
    var h$$158;
    for (;h$$158 = this.lis[g$$191];g$$191++) {
      a$$663(h$$158)[a$$663.inArray(g$$191, e$$342.disabled) != -1 && !a$$663(h$$158).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled");
    }
    e$$342.cache === !1 && this.anchors.removeData("cache.tabs"), this.lis.add(this.anchors).unbind(".tabs");
    if (e$$342.event !== "mouseover") {
      var i$$207 = function(a$$670, b$$661) {
        b$$661.is(":not(.ui-state-disabled)") && b$$661.addClass("ui-state-" + a$$670);
      };
      this.lis.bind("mouseover.tabs", function() {
        i$$207("hover", a$$663(this));
      }), this.lis.bind("mouseout.tabs", function() {
        var b$$inline_75 = a$$663(this);
        b$$inline_75.removeClass("ui-state-" + "hover");
      }), this.anchors.bind("focus.tabs", function() {
        i$$207("focus", a$$663(this).closest("li"));
      }), this.anchors.bind("blur.tabs", function() {
        var b$$inline_78 = a$$663(this).closest("li");
        b$$inline_78.removeClass("ui-state-" + "focus");
      });
    }
    var k$$74;
    var l$$80;
    e$$342.fx && (a$$663.isArray(e$$342.fx) ? (k$$74 = e$$342.fx[0], l$$80 = e$$342.fx[1]) : k$$74 = l$$80 = e$$342.fx);
    var n$$95 = l$$80 ? function(b$$663, c$$531) {
      a$$663(b$$663).closest("li").addClass("ui-tabs-selected ui-state-active"), c$$531.hide().removeClass("ui-tabs-hide").animate(l$$80, l$$80.duration || "normal", function() {
        m$$49(c$$531, l$$80), d$$399._trigger("show", null, d$$399._ui(b$$663, c$$531[0]));
      });
    } : function(b$$664, c$$532) {
      a$$663(b$$664).closest("li").addClass("ui-tabs-selected ui-state-active"), c$$532.removeClass("ui-tabs-hide"), d$$399._trigger("show", null, d$$399._ui(b$$664, c$$532[0]));
    };
    var o$$25 = k$$74 ? function(a$$672, b$$665) {
      b$$665.animate(k$$74, k$$74.duration || "normal", function() {
        d$$399.lis.removeClass("ui-tabs-selected ui-state-active"), b$$665.addClass("ui-tabs-hide"), m$$49(b$$665, k$$74), d$$399.element.dequeue("tabs");
      });
    } : function(a$$673, b$$666, c$$533) {
      d$$399.lis.removeClass("ui-tabs-selected ui-state-active"), b$$666.addClass("ui-tabs-hide"), d$$399.element.dequeue("tabs");
    };
    this.anchors.bind(e$$342.event + ".tabs", function() {
      var b$$667 = this;
      var c$$534 = a$$663(b$$667).closest("li");
      var f$$178 = d$$399.panels.filter(":not(.ui-tabs-hide)");
      var g$$193 = d$$399.element.find(d$$399._sanitizeSelector(b$$667.hash));
      if (c$$534.hasClass("ui-tabs-selected") && !e$$342.collapsible || c$$534.hasClass("ui-state-disabled") || c$$534.hasClass("ui-state-processing") || d$$399.panels.filter(":animated").length || d$$399._trigger("select", null, d$$399._ui(this, g$$193[0])) === !1) {
        return this.blur(), !1;
      }
      e$$342.selected = d$$399.anchors.index(this), d$$399.abort();
      if (e$$342.collapsible) {
        if (c$$534.hasClass("ui-tabs-selected")) {
          return e$$342.selected = -1, e$$342.cookie && d$$399._cookie(e$$342.selected, e$$342.cookie), d$$399.element.queue("tabs", function() {
            o$$25(b$$667, f$$178);
          }).dequeue("tabs"), this.blur(), !1;
        }
        if (!f$$178.length) {
          return e$$342.cookie && d$$399._cookie(e$$342.selected, e$$342.cookie), d$$399.element.queue("tabs", function() {
            n$$95(b$$667, g$$193);
          }), d$$399.load(d$$399.anchors.index(this)), this.blur(), !1;
        }
      }
      e$$342.cookie && d$$399._cookie(e$$342.selected, e$$342.cookie);
      if (g$$193.length) {
        f$$178.length && d$$399.element.queue("tabs", function() {
          o$$25(b$$667, f$$178);
        }), d$$399.element.queue("tabs", function() {
          n$$95(b$$667, g$$193);
        }), d$$399.load(d$$399.anchors.index(this));
      } else {
        throw "jQuery UI Tabs: Mismatching fragment identifier.";
      }
      a$$663.browser.msie && this.blur();
    }), this.anchors.bind("click.tabs", function() {
      return !1;
    });
  }, _getIndex:function(a$$674) {
    return typeof a$$674 == "string" && (a$$674 = this.anchors.index(this.anchors.filter("[href$='" + a$$674 + "']"))), a$$674;
  }, destroy:function() {
    var b$$668 = this.options;
    return this.abort(), this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"), this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.anchors.each(function() {
      var b$$669 = a$$663.data(this, "href.tabs");
      b$$669 && (this.href = b$$669);
      var c$$535 = a$$663(this).unbind(".tabs");
      a$$663.each(["href", "load", "cache"], function(a$$675, b$$670) {
        c$$535.removeData(b$$670 + ".tabs");
      });
    }), this.lis.unbind(".tabs").add(this.panels).each(function() {
      a$$663.data(this, "destroy.tabs") ? a$$663(this).remove() : a$$663(this).removeClass(["ui-state-default", "ui-corner-top", "ui-tabs-selected", "ui-state-active", "ui-state-hover", "ui-state-focus", "ui-state-disabled", "ui-tabs-panel", "ui-widget-content", "ui-corner-bottom", "ui-tabs-hide"].join(" "));
    }), b$$668.cookie && this._cookie(null, b$$668.cookie), this;
  }, add:function(c$$536, d$$400, e$$343) {
    e$$343 === b$$652 && (e$$343 = this.anchors.length);
    var f$$179 = this;
    var g$$194 = this.options;
    var h$$160 = a$$663(g$$194.tabTemplate.replace(/#\{href\}/g, c$$536).replace(/#\{label\}/g, d$$400));
    var i$$209 = c$$536.indexOf("#") ? this._tabId(a$$663("a", h$$160)[0]) : c$$536.replace("#", "");
    h$$160.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
    var j$$108 = f$$179.element.find("#" + i$$209);
    return j$$108.length || (j$$108 = a$$663(g$$194.panelTemplate).attr("id", i$$209).data("destroy.tabs", !0)), j$$108.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"), e$$343 >= this.lis.length ? (h$$160.appendTo(this.list), j$$108.appendTo(this.list[0].parentNode)) : (h$$160.insertBefore(this.lis[e$$343]), j$$108.insertBefore(this.panels[e$$343])), g$$194.disabled = a$$663.map(g$$194.disabled, function(a$$676, b$$671) {
      return a$$676 >= e$$343 ? ++a$$676 : a$$676;
    }), this._tabify(), this.anchors.length == 1 && (g$$194.selected = 0, h$$160.addClass("ui-tabs-selected ui-state-active"), j$$108.removeClass("ui-tabs-hide"), this.element.queue("tabs", function() {
      f$$179._trigger("show", null, f$$179._ui(f$$179.anchors[0], f$$179.panels[0]));
    }), this.load(0)), this._trigger("add", null, this._ui(this.anchors[e$$343], this.panels[e$$343])), this;
  }, remove:function(b$$672) {
    b$$672 = this._getIndex(b$$672);
    var c$$537 = this.options;
    var d$$401 = this.lis.eq(b$$672).remove();
    var e$$344 = this.panels.eq(b$$672).remove();
    return d$$401.hasClass("ui-tabs-selected") && this.anchors.length > 1 && this.select(b$$672 + (b$$672 + 1 < this.anchors.length ? 1 : -1)), c$$537.disabled = a$$663.map(a$$663.grep(c$$537.disabled, function(a$$677, c$$538) {
      return a$$677 != b$$672;
    }), function(a$$678, c$$539) {
      return a$$678 >= b$$672 ? --a$$678 : a$$678;
    }), this._tabify(), this._trigger("remove", null, this._ui(d$$401.find("a")[0], e$$344[0])), this;
  }, enable:function(b$$673) {
    b$$673 = this._getIndex(b$$673);
    var c$$540 = this.options;
    if (a$$663.inArray(b$$673, c$$540.disabled) == -1) {
      return;
    }
    return this.lis.eq(b$$673).removeClass("ui-state-disabled"), c$$540.disabled = a$$663.grep(c$$540.disabled, function(a$$679, c$$541) {
      return a$$679 != b$$673;
    }), this._trigger("enable", null, this._ui(this.anchors[b$$673], this.panels[b$$673])), this;
  }, disable:function(a$$680) {
    a$$680 = this._getIndex(a$$680);
    var b$$674 = this;
    var c$$542 = this.options;
    return a$$680 != c$$542.selected && (this.lis.eq(a$$680).addClass("ui-state-disabled"), c$$542.disabled.push(a$$680), c$$542.disabled.sort(), this._trigger("disable", null, this._ui(this.anchors[a$$680], this.panels[a$$680]))), this;
  }, select:function(a$$681) {
    a$$681 = this._getIndex(a$$681);
    if (a$$681 == -1) {
      if (this.options.collapsible && this.options.selected != -1) {
        a$$681 = this.options.selected;
      } else {
        return this;
      }
    }
    return this.anchors.eq(a$$681).trigger(this.options.event + ".tabs"), this;
  }, load:function(b$$675) {
    b$$675 = this._getIndex(b$$675);
    var c$$543 = this;
    var d$$402 = this.options;
    var e$$345 = this.anchors.eq(b$$675)[0];
    var f$$180 = a$$663.data(e$$345, "load.tabs");
    this.abort();
    if (!f$$180 || this.element.queue("tabs").length !== 0 && a$$663.data(e$$345, "cache.tabs")) {
      this.element.dequeue("tabs");
      return;
    }
    this.lis.eq(b$$675).addClass("ui-state-processing");
    if (d$$402.spinner) {
      var g$$195 = a$$663("span", e$$345);
      g$$195.data("label.tabs", g$$195.html()).html(d$$402.spinner);
    }
    return this.xhr = a$$663.ajax(a$$663.extend({}, d$$402.ajaxOptions, {url:f$$180, success:function(f$$181, g$$196) {
      c$$543.element.find(c$$543._sanitizeSelector(e$$345.hash)).html(f$$181), c$$543._cleanup(), d$$402.cache && a$$663.data(e$$345, "cache.tabs", !0), c$$543._trigger("load", null, c$$543._ui(c$$543.anchors[b$$675], c$$543.panels[b$$675]));
      try {
        d$$402.ajaxOptions.success(f$$181, g$$196);
      } catch (h$$161) {
      }
    }, error:function(a$$682, f$$182, g$$197) {
      c$$543._cleanup(), c$$543._trigger("load", null, c$$543._ui(c$$543.anchors[b$$675], c$$543.panels[b$$675]));
      try {
        d$$402.ajaxOptions.error(a$$682, f$$182, b$$675, e$$345);
      } catch (g$$198) {
      }
    }})), c$$543.element.dequeue("tabs"), this;
  }, abort:function() {
    return this.element.queue([]), this.panels.stop(!1, !0), this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)), this.xhr && (this.xhr.abort(), delete this.xhr), this._cleanup(), this;
  }, url:function(a$$683, b$$676) {
    return this.anchors.eq(a$$683).removeData("cache.tabs").data("load.tabs", b$$676), this;
  }, length:function() {
    return this.anchors.length;
  }}), a$$663.extend(a$$663.ui.tabs, {version:"1.8.24"}), a$$663.extend(a$$663.ui.tabs.prototype, {rotation:null, rotate:function(a$$684, b$$677) {
    var c$$544 = this;
    var d$$403 = this.options;
    var e$$346 = c$$544._rotate || (c$$544._rotate = function(b$$678) {
      clearTimeout(c$$544.rotation), c$$544.rotation = setTimeout(function() {
        var a$$685 = d$$403.selected;
        c$$544.select(++a$$685 < c$$544.anchors.length ? a$$685 : 0);
      }, a$$684), b$$678 && b$$678.stopPropagation();
    });
    var f$$183 = c$$544._unrotate || (c$$544._unrotate = b$$677 ? function(a$$686) {
      e$$346();
    } : function(a$$687) {
      a$$687.clientX && c$$544.rotate(null);
    });
    return a$$684 ? (this.element.bind("tabsshow", e$$346), this.anchors.bind(d$$403.event + ".tabs", f$$183), e$$346()) : (clearTimeout(c$$544.rotation), this.element.unbind("tabsshow", e$$346), this.anchors.unbind(d$$403.event + ".tabs", f$$183), delete this._rotate, delete this._unrotate), this;
  }});
}(jQuery);
(function(e$$347, t$$15, i$$210) {
  function o$$26(i$$211, o$$27, n$$97) {
    var r$$23 = t$$15.createElement(i$$211);
    return o$$27 && (r$$23.id = Z$$2 + o$$27), n$$97 && (r$$23.style.cssText = n$$97), e$$347(r$$23);
  }
  function n$$96() {
    return i$$210.innerHeight ? i$$210.innerHeight : e$$347(i$$210).height();
  }
  function r$$22(e$$348) {
    var t$$16 = k$$76.length;
    var i$$212 = (z$$7 + e$$348) % t$$16;
    return 0 > i$$212 ? t$$16 + i$$212 : i$$212;
  }
  function h$$162(e$$349, t$$17) {
    return Math.round((/%/.test(e$$349) ? ("x" === t$$17 ? E$$3.width() : n$$96()) / 100 : 1) * parseInt(e$$349, 10));
  }
  function s$$30(e$$351, t$$19) {
    return e$$351.retinaUrl && i$$210.devicePixelRatio > 1 ? t$$19.replace(e$$351.photoRegex, e$$351.retinaSuffix) : t$$19;
  }
  function a$$688(e$$352) {
    "contains" in g$$199[0] && !g$$199[0].contains(e$$352.target) && (e$$352.stopPropagation(), g$$199.focus());
  }
  function d$$404() {
    var t$$20;
    var i$$213 = e$$347.data(N$$2, Y$$2);
    null == i$$213 ? (B$$3 = e$$347.extend({}, X$$2), console && console.log && console.log("Error: cboxElement missing settings object")) : B$$3 = e$$347.extend({}, i$$213);
    for (t$$20 in B$$3) {
      e$$347.isFunction(B$$3[t$$20]) && "on" !== t$$20.slice(0, 2) && (B$$3[t$$20] = B$$3[t$$20].call(N$$2));
    }
    B$$3.rel = B$$3.rel || N$$2.rel || e$$347(N$$2).data("rel") || "nofollow", B$$3.href = B$$3.href || e$$347(N$$2).attr("href"), B$$3.title = B$$3.title || N$$2.title, "string" == typeof B$$3.href && (B$$3.href = e$$347.trim(B$$3.href));
  }
  function c$$545(i$$214, o$$28) {
    e$$347(t$$15).trigger(i$$214), lt.triggerHandler(i$$214), e$$347.isFunction(o$$28) && o$$28.call(N$$2);
  }
  function u$$13(i$$215) {
    q$$21 || (N$$2 = i$$215, d$$404(), k$$76 = e$$347(N$$2), z$$7 = 0, "nofollow" !== B$$3.rel && (k$$76 = e$$347("." + et$$1).filter(function() {
      var t$$21;
      var i$$216 = e$$347.data(this, Y$$2);
      return i$$216 && (t$$21 = e$$347(this).data("rel") || i$$216.rel || this.rel), t$$21 === B$$3.rel;
    }), z$$7 = k$$76.index(N$$2), -1 === z$$7 && (k$$76 = k$$76.add(N$$2), z$$7 = k$$76.length - 1)), w$$18.css({opacity:parseFloat(B$$3.opacity), cursor:B$$3.overlayClose ? "pointer" : "auto", visibility:"visible"}).show(), J$$3 && g$$199.add(w$$18).removeClass(J$$3), B$$3.className && g$$199.add(w$$18).addClass(B$$3.className), J$$3 = B$$3.className, B$$3.closeButton ? K$$2.html(B$$3.close).appendTo(y$$55) : K$$2.appendTo("<div/>"), U$$2 || (U$$2 = $$$4 = !0, g$$199.css({visibility:"hidden", display:"block"}), 
    H$$3 = o$$26(st$$2, "LoadedContent", "width:0; height:0; overflow:hidden"), y$$55.css({width:"", height:""}).append(H$$3), O$$2 = x$$74.height() + C$$3.height() + y$$55.outerHeight(!0) - y$$55.height(), _$$3 = b$$679.width() + T$$4.width() + y$$55.outerWidth(!0) - y$$55.width(), D$$3 = H$$3.outerHeight(!0), A$$4 = H$$3.outerWidth(!0), B$$3.w = h$$162(B$$3.initialWidth, "x"), B$$3.h = h$$162(B$$3.initialHeight, "y"), H$$3.css({width:"", height:B$$3.h}), Q$$2.position(), c$$545(tt$$1, B$$3.onOpen), 
    P$$2.add(L$$2).hide(), g$$199.focus(), B$$3.trapFocus && t$$15.addEventListener && (t$$15.addEventListener("focus", a$$688, !0), lt.one(rt$$3, function() {
      t$$15.removeEventListener("focus", a$$688, !0);
    })), B$$3.returnFocus && lt.one(rt$$3, function() {
      e$$347(N$$2).focus();
    })), m$$50());
  }
  function f$$184() {
    !g$$199 && t$$15.body && (V$$2 = !1, E$$3 = e$$347(i$$210), g$$199 = o$$26(st$$2).attr({id:Y$$2, "class":e$$347.support.opacity === !1 ? Z$$2 + "IE" : "", role:"dialog", tabindex:"-1"}).hide(), w$$18 = o$$26(st$$2, "Overlay").hide(), F$$3 = e$$347([o$$26(st$$2, "LoadingOverlay")[0], o$$26(st$$2, "LoadingGraphic")[0]]), v$$11 = o$$26(st$$2, "Wrapper"), y$$55 = o$$26(st$$2, "Content").append(L$$2 = o$$26(st$$2, "Title"), S$$2 = o$$26(st$$2, "Current"), I$$3 = e$$347('<button type="button"/>').attr({id:Z$$2 + 
    "Previous"}), R$$2 = e$$347('<button type="button"/>').attr({id:Z$$2 + "Next"}), M$$2 = o$$26("button", "Slideshow"), F$$3), K$$2 = e$$347('<button type="button"/>').attr({id:Z$$2 + "Close"}), v$$11.append(o$$26(st$$2).append(o$$26(st$$2, "TopLeft"), x$$74 = o$$26(st$$2, "TopCenter"), o$$26(st$$2, "TopRight")), o$$26(st$$2, !1, "clear:left").append(b$$679 = o$$26(st$$2, "MiddleLeft"), y$$55, T$$4 = o$$26(st$$2, "MiddleRight")), o$$26(st$$2, !1, "clear:left").append(o$$26(st$$2, "BottomLeft"), 
    C$$3 = o$$26(st$$2, "BottomCenter"), o$$26(st$$2, "BottomRight"))).find("div div").css({"float":"left"}), W$$2 = o$$26(st$$2, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), P$$2 = R$$2.add(I$$3).add(S$$2).add(M$$2), e$$347(t$$15.body).append(w$$18, g$$199.append(v$$11, W$$2)));
  }
  function p$$50() {
    function i$$217(e$$353) {
      e$$353.which > 1 || e$$353.shiftKey || e$$353.altKey || e$$353.metaKey || e$$353.ctrlKey || (e$$353.preventDefault(), u$$13(this));
    }
    return g$$199 ? (V$$2 || (V$$2 = !0, R$$2.click(function() {
      Q$$2.next();
    }), I$$3.click(function() {
      Q$$2.prev();
    }), K$$2.click(function() {
      Q$$2.close();
    }), w$$18.click(function() {
      B$$3.overlayClose && Q$$2.close();
    }), e$$347(t$$15).bind("keydown." + Z$$2, function(e$$354) {
      var t$$22 = e$$354.keyCode;
      U$$2 && B$$3.escKey && 27 === t$$22 && (e$$354.preventDefault(), Q$$2.close()), U$$2 && B$$3.arrowKey && k$$76[1] && !e$$354.altKey && (37 === t$$22 ? (e$$354.preventDefault(), I$$3.click()) : 39 === t$$22 && (e$$354.preventDefault(), R$$2.click()));
    }), e$$347.isFunction(e$$347.fn.on) ? e$$347(t$$15).on("click." + Z$$2, "." + et$$1, i$$217) : e$$347("." + et$$1).live("click." + Z$$2, i$$217)), !0) : !1;
  }
  function m$$50() {
    var n$$98;
    var r$$24;
    var a$$689;
    var u$$14 = Q$$2.prep;
    var f$$185 = ++at;
    $$$4 = !0, j$$109 = !1, N$$2 = k$$76[z$$7], d$$404(), c$$545(ht), c$$545(it, B$$3.onLoad), B$$3.h = B$$3.height ? h$$162(B$$3.height, "y") - D$$3 - O$$2 : B$$3.innerHeight && h$$162(B$$3.innerHeight, "y"), B$$3.w = B$$3.width ? h$$162(B$$3.width, "x") - A$$4 - _$$3 : B$$3.innerWidth && h$$162(B$$3.innerWidth, "x"), B$$3.mw = B$$3.w, B$$3.mh = B$$3.h, B$$3.maxWidth && (B$$3.mw = h$$162(B$$3.maxWidth, "x") - A$$4 - _$$3, B$$3.mw = B$$3.w && B$$3.w < B$$3.mw ? B$$3.w : B$$3.mw), B$$3.maxHeight && 
    (B$$3.mh = h$$162(B$$3.maxHeight, "y") - D$$3 - O$$2, B$$3.mh = B$$3.h && B$$3.h < B$$3.mh ? B$$3.h : B$$3.mh), n$$98 = B$$3.href, G$$3 = setTimeout(function() {
      F$$3.show();
    }, 100), B$$3.inline ? (a$$689 = o$$26(st$$2).hide().insertBefore(e$$347(n$$98)[0]), lt.one(ht, function() {
      a$$689.replaceWith(H$$3.children());
    }), u$$14(e$$347(n$$98))) : B$$3.iframe ? u$$14(" ") : B$$3.html ? u$$14(B$$3.html) : B$$3.photo || B$$3.photoRegex.test(n$$98) ? (n$$98 = s$$30(B$$3, n$$98), j$$109 = t$$15.createElement("img"), e$$347(j$$109).addClass(Z$$2 + "Photo").bind("error", function() {
      B$$3.title = !1, u$$14(o$$26(st$$2, "Error").html(B$$3.imgError));
    }).one("load", function() {
      var t$$23;
      f$$185 === at && (e$$347.each(["alt", "longdesc", "aria-describedby"], function(t$$24, i$$218) {
        var o$$29 = e$$347(N$$2).attr(i$$218) || e$$347(N$$2).attr("data-" + i$$218);
        o$$29 && j$$109.setAttribute(i$$218, o$$29);
      }), B$$3.retinaImage && i$$210.devicePixelRatio > 1 && (j$$109.height = j$$109.height / i$$210.devicePixelRatio, j$$109.width = j$$109.width / i$$210.devicePixelRatio), B$$3.scalePhotos && (r$$24 = function() {
        j$$109.height -= j$$109.height * t$$23, j$$109.width -= j$$109.width * t$$23;
      }, B$$3.mw && j$$109.width > B$$3.mw && (t$$23 = (j$$109.width - B$$3.mw) / j$$109.width, r$$24()), B$$3.mh && j$$109.height > B$$3.mh && (t$$23 = (j$$109.height - B$$3.mh) / j$$109.height, r$$24())), B$$3.h && (j$$109.style.marginTop = Math.max(B$$3.mh - j$$109.height, 0) / 2 + "px"), k$$76[1] && (B$$3.loop || k$$76[z$$7 + 1]) && (j$$109.style.cursor = "pointer", j$$109.onclick = function() {
        Q$$2.next();
      }), j$$109.style.width = j$$109.width + "px", j$$109.style.height = j$$109.height + "px", setTimeout(function() {
        u$$14(j$$109);
      }, 1));
    }), setTimeout(function() {
      j$$109.src = n$$98;
    }, 1)) : n$$98 && W$$2.load(n$$98, B$$3.data, function(t$$25, i$$219) {
      f$$185 === at && u$$14("error" === i$$219 ? o$$26(st$$2, "Error").html(B$$3.xhrError) : e$$347(this).contents());
    });
  }
  var w$$18;
  var g$$199;
  var v$$11;
  var y$$55;
  var x$$74;
  var b$$679;
  var T$$4;
  var C$$3;
  var k$$76;
  var E$$3;
  var H$$3;
  var W$$2;
  var F$$3;
  var L$$2;
  var S$$2;
  var M$$2;
  var R$$2;
  var I$$3;
  var K$$2;
  var P$$2;
  var B$$3;
  var O$$2;
  var _$$3;
  var D$$3;
  var A$$4;
  var N$$2;
  var z$$7;
  var j$$109;
  var U$$2;
  var $$$4;
  var q$$21;
  var G$$3;
  var Q$$2;
  var J$$3;
  var V$$2;
  var X$$2 = {html:!1, photo:!1, iframe:!1, inline:!1, transition:"elastic", speed:300, fadeOut:300, width:!1, initialWidth:"600", innerWidth:!1, maxWidth:!1, height:!1, initialHeight:"450", innerHeight:!1, maxHeight:!1, scalePhotos:!0, scrolling:!0, href:!1, title:!1, rel:!1, opacity:.9, preloading:!0, className:!1, overlayClose:!0, escKey:!0, arrowKey:!0, top:!1, bottom:!1, left:!1, right:!1, fixed:!1, data:void 0, closeButton:!0, fastIframe:!0, open:!1, reposition:!0, loop:!0, slideshow:!1, slideshowAuto:!0, 
  slideshowSpeed:2500, slideshowStart:"start slideshow", slideshowStop:"stop slideshow", photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i, retinaImage:!1, retinaUrl:!1, retinaSuffix:"@2x.$1", current:"image {current} of {total}", previous:"previous", next:"next", close:"close", xhrError:"This content failed to load.", imgError:"This image failed to load.", returnFocus:!0, trapFocus:!0, onOpen:!1, onLoad:!1, onComplete:!1, onCleanup:!1, onClosed:!1};
  var Y$$2 = "colorbox";
  var Z$$2 = "cbox";
  var et$$1 = Z$$2 + "Element";
  var tt$$1 = Z$$2 + "_open";
  var it = Z$$2 + "_load";
  var ot = Z$$2 + "_complete";
  var nt = Z$$2 + "_cleanup";
  var rt$$3 = Z$$2 + "_closed";
  var ht = Z$$2 + "_purge";
  var lt = e$$347("<a/>");
  var st$$2 = "div";
  var at = 0;
  var dt = {};
  var ct$$1 = function() {
    function e$$355() {
      clearTimeout(h$$163);
    }
    function t$$26() {
      (B$$3.loop || k$$76[z$$7 + 1]) && (e$$355(), h$$163 = setTimeout(Q$$2.next, B$$3.slideshowSpeed));
    }
    function i$$220() {
      M$$2.html(B$$3.slideshowStop).unbind(s$$31).one(s$$31, o$$30), lt.bind(ot, t$$26).bind(it, e$$355), g$$199.removeClass(l$$82 + "off").addClass(l$$82 + "on");
    }
    function o$$30() {
      e$$355(), lt.unbind(ot, t$$26).unbind(it, e$$355), M$$2.html(B$$3.slideshowStart).unbind(s$$31).one(s$$31, function() {
        Q$$2.next(), i$$220();
      }), g$$199.removeClass(l$$82 + "on").addClass(l$$82 + "off");
    }
    function n$$99() {
      r$$25 = !1, M$$2.hide(), e$$355(), lt.unbind(ot, t$$26).unbind(it, e$$355), g$$199.removeClass(l$$82 + "off " + l$$82 + "on");
    }
    var r$$25;
    var h$$163;
    var l$$82 = Z$$2 + "Slideshow_";
    var s$$31 = "click." + Z$$2;
    return function() {
      r$$25 ? B$$3.slideshow || (lt.unbind(nt, n$$99), n$$99()) : B$$3.slideshow && k$$76[1] && (r$$25 = !0, lt.one(nt, n$$99), B$$3.slideshowAuto ? i$$220() : o$$30(), M$$2.show());
    };
  }();
  e$$347.colorbox || (e$$347(f$$184), Q$$2 = e$$347.fn[Y$$2] = e$$347[Y$$2] = function(t$$27, i$$221) {
    var o$$31 = this;
    if (t$$27 = t$$27 || {}, f$$184(), p$$50()) {
      if (e$$347.isFunction(o$$31)) {
        o$$31 = e$$347("<a/>"), t$$27.open = !0;
      } else {
        if (!o$$31[0]) {
          return o$$31;
        }
      }
      i$$221 && (t$$27.onComplete = i$$221), o$$31.each(function() {
        e$$347.data(this, Y$$2, e$$347.extend({}, e$$347.data(this, Y$$2) || X$$2, t$$27));
      }).addClass(et$$1), (e$$347.isFunction(t$$27.open) && t$$27.open.call(o$$31) || t$$27.open) && u$$13(o$$31[0]);
    }
    return o$$31;
  }, Q$$2.position = function(t$$28, i$$222) {
    function o$$32() {
      x$$74[0].style.width = C$$3[0].style.width = y$$55[0].style.width = parseInt(g$$199[0].style.width, 10) - _$$3 + "px", y$$55[0].style.height = b$$679[0].style.height = T$$4[0].style.height = parseInt(g$$199[0].style.height, 10) - O$$2 + "px";
    }
    var r$$26;
    var l$$83;
    var s$$32;
    var a$$690 = 0;
    var d$$405 = 0;
    var c$$546 = g$$199.offset();
    if (E$$3.unbind("resize." + Z$$2), g$$199.css({top:-9E4, left:-9E4}), l$$83 = E$$3.scrollTop(), s$$32 = E$$3.scrollLeft(), B$$3.fixed ? (c$$546.top -= l$$83, c$$546.left -= s$$32, g$$199.css({position:"fixed"})) : (a$$690 = l$$83, d$$405 = s$$32, g$$199.css({position:"absolute"})), d$$405 += B$$3.right !== !1 ? Math.max(E$$3.width() - B$$3.w - A$$4 - _$$3 - h$$162(B$$3.right, "x"), 0) : B$$3.left !== !1 ? h$$162(B$$3.left, "x") : Math.round(Math.max(E$$3.width() - B$$3.w - A$$4 - _$$3, 0) / 2), 
    a$$690 += B$$3.bottom !== !1 ? Math.max(n$$96() - B$$3.h - D$$3 - O$$2 - h$$162(B$$3.bottom, "y"), 0) : B$$3.top !== !1 ? h$$162(B$$3.top, "y") : Math.round(Math.max(n$$96() - B$$3.h - D$$3 - O$$2, 0) / 2), g$$199.css({top:c$$546.top, left:c$$546.left, visibility:"visible"}), v$$11[0].style.width = v$$11[0].style.height = "9999px", r$$26 = {width:B$$3.w + A$$4 + _$$3, height:B$$3.h + D$$3 + O$$2, top:a$$690, left:d$$405}, t$$28) {
      var u$$15 = 0;
      e$$347.each(r$$26, function(e$$356) {
        return r$$26[e$$356] !== dt[e$$356] ? (u$$15 = t$$28, void 0) : void 0;
      }), t$$28 = u$$15;
    }
    dt = r$$26, t$$28 || g$$199.css(r$$26), g$$199.dequeue().animate(r$$26, {duration:t$$28 || 0, complete:function() {
      o$$32(), $$$4 = !1, v$$11[0].style.width = B$$3.w + A$$4 + _$$3 + "px", v$$11[0].style.height = B$$3.h + D$$3 + O$$2 + "px", B$$3.reposition && setTimeout(function() {
        E$$3.bind("resize." + Z$$2, Q$$2.position);
      }, 1), i$$222 && i$$222();
    }, step:o$$32});
  }, Q$$2.resize = function(e$$357) {
    var t$$29;
    U$$2 && (e$$357 = e$$357 || {}, e$$357.width && (B$$3.w = h$$162(e$$357.width, "x") - A$$4 - _$$3), e$$357.innerWidth && (B$$3.w = h$$162(e$$357.innerWidth, "x")), H$$3.css({width:B$$3.w}), e$$357.height && (B$$3.h = h$$162(e$$357.height, "y") - D$$3 - O$$2), e$$357.innerHeight && (B$$3.h = h$$162(e$$357.innerHeight, "y")), e$$357.innerHeight || e$$357.height || (t$$29 = H$$3.scrollTop(), H$$3.css({height:"auto"}), B$$3.h = H$$3.height()), H$$3.css({height:B$$3.h}), t$$29 && H$$3.scrollTop(t$$29), 
    Q$$2.position("none" === B$$3.transition ? 0 : B$$3.speed));
  }, Q$$2.prep = function(i$$223) {
    if (U$$2) {
      var a$$691;
      var d$$406 = "none" === B$$3.transition ? 0 : B$$3.speed;
      H$$3.empty().remove(), H$$3 = o$$26(st$$2, "LoadedContent").append(i$$223), H$$3.hide().appendTo(W$$2.show()).css({width:(B$$3.w = B$$3.w || H$$3.width(), B$$3.w = B$$3.mw && B$$3.mw < B$$3.w ? B$$3.mw : B$$3.w, B$$3.w), overflow:B$$3.scrolling ? "auto" : "hidden"}).css({height:(B$$3.h = B$$3.h || H$$3.height(), B$$3.h = B$$3.mh && B$$3.mh < B$$3.h ? B$$3.mh : B$$3.h, B$$3.h)}).prependTo(y$$55), W$$2.hide(), e$$347(j$$109).css({"float":"none"}), a$$691 = function() {
        function i$$224() {
          e$$347.support.opacity === !1 && g$$199[0].style.removeAttribute("filter");
        }
        var n$$101;
        var h$$165;
        var a$$692 = k$$76.length;
        var u$$16 = "frameBorder";
        var f$$186 = "allowTransparency";
        U$$2 && (h$$165 = function() {
          clearTimeout(G$$3), F$$3.hide(), c$$545(ot, B$$3.onComplete);
        }, L$$2.html(B$$3.title).add(H$$3).show(), a$$692 > 1 ? ("string" == typeof B$$3.current && S$$2.html(B$$3.current.replace("{current}", z$$7 + 1).replace("{total}", a$$692)).show(), R$$2[B$$3.loop || a$$692 - 1 > z$$7 ? "show" : "hide"]().html(B$$3.next), I$$3[B$$3.loop || z$$7 ? "show" : "hide"]().html(B$$3.previous), ct$$1(), B$$3.preloading && e$$347.each([r$$22(-1), r$$22(1)], function() {
          var i$$225;
          var o$$33;
          var n$$102 = k$$76[this];
          var r$$27 = e$$347.data(n$$102, Y$$2);
          r$$27 && r$$27.href ? (i$$225 = r$$27.href, e$$347.isFunction(i$$225) && (i$$225 = i$$225.call(n$$102))) : i$$225 = e$$347(n$$102).attr("href"), i$$225 && (r$$27.photo || r$$27.photoRegex.test(i$$225)) && (i$$225 = s$$30(r$$27, i$$225), o$$33 = t$$15.createElement("img"), o$$33.src = i$$225);
        })) : P$$2.hide(), B$$3.iframe ? (n$$101 = o$$26("iframe")[0], u$$16 in n$$101 && (n$$101[u$$16] = 0), f$$186 in n$$101 && (n$$101[f$$186] = "true"), B$$3.scrolling || (n$$101.scrolling = "no"), e$$347(n$$101).attr({src:B$$3.href, name:(new Date).getTime(), "class":Z$$2 + "Iframe", allowFullScreen:!0, webkitAllowFullScreen:!0, mozallowfullscreen:!0}).one("load", h$$165).appendTo(H$$3), lt.one(ht, function() {
          n$$101.src = "//about:blank";
        }), B$$3.fastIframe && e$$347(n$$101).trigger("load")) : h$$165(), "fade" === B$$3.transition ? g$$199.fadeTo(d$$406, 1, i$$224) : i$$224());
      }, "fade" === B$$3.transition ? g$$199.fadeTo(d$$406, 0, function() {
        Q$$2.position(0, a$$691);
      }) : Q$$2.position(d$$406, a$$691);
    }
  }, Q$$2.next = function() {
    !$$$4 && k$$76[1] && (B$$3.loop || k$$76[z$$7 + 1]) && (z$$7 = r$$22(1), u$$13(k$$76[z$$7]));
  }, Q$$2.prev = function() {
    !$$$4 && k$$76[1] && (B$$3.loop || z$$7) && (z$$7 = r$$22(-1), u$$13(k$$76[z$$7]));
  }, Q$$2.close = function() {
    U$$2 && !q$$21 && (q$$21 = !0, U$$2 = !1, c$$545(nt, B$$3.onCleanup), E$$3.unbind("." + Z$$2), w$$18.fadeTo(B$$3.fadeOut || 0, 0), g$$199.stop().fadeTo(B$$3.fadeOut || 0, 0, function() {
      g$$199.add(w$$18).css({opacity:1, cursor:"auto"}).hide(), c$$545(ht), H$$3.empty().remove(), setTimeout(function() {
        q$$21 = !1, c$$545(rt$$3, B$$3.onClosed);
      }, 1);
    }));
  }, Q$$2.remove = function() {
    g$$199 && (g$$199.stop(), e$$347.colorbox.close(), g$$199.stop().remove(), w$$18.remove(), q$$21 = !1, g$$199 = null, e$$347("." + et$$1).removeData(Y$$2).removeClass(et$$1), e$$347(t$$15).unbind("click." + Z$$2));
  }, Q$$2.element = function() {
    return e$$347(N$$2);
  }, Q$$2.settings = X$$2);
})(jQuery, document, window);
Smits = {};
Smits.Common = {nodeIdIncrement:0, activeNode:0, roundFloat:function(a$$693, c$$547) {
  var b$$680 = 0;
  var f$$187 = 1;
  for (;b$$680 < c$$547;) {
    f$$187 *= 10, b$$680++;
  }
  return Math.round(a$$693 * f$$187) / f$$187;
}, apply:function(a$$694, c$$548) {
  if (a$$694 && typeof c$$548 == "object") {
    var b$$681;
    for (b$$681 in c$$548) {
      a$$694[b$$681] = c$$548[b$$681];
    }
  }
  return a$$694;
}, addRaphEventHandler:function(a$$695, c$$549, b$$682, f$$188) {
  try {
    a$$695[c$$549](function(c$$550, a$$696) {
      return function(g$$200) {
        a$$696.e = g$$200;
        c$$550(a$$696);
      };
    }(b$$682, f$$188));
  } catch (k$$77) {
  }
}, isInteger:function(a$$697) {
  return !isNaN(parseInt(a$$697));
}, isXMLSerializerAvailable:function() {
  return typeof XMLSerializer == "function" ? !0 : !1;
}, createSvgEl:function(a$$698, c$$551) {
  a$$698 = document.createElementNS("http://www.w3.org/2000/svg", a$$698);
  if (c$$551) {
    var b$$683;
    for (b$$683 in c$$551) {
      c$$551.hasOwnProperty(b$$683) && a$$698.setAttribute(b$$683, String(c$$551[b$$683]));
    }
  }
  return a$$698;
}, createGradientEl:function(a$$699, c$$552, b$$684) {
  if (c$$552.type != "radialGradient") {
    return !1;
  }
  a$$699 = Smits.Common.createSvgEl("radialGradient", {id:a$$699, gradientUnits:"userSpaceOnUse", cx:b$$684[0], cy:b$$684[1], r:b$$684[2], fx:b$$684[0], fy:b$$684[1]});
  if (c$$552.stop) {
    c$$552 = c$$552.stop;
    b$$684 = 0;
    for (;b$$684 < c$$552.length;b$$684++) {
      var f$$189 = c$$552[b$$684];
      f$$189["@attributes"] ? a$$699.appendChild(Smits.Common.createSvgEl("stop", f$$189["@attributes"])) : (f$$189._attributes && delete f$$189._attributes, f$$189._children && delete f$$189._children, f$$189.__proto__ && delete f$$189.__proto__, a$$699.appendChild(Smits.Common.createSvgEl("stop", f$$189)));
    }
  }
  return a$$699;
}, setCssStyle:function(a$$700, c$$553) {
  var b$$685 = document.styleSheets[0];
  b$$685.addRule ? b$$685.addRule(a$$700, c$$553) : b$$685.insertRule && b$$685.insertRule(a$$700 + " { " + c$$553 + " }", b$$685.cssRules.length);
}};
Smits.PhyloCanvas = function() {
  var a$$701;
  var c$$554;
  var b$$686;
  var f$$190;
  return function(k$$78, l$$84, p$$51, g$$201, m$$51) {
    this.getNewickObject = function() {
    };
    this.clear = function() {
    };
    this.scale = function(d$$408) {
      b$$686.svg.scale(d$$408);
    };
    this.getSvg = function() {
      return b$$686;
    };
    this.getPhylogram = function() {
      return a$$701;
    };
    this.getSvgSource = function() {
      return Raphael.svg && Smits.Common.isXMLSerializerAvailable() ? (new XMLSerializer).serializeToString(b$$686.svg.canvas) : !1;
    };
    if (typeof k$$78 === "object") {
      if (k$$78.xml) {
        var d$$407 = k$$78.fileSource ? k$$78.xml : XMLObjectifier.textToXML(k$$78.xml);
        d$$407 = XMLObjectifier.xmlToJSON(d$$407);
        f$$190 = new Smits.PhyloCanvas.PhyloxmlParse(d$$407);
      } else {
        k$$78.phyloxml ? (d$$407 = k$$78.fileSource ? k$$78.phyloxml : XMLObjectifier.textToXML(k$$78.phyloxml), d$$407 = XMLObjectifier.xmlToJSON(d$$407), f$$190 = new Smits.PhyloCanvas.PhyloxmlParse(d$$407)) : k$$78.nexml ? (d$$407 = k$$78.fileSource ? k$$78.nexml : XMLObjectifier.textToXML(k$$78.nexml), d$$407 = XMLObjectifier.xmlToJSON(d$$407), f$$190 = new Smits.PhyloCanvas.NexmlParse(d$$407, k$$78)) : k$$78.json ? f$$190 = new Smits.PhyloCanvas.PhyloxmlParse(k$$78.json) : k$$78.newick ? f$$190 = 
        new Smits.PhyloCanvas.NewickParse(k$$78.newick) : k$$78.nexmlJson ? f$$190 = new Smits.PhyloCanvas.NexmlJsonParse(k$$78) : alert("Please set the format of input data");
      }
    } else {
      f$$190 = new Smits.PhyloCanvas.NewickParse(k$$78);
    }
    c$$554 = l$$84;
    b$$686 = new Smits.PhyloCanvas.Render.SVG(c$$554, p$$51, g$$201);
    a$$701 = m$$51 == "circular" ? new Smits.PhyloCanvas.Render.CircularPhylogram(b$$686, f$$190) : new Smits.PhyloCanvas.Render.Phylogram(b$$686, f$$190);
  };
}();
Smits.PhyloCanvas.prototype = {};
Smits.PhyloCanvas.Node = function() {
  return function(a$$702, c$$555) {
    this.id = Smits.Common.nodeIdIncrement += 1;
    this.newickLen = this.len = this.level = 0;
    this.type = this.name = "";
    this.chart = {};
    this.img = [];
    a$$702 && Smits.Common.apply(this, a$$702);
    this._midBranchPosition = this._countImmediateChildren = this._countAllChildren = !1;
    this.children = [];
    c$$555 && c$$555.children.push(this);
  };
}();
Smits.PhyloCanvas.Node.prototype = {getCountAllChildren:function() {
  if (this._countAllChildren !== !1) {
    return this._countAllChildren;
  }
  var a$$703 = 0;
  var c$$556;
  for (c$$556 in this.children) {
    if (Smits.Common.isInteger(c$$556)) {
      var b$$687 = this.children[c$$556];
      b$$687.children && b$$687.children.length > 0 ? a$$703 += b$$687.getCountAllChildren() : a$$703++;
    }
  }
  return this._countAllChildren = a$$703;
}, getCountImmediateChildren:function() {
  if (this._countImmediateChildren !== !1) {
    return this._countImmediateChildren;
  }
  var a$$704 = 0;
  var c$$557;
  for (c$$557 in this.children) {
    a$$704 += this.children[c$$557].length;
  }
  return this._countImmediateChildren = a$$704;
}, getMidbranchPosition:function(a$$705) {
  if (this._midBranchPosition !== !1) {
    return this._midBranchPosition;
  }
  var c$$558 = [0, 0];
  var b$$688 = 0;
  for (;b$$688 < this.children.length;b$$688++) {
    var f$$191 = this.children[b$$688];
    f$$191.children && f$$191.children.length > 0 ? b$$688 == 0 && a$$705 ? (c$$558[0] = f$$191.getMidbranchPosition(!0), c$$558[1] += f$$191.getCountAllChildren() - 1) : b$$688 == 0 ? (c$$558[0] = f$$191.getMidbranchPosition(), c$$558[1] += f$$191.getCountAllChildren()) : c$$558[1] += b$$688 == this.children.length - 1 ? f$$191.getMidbranchPosition() : f$$191.getCountAllChildren() : b$$688 == 0 && a$$705 ? c$$558[0] = 0 : (b$$688 == 0 && (c$$558[0] = 1), c$$558[1] += 1);
  }
  return this._midBranchPosition = c$$558[1] >= c$$558[0] ? (c$$558[1] + c$$558[0]) / 2 : c$$558[0];
}};
Smits.PhyloCanvas.NewickParse = function() {
  function j$$110(d$$410) {
    if (d$$410.children && d$$410.children.length) {
      var c$$560 = 0;
      for (;c$$560 < d$$410.children.length;c$$560++) {
        var a$$710 = d$$410.children[c$$560];
        if (a$$710.len === 0) {
          a$$710.len = 1;
        }
        a$$710.newickLen = Smits.Common.roundFloat(a$$710.len + d$$410.newickLen, 4);
        if (a$$710.level > f$$192) {
          f$$192 = a$$710.level;
        }
        if (a$$710.newickLen > k$$79) {
          k$$79 = a$$710.newickLen;
        }
        a$$710.children.length > 0 && j$$110(a$$710, d$$410);
      }
    }
    return d$$410;
  }
  function d$$409() {
    c$$559 = a$$706.charAt(b$$689);
    b$$689 += 1;
  }
  function m$$52() {
    var a$$709 = "";
    for (;c$$559 !== ":" && c$$559 !== ")" && c$$559 !== "," && c$$559 !== ";";) {
      a$$709 += c$$559, d$$409();
    }
    return a$$709;
  }
  function g$$202(a$$708) {
    var e$$359 = new Smits.PhyloCanvas.Node;
    if (a$$708) {
      e$$359.level = a$$708.level + 1;
    }
    for (;c$$559 !== ")";) {
      d$$409(), c$$559 === "(" ? e$$359.children.push(g$$202(e$$359)) : e$$359.children.push(p$$52(e$$359));
    }
    d$$409();
    if (c$$559 !== ":" && c$$559 !== ")" && c$$559 !== "," && c$$559 !== ";") {
      e$$359.type = "label", e$$359.name = m$$52();
    }
    if (c$$559 === ":") {
      d$$409();
      e$$359.len = Smits.Common.roundFloat(m$$52(), 4);
      if (e$$359.len == 0) {
        e$$359.len = 1E-4;
      }
      e$$359.type = "stem";
    }
    return e$$359;
  }
  function p$$52(a$$707) {
    var e$$358 = new Smits.PhyloCanvas.Node;
    for (;c$$559 !== ")" && c$$559 !== ",";) {
      if (c$$559 === ":") {
        if (d$$409(), e$$358.len = Smits.Common.roundFloat(m$$52(), 4), e$$358.len == 0) {
          e$$358.len = 1E-4;
        }
      } else {
        if (c$$559 === "'" || c$$559 === '"') {
          e$$358.type = "label";
          var g$$203 = e$$358;
          var j$$111 = c$$559;
          var b$$690 = "";
          for (;c$$559 !== j$$111;) {
            b$$690 += c$$559, d$$409();
          }
          g$$203.name = b$$690;
        } else {
          e$$358.type = "label", e$$358.name = m$$52();
        }
      }
    }
    e$$358.level = a$$707.level + 1;
    return e$$358;
  }
  var a$$706;
  var c$$559;
  var b$$689;
  var f$$192 = 0;
  var k$$79 = 0;
  var l$$85;
  return function(c$$561) {
    this.getRoot = function() {
      return l$$85;
    };
    this.getLevels = function() {
      return f$$192;
    };
    this.getNewickLen = function() {
      return k$$79;
    };
    this.getValidate = function() {
    };
    k$$79 = f$$192 = 0;
    a$$706 = c$$561;
    b$$689 = 0;
    d$$409();
    l$$85 = g$$202();
    l$$85 = j$$110(l$$85);
  };
}();
Smits.PhyloCanvas.NewickParse.prototype = {};
Smits.PhyloCanvas.PhyloxmlParse = function() {
  function p$$53(a$$713, c$$564) {
    var d$$413;
    for (d$$413 in a$$713) {
      d$$413 != "_children" && d$$413 != "Text" && (d$$413 == "rectangular" || d$$413 == "circular" ? p$$53(a$$713[d$$413][0], d$$413) : (Smits.PhyloCanvas.Render.Parameters[d$$413] || (Smits.PhyloCanvas.Render.Parameters[d$$413] = {}), Smits.PhyloCanvas.Render.Parameters.set(d$$413, a$$713[d$$413][0].Text, c$$564)));
    }
  }
  function l$$86(b$$692) {
    if (b$$692.children && b$$692.children.length) {
      var f$$194 = 0;
      for (;f$$194 < b$$692.children.length;f$$194++) {
        var d$$412 = b$$692.children[f$$194];
        d$$412.newickLen = Math.round((d$$412.len + b$$692.newickLen) * 1E4) / 1E4;
        if (d$$412.level > a$$711) {
          a$$711 = d$$412.level;
        }
        if (d$$412.newickLen > c$$562) {
          c$$562 = d$$412.newickLen;
        }
        d$$412.children.length > 0 && l$$86(d$$412, b$$692);
      }
    }
    return b$$692;
  }
  function k$$80(a$$712, c$$563) {
    var d$$411 = new Smits.PhyloCanvas.Node;
    if (c$$563) {
      d$$411.level = c$$563.level + 1;
    }
    if (a$$712.clade && a$$712.clade.length) {
      var j$$112 = 0;
      for (;j$$112 < a$$712.clade.length;j$$112++) {
        d$$411.children.push(k$$80(a$$712.clade[j$$112], d$$411));
      }
    }
    if (a$$712.branch_length) {
      if (typeof a$$712.branch_length === "object") {
        a$$712.branch_length = a$$712.branch_length[0].Text;
      }
      d$$411.len = Smits.Common.roundFloat(a$$712.branch_length, 4);
      if (d$$411.len == 0) {
        d$$411.len = 1E-4;
      }
    }
    if (a$$712.name) {
      d$$411.type = "label";
      d$$411.name = a$$712.name[0].Text;
      if (a$$712.name[0] && a$$712.name[0].style) {
        d$$411.style = a$$712.name[0].style;
      }
      if (a$$712.name[0] && a$$712.name[0].bgStyle) {
        d$$411.bgStyle = a$$712.name[0].bgStyle;
      }
    } else {
      if (a$$712.confidence) {
        d$$411.name = a$$712.confidence[0].Text;
      }
    }
    if (a$$712.sequence && a$$712.sequence[0] && a$$712.sequence[0].name && a$$712.sequence[0].name[0] && a$$712.sequence[0].name[0].Text) {
      d$$411.sequenceName = a$$712.sequence[0].name[0].Text;
    }
    if (a$$712.taxonomy && a$$712.taxonomy[0]) {
      if (a$$712.taxonomy[0].scientific_name && a$$712.taxonomy[0].scientific_name[0] && a$$712.taxonomy[0].scientific_name[0].Text) {
        d$$411.taxonomyScientificName = a$$712.taxonomy[0].scientific_name[0].Text;
      }
      if (a$$712.taxonomy[0].common_name && a$$712.taxonomy[0].common_name[0] && a$$712.taxonomy[0].common_name[0].Text) {
        d$$411.taxonomyCommonName = a$$712.taxonomy[0].common_name[0].Text;
      }
    }
    if (a$$712.sequence && a$$712.sequence[0] && a$$712.sequence[0].accession && a$$712.sequence[0].accession[0] && a$$712.sequence[0].accession[0].Text) {
      d$$411.sequenceAccession = a$$712.sequence[0].accession[0].Text;
    }
    if (a$$712.point) {
      d$$411.LatLong = [a$$712.point[0].lat[0].Text, a$$712.point[0]["long"][0].Text];
    }
    if (!d$$411.name) {
      if (d$$411.sequenceName) {
        d$$411.name = d$$411.sequenceName;
      } else {
        if (d$$411.taxonomyScientificName) {
          d$$411.name = d$$411.taxonomyScientificName;
        } else {
          if (d$$411.taxonomyCommonName) {
            d$$411.name = d$$411.taxonomyCommonName;
          } else {
            if (d$$411.sequenceAccession) {
              d$$411.name = d$$411.sequenceAccession;
            }
          }
        }
      }
      if (d$$411.name) {
        d$$411.type = "label";
      }
    }
    if (a$$712.annotation) {
      if (a$$712.annotation[0] && a$$712.annotation[0].desc && a$$712.annotation[0].desc[0] && a$$712.annotation[0].desc[0].Text) {
        d$$411.description = a$$712.annotation[0].desc[0].Text;
      }
      if (a$$712.annotation[0] && a$$712.annotation[0].uri && a$$712.annotation[0].uri[0] && a$$712.annotation[0].uri[0].Text) {
        d$$411.uri = a$$712.annotation[0].uri[0].Text;
      }
      if (a$$712.annotation[0] && a$$712.annotation[0].img) {
        for (j$$112 in a$$712.annotation[0].img) {
          if (Smits.Common.isInteger(j$$112)) {
            d$$411.img[j$$112] = a$$712.annotation[0].img[j$$112].Text;
          }
        }
      }
    }
    if (a$$712.chart && a$$712.chart[0]) {
      for (j$$112 in a$$712.chart[0]) {
        if (j$$112 != "Text" && j$$112 != "_children") {
          d$$411.chart[j$$112] = a$$712.chart[0][j$$112][0].Text;
        }
      }
    }
    d$$411 && d$$411.level > 1 && (d$$411.len || (f$$193 = "Error. Please include Branch Lengths - we only draw rooted phylogenetic trees."));
    return d$$411;
  }
  var a$$711 = 0;
  var c$$562 = 0;
  var b$$691;
  var f$$193;
  return function(g$$204) {
    this.getRoot = function() {
      return b$$691;
    };
    this.getLevels = function() {
      return a$$711;
    };
    this.getNewickLen = function() {
      return c$$562;
    };
    this.getValidate = function() {
      return f$$193;
    };
    g$$204.phylogeny && g$$204.phylogeny[0] && g$$204.phylogeny[0].clade && (b$$691 = k$$80(g$$204.phylogeny[0].clade[0]));
    if (g$$204.phylogeny && g$$204.phylogeny[0] && g$$204.phylogeny[0].render && g$$204.phylogeny[0].render[0]) {
      if ((g$$204 = g$$204.phylogeny[0].render[0]) && g$$204.styles) {
        var m$$53 = g$$204.styles[0];
        var d$$414;
        for (d$$414 in m$$53) {
          if (d$$414 != "_children" && d$$414 != "Text") {
            if (m$$53[d$$414][0].type && m$$53[d$$414][0].type == "radialGradient" && Raphael.svg) {
              m$$53[d$$414][0].name = d$$414, Smits.PhyloCanvas.Render.Style[d$$414] = m$$53[d$$414][0], Smits.PhyloCanvas.Render.Style.jsphylosvgGradientList || (Smits.PhyloCanvas.Render.Style.jsphylosvgGradientList = []), Smits.PhyloCanvas.Render.Style.jsphylosvgGradientList.push(d$$414);
            } else {
              var j$$113;
              for (j$$113 in Smits.PhyloCanvas.Render.Style[d$$414] || (Smits.PhyloCanvas.Render.Style[d$$414] = {}), m$$53[d$$414][0]) {
                j$$113 != "_attributes" && j$$113 != "_children" && j$$113 != "type" && (Smits.PhyloCanvas.Render.Style[d$$414][j$$113.replace("_", "-")] = m$$53[d$$414][0][j$$113]);
              }
            }
          }
        }
      }
      g$$204 && g$$204.parameters && p$$53(g$$204.parameters[0]);
      if (g$$204 && g$$204.charts) {
        for (d$$414 in g$$204 = g$$204.charts[0], g$$204) {
          if (d$$414 != "_children" && d$$414 != "Text") {
            for (j$$113 in g$$204[d$$414]) {
              if (g$$204[d$$414][j$$113].type == "binary") {
                g$$204[d$$414][j$$113].chart = d$$414, Smits.PhyloCanvas.Render.Parameters.binaryCharts.push(g$$204[d$$414][j$$113]);
              } else {
                if (g$$204[d$$414][j$$113].type == "integratedBinary") {
                  g$$204[d$$414][j$$113].chart = d$$414, Smits.PhyloCanvas.Render.Parameters.integratedBinaryCharts.push(g$$204[d$$414][j$$113]);
                } else {
                  if (g$$204[d$$414][j$$113].type == "bar") {
                    g$$204[d$$414][j$$113].chart = d$$414, Smits.PhyloCanvas.Render.Parameters.barCharts.push(g$$204[d$$414][j$$113]);
                  }
                }
              }
            }
          }
        }
      }
    }
    b$$691 = l$$86(b$$691);
  };
}();
Smits.PhyloCanvas.PhyloxmlParse.prototype = {};
Smits.PhyloCanvas.NexmlParse = function() {
  function g$$205(b$$694) {
    if (b$$694.children && b$$694.children.length) {
      var d$$416 = 0;
      for (;d$$416 < b$$694.children.length;d$$416++) {
        var j$$114 = b$$694.children[d$$416];
        j$$114.newickLen = Math.round((j$$114.len + b$$694.newickLen) * 1E4) / 1E4;
        if (j$$114.level > a$$714) {
          a$$714 = j$$114.level;
        }
        if (j$$114.newickLen > c$$565) {
          c$$565 = j$$114.newickLen;
        }
        j$$114.children.length > 0 && g$$205(j$$114, b$$694);
      }
    }
    return b$$694;
  }
  function p$$54(a$$715, d$$415, c$$566) {
    var i$$226 = new Smits.PhyloCanvas.Node;
    if (c$$566) {
      i$$226.level = c$$566.level + 1;
    }
    c$$566 = 0;
    for (;c$$566 < k$$81.length;c$$566++) {
      if (k$$81[c$$566].source == a$$715.id) {
        var e$$360 = 0;
        for (;e$$360 < l$$87.length;e$$360++) {
          k$$81[c$$566].target == l$$87[e$$360].id && i$$226.children.push(p$$54(l$$87[e$$360], k$$81[c$$566].length, i$$226));
        }
      }
    }
    if (i$$226 && i$$226.level > 0 && !i$$226.len) {
      i$$226.len = 1;
    }
    if (d$$415 && (i$$226.len = Smits.Common.roundFloat(d$$415, 4), i$$226.len == 0)) {
      i$$226.len = 1E-4;
    }
    if (a$$715.label && (i$$226.type = "label", i$$226.name = a$$715.label, a$$715.style)) {
      i$$226.style = a$$715.style;
    }
    return i$$226;
  }
  var a$$714 = 0;
  var c$$565 = 0;
  var b$$693;
  var f$$195;
  var k$$81;
  var l$$87;
  return function(m$$54, d$$417) {
    this.getRoot = function() {
      return b$$693;
    };
    this.getLevels = function() {
      return a$$714;
    };
    this.getNewickLen = function() {
      return c$$565;
    };
    this.getValidate = function() {
      return f$$195;
    };
    d$$417.tree && m$$54.trees[0] && m$$54.trees[0].tree[d$$417.tree - 1] ? (k$$81 = m$$54.trees[0].tree[d$$417.tree - 1].edge, l$$87 = m$$54.trees[0].tree[d$$417.tree - 1].node) : (k$$81 = m$$54.trees[0].tree[0].edge, l$$87 = m$$54.trees[0].tree[0].node);
    var j$$115 = 0;
    for (;j$$115 < l$$87.length;j$$115++) {
      var i$$227 = 0;
      if (l$$87[j$$115].root && l$$87[j$$115].root == "true") {
        b$$693 = l$$87[j$$115];
        break;
      }
      var e$$361 = 0;
      for (;e$$361 < k$$81.length;e$$361++) {
        k$$81[e$$361].target == l$$87[j$$115].id && i$$227++;
      }
      if (i$$227 == 0) {
        b$$693 = l$$87[j$$115];
        break;
      }
    }
    b$$693 ? (b$$693 = p$$54(b$$693), b$$693 = g$$205(b$$693)) : f$$195 = "Error. Currently, only rooted NeXML trees are supported.";
  };
}();
Smits.PhyloCanvas.NexmlParse.prototype = {};
Smits.PhyloCanvas.NexmlJsonParse = function() {
  function m$$55(a$$718, c$$569) {
    var b$$698;
    for (b$$698 in a$$718) {
      b$$698 != "_children" && b$$698 != "Text" && (b$$698 == "rectangular" || b$$698 == "circular" ? m$$55(a$$718[b$$698], b$$698) : (Smits.PhyloCanvas.Render.Parameters[b$$698] || (Smits.PhyloCanvas.Render.Parameters[b$$698] = {}), Smits.PhyloCanvas.Render.Parameters.set(b$$698, a$$718[b$$698], c$$569)));
    }
  }
  function g$$206(d$$418) {
    if (d$$418.children && d$$418.children.length) {
      var b$$697 = 0;
      for (;b$$697 < d$$418.children.length;b$$697++) {
        var i$$229 = d$$418.children[b$$697];
        i$$229.newickLen = Math.round((i$$229.len + d$$418.newickLen) * 1E4) / 1E4;
        if (i$$229.level > a$$716) {
          a$$716 = i$$229.level;
        }
        if (i$$229.newickLen > c$$567) {
          c$$567 = i$$229.newickLen;
        }
        i$$229.children.length > 0 && g$$206(i$$229, d$$418);
      }
    }
    return d$$418;
  }
  function p$$55(a$$717, c$$568, i$$228) {
    var e$$362 = new Smits.PhyloCanvas.Node;
    if (i$$228) {
      e$$362.level = i$$228.level + 1;
    }
    i$$228 = 0;
    for (;i$$228 < k$$82.length;i$$228++) {
      if (k$$82[i$$228].source == a$$717.id) {
        var b$$696 = 0;
        for (;b$$696 < l$$88.length;b$$696++) {
          k$$82[i$$228].target == l$$88[b$$696].id && e$$362.children.push(p$$55(l$$88[b$$696], k$$82[i$$228].length, e$$362));
        }
      }
    }
    if (c$$568 && (e$$362.len = Smits.Common.roundFloat(c$$568, 4), e$$362.len == 0)) {
      e$$362.len = 1E-4;
    }
    if (a$$717.label) {
      e$$362.type = "label";
      e$$362.name = a$$717.label;
      if (a$$717.accession) {
        e$$362.accession = a$$717.accession;
      }
      if (a$$717.style) {
        e$$362.style = a$$717.style;
      }
      if (a$$717.bgStyle) {
        e$$362.bgStyle = a$$717.bgStyle;
      }
    }
    if (a$$717.chart) {
      e$$362.chart = a$$717.chart;
    }
    e$$362 && e$$362.level > 1 && (e$$362.len || (f$$196 = "Error. Please include Branch Lengths - we only draw rooted phylogenetic trees."));
    return e$$362;
  }
  var a$$716 = 0;
  var c$$567 = 0;
  var b$$695;
  var f$$196;
  var k$$82 = [];
  var l$$88 = [];
  return function(d$$419) {
    this.getRoot = function() {
      return b$$695;
    };
    this.getLevels = function() {
      return a$$716;
    };
    this.getNewickLen = function() {
      return c$$567;
    };
    this.getValidate = function() {
      return f$$196;
    };
    var j$$116 = d$$419.nexmlJson.nexml;
    var i$$230 = j$$116.render;
    if (i$$230 && i$$230.styles) {
      var e$$363 = i$$230.styles;
      var h$$166;
      for (h$$166 in e$$363) {
        if (h$$166 != "_children" && h$$166 != "Text") {
          if (e$$363[h$$166]["@attributes"].type && e$$363[h$$166]["@attributes"].type == "radialGradient" && Raphael.svg) {
            e$$363[h$$166].name = h$$166, e$$363[h$$166].type = e$$363[h$$166]["@attributes"].type, Smits.PhyloCanvas.Render.Style[h$$166] = e$$363[h$$166], Smits.PhyloCanvas.Render.Style.jsphylosvgGradientList || (Smits.PhyloCanvas.Render.Style.jsphylosvgGradientList = []), Smits.PhyloCanvas.Render.Style.jsphylosvgGradientList.push(h$$166);
          } else {
            var n$$103;
            for (n$$103 in Smits.PhyloCanvas.Render.Style[h$$166] || (Smits.PhyloCanvas.Render.Style[h$$166] = {}), e$$363[h$$166]["@attributes"]) {
              n$$103 != "_attributes" && n$$103 != "_children" && n$$103 != "type" && (Smits.PhyloCanvas.Render.Style[h$$166][n$$103.replace("_", "-")] = e$$363[h$$166]["@attributes"][n$$103]);
            }
          }
        }
      }
    }
    i$$230 && i$$230.parameters && m$$55(i$$230.parameters);
    if (i$$230 && i$$230.charts) {
      for (h$$166 in i$$230 = i$$230.charts, i$$230) {
        i$$230[h$$166]["@attributes"].chart = h$$166, i$$230[h$$166]["@attributes"].type == "binary" ? Smits.PhyloCanvas.Render.Parameters.binaryCharts.push(i$$230[h$$166]["@attributes"]) : i$$230[h$$166]["@attributes"].type == "integratedBinary" ? Smits.PhyloCanvas.Render.Parameters.integratedBinaryCharts.push(i$$230[h$$166]["@attributes"]) : i$$230[h$$166]["@attributes"].type == "bar" && Smits.PhyloCanvas.Render.Parameters.barCharts.push(i$$230[h$$166]["@attributes"]);
      }
    }
    if (d$$419.tree && j$$116.trees[0] && j$$116.trees[0].tree[d$$419.tree - 1]) {
      k$$82 = j$$116.trees[0].tree[d$$419.tree - 1].edge, l$$88 = j$$116.trees[0].tree[d$$419.tree - 1].node;
    } else {
      h$$166 = 0;
      for (;h$$166 < j$$116.trees.tree.edge.length;h$$166++) {
        k$$82.push(j$$116.trees.tree.edge[h$$166]["@attributes"]);
      }
      h$$166 = 0;
      for (;h$$166 < j$$116.trees.tree.node.length;h$$166++) {
        d$$419 = j$$116.trees.tree.node[h$$166]["@attributes"];
        if (d$$419.label) {
          d$$419.chart = j$$116.trees.tree.node[h$$166].chart;
        }
        l$$88.push(d$$419);
      }
    }
    h$$166 = 0;
    for (;h$$166 < l$$88.length;h$$166++) {
      l$$88[h$$166].root && l$$88[h$$166].root == "true" && (b$$695 = l$$88[h$$166]);
    }
    b$$695 ? (b$$695 = p$$55(b$$695), b$$695 = g$$206(b$$695)) : f$$196 = "Error. Currently, only rooted NeXML trees are supported.";
  };
}();
Smits.PhyloCanvas.NexmlParse.prototype = {};
Smits.PhyloCanvas.Render = {};
Smits.PhyloCanvas.Render.Style = {line:{stroke:"rgb(0,0,0)", "stroke-width":1}, text:{"font-family":"Verdana", "font-size":12, "text-anchor":"start"}, path:{stroke:"rgb(0,0,0)", "stroke-width":1}, connectedDash:{stroke:"rgb(200,200,200)", "stroke-dasharray":". "}, textSecantBg:{fill:"#EEE", stroke:"#DDD"}, highlightedEdgeCircle:{fill:"red"}, barChart:{fill:"#003300", stroke:"#DDD"}, getStyle:function(a$$719, c$$570) {
  return this[a$$719] ? this[a$$719] : this[c$$570];
}};
Smits.PhyloCanvas.Render.Parameters = {jsOverride:0, Rectangular:{bufferX:200, paddingX:10, paddingY:20, bufferInnerLabels:10, bufferOuterLabels:5, minHeightBetweenLeaves:10, alignPadding:0, alignRight:!1, showScaleBar:!1}, Circular:{bufferRadius:.33, bufferAngle:20, initStartAngle:160, innerCircleRadius:0, minHeightBetweenLeaves:5, bufferInnerLabels:2, bufferOuterLabels:5}, binaryCharts:[], integratedBinaryCharts:[], barCharts:[], binaryChartBufferInner:5, binaryChartBufferSiblings:.01, binaryChartThickness:15, 
binaryChartDisjointed:!1, barChartBufferInner:3, barChartHeight:50, barChartWidth:.5, mouseRollOver:function(a$$720) {
  if (a$$720.node.edgeCircleHighlight) {
    a$$720.node.edgeCircleHighlight.show();
  } else {
    var c$$571 = a$$720.svg.draw(new Smits.PhyloCanvas.Render.Circle(a$$720.x, a$$720.y, 5, {attr:Smits.PhyloCanvas.Render.Style.highlightedEdgeCircle}));
    a$$720.node.edgeCircleHighlight = c$$571[0];
  }
  a$$720.textEl.attr({fill:"red"});
}, mouseRollOut:function(a$$721) {
  a$$721.node.edgeCircleHighlight.hide();
  a$$721.textEl.attr({fill:"#000"});
}, set:function(a$$722, c$$572, b$$699) {
  this.jsOverride || (b$$699 ? b$$699 == "circular" ? this.Circular[a$$722] = parseFloat(c$$572) : b$$699 == "rectangular" && (this.Rectangular[a$$722] = parseFloat(c$$572)) : this[a$$722] = parseFloat(c$$572));
}};
Smits.PhyloCanvas.Render.Line = function() {
  return function(a$$723, c$$573, b$$700, f$$197, k$$83) {
    this.type = "line";
    this.attr = Smits.PhyloCanvas.Render.Style.line;
    this.x1 = a$$723;
    this.x2 = c$$573;
    this.y1 = b$$700;
    this.y2 = f$$197;
    if (k$$83 && (Smits.Common.apply(this, k$$83), k$$83.attr)) {
      this.attr = k$$83.attr;
    }
  };
}();
Smits.PhyloCanvas.Render.Text = function() {
  return function(a$$724, c$$574, b$$701, f$$198) {
    this.type = "text";
    this.attr = Smits.PhyloCanvas.Render.Style.text;
    this.x = a$$724;
    this.y = c$$574;
    this.text = b$$701;
    if (f$$198 && (Smits.Common.apply(this, f$$198), f$$198.attr)) {
      this.attr = f$$198.attr;
    }
  };
}();
Smits.PhyloCanvas.Render.Path = function() {
  return function(a$$725, c$$575) {
    this.type = "path";
    this.attr = Smits.PhyloCanvas.Render.Style.path;
    this.path = a$$725;
    if (c$$575 && (Smits.Common.apply(this, c$$575), c$$575.attr)) {
      this.attr = c$$575.attr;
    }
  };
}();
Smits.PhyloCanvas.Render.Circle = function() {
  return function(a$$726, c$$576, b$$702, f$$199) {
    this.type = "circle";
    this.x = a$$726;
    this.y = c$$576;
    this.radius = b$$702;
    if (f$$199 && (Smits.Common.apply(this, f$$199), f$$199.attr)) {
      this.attr = f$$199.attr;
    }
  };
}();
Smits.PhyloCanvas.Render.SVG = function() {
  return function(a$$727, c$$577, b$$703) {
    this.canvasSize = [c$$577, b$$703];
    this.svg = Raphael(a$$727, this.canvasSize[0], this.canvasSize[1]);
  };
}();
Smits.PhyloCanvas.Render.SVG.prototype = {render:function() {
  var a$$728 = this.phylogramObject.getDrawInstructs();
  console.log("render", this.phylogramObject.getDrawInstructs());
  var c$$578 = 0;
  for (;c$$578 < a$$728.length;c$$578++) {
    if (a$$728[c$$578].type == "line") {
      this.svg.path(["M", a$$728[c$$578].x1, a$$728[c$$578].y1, "L", a$$728[c$$578].x2, a$$728[c$$578].y2]).attr(Smits.PhyloCanvas.Render.Style.line);
    } else {
      if (a$$728[c$$578].type == "path") {
        this.svg.path(a$$728[c$$578].path).attr(a$$728[c$$578].attr);
      } else {
        if (a$$728[c$$578].type == "circle") {
          this.svg.circle(a$$728[c$$578].x, a$$728[c$$578].y, a$$728[c$$578].radius).attr({stroke:"red"});
        } else {
          var b$$704 = this.svg.text(a$$728[c$$578].x, a$$728[c$$578].y, a$$728[c$$578].text).attr(Smits.PhyloCanvas.Render.Style.text);
          a$$728[c$$578].attr && b$$704.attr(a$$728[c$$578].attr);
          a$$728[c$$578].rotate && b$$704.rotate(a$$728[c$$578].rotate);
          b$$704.getBBox();
        }
      }
    }
  }
}, draw:function(a$$729) {
  var c$$579;
  var b$$705;
  a$$729.type == "line" ? c$$579 = this.svg.path(["M", a$$729.x1, a$$729.y1, "L", a$$729.x2, a$$729.y2]).attr(Smits.PhyloCanvas.Render.Style.line) : a$$729.type == "path" ? c$$579 = this.svg.path(a$$729.path).attr(a$$729.attr) : a$$729.type == "circle" ? c$$579 = this.svg.circle(a$$729.x, a$$729.y, a$$729.radius).attr({stroke:"red"}) : a$$729.type == "text" && (c$$579 = this.svg.text(a$$729.x, a$$729.y, a$$729.text).attr(Smits.PhyloCanvas.Render.Style.text), a$$729.attr && c$$579.attr(a$$729.attr), 
  a$$729.rotate && c$$579.rotate(a$$729.rotate), a$$729 = c$$579.getBBox(), b$$705 = Math.sqrt(a$$729.height * a$$729.height + a$$729.width * a$$729.width));
  return [c$$579, b$$705];
}};
Smits.PhyloCanvas.Render.Phylogram = function() {
  function B$$4(d$$422, c$$582, b$$709) {
    var e$$367 = [];
    var i$$234 = b$$709 && b$$709.bufferInner ? b$$709.bufferInner : 0 | Smits.PhyloCanvas.Render.Parameters.barChartBufferInner;
    var h$$170 = b$$709 && b$$709.height ? b$$709.height : 0 | Smits.PhyloCanvas.Render.Parameters.barChartHeight;
    b$$709 = b$$709 && b$$709.width ? b$$709.width < 1 ? l$$89 * b$$709.width : b$$709.width : 0 | (Smits.PhyloCanvas.Render.Parameters.barChartWidth < 1 ? l$$89 * Smits.PhyloCanvas.Render.Parameters.barChartWidth : Smits.PhyloCanvas.Render.Parameters.barChartWidth);
    var j$$119 = 0;
    var f$$202 = 0;
    for (;f$$202 < q$$22.length;f$$202++) {
      e$$367.push(q$$22[f$$202].chart[c$$582]);
    }
    e$$367 = Math.max.apply(null, e$$367);
    j$$119 = Smits.Common.roundFloat(h$$170 / e$$367, 4);
    f$$202 = 0;
    for (;f$$202 < q$$22.length;f$$202++) {
      e$$367 = q$$22[f$$202], a$$730.draw(new Smits.PhyloCanvas.Render.Path(["M", d$$422 + i$$234, e$$367.y - b$$709 / 2, "L", d$$422 + i$$234 + j$$119 * e$$367.chart[c$$582], e$$367.y - b$$709 / 2, "L", d$$422 + i$$234 + j$$119 * e$$367.chart[c$$582], e$$367.y + b$$709 / 2, "L", d$$422 + i$$234, e$$367.y + b$$709 / 2, "Z"], {attr:Smits.PhyloCanvas.Render.Style.getStyle(e$$367.chart[c$$582], "barChart")}));
    }
  }
  function z$$8(d$$421, c$$581, b$$708) {
    var e$$366 = (b$$708 && b$$708.bufferInner ? b$$708.bufferInner : 0) | Smits.PhyloCanvas.Render.Parameters.binaryChartBufferInner;
    var i$$233 = (b$$708 && b$$708.bufferSiblings ? b$$708.bufferSiblings * l$$89 : 0) | (Smits.PhyloCanvas.Render.Parameters.binaryChartBufferSiblings < 1 ? l$$89 * Smits.PhyloCanvas.Render.Parameters.binaryChartBufferSiblings : Smits.PhyloCanvas.Render.Parameters.binaryChartBufferSiblings);
    b$$708 = (b$$708 && b$$708.thickness ? b$$708.thickness : 0) | Smits.PhyloCanvas.Render.Parameters.binaryChartThickness;
    var h$$169 = 0;
    for (;h$$169 < q$$22.length;h$$169++) {
      var j$$118 = q$$22[h$$169];
      a$$730.draw(new Smits.PhyloCanvas.Render.Path(["M", d$$421 + e$$366, j$$118.y - l$$89 / 2 + i$$233 / 2, "L", d$$421 + e$$366 + b$$708, j$$118.y - l$$89 / 2 + i$$233 / 2, "L", d$$421 + e$$366 + b$$708, j$$118.y + l$$89 / 2 - i$$233 / 2, "L", d$$421 + e$$366, j$$118.y + l$$89 / 2 - i$$233 / 2, "Z"], {attr:Smits.PhyloCanvas.Render.Style.getStyle(j$$118.chart[c$$581], "textSecantBg")}));
    }
    return d$$421 + e$$366 + b$$708;
  }
  function u$$17(b$$707, e$$365) {
    b$$707.len && m$$56 == !1 && b$$707.children.length == 0 && (d$$420 = Smits.Common.roundFloat(d$$420 + l$$89, 4));
    if (b$$707.children.length > 0) {
      var i$$232 = [];
      var h$$168;
      var f$$201;
      var o$$35;
      var n$$105;
      b$$707.len && (h$$168 = e$$365, f$$201 = e$$365 = Smits.Common.roundFloat(e$$365 + k$$84 * b$$707.len, 4), n$$105 = o$$35 = d$$420 + b$$707.getMidbranchPosition(m$$56) * l$$89, a$$730.draw(new Smits.PhyloCanvas.Render.Line(h$$168, f$$201, o$$35, n$$105)));
      if (b$$707.name) {
        h$$168 = {};
        h$$168 = Smits.PhyloCanvas.Render.Style.getStyle("bootstrap", "text");
        if (b$$707.uri) {
          h$$168.href = b$$707.uri;
        }
        if (b$$707.description) {
          h$$168.title = b$$707.description;
        }
        var g$$208 = b$$707.level == 0 ? d$$420 + b$$707.getMidbranchPosition(m$$56) * l$$89 : n$$105;
        a$$730.draw(new Smits.PhyloCanvas.Render.Text((f$$201 || e$$365) + 5, g$$208, b$$707.name, {attr:h$$168}));
      }
      if (b$$707.children && b$$707.children.length) {
        h$$168 = 0;
        for (;h$$168 < b$$707.children.length;h$$168++) {
          i$$232.push(u$$17(b$$707.children[h$$168], e$$365));
        }
      }
      f$$201 = [];
      h$$168 = 0;
      for (;h$$168 < i$$232.length;h$$168++) {
        i$$232[h$$168][0] && f$$201.push(i$$232[h$$168][0]), i$$232[h$$168][1] && f$$201.push(i$$232[h$$168][1]);
      }
      i$$232 = Math.min.apply(null, f$$201);
      f$$201 = Math.max.apply(null, f$$201);
      a$$730.draw(new Smits.PhyloCanvas.Render.Path(["M", e$$365 + 1E-4, i$$232, "L", e$$365, i$$232, "L", e$$365, f$$201, "L", e$$365 + 1E-4, f$$201], {attr:Smits.PhyloCanvas.Render.Style.line}));
    } else {
      h$$168 = e$$365;
      f$$201 = Smits.Common.roundFloat(e$$365 + k$$84 * b$$707.len, 2);
      n$$105 = o$$35 = d$$420;
      b$$707.y = d$$420;
      q$$22.push(b$$707);
      a$$730.draw(new Smits.PhyloCanvas.Render.Line(h$$168, f$$201, o$$35, n$$105));
      c$$580.alignRight && a$$730.draw(new Smits.PhyloCanvas.Render.Path(["M", f$$201, o$$35, "L", c$$580.alignPadding + p$$56, n$$105], {attr:Smits.PhyloCanvas.Render.Style.connectedDash}));
      if (b$$707.name) {
        h$$168 = {};
        b$$707.style && (h$$168 = Smits.PhyloCanvas.Render.Style.getStyle(b$$707.style, "text"));
        h$$168["text-anchor"] = "start";
        if (b$$707.uri) {
          h$$168.href = b$$707.uri;
        }
        if (b$$707.description) {
          h$$168.title = b$$707.description;
        }
        i$$232 = a$$730.draw(new Smits.PhyloCanvas.Render.Text(c$$580.alignRight ? p$$56 + c$$580.bufferInnerLabels + c$$580.alignPadding : f$$201 + c$$580.bufferInnerLabels, n$$105, b$$707.name, {attr:h$$168}));
        j$$117 = Math.max(i$$232[1], j$$117);
        Smits.PhyloCanvas.Render.Parameters.mouseRollOver && Smits.Common.addRaphEventHandler(i$$232[0], "mouseover", Smits.PhyloCanvas.Render.Parameters.mouseRollOver, {svg:a$$730, node:b$$707, x:f$$201, y:n$$105, textEl:i$$232[0]});
        Smits.PhyloCanvas.Render.Parameters.mouseRollOut && Smits.Common.addRaphEventHandler(i$$232[0], "mouseout", Smits.PhyloCanvas.Render.Parameters.mouseRollOut, {svg:a$$730, node:b$$707, x:f$$201, y:n$$105, textEl:i$$232[0]});
        Smits.PhyloCanvas.Render.Parameters.onClickAction && Smits.Common.addRaphEventHandler(i$$232[0], "click", Smits.PhyloCanvas.Render.Parameters.onClickAction, {svg:a$$730, node:b$$707, x:f$$201, y:n$$105, textEl:i$$232[0]});
      }
      m$$56 && (m$$56 = !1);
    }
    return [o$$35, n$$105];
  }
  var a$$730;
  var c$$580 = Smits.PhyloCanvas.Render.Parameters.Rectangular;
  var b$$706;
  var f$$200;
  var k$$84;
  var l$$89;
  var p$$56;
  var g$$207;
  var m$$56 = !0;
  var d$$420 = 0;
  var j$$117 = 0;
  var i$$231;
  var e$$364;
  var h$$167;
  var n$$104;
  var o$$34;
  var q$$22 = [];
  return function(q$$23, m$$57) {
    this.getCanvasSize = function() {
      return [b$$706, f$$200];
    };
    this.getRoot = function() {
      return m$$57.getRoot();
    };
    m$$57.getValidate() && a$$730.draw(0, 0, m$$57.getValidate());
    a$$730 = q$$23;
    var r$$28 = m$$57.getRoot();
    var v$$12 = m$$57.getNewickLen();
    b$$706 = a$$730.canvasSize[0];
    f$$200 = a$$730.canvasSize[1];
    h$$167 = c$$580.bufferX;
    n$$104 = c$$580.paddingX;
    o$$34 = c$$580.paddingY;
    g$$207 = c$$580.minHeightBetweenLeaves;
    d$$420 = o$$34;
    k$$84 = Math.round((b$$706 - h$$167 - n$$104 * 2) / v$$12);
    l$$89 = Math.round((f$$200 - o$$34 * 2) / (c$$580.showScaleBar ? r$$28.getCountAllChildren() : r$$28.getCountAllChildren() - 1));
    l$$89 < g$$207 && (l$$89 = g$$207);
    p$$56 = Math.round(b$$706 - h$$167 - n$$104 * 2);
    if (Smits.PhyloCanvas.Render.Parameters.binaryCharts.length || Smits.PhyloCanvas.Render.Parameters.barCharts.length) {
      c$$580.alignRight = !0;
    }
    u$$17(r$$28, n$$104);
    c$$580.showScaleBar && (y = d$$420 + l$$89, e$$364 = c$$580.showScaleBar * k$$84, a$$730.draw(new Smits.PhyloCanvas.Render.Line(0, e$$364, y, y)), a$$730.draw(new Smits.PhyloCanvas.Render.Text((0 + e$$364) / 2, y - 8, c$$580.showScaleBar)));
    i$$231 = p$$56 + j$$117 + c$$580.bufferInnerLabels;
    if (Smits.PhyloCanvas.Render.Parameters.binaryCharts.length) {
      r$$28 = Smits.PhyloCanvas.Render.Parameters.binaryCharts;
      var s$$33;
      for (s$$33 in r$$28) {
        i$$231 = z$$8(i$$231, r$$28[s$$33].chart, r$$28[s$$33]);
      }
    }
    if (Smits.PhyloCanvas.Render.Parameters.barCharts.length) {
      for (s$$33 in r$$28 = Smits.PhyloCanvas.Render.Parameters.barCharts, r$$28) {
        B$$4(i$$231, r$$28[s$$33].chart, r$$28[s$$33]);
      }
    }
  };
}();
Smits.PhyloCanvas.Render.Phylogram.prototype = {};
Smits.PhyloCanvas.Render.CircularPhylogram = function() {
  function a$$731(a$$732, d$$424) {
    d$$424 += D$$4;
    return [Smits.Common.roundFloat(E$$4 + a$$732 * Math.sin(d$$424 * F$$4), 4), Smits.Common.roundFloat(r$$29 + a$$732 * Math.cos(d$$424 * F$$4), 4)];
  }
  function c$$583(a$$733) {
    a$$733 = k$$85(90 - a$$733 - D$$4);
    if (a$$733 > 90 && a$$733 < 270) {
      a$$733 += 180;
      var d$$425 = "end";
    } else {
      d$$425 = "start";
    }
    return [a$$733, d$$425];
  }
  function b$$710(d$$426, b$$711, c$$584, e$$369) {
    var i$$236 = a$$731(d$$426, b$$711);
    var h$$172 = a$$731(d$$426, c$$584);
    var j$$121 = [];
    var f$$204 = 0;
    b$$711 = Math.abs(k$$85(c$$584 - b$$711)) > 180 ? 1 : -1;
    e$$369 && e$$369.invertSecant && (b$$711 *= -1, f$$204 = 1);
    (!e$$369 || !e$$369.noMove) && j$$121.push("M");
    j$$121.push(i$$236[0], i$$236[1], "A", d$$426, d$$426, 0, b$$711 < 1 ? 0 : 1, f$$204, h$$172[0], h$$172[1]);
    return j$$121;
  }
  function f$$203(d$$427, b$$712, c$$585) {
    var e$$370;
    var i$$237 = [];
    b$$712 = a$$731(b$$712, d$$427);
    d$$427 = a$$731(c$$585, d$$427);
    (!e$$370 || !e$$370.noMove) && i$$237.push("M");
    i$$237.push(b$$712[0], b$$712[1], "L", d$$427[0], d$$427[1]);
    return i$$237;
  }
  function k$$85(a$$734) {
    for (;a$$734 > 360 || a$$734 < 0;) {
      a$$734 > 360 ? a$$734 -= 360 : a$$734 < 0 && (a$$734 += 360);
    }
    return a$$734;
  }
  function l$$90(a$$735, d$$428, c$$586, e$$371) {
    !d$$428 && a$$735.length > 1 && (e$$371 = a$$735[3], c$$586 = a$$735[2], d$$428 = a$$735[1], a$$735 = a$$735[0]);
    return g$$209("M", b$$710(a$$735, c$$586, e$$371, {noMove:1, invertSecant:0}), "L", b$$710(d$$428, e$$371, c$$586, {noMove:1, invertSecant:1}), "Z");
  }
  function p$$57(d$$429, h$$173) {
    d$$429.len && (B$$5 ? A$$5 = C$$4 || 1 : d$$429.children.length == 0 && (A$$5 = Smits.Common.roundFloat(A$$5 + u$$18, 4)));
    if (d$$429.children.length > 0) {
      var j$$122 = [];
      var o$$37;
      var n$$107;
      var k$$86;
      o$$37 = h$$173;
      n$$107 = h$$173 += Smits.Common.roundFloat(q$$24 * d$$429.len, 4);
      if (d$$429.children && d$$429.children.length) {
        var l$$91 = 0;
        for (;l$$91 < d$$429.children.length;l$$91++) {
          var m$$59 = p$$57(d$$429.children[l$$91], h$$173);
          m$$59 > 0 && j$$122.push(m$$59);
        }
      }
      l$$91 = Smits.Common.roundFloat(Math.min.apply(null, j$$122), 4);
      j$$122 = Smits.Common.roundFloat(Math.max.apply(null, j$$122), 4);
      d$$429.level != 0 && i$$235.draw(new Smits.PhyloCanvas.Render.Path(g$$209("M", a$$731(h$$173 + .01, l$$91), "L", b$$710(h$$173, l$$91, j$$122, {noMove:!0}), "L", a$$731(h$$173 + .01, j$$122))));
      d$$429.len && (k$$86 = Smits.Common.roundFloat(l$$91 + (j$$122 - l$$91) / 2, 4), i$$235.draw(new Smits.PhyloCanvas.Render.Path(f$$203(k$$86, o$$37, n$$107))));
    } else {
      if (d$$429.y = A$$5, s$$34.push(d$$429), o$$37 = h$$173, n$$107 = Smits.Common.roundFloat(h$$173 + q$$24 * d$$429.len), k$$86 = A$$5, i$$235.draw(new Smits.PhyloCanvas.Render.Path(f$$203(k$$86, o$$37, n$$107))), i$$235.draw(new Smits.PhyloCanvas.Render.Path(f$$203(k$$86, n$$107, v$$13), {attr:Smits.PhyloCanvas.Render.Style.connectedDash})), d$$429.name) {
        o$$37 = a$$731(v$$13 + e$$368.bufferInnerLabels, k$$86);
        l$$91 = c$$583(k$$86);
        j$$122 = l$$91[0];
        l$$91 = l$$91[1];
        m$$59 = {};
        d$$429.style && Smits.Common.apply(m$$59, Smits.PhyloCanvas.Render.Style.getStyle(d$$429.style, "text"));
        m$$59["text-anchor"] = l$$91;
        if (d$$429.uri) {
          m$$59.href = d$$429.uri;
        }
        if (d$$429.description) {
          m$$59.title = d$$429.description;
        }
        j$$122 = i$$235.draw(new Smits.PhyloCanvas.Render.Text(o$$37[0], o$$37[1], d$$429.name, {attr:m$$59, rotate:[j$$122, o$$37[0], o$$37[1]]}));
        d$$429.bgStyle && t$$30.push([d$$429.bgStyle, k$$86]);
        o$$37 = a$$731(n$$107, k$$86);
        Smits.PhyloCanvas.Render.Parameters.mouseRollOver && Smits.Common.addRaphEventHandler(j$$122[0], "mouseover", Smits.PhyloCanvas.Render.Parameters.mouseRollOver, {svg:i$$235, node:d$$429, x:o$$37[0], y:o$$37[1], textEl:j$$122[0]});
        Smits.PhyloCanvas.Render.Parameters.mouseRollOut && Smits.Common.addRaphEventHandler(j$$122[0], "mouseout", Smits.PhyloCanvas.Render.Parameters.mouseRollOut, {svg:i$$235, node:d$$429, x:o$$37[0], y:o$$37[1], textEl:j$$122[0]});
        Smits.PhyloCanvas.Render.Parameters.onClickAction && Smits.Common.addRaphEventHandler(j$$122[0], "click", Smits.PhyloCanvas.Render.Parameters.onClickAction, {svg:i$$235, node:d$$429, x:o$$37[0], y:o$$37[1], textEl:j$$122[0]});
        x$$75 = Math.max(j$$122[1], x$$75);
      }
    }
    B$$5 && (B$$5 = !1);
    return k$$86;
  }
  function g$$209(a$$736) {
    var d$$430 = a$$736;
    var b$$713 = 1;
    for (;b$$713 < arguments.length;b$$713++) {
      d$$430 = d$$430.concat(arguments[b$$713]);
    }
    return d$$430;
  }
  function m$$58() {
    var a$$737 = [];
    if (t$$30.length > 0) {
      if (Smits.PhyloCanvas.Render.Style.jsphylosvgGradientList) {
        var d$$431 = 0;
        for (;d$$431 < Smits.PhyloCanvas.Render.Style.jsphylosvgGradientList.length;d$$431++) {
          var b$$714 = Smits.PhyloCanvas.Render.Style.jsphylosvgGradientList[d$$431];
          b$$714 = Smits.Common.createGradientEl(b$$714, Smits.PhyloCanvas.Render.Style[b$$714], [E$$4, r$$29, v$$13 + x$$75 + e$$368.bufferOuterLabels]);
          i$$235.svg.defs.appendChild(b$$714);
        }
      }
      d$$431 = 0;
      for (;d$$431 < t$$30.length;d$$431++) {
        d$$431 != t$$30.length - 1 && t$$30[d$$431][0] == t$$30[d$$431 + 1][0] ? t$$30[d$$431 + 1][2] = t$$30[d$$431][2] ? t$$30[d$$431][2] : t$$30[d$$431][1] : (a$$737 = l$$90(v$$13, v$$13 + x$$75 + e$$368.bufferOuterLabels, t$$30[d$$431][2] ? t$$30[d$$431][2] - u$$18 / 2 : t$$30[d$$431][1] - u$$18 / 2, t$$30[d$$431][1] + u$$18 / 2), b$$714 = Smits.PhyloCanvas.Render.Style.getStyle(t$$30[d$$431][0], "textSecantBg"), a$$737 = i$$235.draw(new Smits.PhyloCanvas.Render.Path(a$$737, {attr:b$$714.type ? 
        {} : b$$714})), b$$714.type && b$$714.type == "radialGradient" && a$$737[0].node.setAttribute("fill", "url(#" + b$$714.name + ")"), b$$714.type && b$$714.type == "radialGradient" && a$$737[0].node.setAttribute("stroke", "none"), a$$737[0].toBack());
      }
    }
    a$$737 = l$$90(v$$13, v$$13 + x$$75 + e$$368.bufferOuterLabels, (C$$4 || 1) - u$$18 / 2, 360 - u$$18 / 2);
    a$$737 = i$$235.draw(new Smits.PhyloCanvas.Render.Path(a$$737, {attr:Smits.PhyloCanvas.Render.Style.textSecantBg}));
    a$$737[0].toBack();
    return v$$13 + x$$75 + e$$368.bufferOuterLabels;
  }
  function d$$423(d$$432, b$$715, e$$372) {
    var j$$123 = e$$372 && e$$372.bufferInner ? parseFloat(e$$372.bufferInner) : Smits.PhyloCanvas.Render.Parameters.binaryChartBufferInner;
    var h$$174 = (e$$372 && e$$372.bufferSiblings ? e$$372.bufferSiblings * u$$18 : 0) | (Smits.PhyloCanvas.Render.Parameters.binaryChartBufferSiblings < 1 ? u$$18 * Smits.PhyloCanvas.Render.Parameters.binaryChartBufferSiblings : Smits.PhyloCanvas.Render.Parameters.binaryChartBufferSiblings);
    var f$$205 = e$$372 && e$$372.thickness ? parseFloat(e$$372.thickness) : Smits.PhyloCanvas.Render.Parameters.binaryChartThickness;
    var o$$38 = (e$$372 && e$$372.disjointed ? e$$372.disjointed : 0) | Smits.PhyloCanvas.Render.Parameters.binaryChartDisjointed;
    e$$372 = e$$372 && e$$372.isInternal ? e$$372.isInternal : !1;
    var n$$108 = !0;
    var g$$210;
    var m$$60 = 0;
    for (;m$$60 < s$$34.length;m$$60++) {
      var q$$25 = s$$34[m$$60];
      if ((!s$$34[m$$60 + 1] || q$$25.chart[b$$715] !== s$$34[m$$60 + 1].chart[b$$715] || o$$38) && q$$25.chart[b$$715] != "none") {
        var p$$58 = Smits.PhyloCanvas.Render.Style.getStyle(q$$25.chart[b$$715], "textSecantBg");
        g$$210 = e$$372 ? [v$$13 - j$$123 - f$$205, v$$13 - j$$123, (g$$210 ? g$$210 : q$$25.y) - u$$18 / 2 + (n$$108 && !o$$38 ? 0 : h$$174 / 2), q$$25.y + u$$18 / 2 - (m$$60 == s$$34.length - 1 && !o$$38 ? 0 : h$$174 / 2)] : [d$$432 + j$$123, d$$432 + j$$123 + f$$205, (g$$210 ? g$$210 : q$$25.y) - u$$18 / 2 + (n$$108 && !o$$38 ? 0 : h$$174 / 2), q$$25.y + u$$18 / 2 - (m$$60 == s$$34.length - 1 && !o$$38 ? 0 : h$$174 / 2)];
        if (p$$58.label) {
          n$$108 = Smits.PhyloCanvas.Render.Style.getStyle(p$$58.labelStyle, "text");
          q$$25 = a$$731((g$$210[0] + g$$210[1]) / 2, (g$$210[2] + g$$210[3]) / 2);
          var r$$30 = c$$583((g$$210[2] + g$$210[3]) / 2);
          r$$30 = k$$85(r$$30[0] + (n$$108.rotate ? parseFloat(n$$108.rotate) : 0));
          var t$$31 = k$$85(90 - (g$$210[2] + g$$210[3]) / 2 - D$$4);
          t$$31 > 90 && t$$31 < 270 && (r$$30 += 180);
          n$$108["text-anchor"] || (n$$108["text-anchor"] = "middle");
          i$$235.draw(new Smits.PhyloCanvas.Render.Text(q$$25[0], q$$25[1], p$$58.label, {attr:n$$108, rotate:r$$30}))[0].toBack();
        }
        p$$58.borderStyle && (n$$108 = Smits.PhyloCanvas.Render.Style.getStyle(p$$58.borderStyle, "textSecantBg"), i$$235.draw(new Smits.PhyloCanvas.Render.Path(l$$90([v$$13, n$$108.fullsize ? g$$210[1] : g$$210[0], g$$210[2], g$$210[3]]), {attr:n$$108}))[0].toBack());
        i$$235.draw(new Smits.PhyloCanvas.Render.Path(l$$90(g$$210), {attr:p$$58}))[0].toBack();
        g$$210 = 0;
      } else {
        if (!g$$210) {
          g$$210 = q$$25.y;
        }
        q$$25.chart[b$$715] == "none" && (g$$210 = 0);
      }
      n$$108 = !1;
    }
    return e$$372 ? d$$432 : d$$432 + j$$123 + f$$205;
  }
  function j$$120(d$$433, a$$738, b$$716) {
    var c$$587 = [];
    var e$$373 = b$$716 && b$$716.bufferInner ? parseFloat(b$$716.bufferInner) : Smits.PhyloCanvas.Render.Parameters.barChartBufferInner;
    var j$$124 = b$$716 && b$$716.height ? parseFloat(b$$716.height) : Smits.PhyloCanvas.Render.Parameters.barChartHeight ? Smits.PhyloCanvas.Render.Parameters.barChartHeight : 0;
    b$$716 = b$$716 && b$$716.width ? parseFloat(b$$716.width) < 1 ? u$$18 * parseFloat(b$$716.width) : parseFloat(b$$716.width) : 0 | (Smits.PhyloCanvas.Render.Parameters.barChartWidth < 1 ? u$$18 * Smits.PhyloCanvas.Render.Parameters.barChartWidth : Smits.PhyloCanvas.Render.Parameters.barChartWidth);
    var h$$175 = 0;
    var f$$206 = 0;
    for (;f$$206 < s$$34.length;f$$206++) {
      c$$587.push(s$$34[f$$206].chart[a$$738]);
    }
    c$$587 = Math.max.apply(null, c$$587);
    h$$175 = Smits.Common.roundFloat(j$$124 / c$$587, 4);
    f$$206 = 0;
    for (;f$$206 < s$$34.length;f$$206++) {
      c$$587 = s$$34[f$$206], c$$587.chart[a$$738] > 0 && i$$235.draw(new Smits.PhyloCanvas.Render.Path(l$$90(d$$433 + e$$373, d$$433 + e$$373 + h$$175 * c$$587.chart[a$$738], c$$587.y - b$$716 / 2, c$$587.y + b$$716 / 2), {attr:Smits.PhyloCanvas.Render.Style.getStyle(c$$587.chart[a$$738], "barChart")}));
    }
    return d$$433 + e$$373 + j$$124;
  }
  var i$$235;
  var e$$368 = Smits.PhyloCanvas.Render.Parameters.Circular;
  var h$$171;
  var n$$106;
  var o$$36;
  var q$$24;
  var u$$18;
  var z$$9;
  var B$$5 = !0;
  var A$$5 = 0;
  var E$$4;
  var r$$29;
  var v$$13;
  var s$$34 = [];
  var t$$30 = [];
  var C$$4;
  var w$$19;
  var x$$75 = 0;
  var D$$4;
  var F$$4 = Math.PI / 180;
  return function(a$$739, b$$717, c$$588) {
    this.getCanvasSize = function() {
      return [h$$171, n$$106];
    };
    this.getRoot = function() {
      return b$$717.getRoot();
    };
    if (b$$717.getValidate()) {
      a$$739.draw({type:"text", x:0, y:a$$739.canvasSize[1] / 3, text:b$$717.getValidate()});
    } else {
      i$$235 = a$$739;
      a$$739 = b$$717.getRoot();
      var f$$207 = b$$717.getNewickLen();
      h$$171 = i$$235.canvasSize[0];
      n$$106 = i$$235.canvasSize[1];
      E$$4 = h$$171 / 2;
      r$$29 = n$$106 / 2;
      o$$36 = Math.min.apply(null, [h$$171, n$$106]);
      c$$588 = e$$368.bufferRadius > 1 ? e$$368.bufferRadius : Smits.Common.roundFloat(o$$36 * e$$368.bufferRadius, 4);
      C$$4 = e$$368.bufferAngle;
      z$$9 = e$$368.innerCircleRadius;
      D$$4 = e$$368.initStartAngle;
      v$$13 = Math.round((o$$36 - c$$588 - z$$9) / 2);
      q$$24 = (v$$13 - z$$9) / f$$207;
      u$$18 = Smits.Common.roundFloat((360 - C$$4) / a$$739.getCountAllChildren(), 4);
      p$$57(a$$739, z$$9);
      w$$19 = v$$13 + x$$75 + e$$368.bufferOuterLabels;
      if (Smits.PhyloCanvas.Render.Parameters.integratedBinaryCharts.length) {
        c$$588 = Smits.PhyloCanvas.Render.Parameters.integratedBinaryCharts;
        var g$$211;
        for (g$$211 in c$$588) {
          w$$19 = d$$423(w$$19 - (c$$588[g$$211].thickness ? c$$588[g$$211].thickness : Smits.PhyloCanvas.Render.Parameters.binaryChartThickness) - (c$$588[g$$211].bufferInner ? c$$588[g$$211].bufferInner : Smits.PhyloCanvas.Render.Parameters.binaryChartBufferInner), c$$588[g$$211].chart, c$$588[g$$211]);
        }
      }
      w$$19 = m$$58();
      if (Smits.PhyloCanvas.Render.Parameters.binaryCharts.length) {
        for (g$$211 in c$$588 = Smits.PhyloCanvas.Render.Parameters.binaryCharts, c$$588) {
          w$$19 = d$$423(w$$19, c$$588[g$$211].chart, c$$588[g$$211]);
        }
      }
      if (Smits.PhyloCanvas.Render.Parameters.barCharts.length) {
        for (g$$211 in c$$588 = Smits.PhyloCanvas.Render.Parameters.barCharts, c$$588) {
          w$$19 = j$$120(w$$19, c$$588[g$$211].chart, c$$588[g$$211]);
        }
      }
    }
  };
}();
Smits.PhyloCanvas.Render.CircularPhylogram.prototype = {};
var XMLObjectifier = function() {
  function a$$740(a$$741) {
    var b$$718 = "";
    a$$741 && typeof a$$741 === "string" && (b$$718 = a$$741);
    return /^((-)?([0-9]*)((\.{0,1})([0-9]+))?$)/.test(b$$718);
  }
  return {xmlToJSON:function(c$$589) {
    try {
      if (!c$$589) {
        return null;
      }
      var b$$719 = {typeOf:"JSXBObject"};
      var f$$208 = c$$589.nodeType == 9 ? c$$589.documentElement : c$$589;
      b$$719.RootName = f$$208.nodeName || "";
      if (c$$589.nodeType == 3 || c$$589.nodeType == 4) {
        return c$$589.nodeValue;
      }
      var k$$87 = function(a$$742) {
        return a$$742.replace(/^\s+|\s+$/gm, "");
      };
      var l$$92 = function(a$$743, b$$720) {
        if (b$$720.attributes.length > 0) {
          var c$$590 = b$$720.attributes.length - 1;
          var e$$374;
          a$$743._attributes = [];
          do {
            e$$374 = String(String(b$$720.attributes[c$$590].name).replace(/-/g, "_")), a$$743._attributes.push(e$$374), a$$743[e$$374] = k$$87(b$$720.attributes[c$$590].value);
          } while (c$$590--);
        }
      };
      (function() {
        return {activate:function() {
          var a$$744 = [];
          a$$744.getNodesByAttribute = function(b$$721, c$$591) {
            if (a$$744 && a$$744.length > 0) {
              var e$$375 = [];
              var h$$176;
              var f$$209 = a$$744.length - 1;
              try {
                do {
                  h$$176 = a$$744[f$$209], h$$176[b$$721] === c$$591 && e$$375.push(h$$176);
                } while (f$$209--);
                e$$375.reverse();
                return e$$375;
              } catch (o$$39) {
              }
              return null;
            }
          };
          a$$744.getNodeByAttribute = function(b$$722, c$$592) {
            if (a$$744 && a$$744.length > 0) {
              var e$$376;
              var h$$177 = a$$744.length - 1;
              try {
                do {
                  if (e$$376 = a$$744[h$$177], e$$376[b$$722] === c$$592) {
                    return e$$376;
                  }
                } while (h$$177--);
              } catch (f$$210) {
              }
              return null;
            }
          };
          a$$744.getNodesByValue = function(b$$723) {
            if (a$$744 && a$$744.length > 0) {
              var c$$593 = [];
              var e$$377;
              var h$$178 = a$$744.length - 1;
              try {
                do {
                  e$$377 = a$$744[h$$178], e$$377.Text && e$$377.Text === b$$723 && c$$593.push(e$$377);
                } while (h$$178--);
                return c$$593;
              } catch (f$$211) {
              }
              return null;
            }
          };
          a$$744.contains = function(b$$724, c$$594) {
            if (a$$744 && a$$744.length > 0) {
              var e$$378 = a$$744.length - 1;
              try {
                do {
                  if (a$$744[e$$378][b$$724] === c$$594) {
                    return !0;
                  }
                } while (e$$378--);
              } catch (h$$179) {
              }
              return !1;
            }
          };
          a$$744.indexOf = function(b$$725, c$$595) {
            var e$$379 = -1;
            if (a$$744 && a$$744.length > 0) {
              var h$$180 = a$$744.length - 1;
              try {
                do {
                  a$$744[h$$180][b$$725] === c$$595 && (e$$379 = h$$180);
                } while (h$$180--);
              } catch (f$$212) {
                return -1;
              }
              return e$$379;
            }
          };
          a$$744.SortByAttribute = function(b$$726, c$$596) {
            if (a$$744 && a$$744.length > 0) {
              var e$$380 = function(a$$745, b$$727) {
                var d$$434 = a$$745[b$$727];
                return d$$434 = bam.validation.isNumeric(d$$434) ? parseFloat(d$$434) : d$$434;
              };
              a$$744.sort(function(a$$746, d$$435) {
                var f$$213;
                var g$$213;
                f$$213 = e$$380(a$$746, b$$726);
                g$$213 = e$$380(d$$435, b$$726);
                f$$213 = f$$213 < g$$213 ? -1 : g$$213 < f$$213 ? 1 : 0;
                c$$596 && (f$$213 = c$$596.toUpperCase() === "DESC" ? 0 - f$$213 : f$$213);
                return f$$213;
              });
            }
          };
          a$$744.SortByValue = function(b$$728) {
            if (a$$744 && a$$744.length > 0) {
              var c$$597 = function(a$$747) {
                a$$747 = a$$747.Text;
                return a$$747 = bam.validation.isNumeric(a$$747) ? parseFloat(a$$747) : a$$747;
              };
              a$$744.sort(function(a$$748, d$$436) {
                var f$$214;
                var g$$214;
                f$$214 = c$$597(a$$748);
                g$$214 = c$$597(d$$436);
                f$$214 = f$$214 < g$$214 ? -1 : g$$214 < f$$214 ? 1 : 0;
                b$$728 && (f$$214 = b$$728.toUpperCase() === "DESC" ? 0 - f$$214 : f$$214);
                return f$$214;
              });
            }
          };
          a$$744.SortByNode = function(b$$729, c$$598) {
            if (a$$744 && a$$744.length > 0) {
              var e$$381 = function(a$$749, b$$730) {
                var d$$437 = a$$749[b$$730][0].Text;
                return d$$437 = bam.validation.isNumeric(d$$437) ? parseFloat(d$$437) : d$$437;
              };
              a$$744.sort(function(a$$750, d$$438) {
                var f$$215;
                var g$$215;
                f$$215 = e$$381(a$$750, b$$729);
                g$$215 = e$$381(d$$438, b$$729);
                f$$215 = f$$215 < g$$215 ? -1 : g$$215 < f$$215 ? 1 : 0;
                c$$598 && (f$$215 = c$$598.toUpperCase() === "DESC" ? 0 - f$$215 : f$$215);
                return f$$215;
              });
            }
          };
          return a$$744;
        }};
      })();
      var p$$59 = function(b$$731) {
        b$$731.getNodeByAttribute = function(a$$751, b$$732) {
          if (this.length > 0) {
            var d$$439;
            var c$$599 = this.length - 1;
            try {
              do {
                if (d$$439 = this[c$$599], d$$439[a$$751] == b$$732) {
                  return d$$439;
                }
              } while (c$$599--);
            } catch (f$$216) {
            }
            return !1;
          }
        };
        b$$731.contains = function(a$$752, b$$733) {
          if (this.length > 0) {
            var d$$440 = this.length - 1;
            try {
              do {
                if (this[d$$440][a$$752] == b$$733) {
                  return !0;
                }
              } while (d$$440--);
            } catch (c$$600) {
            }
            return !1;
          }
        };
        b$$731.indexOf = function(a$$753, b$$734) {
          var d$$441 = -1;
          if (this.length > 0) {
            var c$$601 = this.length - 1;
            try {
              do {
                this[c$$601][a$$753] == b$$734 && (d$$441 = c$$601);
              } while (c$$601--);
            } catch (f$$217) {
              return -1;
            }
            return d$$441;
          }
        };
        b$$731.SortByAttribute = function(b$$735, d$$442) {
          if (this.length) {
            var c$$602 = function(b$$736, d$$443) {
              var c$$603 = b$$736[d$$443];
              return c$$603 = a$$740(c$$603) ? parseFloat(c$$603) : c$$603;
            };
            this.sort(function(a$$754, f$$218) {
              var g$$216 = 0;
              var k$$88;
              var l$$93;
              k$$88 = c$$602(a$$754, b$$735);
              l$$93 = c$$602(f$$218, b$$735);
              k$$88 < l$$93 ? g$$216 = -1 : l$$93 < k$$88 && (g$$216 = 1);
              d$$442 && (g$$216 = d$$442.toUpperCase() == "DESC" ? 0 - g$$216 : g$$216);
              return g$$216;
            });
          }
        };
        b$$731.SortByValue = function(b$$737) {
          if (this.length) {
            var d$$444 = function(b$$738) {
              b$$738 = b$$738.Text;
              return b$$738 = a$$740(b$$738) ? parseFloat(b$$738) : b$$738;
            };
            this.sort(function(a$$755, c$$604) {
              var f$$219 = 0;
              var g$$217;
              var k$$89;
              g$$217 = d$$444(a$$755);
              k$$89 = d$$444(c$$604);
              g$$217 < k$$89 ? f$$219 = -1 : k$$89 < g$$217 && (f$$219 = 1);
              b$$737 && (f$$219 = b$$737.toUpperCase() == "DESC" ? 0 - f$$219 : f$$219);
              return f$$219;
            });
          }
        };
        b$$731.SortByNode = function(b$$739, d$$445) {
          if (this.length) {
            var c$$605 = function(b$$740, d$$446) {
              var c$$606 = b$$740[d$$446][0].Text;
              return c$$606 = a$$740(c$$606) ? parseFloat(c$$606) : c$$606;
            };
            this.sort(function(a$$756, f$$220) {
              var g$$218 = 0;
              var k$$90;
              var l$$94;
              k$$90 = c$$605(a$$756, b$$739);
              l$$94 = c$$605(f$$220, b$$739);
              k$$90 < l$$94 ? g$$218 = -1 : l$$94 < k$$90 && (g$$218 = 1);
              d$$445 && (g$$218 = d$$445.toUpperCase() == "DESC" ? 0 - g$$218 : g$$218);
              return g$$218;
            });
          }
        };
      };
      var g$$212 = function(a$$757, b$$741) {
        var c$$607;
        var e$$382;
        var f$$221;
        var m$$61 = "";
        if (!b$$741) {
          return;
        }
        b$$741.attributes.length > 0 && l$$92(a$$757, b$$741);
        a$$757.Text = "";
        if (b$$741.hasChildNodes()) {
          var o$$40 = b$$741.childNodes.length - 1;
          var q$$26 = 0;
          do {
            switch(e$$382 = b$$741.childNodes[q$$26], e$$382.nodeType) {
              case 1:
                a$$757._children = [];
                c$$607 = e$$382.localName ? e$$382.localName : e$$382.baseName;
                c$$607 = String(c$$607).replace(/-/g, "_");
                m$$61 != c$$607 && a$$757._children.push(c$$607);
                a$$757[c$$607] || (a$$757[c$$607] = []);
                f$$221 = {};
                a$$757[c$$607].push(f$$221);
                e$$382.attributes.length > 0 && l$$92(f$$221, e$$382);
                a$$757[c$$607].contains || p$$59(a$$757[c$$607]);
                m$$61 = c$$607;
                e$$382.hasChildNodes() && g$$212(f$$221, e$$382);
                break;
              case 3:
                a$$757.Text += k$$87(e$$382.nodeValue);
                break;
              case 4:
                a$$757.Text += e$$382.text ? k$$87(e$$382.text) : k$$87(e$$382.nodeValue);
            }
          } while (q$$26++ < o$$40);
        }
      };
      g$$212(b$$719, f$$208);
      f$$208 = c$$589 = null;
      return b$$719;
    } catch (m$$62) {
      return null;
    }
  }, textToXML:function(a$$758) {
    var b$$742 = null;
    try {
      b$$742 = document.all ? new ActiveXObject("Microsoft.XMLDOM") : new DOMParser, b$$742.async = !1;
    } catch (f$$222) {
      throw Error("XML Parser could not be instantiated");
    }
    var k$$91;
    try {
      k$$91 = document.all ? b$$742.loadXML(a$$758) ? b$$742 : !1 : b$$742.parseFromString(a$$758, "text/xml");
    } catch (l$$95) {
      throw Error("Error parsing XML string");
    }
    return k$$91;
  }};
}();
(function() {
  function M$$3(a$$871, c$$649) {
    m$$63.prototype[a$$871] = function() {
      var a$$872 = i$$238.call(arguments);
      J$$4.call(a$$872, this._wrapped);
      return x$$76(c$$649.apply(b$$743, a$$872), this._chain);
    };
  }
  function x$$76(a$$870, c$$648) {
    return c$$648 ? b$$743(a$$870).chain() : a$$870;
  }
  function m$$63(a$$869) {
    this._wrapped = a$$869;
  }
  function w$$20(a$$860) {
    return a$$860.replace(P$$3, function(a$$861, b$$779) {
      return n$$109[b$$779];
    });
  }
  function H$$4() {
  }
  function b$$743(a$$760) {
    return new m$$63(a$$760);
  }
  function r$$31(a$$759, c$$608, d$$447) {
    if (a$$759 === c$$608) {
      return 0 !== a$$759 || 1 / a$$759 == 1 / c$$608;
    }
    if (null == a$$759 || null == c$$608) {
      return a$$759 === c$$608;
    }
    a$$759._chain && (a$$759 = a$$759._wrapped);
    c$$608._chain && (c$$608 = c$$608._wrapped);
    if (a$$759.isEqual && b$$743.isFunction(a$$759.isEqual)) {
      return a$$759.isEqual(c$$608);
    }
    if (c$$608.isEqual && b$$743.isFunction(c$$608.isEqual)) {
      return c$$608.isEqual(a$$759);
    }
    var e$$383 = l$$96.call(a$$759);
    if (e$$383 != l$$96.call(c$$608)) {
      return !1;
    }
    switch(e$$383) {
      case "[object String]":
        return a$$759 == "" + c$$608;
      case "[object Number]":
        return a$$759 != +a$$759 ? c$$608 != +c$$608 : 0 == a$$759 ? 1 / a$$759 == 1 / c$$608 : a$$759 == +c$$608;
      case "[object Date]":
      ;
      case "[object Boolean]":
        return +a$$759 == +c$$608;
      case "[object RegExp]":
        return a$$759.source == c$$608.source && a$$759.global == c$$608.global && a$$759.multiline == c$$608.multiline && a$$759.ignoreCase == c$$608.ignoreCase;
    }
    if ("object" != typeof a$$759 || "object" != typeof c$$608) {
      return !1;
    }
    var f$$223 = d$$447.length;
    for (;f$$223--;) {
      if (d$$447[f$$223] == a$$759) {
        return !0;
      }
    }
    d$$447.push(a$$759);
    f$$223 = 0;
    var g$$219 = !0;
    if ("[object Array]" == e$$383) {
      if (f$$223 = a$$759.length, g$$219 = f$$223 == c$$608.length) {
        for (;f$$223-- && (g$$219 = f$$223 in a$$759 == f$$223 in c$$608 && r$$31(a$$759[f$$223], c$$608[f$$223], d$$447));) {
        }
      }
    } else {
      if ("constructor" in a$$759 != "constructor" in c$$608 || a$$759.constructor != c$$608.constructor) {
        return !1;
      }
      var h$$181;
      for (h$$181 in a$$759) {
        if (b$$743.has(a$$759, h$$181) && (f$$223++, !(g$$219 = b$$743.has(c$$608, h$$181) && r$$31(a$$759[h$$181], c$$608[h$$181], d$$447)))) {
          break;
        }
      }
      if (g$$219) {
        for (h$$181 in c$$608) {
          if (b$$743.has(c$$608, h$$181) && !f$$223--) {
            break;
          }
        }
        g$$219 = !f$$223;
      }
    }
    d$$447.pop();
    return g$$219;
  }
  var s$$35 = this;
  var I$$4 = s$$35._;
  var o$$41 = {};
  var k$$92 = Array.prototype;
  var p$$60 = Object.prototype;
  var i$$238 = k$$92.slice;
  var J$$4 = k$$92.unshift;
  var l$$96 = p$$60.toString;
  var K$$3 = p$$60.hasOwnProperty;
  var y$$56 = k$$92.forEach;
  var z$$10 = k$$92.map;
  var A$$6 = k$$92.reduce;
  var B$$6 = k$$92.reduceRight;
  var C$$5 = k$$92.filter;
  var D$$5 = k$$92.every;
  var E$$5 = k$$92.some;
  var q$$27 = k$$92.indexOf;
  var F$$5 = k$$92.lastIndexOf;
  p$$60 = Array.isArray;
  var L$$3 = Object.keys;
  var t$$32 = Function.prototype.bind;
  "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports = b$$743), exports._ = b$$743) : s$$35._ = b$$743;
  b$$743.VERSION = "1.3.3";
  var j$$125 = b$$743.each = b$$743.forEach = function(a$$761, c$$609, d$$448) {
    if (a$$761 != null) {
      if (y$$56 && a$$761.forEach === y$$56) {
        a$$761.forEach(c$$609, d$$448);
      } else {
        if (a$$761.length === +a$$761.length) {
          var e$$384 = 0;
          var f$$224 = a$$761.length;
          for (;e$$384 < f$$224;e$$384++) {
            if (e$$384 in a$$761 && c$$609.call(d$$448, a$$761[e$$384], e$$384, a$$761) === o$$41) {
              break;
            }
          }
        } else {
          for (e$$384 in a$$761) {
            if (b$$743.has(a$$761, e$$384) && c$$609.call(d$$448, a$$761[e$$384], e$$384, a$$761) === o$$41) {
              break;
            }
          }
        }
      }
    }
  };
  b$$743.map = b$$743.collect = function(a$$762, c$$610, b$$744) {
    var e$$385 = [];
    if (a$$762 == null) {
      return e$$385;
    }
    if (z$$10 && a$$762.map === z$$10) {
      return a$$762.map(c$$610, b$$744);
    }
    j$$125(a$$762, function(a$$763, g$$220, h$$182) {
      e$$385[e$$385.length] = c$$610.call(b$$744, a$$763, g$$220, h$$182);
    });
    if (a$$762.length === +a$$762.length) {
      e$$385.length = a$$762.length;
    }
    return e$$385;
  };
  b$$743.reduce = b$$743.foldl = b$$743.inject = function(a$$764, c$$611, d$$449, e$$386) {
    var f$$225 = arguments.length > 2;
    a$$764 == null && (a$$764 = []);
    if (A$$6 && a$$764.reduce === A$$6) {
      e$$386 && (c$$611 = b$$743.bind(c$$611, e$$386));
      return f$$225 ? a$$764.reduce(c$$611, d$$449) : a$$764.reduce(c$$611);
    }
    j$$125(a$$764, function(a$$765, b$$745, i$$239) {
      if (f$$225) {
        d$$449 = c$$611.call(e$$386, d$$449, a$$765, b$$745, i$$239);
      } else {
        d$$449 = a$$765;
        f$$225 = true;
      }
    });
    if (!f$$225) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    return d$$449;
  };
  b$$743.reduceRight = b$$743.foldr = function(a$$766, c$$612, d$$450, e$$387) {
    var f$$226 = arguments.length > 2;
    a$$766 == null && (a$$766 = []);
    if (B$$6 && a$$766.reduceRight === B$$6) {
      e$$387 && (c$$612 = b$$743.bind(c$$612, e$$387));
      return f$$226 ? a$$766.reduceRight(c$$612, d$$450) : a$$766.reduceRight(c$$612);
    }
    var g$$221 = b$$743.toArray(a$$766).reverse();
    e$$387 && !f$$226 && (c$$612 = b$$743.bind(c$$612, e$$387));
    return f$$226 ? b$$743.reduce(g$$221, c$$612, d$$450, e$$387) : b$$743.reduce(g$$221, c$$612);
  };
  b$$743.find = b$$743.detect = function(a$$767, c$$613, b$$746) {
    var e$$388;
    G$$4(a$$767, function(a$$768, g$$222, h$$183) {
      if (c$$613.call(b$$746, a$$768, g$$222, h$$183)) {
        e$$388 = a$$768;
        return true;
      }
    });
    return e$$388;
  };
  b$$743.filter = b$$743.select = function(a$$769, c$$614, b$$747) {
    var e$$389 = [];
    if (a$$769 == null) {
      return e$$389;
    }
    if (C$$5 && a$$769.filter === C$$5) {
      return a$$769.filter(c$$614, b$$747);
    }
    j$$125(a$$769, function(a$$770, g$$223, h$$184) {
      c$$614.call(b$$747, a$$770, g$$223, h$$184) && (e$$389[e$$389.length] = a$$770);
    });
    return e$$389;
  };
  b$$743.reject = function(a$$771, c$$615, b$$748) {
    var e$$390 = [];
    if (a$$771 == null) {
      return e$$390;
    }
    j$$125(a$$771, function(a$$772, g$$224, h$$185) {
      c$$615.call(b$$748, a$$772, g$$224, h$$185) || (e$$390[e$$390.length] = a$$772);
    });
    return e$$390;
  };
  b$$743.every = b$$743.all = function(a$$773, c$$616, b$$749) {
    var e$$391 = true;
    if (a$$773 == null) {
      return e$$391;
    }
    if (D$$5 && a$$773.every === D$$5) {
      return a$$773.every(c$$616, b$$749);
    }
    j$$125(a$$773, function(a$$774, g$$225, h$$186) {
      if (!(e$$391 = e$$391 && c$$616.call(b$$749, a$$774, g$$225, h$$186))) {
        return o$$41;
      }
    });
    return !!e$$391;
  };
  var G$$4 = b$$743.some = b$$743.any = function(a$$775, c$$617, d$$451) {
    c$$617 || (c$$617 = b$$743.identity);
    var e$$392 = false;
    if (a$$775 == null) {
      return e$$392;
    }
    if (E$$5 && a$$775.some === E$$5) {
      return a$$775.some(c$$617, d$$451);
    }
    j$$125(a$$775, function(a$$776, b$$750, h$$187) {
      if (e$$392 || (e$$392 = c$$617.call(d$$451, a$$776, b$$750, h$$187))) {
        return o$$41;
      }
    });
    return !!e$$392;
  };
  b$$743.include = b$$743.contains = function(a$$777, c$$618) {
    var b$$751 = false;
    if (a$$777 == null) {
      return b$$751;
    }
    if (q$$27 && a$$777.indexOf === q$$27) {
      return a$$777.indexOf(c$$618) != -1;
    }
    return b$$751 = G$$4(a$$777, function(a$$778) {
      return a$$778 === c$$618;
    });
  };
  b$$743.invoke = function(a$$779, c$$619) {
    var d$$452 = i$$238.call(arguments, 2);
    return b$$743.map(a$$779, function(a$$780) {
      return (b$$743.isFunction(c$$619) ? c$$619 || a$$780 : a$$780[c$$619]).apply(a$$780, d$$452);
    });
  };
  b$$743.pluck = function(a$$781, c$$620) {
    return b$$743.map(a$$781, function(a$$782) {
      return a$$782[c$$620];
    });
  };
  b$$743.max = function(a$$783, c$$621, d$$453) {
    if (!c$$621 && b$$743.isArray(a$$783) && a$$783[0] === +a$$783[0]) {
      return Math.max.apply(Math, a$$783);
    }
    if (!c$$621 && b$$743.isEmpty(a$$783)) {
      return -Infinity;
    }
    var e$$393 = {computed:-Infinity};
    j$$125(a$$783, function(a$$784, b$$752, h$$188) {
      b$$752 = c$$621 ? c$$621.call(d$$453, a$$784, b$$752, h$$188) : a$$784;
      b$$752 >= e$$393.computed && (e$$393 = {value:a$$784, computed:b$$752});
    });
    return e$$393.value;
  };
  b$$743.min = function(a$$785, c$$622, d$$454) {
    if (!c$$622 && b$$743.isArray(a$$785) && a$$785[0] === +a$$785[0]) {
      return Math.min.apply(Math, a$$785);
    }
    if (!c$$622 && b$$743.isEmpty(a$$785)) {
      return Infinity;
    }
    var e$$394 = {computed:Infinity};
    j$$125(a$$785, function(a$$786, b$$753, h$$189) {
      b$$753 = c$$622 ? c$$622.call(d$$454, a$$786, b$$753, h$$189) : a$$786;
      b$$753 < e$$394.computed && (e$$394 = {value:a$$786, computed:b$$753});
    });
    return e$$394.value;
  };
  b$$743.shuffle = function(a$$787) {
    var b$$754 = [];
    var d$$455;
    j$$125(a$$787, function(a$$788, f$$227) {
      d$$455 = Math.floor(Math.random() * (f$$227 + 1));
      b$$754[f$$227] = b$$754[d$$455];
      b$$754[d$$455] = a$$788;
    });
    return b$$754;
  };
  b$$743.sortBy = function(a$$789) {
    var c$$623;
    var d$$456;
    var e$$395 = b$$743.isFunction(c$$623) ? c$$623 : function(a$$790) {
      return a$$790[c$$623];
    };
    return b$$743.pluck(b$$743.map(a$$789, function(a$$791, b$$755, c$$624) {
      return {value:a$$791, criteria:e$$395.call(d$$456, a$$791, b$$755, c$$624)};
    }).sort(function(a$$792, b$$756) {
      var c$$625 = a$$792.criteria;
      var d$$457 = b$$756.criteria;
      return c$$625 === void 0 ? 1 : d$$457 === void 0 ? -1 : c$$625 < d$$457 ? -1 : c$$625 > d$$457 ? 1 : 0;
    }), "value");
  };
  b$$743.groupBy = function(a$$793, c$$626) {
    var d$$458 = {};
    var e$$396 = b$$743.isFunction(c$$626) ? c$$626 : function(a$$794) {
      return a$$794[c$$626];
    };
    j$$125(a$$793, function(a$$795, b$$757) {
      var c$$627 = e$$396(a$$795, b$$757);
      (d$$458[c$$627] || (d$$458[c$$627] = [])).push(a$$795);
    });
    return d$$458;
  };
  b$$743.sortedIndex = function(a$$796, c$$628) {
    var d$$459;
    d$$459 || (d$$459 = b$$743.identity);
    var e$$397 = 0;
    var f$$228 = a$$796.length;
    for (;e$$397 < f$$228;) {
      var g$$226 = e$$397 + f$$228 >> 1;
      d$$459(a$$796[g$$226]) < d$$459(c$$628) ? e$$397 = g$$226 + 1 : f$$228 = g$$226;
    }
    return e$$397;
  };
  b$$743.toArray = function(a$$797) {
    return !a$$797 ? [] : b$$743.isArray(a$$797) || b$$743.isArguments(a$$797) ? i$$238.call(a$$797) : a$$797.toArray && b$$743.isFunction(a$$797.toArray) ? a$$797.toArray() : b$$743.values(a$$797);
  };
  b$$743.size = function(a$$798) {
    return b$$743.isArray(a$$798) ? a$$798.length : b$$743.keys(a$$798).length;
  };
  b$$743.first = b$$743.head = b$$743.take = function(a$$799, b$$758, d$$460) {
    return b$$758 != null && !d$$460 ? i$$238.call(a$$799, 0, b$$758) : a$$799[0];
  };
  b$$743.initial = function(a$$800, b$$759, d$$461) {
    return i$$238.call(a$$800, 0, a$$800.length - (b$$759 == null || d$$461 ? 1 : b$$759));
  };
  b$$743.last = function(a$$801, b$$760, d$$462) {
    return b$$760 != null && !d$$462 ? i$$238.call(a$$801, Math.max(a$$801.length - b$$760, 0)) : a$$801[a$$801.length - 1];
  };
  b$$743.rest = b$$743.tail = function(a$$802, b$$761, d$$463) {
    return i$$238.call(a$$802, b$$761 == null || d$$463 ? 1 : b$$761);
  };
  b$$743.compact = function(a$$803) {
    return b$$743.filter(a$$803, function(a$$804) {
      return !!a$$804;
    });
  };
  b$$743.flatten = function(a$$805, c$$629) {
    return b$$743.reduce(a$$805, function(a$$806, e$$398) {
      if (b$$743.isArray(e$$398)) {
        return a$$806.concat(c$$629 ? e$$398 : b$$743.flatten(e$$398));
      }
      a$$806[a$$806.length] = e$$398;
      return a$$806;
    }, []);
  };
  b$$743.without = function(a$$807) {
    return b$$743.difference(a$$807, i$$238.call(arguments, 1));
  };
  b$$743.uniq = b$$743.unique = function(a$$808, c$$630, d$$464) {
    d$$464 = d$$464 ? b$$743.map(a$$808, d$$464) : a$$808;
    var e$$399 = [];
    a$$808.length < 3 && (c$$630 = true);
    b$$743.reduce(d$$464, function(d$$465, g$$227, h$$190) {
      if (c$$630 ? b$$743.last(d$$465) !== g$$227 || !d$$465.length : !b$$743.include(d$$465, g$$227)) {
        d$$465.push(g$$227);
        e$$399.push(a$$808[h$$190]);
      }
      return d$$465;
    }, []);
    return e$$399;
  };
  b$$743.union = function() {
    return b$$743.uniq(b$$743.flatten(arguments, true));
  };
  b$$743.intersection = b$$743.intersect = function(a$$809) {
    var c$$631 = i$$238.call(arguments, 1);
    return b$$743.filter(b$$743.uniq(a$$809), function(a$$810) {
      return b$$743.every(c$$631, function(c$$632) {
        return b$$743.indexOf(c$$632, a$$810) >= 0;
      });
    });
  };
  b$$743.difference = function(a$$811) {
    var c$$633 = b$$743.flatten(i$$238.call(arguments, 1), true);
    return b$$743.filter(a$$811, function(a$$812) {
      return !b$$743.include(c$$633, a$$812);
    });
  };
  b$$743.zip = function() {
    var a$$813 = i$$238.call(arguments);
    var c$$634 = b$$743.max(b$$743.pluck(a$$813, "length"));
    var d$$466 = Array(c$$634);
    var e$$400 = 0;
    for (;e$$400 < c$$634;e$$400++) {
      d$$466[e$$400] = b$$743.pluck(a$$813, "" + e$$400);
    }
    return d$$466;
  };
  b$$743.indexOf = function(a$$814, c$$635, d$$467) {
    if (a$$814 == null) {
      return -1;
    }
    var e$$401;
    if (d$$467) {
      d$$467 = b$$743.sortedIndex(a$$814, c$$635);
      return a$$814[d$$467] === c$$635 ? d$$467 : -1;
    }
    if (q$$27 && a$$814.indexOf === q$$27) {
      return a$$814.indexOf(c$$635);
    }
    d$$467 = 0;
    e$$401 = a$$814.length;
    for (;d$$467 < e$$401;d$$467++) {
      if (d$$467 in a$$814 && a$$814[d$$467] === c$$635) {
        return d$$467;
      }
    }
    return -1;
  };
  b$$743.lastIndexOf = function(a$$815, b$$762) {
    if (a$$815 == null) {
      return -1;
    }
    if (F$$5 && a$$815.lastIndexOf === F$$5) {
      return a$$815.lastIndexOf(b$$762);
    }
    var d$$468 = a$$815.length;
    for (;d$$468--;) {
      if (d$$468 in a$$815 && a$$815[d$$468] === b$$762) {
        return d$$468;
      }
    }
    return -1;
  };
  b$$743.range = function(a$$816, b$$763, d$$469) {
    if (arguments.length <= 1) {
      b$$763 = a$$816 || 0;
      a$$816 = 0;
    }
    d$$469 = arguments[2] || 1;
    var e$$402 = Math.max(Math.ceil((b$$763 - a$$816) / d$$469), 0);
    var f$$229 = 0;
    var g$$228 = Array(e$$402);
    for (;f$$229 < e$$402;) {
      g$$228[f$$229++] = a$$816;
      a$$816 = a$$816 + d$$469;
    }
    return g$$228;
  };
  b$$743.bind = function(a$$817, c$$636) {
    var d$$470;
    var e$$403;
    if (a$$817.bind === t$$32 && t$$32) {
      return t$$32.apply(a$$817, i$$238.call(arguments, 1));
    }
    if (!b$$743.isFunction(a$$817)) {
      throw new TypeError;
    }
    e$$403 = i$$238.call(arguments, 2);
    return d$$470 = function() {
      if (!(this instanceof d$$470)) {
        return a$$817.apply(c$$636, e$$403.concat(i$$238.call(arguments)));
      }
      H$$4.prototype = a$$817.prototype;
      var b$$764 = new H$$4;
      var g$$229 = a$$817.apply(b$$764, e$$403.concat(i$$238.call(arguments)));
      return Object(g$$229) === g$$229 ? g$$229 : b$$764;
    };
  };
  b$$743.bindAll = function(a$$818) {
    var c$$637 = i$$238.call(arguments, 1);
    c$$637.length == 0 && (c$$637 = b$$743.functions(a$$818));
    j$$125(c$$637, function(c$$638) {
      a$$818[c$$638] = b$$743.bind(a$$818[c$$638], a$$818);
    });
  };
  b$$743.memoize = function(a$$819, c$$639) {
    var d$$471 = {};
    c$$639 || (c$$639 = b$$743.identity);
    return function() {
      var e$$404 = c$$639.apply(this, arguments);
      return b$$743.has(d$$471, e$$404) ? d$$471[e$$404] : d$$471[e$$404] = a$$819.apply(this, arguments);
    };
  };
  b$$743.delay = function(a$$820, b$$765) {
    var d$$472 = i$$238.call(arguments, 2);
    return setTimeout(function() {
      return a$$820.apply(null, d$$472);
    }, b$$765);
  };
  b$$743.defer = function(a$$821) {
    return b$$743.delay.apply(b$$743, [a$$821, 1].concat(i$$238.call(arguments, 1)));
  };
  b$$743.throttle = function(a$$822, c$$640) {
    var d$$473;
    var e$$405;
    var f$$230;
    var g$$230;
    var h$$191;
    var i$$240;
    var j$$126 = b$$743.debounce(function() {
      h$$191 = g$$230 = false;
    }, c$$640);
    return function() {
      d$$473 = this;
      e$$405 = arguments;
      f$$230 || (f$$230 = setTimeout(function() {
        f$$230 = null;
        h$$191 && a$$822.apply(d$$473, e$$405);
        j$$126();
      }, c$$640));
      g$$230 ? h$$191 = true : i$$240 = a$$822.apply(d$$473, e$$405);
      j$$126();
      g$$230 = true;
      return i$$240;
    };
  };
  b$$743.debounce = function(a$$823, b$$766) {
    var d$$474;
    var e$$406;
    return function() {
      var f$$231 = this;
      var g$$231 = arguments;
      d$$474 && !e$$406 && a$$823.apply(f$$231, g$$231);
      clearTimeout(e$$406);
      e$$406 = setTimeout(function() {
        e$$406 = null;
        d$$474 || a$$823.apply(f$$231, g$$231);
      }, b$$766);
    };
  };
  b$$743.once = function(a$$824) {
    var b$$767 = false;
    var d$$475;
    return function() {
      if (b$$767) {
        return d$$475;
      }
      b$$767 = true;
      return d$$475 = a$$824.apply(this, arguments);
    };
  };
  b$$743.wrap = function(a$$825, b$$768) {
    return function() {
      var d$$476 = [a$$825].concat(i$$238.call(arguments, 0));
      return b$$768.apply(this, d$$476);
    };
  };
  b$$743.compose = function() {
    var a$$826 = arguments;
    return function() {
      var b$$769 = arguments;
      var d$$477 = a$$826.length - 1;
      for (;d$$477 >= 0;d$$477--) {
        b$$769 = [a$$826[d$$477].apply(this, b$$769)];
      }
      return b$$769[0];
    };
  };
  b$$743.after = function(a$$827, b$$770) {
    return a$$827 <= 0 ? b$$770() : function() {
      if (--a$$827 < 1) {
        return b$$770.apply(this, arguments);
      }
    };
  };
  b$$743.keys = L$$3 || function(a$$828) {
    if (a$$828 !== Object(a$$828)) {
      throw new TypeError("Invalid object");
    }
    var c$$641 = [];
    var d$$478;
    for (d$$478 in a$$828) {
      b$$743.has(a$$828, d$$478) && (c$$641[c$$641.length] = d$$478);
    }
    return c$$641;
  };
  b$$743.values = function(a$$829) {
    return b$$743.map(a$$829, b$$743.identity);
  };
  b$$743.functions = b$$743.methods = function(a$$830) {
    var c$$642 = [];
    var d$$479;
    for (d$$479 in a$$830) {
      b$$743.isFunction(a$$830[d$$479]) && c$$642.push(d$$479);
    }
    return c$$642.sort();
  };
  b$$743.extend = function(a$$831) {
    j$$125(i$$238.call(arguments, 1), function(b$$771) {
      var d$$480;
      for (d$$480 in b$$771) {
        a$$831[d$$480] = b$$771[d$$480];
      }
    });
    return a$$831;
  };
  b$$743.pick = function(a$$832) {
    var c$$643 = {};
    j$$125(b$$743.flatten(i$$238.call(arguments, 1)), function(b$$772) {
      b$$772 in a$$832 && (c$$643[b$$772] = a$$832[b$$772]);
    });
    return c$$643;
  };
  b$$743.defaults = function(a$$833) {
    j$$125(i$$238.call(arguments, 1), function(b$$773) {
      var d$$481;
      for (d$$481 in b$$773) {
        a$$833[d$$481] == null && (a$$833[d$$481] = b$$773[d$$481]);
      }
    });
    return a$$833;
  };
  b$$743.clone = function(a$$834) {
    return !b$$743.isObject(a$$834) ? a$$834 : b$$743.isArray(a$$834) ? a$$834.slice() : b$$743.extend({}, a$$834);
  };
  b$$743.tap = function(a$$835, b$$774) {
    b$$774(a$$835);
    return a$$835;
  };
  b$$743.isEqual = function(a$$836, b$$775) {
    return r$$31(a$$836, b$$775, []);
  };
  b$$743.isEmpty = function(a$$837) {
    if (a$$837 == null) {
      return true;
    }
    if (b$$743.isArray(a$$837) || b$$743.isString(a$$837)) {
      return a$$837.length === 0;
    }
    var c$$644;
    for (c$$644 in a$$837) {
      if (b$$743.has(a$$837, c$$644)) {
        return false;
      }
    }
    return true;
  };
  b$$743.isElement = function(a$$838) {
    return !!(a$$838 && a$$838.nodeType == 1);
  };
  b$$743.isArray = p$$60 || function(a$$839) {
    return l$$96.call(a$$839) == "[object Array]";
  };
  b$$743.isObject = function(a$$840) {
    return a$$840 === Object(a$$840);
  };
  b$$743.isArguments = function(a$$841) {
    return l$$96.call(a$$841) == "[object Arguments]";
  };
  b$$743.isArguments(arguments) || (b$$743.isArguments = function(a$$842) {
    return !(!a$$842 || !b$$743.has(a$$842, "callee"));
  });
  b$$743.isFunction = function(a$$843) {
    return l$$96.call(a$$843) == "[object Function]";
  };
  b$$743.isString = function(a$$844) {
    return l$$96.call(a$$844) == "[object String]";
  };
  b$$743.isNumber = function(a$$845) {
    return l$$96.call(a$$845) == "[object Number]";
  };
  b$$743.isFinite = function(a$$846) {
    return b$$743.isNumber(a$$846) && isFinite(a$$846);
  };
  b$$743.isNaN = function(a$$847) {
    return a$$847 !== a$$847;
  };
  b$$743.isBoolean = function(a$$848) {
    return a$$848 === true || a$$848 === false || l$$96.call(a$$848) == "[object Boolean]";
  };
  b$$743.isDate = function(a$$849) {
    return l$$96.call(a$$849) == "[object Date]";
  };
  b$$743.isRegExp = function(a$$850) {
    return l$$96.call(a$$850) == "[object RegExp]";
  };
  b$$743.isNull = function(a$$851) {
    return a$$851 === null;
  };
  b$$743.isUndefined = function(a$$852) {
    return a$$852 === void 0;
  };
  b$$743.has = function(a$$853, b$$776) {
    return K$$3.call(a$$853, b$$776);
  };
  b$$743.noConflict = function() {
    s$$35._ = I$$4;
    return this;
  };
  b$$743.identity = function(a$$854) {
    return a$$854;
  };
  b$$743.times = function(a$$855, b$$777, d$$482) {
    var e$$407 = 0;
    for (;e$$407 < a$$855;e$$407++) {
      b$$777.call(d$$482, e$$407);
    }
  };
  b$$743.escape = function(a$$856) {
    return ("" + a$$856).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
  };
  b$$743.result = function(a$$857, c$$645) {
    if (a$$857 == null) {
      return null;
    }
    var d$$483 = a$$857[c$$645];
    return b$$743.isFunction(d$$483) ? d$$483.call(a$$857) : d$$483;
  };
  b$$743.mixin = function(a$$858) {
    j$$125(b$$743.functions(a$$858), function(c$$646) {
      M$$3(c$$646, b$$743[c$$646] = a$$858[c$$646]);
    });
  };
  var N$$3 = 0;
  b$$743.uniqueId = function(a$$859) {
    var b$$778 = N$$3++;
    return a$$859 ? a$$859 + b$$778 : b$$778;
  };
  b$$743.templateSettings = {evaluate:/<%([\s\S]+?)%>/g, interpolate:/<%=([\s\S]+?)%>/g, escape:/<%-([\s\S]+?)%>/g};
  var u$$19 = /.^/;
  var n$$109 = {"\\":"\\", "'":"'", r:"\r", n:"\n", t:"\t", u2028:"\u2028", u2029:"\u2029"};
  var v$$14;
  for (v$$14 in n$$109) {
    n$$109[n$$109[v$$14]] = v$$14;
  }
  var O$$3 = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  var P$$3 = /\\(\\|'|r|n|t|u2028|u2029)/g;
  b$$743.template = function(a$$862) {
    var c$$647;
    var d$$484;
    d$$484 = b$$743.defaults(d$$484 || {}, b$$743.templateSettings);
    a$$862 = "__p+='" + a$$862.replace(O$$3, function(a$$863) {
      return "\\" + n$$109[a$$863];
    }).replace(d$$484.escape || u$$19, function(a$$864, b$$780) {
      return "'+\n_.escape(" + w$$20(b$$780) + ")+\n'";
    }).replace(d$$484.interpolate || u$$19, function(a$$865, b$$781) {
      return "'+\n(" + w$$20(b$$781) + ")+\n'";
    }).replace(d$$484.evaluate || u$$19, function(a$$866, b$$782) {
      return "';\n" + w$$20(b$$782) + "\n;__p+='";
    }) + "';\n";
    d$$484.variable || (a$$862 = "with(obj||{}){\n" + a$$862 + "}\n");
    a$$862 = "var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n" + a$$862 + "return __p;\n";
    var e$$408 = new Function(d$$484.variable || "obj", "_", a$$862);
    if (c$$647) {
      return e$$408(c$$647, b$$743);
    }
    c$$647 = function(a$$867) {
      return e$$408.call(this, a$$867, b$$743);
    };
    c$$647.source = "function(" + (d$$484.variable || "obj") + "){\n" + a$$862 + "}";
    return c$$647;
  };
  b$$743.chain = function(a$$868) {
    return b$$743(a$$868).chain();
  };
  b$$743.prototype = m$$63.prototype;
  b$$743.mixin(b$$743);
  j$$125("pop,push,reverse,shift,sort,splice,unshift".split(","), function(a$$873) {
    var b$$783 = k$$92[a$$873];
    m$$63.prototype[a$$873] = function() {
      var d$$485 = this._wrapped;
      b$$783.apply(d$$485, arguments);
      var e$$409 = d$$485.length;
      (a$$873 == "shift" || a$$873 == "splice") && e$$409 === 0 && delete d$$485[0];
      return x$$76(d$$485, this._chain);
    };
  });
  j$$125(["concat", "join", "slice"], function(a$$874) {
    var b$$784 = k$$92[a$$874];
    m$$63.prototype[a$$874] = function() {
      return x$$76(b$$784.apply(this._wrapped, arguments), this._chain);
    };
  });
  m$$63.prototype.chain = function() {
    this._chain = true;
    return this;
  };
  m$$63.prototype.value = function() {
    return this._wrapped;
  };
}).call(this);
(function() {
  function t$$33() {
    throw Error('A "url" property or function must be specified');
  }
  function n$$110(a$$946, b$$833) {
    return !a$$946 || !a$$946[b$$833] ? null : f$$232.isFunction(a$$946[b$$833]) ? a$$946[b$$833]() : a$$946[b$$833];
  }
  function G$$5(a$$945, b$$832, c$$679) {
    var d$$506;
    d$$506 = b$$832 && b$$832.hasOwnProperty("constructor") ? b$$832.constructor : function() {
      a$$945.apply(this, arguments);
    };
    f$$232.extend(d$$506, a$$945);
    x$$77.prototype = a$$945.prototype;
    d$$506.prototype = new x$$77;
    b$$832 && f$$232.extend(d$$506.prototype, b$$832);
    c$$679 && f$$232.extend(d$$506, c$$679);
    d$$506.prototype.constructor = d$$506;
    d$$506.__super__ = a$$945.prototype;
    return d$$506;
  }
  function x$$77() {
  }
  var l$$97 = this;
  var y$$57 = l$$97.Backbone;
  var z$$11 = Array.prototype.slice;
  var A$$7 = Array.prototype.splice;
  var g$$232;
  g$$232 = "undefined" !== typeof exports ? exports : l$$97.Backbone = {};
  g$$232.VERSION = "0.9.2";
  var f$$232 = l$$97._;
  !f$$232 && "undefined" !== typeof require && (f$$232 = require("underscore"));
  var i$$241 = l$$97.jQuery || l$$97.Zepto || l$$97.ender;
  g$$232.setDomLibrary = function(a$$875) {
    i$$241 = a$$875;
  };
  g$$232.noConflict = function() {
    l$$97.Backbone = y$$57;
    return this;
  };
  g$$232.emulateHTTP = !1;
  g$$232.emulateJSON = !1;
  var p$$61 = /\s+/;
  var k$$93 = g$$232.Events = {on:function(a$$876, b$$785, c$$650) {
    var d$$486;
    var e$$410;
    var f$$233;
    var g$$233;
    var j$$127;
    if (!b$$785) {
      return this;
    }
    a$$876 = a$$876.split(p$$61);
    d$$486 = this._callbacks || (this._callbacks = {});
    for (;e$$410 = a$$876.shift();) {
      f$$233 = (j$$127 = d$$486[e$$410]) ? j$$127.tail : {}, f$$233.next = g$$233 = {}, f$$233.context = c$$650, f$$233.callback = b$$785, d$$486[e$$410] = {tail:g$$233, next:j$$127 ? j$$127.next : f$$233};
    }
    return this;
  }, off:function(a$$877, b$$786, c$$651) {
    var d$$487;
    var e$$411;
    var h$$192;
    var g$$234;
    var j$$128;
    var q$$28;
    if (e$$411 = this._callbacks) {
      if (!a$$877 && !b$$786 && !c$$651) {
        return delete this._callbacks, this;
      }
      a$$877 = a$$877 ? a$$877.split(p$$61) : f$$232.keys(e$$411);
      for (;d$$487 = a$$877.shift();) {
        if (h$$192 = e$$411[d$$487], delete e$$411[d$$487], h$$192 && (b$$786 || c$$651)) {
          g$$234 = h$$192.tail;
          for (;(h$$192 = h$$192.next) !== g$$234;) {
            if (j$$128 = h$$192.callback, q$$28 = h$$192.context, b$$786 && j$$128 !== b$$786 || c$$651 && q$$28 !== c$$651) {
              this.on(d$$487, j$$128, q$$28);
            }
          }
        }
      }
      return this;
    }
  }, trigger:function(a$$878) {
    var b$$787;
    var c$$652;
    var d$$488;
    var e$$412;
    var f$$234;
    var g$$235;
    if (!(d$$488 = this._callbacks)) {
      return this;
    }
    f$$234 = d$$488.all;
    a$$878 = a$$878.split(p$$61);
    g$$235 = z$$11.call(arguments, 1);
    for (;b$$787 = a$$878.shift();) {
      if (c$$652 = d$$488[b$$787]) {
        e$$412 = c$$652.tail;
        for (;(c$$652 = c$$652.next) !== e$$412;) {
          c$$652.callback.apply(c$$652.context || this, g$$235);
        }
      }
      if (c$$652 = f$$234) {
        e$$412 = c$$652.tail;
        b$$787 = [b$$787].concat(g$$235);
        for (;(c$$652 = c$$652.next) !== e$$412;) {
          c$$652.callback.apply(c$$652.context || this, b$$787);
        }
      }
    }
    return this;
  }};
  k$$93.bind = k$$93.on;
  k$$93.unbind = k$$93.off;
  var o$$42 = g$$232.Model = function(a$$879, b$$788) {
    var c$$653;
    a$$879 || (a$$879 = {});
    b$$788 && b$$788.parse && (a$$879 = this.parse(a$$879));
    if (c$$653 = n$$110(this, "defaults")) {
      a$$879 = f$$232.extend({}, c$$653, a$$879);
    }
    b$$788 && b$$788.collection && (this.collection = b$$788.collection);
    this.attributes = {};
    this._escapedAttributes = {};
    this.cid = f$$232.uniqueId("c");
    this.changed = {};
    this._silent = {};
    this._pending = {};
    this.set(a$$879, {silent:!0});
    this.changed = {};
    this._silent = {};
    this._pending = {};
    this._previousAttributes = f$$232.clone(this.attributes);
    this.initialize.apply(this, arguments);
  };
  f$$232.extend(o$$42.prototype, k$$93, {changed:null, _silent:null, _pending:null, idAttribute:"id", initialize:function() {
  }, toJSON:function() {
    return f$$232.clone(this.attributes);
  }, get:function(a$$880) {
    return this.attributes[a$$880];
  }, escape:function(a$$881) {
    var b$$789;
    if (b$$789 = this._escapedAttributes[a$$881]) {
      return b$$789;
    }
    b$$789 = this.get(a$$881);
    return this._escapedAttributes[a$$881] = f$$232.escape(null == b$$789 ? "" : "" + b$$789);
  }, has:function(a$$882) {
    return null != this.get(a$$882);
  }, set:function(a$$883, b$$790, c$$654) {
    var d$$489;
    var e$$413;
    f$$232.isObject(a$$883) || null == a$$883 ? (d$$489 = a$$883, c$$654 = b$$790) : (d$$489 = {}, d$$489[a$$883] = b$$790);
    c$$654 || (c$$654 = {});
    if (!d$$489) {
      return this;
    }
    d$$489 instanceof o$$42 && (d$$489 = d$$489.attributes);
    if (c$$654.unset) {
      for (e$$413 in d$$489) {
        d$$489[e$$413] = void 0;
      }
    }
    if (!this._validate(d$$489, c$$654)) {
      return !1;
    }
    this.idAttribute in d$$489 && (this.id = d$$489[this.idAttribute]);
    b$$790 = c$$654.changes = {};
    var h$$193 = this.attributes;
    var g$$236 = this._escapedAttributes;
    var j$$129 = this._previousAttributes || {};
    for (e$$413 in d$$489) {
      a$$883 = d$$489[e$$413];
      if (!f$$232.isEqual(h$$193[e$$413], a$$883) || c$$654.unset && f$$232.has(h$$193, e$$413)) {
        delete g$$236[e$$413], (c$$654.silent ? this._silent : b$$790)[e$$413] = !0;
      }
      c$$654.unset ? delete h$$193[e$$413] : h$$193[e$$413] = a$$883;
      !f$$232.isEqual(j$$129[e$$413], a$$883) || f$$232.has(h$$193, e$$413) != f$$232.has(j$$129, e$$413) ? (this.changed[e$$413] = a$$883, c$$654.silent || (this._pending[e$$413] = !0)) : (delete this.changed[e$$413], delete this._pending[e$$413]);
    }
    c$$654.silent || this.change(c$$654);
    return this;
  }, unset:function(a$$884, b$$791) {
    (b$$791 || (b$$791 = {})).unset = !0;
    return this.set(a$$884, null, b$$791);
  }, clear:function(a$$885) {
    (a$$885 || (a$$885 = {})).unset = !0;
    return this.set(f$$232.clone(this.attributes), a$$885);
  }, fetch:function(a$$886) {
    a$$886 = a$$886 ? f$$232.clone(a$$886) : {};
    var b$$792 = this;
    var c$$655 = a$$886.success;
    a$$886.success = function(d$$490, e$$414, f$$235) {
      if (!b$$792.set(b$$792.parse(d$$490, f$$235), a$$886)) {
        return !1;
      }
      c$$655 && c$$655(b$$792, d$$490);
    };
    a$$886.error = g$$232.wrapError(a$$886.error, b$$792, a$$886);
    return (this.sync || g$$232.sync).call(this, "read", this, a$$886);
  }, save:function(a$$887, b$$793, c$$656) {
    var d$$491;
    var e$$415;
    f$$232.isObject(a$$887) || null == a$$887 ? (d$$491 = a$$887, c$$656 = b$$793) : (d$$491 = {}, d$$491[a$$887] = b$$793);
    c$$656 = c$$656 ? f$$232.clone(c$$656) : {};
    if (c$$656.wait) {
      if (!this._validate(d$$491, c$$656)) {
        return !1;
      }
      e$$415 = f$$232.clone(this.attributes);
    }
    a$$887 = f$$232.extend({}, c$$656, {silent:!0});
    if (d$$491 && !this.set(d$$491, c$$656.wait ? a$$887 : c$$656)) {
      return !1;
    }
    var h$$194 = this;
    var i$$242 = c$$656.success;
    c$$656.success = function(a$$888, b$$794, e$$416) {
      b$$794 = h$$194.parse(a$$888, e$$416);
      if (c$$656.wait) {
        delete c$$656.wait;
        b$$794 = f$$232.extend(d$$491 || {}, b$$794);
      }
      if (!h$$194.set(b$$794, c$$656)) {
        return false;
      }
      i$$242 ? i$$242(h$$194, a$$888) : h$$194.trigger("sync", h$$194, a$$888, c$$656);
    };
    c$$656.error = g$$232.wrapError(c$$656.error, h$$194, c$$656);
    b$$793 = this.isNew() ? "create" : "update";
    b$$793 = (this.sync || g$$232.sync).call(this, b$$793, this, c$$656);
    c$$656.wait && this.set(e$$415, a$$887);
    return b$$793;
  }, destroy:function(a$$889) {
    function d$$492() {
      b$$795.trigger("destroy", b$$795, b$$795.collection, a$$889);
    }
    a$$889 = a$$889 ? f$$232.clone(a$$889) : {};
    var b$$795 = this;
    var c$$657 = a$$889.success;
    if (this.isNew()) {
      return d$$492(), !1;
    }
    a$$889.success = function(e$$418) {
      a$$889.wait && d$$492();
      c$$657 ? c$$657(b$$795, e$$418) : b$$795.trigger("sync", b$$795, e$$418, a$$889);
    };
    a$$889.error = g$$232.wrapError(a$$889.error, b$$795, a$$889);
    var e$$417 = (this.sync || g$$232.sync).call(this, "delete", this, a$$889);
    a$$889.wait || d$$492();
    return e$$417;
  }, url:function() {
    var a$$890 = n$$110(this, "urlRoot") || n$$110(this.collection, "url") || t$$33();
    return this.isNew() ? a$$890 : a$$890 + ("/" == a$$890.charAt(a$$890.length - 1) ? "" : "/") + encodeURIComponent(this.id);
  }, parse:function(a$$891) {
    return a$$891;
  }, clone:function() {
    return new this.constructor(this.attributes);
  }, isNew:function() {
    return null == this.id;
  }, change:function(a$$892) {
    a$$892 || (a$$892 = {});
    var b$$796 = this._changing;
    this._changing = !0;
    var c$$658;
    for (c$$658 in this._silent) {
      this._pending[c$$658] = !0;
    }
    var d$$493 = f$$232.extend({}, a$$892.changes, this._silent);
    this._silent = {};
    for (c$$658 in d$$493) {
      this.trigger("change:" + c$$658, this, this.get(c$$658), a$$892);
    }
    if (b$$796) {
      return this;
    }
    for (;!f$$232.isEmpty(this._pending);) {
      this._pending = {};
      this.trigger("change", this, a$$892);
      for (c$$658 in this.changed) {
        !this._pending[c$$658] && !this._silent[c$$658] && delete this.changed[c$$658];
      }
      this._previousAttributes = f$$232.clone(this.attributes);
    }
    this._changing = !1;
    return this;
  }, hasChanged:function(a$$893) {
    return !arguments.length ? !f$$232.isEmpty(this.changed) : f$$232.has(this.changed, a$$893);
  }, changedAttributes:function(a$$894) {
    if (!a$$894) {
      return this.hasChanged() ? f$$232.clone(this.changed) : !1;
    }
    var b$$797;
    var c$$659 = !1;
    var d$$494 = this._previousAttributes;
    var e$$419;
    for (e$$419 in a$$894) {
      if (!f$$232.isEqual(d$$494[e$$419], b$$797 = a$$894[e$$419])) {
        (c$$659 || (c$$659 = {}))[e$$419] = b$$797;
      }
    }
    return c$$659;
  }, previous:function(a$$895) {
    return !arguments.length || !this._previousAttributes ? null : this._previousAttributes[a$$895];
  }, previousAttributes:function() {
    return f$$232.clone(this._previousAttributes);
  }, isValid:function() {
    return !this.validate(this.attributes);
  }, _validate:function(a$$896, b$$798) {
    if (b$$798.silent || !this.validate) {
      return !0;
    }
    a$$896 = f$$232.extend({}, this.attributes, a$$896);
    var c$$660 = this.validate(a$$896, b$$798);
    if (!c$$660) {
      return !0;
    }
    b$$798 && b$$798.error ? b$$798.error(this, c$$660, b$$798) : this.trigger("error", this, c$$660, b$$798);
    return !1;
  }});
  var r$$32 = g$$232.Collection = function(a$$897, b$$799) {
    b$$799 || (b$$799 = {});
    b$$799.model && (this.model = b$$799.model);
    b$$799.comparator && (this.comparator = b$$799.comparator);
    this._reset();
    this.initialize.apply(this, arguments);
    a$$897 && this.reset(a$$897, {silent:!0, parse:b$$799.parse});
  };
  f$$232.extend(r$$32.prototype, k$$93, {model:o$$42, initialize:function() {
  }, toJSON:function(a$$898) {
    return this.map(function(b$$800) {
      return b$$800.toJSON(a$$898);
    });
  }, add:function(a$$899, b$$801) {
    var c$$661;
    var d$$495;
    var e$$420;
    var g$$237;
    var i$$243;
    var j$$130 = {};
    var k$$94 = {};
    var l$$98 = [];
    b$$801 || (b$$801 = {});
    a$$899 = f$$232.isArray(a$$899) ? a$$899.slice() : [a$$899];
    c$$661 = 0;
    d$$495 = a$$899.length;
    for (;c$$661 < d$$495;c$$661++) {
      if (!(e$$420 = a$$899[c$$661] = this._prepareModel(a$$899[c$$661], b$$801))) {
        throw Error("Can't add an invalid model to a collection");
      }
      g$$237 = e$$420.cid;
      i$$243 = e$$420.id;
      j$$130[g$$237] || this._byCid[g$$237] || null != i$$243 && (k$$94[i$$243] || this._byId[i$$243]) ? l$$98.push(c$$661) : j$$130[g$$237] = k$$94[i$$243] = e$$420;
    }
    c$$661 = l$$98.length;
    for (;c$$661--;) {
      a$$899.splice(l$$98[c$$661], 1);
    }
    c$$661 = 0;
    d$$495 = a$$899.length;
    for (;c$$661 < d$$495;c$$661++) {
      (e$$420 = a$$899[c$$661]).on("all", this._onModelEvent, this), this._byCid[e$$420.cid] = e$$420, null != e$$420.id && (this._byId[e$$420.id] = e$$420);
    }
    this.length += d$$495;
    A$$7.apply(this.models, [null != b$$801.at ? b$$801.at : this.models.length, 0].concat(a$$899));
    this.comparator && this.sort({silent:!0});
    if (b$$801.silent) {
      return this;
    }
    c$$661 = 0;
    d$$495 = this.models.length;
    for (;c$$661 < d$$495;c$$661++) {
      if (j$$130[(e$$420 = this.models[c$$661]).cid]) {
        b$$801.index = c$$661, e$$420.trigger("add", e$$420, this, b$$801);
      }
    }
    return this;
  }, remove:function(a$$900, b$$802) {
    var c$$662;
    var d$$496;
    var e$$421;
    var g$$238;
    b$$802 || (b$$802 = {});
    a$$900 = f$$232.isArray(a$$900) ? a$$900.slice() : [a$$900];
    c$$662 = 0;
    d$$496 = a$$900.length;
    for (;c$$662 < d$$496;c$$662++) {
      if (g$$238 = this.getByCid(a$$900[c$$662]) || this.get(a$$900[c$$662])) {
        delete this._byId[g$$238.id], delete this._byCid[g$$238.cid], e$$421 = this.indexOf(g$$238), this.models.splice(e$$421, 1), this.length--, b$$802.silent || (b$$802.index = e$$421, g$$238.trigger("remove", g$$238, this, b$$802)), this._removeReference(g$$238);
      }
    }
    return this;
  }, push:function(a$$901, b$$803) {
    a$$901 = this._prepareModel(a$$901, b$$803);
    this.add(a$$901, b$$803);
    return a$$901;
  }, pop:function(a$$902) {
    var b$$804 = this.at(this.length - 1);
    this.remove(b$$804, a$$902);
    return b$$804;
  }, unshift:function(a$$903, b$$805) {
    a$$903 = this._prepareModel(a$$903, b$$805);
    this.add(a$$903, f$$232.extend({at:0}, b$$805));
    return a$$903;
  }, shift:function(a$$904) {
    var b$$806 = this.at(0);
    this.remove(b$$806, a$$904);
    return b$$806;
  }, get:function(a$$905) {
    return null == a$$905 ? void 0 : this._byId[null != a$$905.id ? a$$905.id : a$$905];
  }, getByCid:function(a$$906) {
    return a$$906 && this._byCid[a$$906.cid || a$$906];
  }, at:function(a$$907) {
    return this.models[a$$907];
  }, where:function(a$$908) {
    return f$$232.isEmpty(a$$908) ? [] : this.filter(function(b$$807) {
      var c$$663;
      for (c$$663 in a$$908) {
        if (a$$908[c$$663] !== b$$807.get(c$$663)) {
          return !1;
        }
      }
      return !0;
    });
  }, sort:function(a$$909) {
    a$$909 || (a$$909 = {});
    if (!this.comparator) {
      throw Error("Cannot sort a set without a comparator");
    }
    var b$$808 = f$$232.bind(this.comparator, this);
    1 == this.comparator.length ? this.models = this.sortBy(b$$808) : this.models.sort(b$$808);
    a$$909.silent || this.trigger("reset", this, a$$909);
    return this;
  }, pluck:function(a$$910) {
    return f$$232.map(this.models, function(b$$809) {
      return b$$809.get(a$$910);
    });
  }, reset:function(a$$911, b$$810) {
    a$$911 || (a$$911 = []);
    b$$810 || (b$$810 = {});
    var c$$664 = 0;
    var d$$497 = this.models.length;
    for (;c$$664 < d$$497;c$$664++) {
      this._removeReference(this.models[c$$664]);
    }
    this._reset();
    this.add(a$$911, f$$232.extend({silent:!0}, b$$810));
    b$$810.silent || this.trigger("reset", this, b$$810);
    return this;
  }, fetch:function(a$$912) {
    a$$912 = a$$912 ? f$$232.clone(a$$912) : {};
    void 0 === a$$912.parse && (a$$912.parse = !0);
    var b$$811 = this;
    var c$$665 = a$$912.success;
    a$$912.success = function(d$$498, e$$422, f$$236) {
      b$$811[a$$912.add ? "add" : "reset"](b$$811.parse(d$$498, f$$236), a$$912);
      c$$665 && c$$665(b$$811, d$$498);
    };
    a$$912.error = g$$232.wrapError(a$$912.error, b$$811, a$$912);
    return (this.sync || g$$232.sync).call(this, "read", this, a$$912);
  }, create:function(a$$913, b$$812) {
    var c$$666 = this;
    b$$812 = b$$812 ? f$$232.clone(b$$812) : {};
    a$$913 = this._prepareModel(a$$913, b$$812);
    if (!a$$913) {
      return !1;
    }
    b$$812.wait || c$$666.add(a$$913, b$$812);
    var d$$499 = b$$812.success;
    b$$812.success = function(e$$423, f$$237) {
      b$$812.wait && c$$666.add(e$$423, b$$812);
      d$$499 ? d$$499(e$$423, f$$237) : e$$423.trigger("sync", a$$913, f$$237, b$$812);
    };
    a$$913.save(null, b$$812);
    return a$$913;
  }, parse:function(a$$914) {
    return a$$914;
  }, chain:function() {
    return f$$232(this.models).chain();
  }, _reset:function() {
    this.length = 0;
    this.models = [];
    this._byId = {};
    this._byCid = {};
  }, _prepareModel:function(a$$915, b$$813) {
    b$$813 || (b$$813 = {});
    a$$915 instanceof o$$42 ? a$$915.collection || (a$$915.collection = this) : (b$$813.collection = this, a$$915 = new this.model(a$$915, b$$813), a$$915._validate(a$$915.attributes, b$$813) || (a$$915 = !1));
    return a$$915;
  }, _removeReference:function(a$$916) {
    this == a$$916.collection && delete a$$916.collection;
    a$$916.off("all", this._onModelEvent, this);
  }, _onModelEvent:function(a$$917, b$$814, c$$667, d$$500) {
    ("add" == a$$917 || "remove" == a$$917) && c$$667 != this || ("destroy" == a$$917 && this.remove(b$$814, d$$500), b$$814 && a$$917 === "change:" + b$$814.idAttribute && (delete this._byId[b$$814.previous(b$$814.idAttribute)], this._byId[b$$814.id] = b$$814), this.trigger.apply(this, arguments));
  }});
  f$$232.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","), function(a$$918) {
    r$$32.prototype[a$$918] = function() {
      return f$$232[a$$918].apply(f$$232, [this.models].concat(f$$232.toArray(arguments)));
    };
  });
  var u$$20 = g$$232.Router = function(a$$919) {
    a$$919 || (a$$919 = {});
    a$$919.routes && (this.routes = a$$919.routes);
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };
  var B$$7 = /:\w+/g;
  var C$$6 = /\*\w+/g;
  var D$$6 = /[-[\]{}()+?.,\\^$|#\s]/g;
  f$$232.extend(u$$20.prototype, k$$93, {initialize:function() {
  }, route:function(a$$920, b$$815, c$$668) {
    g$$232.history || (g$$232.history = new m$$64);
    f$$232.isRegExp(a$$920) || (a$$920 = this._routeToRegExp(a$$920));
    c$$668 || (c$$668 = this[b$$815]);
    g$$232.history.route(a$$920, f$$232.bind(function(d$$501) {
      d$$501 = this._extractParameters(a$$920, d$$501);
      c$$668 && c$$668.apply(this, d$$501);
      this.trigger.apply(this, ["route:" + b$$815].concat(d$$501));
      g$$232.history.trigger("route", this, b$$815, d$$501);
    }, this));
    return this;
  }, navigate:function(a$$921, b$$816) {
    g$$232.history.navigate(a$$921, b$$816);
  }, _bindRoutes:function() {
    if (this.routes) {
      var a$$922 = [];
      var b$$817;
      for (b$$817 in this.routes) {
        a$$922.unshift([b$$817, this.routes[b$$817]]);
      }
      b$$817 = 0;
      var c$$669 = a$$922.length;
      for (;b$$817 < c$$669;b$$817++) {
        this.route(a$$922[b$$817][0], a$$922[b$$817][1], this[a$$922[b$$817][1]]);
      }
    }
  }, _routeToRegExp:function(a$$923) {
    a$$923 = a$$923.replace(D$$6, "\\$&").replace(B$$7, "([^/]+)").replace(C$$6, "(.*?)");
    return RegExp("^" + a$$923 + "$");
  }, _extractParameters:function(a$$924, b$$818) {
    return a$$924.exec(b$$818).slice(1);
  }});
  var m$$64 = g$$232.History = function() {
    this.handlers = [];
    f$$232.bindAll(this, "checkUrl");
  };
  var s$$36 = /^[#\/]/;
  var E$$6 = /msie [\w.]+/;
  m$$64.started = !1;
  f$$232.extend(m$$64.prototype, k$$93, {interval:50, getHash:function(a$$925) {
    return (a$$925 = (a$$925 ? a$$925.location : window.location).href.match(/#(.*)$/)) ? a$$925[1] : "";
  }, getFragment:function(a$$926, b$$819) {
    if (null == a$$926) {
      if (this._hasPushState || b$$819) {
        a$$926 = window.location.pathname;
        var c$$670 = window.location.search;
        c$$670 && (a$$926 += c$$670);
      } else {
        a$$926 = this.getHash();
      }
    }
    a$$926.indexOf(this.options.root) || (a$$926 = a$$926.substr(this.options.root.length));
    return a$$926.replace(s$$36, "");
  }, start:function(a$$927) {
    if (m$$64.started) {
      throw Error("Backbone.history has already been started");
    }
    m$$64.started = !0;
    this.options = f$$232.extend({}, {root:"/"}, this.options, a$$927);
    this._wantsHashChange = !1 !== this.options.hashChange;
    this._wantsPushState = !!this.options.pushState;
    this._hasPushState = !(!this.options.pushState || !window.history || !window.history.pushState);
    a$$927 = this.getFragment();
    var b$$820 = document.documentMode;
    if (b$$820 = E$$6.exec(navigator.userAgent.toLowerCase()) && (!b$$820 || 7 >= b$$820)) {
      this.iframe = i$$241('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(a$$927);
    }
    this._hasPushState ? i$$241(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !b$$820 ? i$$241(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval));
    this.fragment = a$$927;
    a$$927 = window.location;
    b$$820 = a$$927.pathname == this.options.root;
    if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !b$$820) {
      return this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + "#" + this.fragment), !0;
    }
    this._wantsPushState && this._hasPushState && b$$820 && a$$927.hash && (this.fragment = this.getHash().replace(s$$36, ""), window.history.replaceState({}, document.title, a$$927.protocol + "//" + a$$927.host + this.options.root + this.fragment));
    if (!this.options.silent) {
      return this.loadUrl();
    }
  }, stop:function() {
    i$$241(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl);
    clearInterval(this._checkUrlInterval);
    m$$64.started = !1;
  }, route:function(a$$928, b$$821) {
    this.handlers.unshift({route:a$$928, callback:b$$821});
  }, checkUrl:function() {
    var a$$929 = this.getFragment();
    a$$929 == this.fragment && this.iframe && (a$$929 = this.getFragment(this.getHash(this.iframe)));
    if (a$$929 == this.fragment) {
      return !1;
    }
    this.iframe && this.navigate(a$$929);
    this.loadUrl() || this.loadUrl(this.getHash());
  }, loadUrl:function(a$$930) {
    var b$$822 = this.fragment = this.getFragment(a$$930);
    return f$$232.any(this.handlers, function(a$$931) {
      if (a$$931.route.test(b$$822)) {
        return a$$931.callback(b$$822), !0;
      }
    });
  }, navigate:function(a$$932, b$$823) {
    if (!m$$64.started) {
      return !1;
    }
    if (!b$$823 || !0 === b$$823) {
      b$$823 = {trigger:b$$823};
    }
    var c$$671 = (a$$932 || "").replace(s$$36, "");
    this.fragment != c$$671 && (this._hasPushState ? (0 != c$$671.indexOf(this.options.root) && (c$$671 = this.options.root + c$$671), this.fragment = c$$671, window.history[b$$823.replace ? "replaceState" : "pushState"]({}, document.title, c$$671)) : this._wantsHashChange ? (this.fragment = c$$671, this._updateHash(window.location, c$$671, b$$823.replace), this.iframe && c$$671 != this.getFragment(this.getHash(this.iframe)) && (b$$823.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, 
    c$$671, b$$823.replace))) : window.location.assign(this.options.root + a$$932), b$$823.trigger && this.loadUrl(a$$932));
  }, _updateHash:function(a$$933, b$$824, c$$672) {
    c$$672 ? a$$933.replace(a$$933.toString().replace(/(javascript:|#).*$/, "") + "#" + b$$824) : a$$933.hash = b$$824;
  }});
  var v$$15 = g$$232.View = function(a$$934) {
    this.cid = f$$232.uniqueId("view");
    this._configure(a$$934 || {});
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };
  var F$$6 = /^(\S+)\s*(.*)$/;
  var w$$21 = "model,collection,el,id,attributes,className,tagName".split(",");
  f$$232.extend(v$$15.prototype, k$$93, {tagName:"div", $:function(a$$935) {
    return this.$el.find(a$$935);
  }, initialize:function() {
  }, render:function() {
    return this;
  }, remove:function() {
    this.$el.remove();
    return this;
  }, make:function(a$$936, b$$825, c$$673) {
    a$$936 = document.createElement(a$$936);
    b$$825 && i$$241(a$$936).attr(b$$825);
    c$$673 && i$$241(a$$936).html(c$$673);
    return a$$936;
  }, setElement:function(a$$937, b$$826) {
    this.$el && this.undelegateEvents();
    this.$el = a$$937 instanceof i$$241 ? a$$937 : i$$241(a$$937);
    this.el = this.$el[0];
    !1 !== b$$826 && this.delegateEvents();
    return this;
  }, delegateEvents:function(a$$938) {
    if (a$$938 || (a$$938 = n$$110(this, "events"))) {
      this.undelegateEvents();
      var b$$827;
      for (b$$827 in a$$938) {
        var c$$674 = a$$938[b$$827];
        f$$232.isFunction(c$$674) || (c$$674 = this[a$$938[b$$827]]);
        if (!c$$674) {
          throw Error('Method "' + a$$938[b$$827] + '" does not exist');
        }
        var d$$502 = b$$827.match(F$$6);
        var e$$424 = d$$502[1];
        d$$502 = d$$502[2];
        c$$674 = f$$232.bind(c$$674, this);
        e$$424 = e$$424 + (".delegateEvents" + this.cid);
        "" === d$$502 ? this.$el.bind(e$$424, c$$674) : this.$el.delegate(d$$502, e$$424, c$$674);
      }
    }
  }, undelegateEvents:function() {
    this.$el.unbind(".delegateEvents" + this.cid);
  }, _configure:function(a$$939) {
    this.options && (a$$939 = f$$232.extend({}, this.options, a$$939));
    var b$$828 = 0;
    var c$$675 = w$$21.length;
    for (;b$$828 < c$$675;b$$828++) {
      var d$$503 = w$$21[b$$828];
      a$$939[d$$503] && (this[d$$503] = a$$939[d$$503]);
    }
    this.options = a$$939;
  }, _ensureElement:function() {
    if (this.el) {
      this.setElement(this.el, !1);
    } else {
      var a$$940 = n$$110(this, "attributes") || {};
      this.id && (a$$940.id = this.id);
      this.className && (a$$940["class"] = this.className);
      this.setElement(this.make(this.tagName, a$$940), !1);
    }
  }});
  o$$42.extend = r$$32.extend = u$$20.extend = v$$15.extend = function(a$$941, b$$829) {
    var c$$676 = G$$5(this, a$$941, b$$829);
    c$$676.extend = this.extend;
    return c$$676;
  };
  var H$$5 = {create:"POST", update:"PUT", "delete":"DELETE", read:"GET"};
  g$$232.sync = function(a$$942, b$$830, c$$677) {
    var d$$504 = H$$5[a$$942];
    c$$677 || (c$$677 = {});
    var e$$425 = {type:d$$504, dataType:"json"};
    c$$677.url || (e$$425.url = n$$110(b$$830, "url") || t$$33());
    if (!c$$677.data && b$$830 && ("create" == a$$942 || "update" == a$$942)) {
      e$$425.contentType = "application/json", e$$425.data = JSON.stringify(b$$830.toJSON());
    }
    g$$232.emulateJSON && (e$$425.contentType = "application/x-www-form-urlencoded", e$$425.data = e$$425.data ? {model:e$$425.data} : {});
    if (g$$232.emulateHTTP && ("PUT" === d$$504 || "DELETE" === d$$504)) {
      g$$232.emulateJSON && (e$$425.data._method = d$$504), e$$425.type = "POST", e$$425.beforeSend = function(a$$943) {
        a$$943.setRequestHeader("X-HTTP-Method-Override", d$$504);
      };
    }
    "GET" !== e$$425.type && !g$$232.emulateJSON && (e$$425.processData = !1);
    return i$$241.ajax(f$$232.extend(e$$425, c$$677));
  };
  g$$232.wrapError = function(a$$944, b$$831, c$$678) {
    return function(d$$505, e$$426) {
      e$$426 = d$$505 === b$$831 ? e$$426 : d$$505;
      a$$944 ? a$$944(b$$831, e$$426, c$$678) : b$$831.trigger("error", b$$831, e$$426, c$$678);
    };
  };
}).call(this);
document.body.onload = init

JAM.stopProfile('load');
