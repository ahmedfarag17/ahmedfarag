var tmax_optionsGlobal = {
  repeat: -1,
  repeatDelay: 0.65,
  yoyo: true
};

CSSPlugin.useSVGTransformAttr = true;

var tl = new TimelineMax(tmax_optionsGlobal),
    path = 'svg *',
    stagger_val = 0.0125,
    duration = 0.55;

tl.repeat(0)

$.each($(path), function(i, el) {
  tl.set($(this), {
    x: '+=' + getRandom(100, 500),
    y: '+=' + getRandom(-500, 100),
    opacity: 0,
    scale: 0,
    rotation: '+=' + getRandom(-720, 720),
  });
});

var stagger_opts_to = {
  x: 0,
  y: 0,
  opacity: 1,
  scale: 1,
  rotation: 0,
  ease: Power4.easeInOut
};

tl.staggerTo(path, duration, stagger_opts_to, stagger_val);

var $svg = $('svg');
$svg.hover(
  function() {
    tl.timeScale(0.15);
  },
  function() {
    tl.timeScale(1);
  });

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
