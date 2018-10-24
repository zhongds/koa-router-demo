const Router = require('koa-router');

const router = new Router({
    prefix: '/api'
});

router.get('/ceph/pools', (ctx, next) => {
    ctx.body = [
        {
            "id": 1,
            "name": "pool-test",
            "size": "10G",
            "createtime": "2018-01-01",
            "group": "monitor"
        },
        {
            "id": 2,
            "name": "kubernetes",
            "size": "50G",
            "createtime": "2018-01-02",
            "group": "vip"
        }
    ]
});

router.post('/ceph/createpool', (ctx, next) => {
    ctx.body = {
        "status": 200,
        "message": "pool create success."
    }
});

module.exports = router
