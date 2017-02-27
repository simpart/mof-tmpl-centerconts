/**
 * @file mofron-tmpl-simpleconts/index.js
 * @author simpart
 */
require('mofron-tmpl-centerconts');
require('mofron-comp-heading');
require('mofron-comp-heading-radius');
require('mofron-layout-margin');

mofron.tmpl.SimpleConts = class extends mofron.tmpl.CenterConts {
    
    constructor (app_nm) {
        try {
            super(app_nm);
            this.name('SimpleConts');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initTmplConts (prm) {
        try {
            super.initTmplConts(prm);
            this.getContsPnl().addLayout(new mofron.layout.Padding('top',20));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents(conts) {
        try {
            if (undefined === conts) {
                /* getter */
                return this.getContsPnl().child();
            }
            /* setter */
            if ('object' === typeof conts) {
                if ( (undefined === conts[0]) &&
                     (true === mofron.func.isObject(conts, 'Param')) ) {
                    this.addContents(
                        conts.getParam()[0],
                        conts.getParam()[1]
                    );
                } else {
                    for (var idx in conts) {
                        this.contents(conts[idx]);
                    }
                }
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    addContents (ttl, cnt) {
        try {
            if ('string' !== typeof ttl) {
                throw new Error('invalid parameter');
            }
            if ((null === cnt) || 'object' !== typeof cnt) {
                throw new Error('invalid parameter');
            }
            var hdg_cls = this.theme().getComp('Heading');
            var heading = (null === hdg_cls) ? mofron.comp.heading.Radius : hdg_cls;
            super.addChild(
                new mofron.Component({
                    child  : [new heading(ttl),
                              new mofron.Component({
                                  layout : new mofron.layout.HrzCenter(90),
                                  child  : cnt
                              })]
                })
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.tmpl.SimpleConts;
