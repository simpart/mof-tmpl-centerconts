# mofron-tmpl-simpleconts
Simple Contents Template for [moforn]((https://github.com/simpart/mofron)).<br>

# Install
```bash
mofron install mofron mofron-tmpl-simpleconts
```
# Sample
```javascript
require('mofron');
let Text   = require('mofron-comp-text');
let Simple = require('mofron-tmpl-simpleconts');

new Simple({
    param    : 'Simple Contents',
    contents : [new mofron.Param('Sub Title 1', new Text('Contents 1')),
                new mofron.Param('Sub Title 2', new Text('Contents 2'))],
    visible  : true
});
```
