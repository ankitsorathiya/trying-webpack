class Tree {
    constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
        this.size = size;
        this.leaves = leaves;
        this.leafColor = null;
    }

    changeSeason(season) {
        this.leafColor = this.leaves[season];
        if (season === 'spring') {
            this.size += 1;
        }
    }

}

export class Maple extends Tree {
    constructor(syrupQty = 15, size, leaves) {
        super(size, leaves);
        this.syrupQty = syrupQty;
    }

    changeSeason(season) {
        super.changeSeason(season);
        if (season === 'spring') {
            this.syrupQty += 1;
        }
    }

    gatherSyrup() {
        this.syrupQty -= 3;
    }
    getSyrunQty(){
        return this.syrupQty;
    }
}

function TreeEs5(size, leaves) {
    this.size = size ? size : 10;
    this.leaves = leaves ? leaves : {}
}

TreeEs5.prototype.changeSeason = function (season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
        this.size += 1;
    }
}

export function MapleES5(syrupQty, size, leaves) {
    TreeEs5.call(this, size, leaves);
    this.syrupQty = syrupQty;
}

MapleES5.prototype = Object.create(TreeEs5.prototype);
MapleES5.prototype.constructor = MapleES5;

MapleES5.prototype.changeSeason = function (season) {
    TreeEs5.prototype.changeSeason.call(this, season);
    if (season === 'spring') {
        this.syrupQty += 1;
    }
};
MapleES5.prototype.gatherSyrup = function () {
    this.syrupQty -= 3;
}
MapleES5.prototype.getSyrunQty=function(){
    return this.season;
}
