import './lib/typefill.min.js';
import './lib/typeparticle.min.js';

const title = new TypeFill('title', 5000);
const implementer = new TypeParticle('implementer', 5);

title.setHandleStop(implementer.start);

title.start();
