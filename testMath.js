const assert  = require ('chai').assert;
const MathSet = require ('./set');

describe ('test math set', () => {
    let Mathset = new MathSet([1,'chung',3]);
    
    it ('test get Force', () => {
        assert.equal(Mathset.getForce(),3);
    });
    
    it ('test union math set', () => {
        let Mathset1     = new MathSet([8,'chung',3]);
        let Mathset2     = new MathSet([1,2,4,5]);
        let UnionMathset = Mathset2.Union(Mathset1);

        assert.instanceOf(UnionMathset ,MathSet);
        assert.equal(UnionMathset.getForce(), 7);
    });

});