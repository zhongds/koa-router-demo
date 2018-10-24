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

router.post('/api/kubernetes/storageclass', (ctx, next) => {
    ctx.body = [
        {
            "id": 1,
            "scnmae": "test-sc",
            "scfstype": "ext4",
            "createtime": "2018-01-03",
            "cephcluster": "ceph-test",
            "k8scluster": "tw06m1",
            "pool": "kubernetes",
            "group": "monitor"
        },
        {
            "id": 2,
            "scnmae": "account-sc",
            "scfstype": "ext4",
            "createtime": "2018-01-03",
            "k8scluster": "tw06m1",
            "cephcluster": "ceph-test",
            "pool": "kubernetes",
            "group": "account"
        },
    ]
});




module.exports = router
