import './lib/typefill.min.js';
import './lib/typeparticle.min.js';

new TypeFill('title', 5000).start();
const implementer = new TypeParticle('implementer', 5);

setTimeout(() => {
  implementer.start();
}, 5000);
