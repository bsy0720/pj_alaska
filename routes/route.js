var express = require('express');
var router = express.Router();

const {
    check,
    validationResult
} = require('express-validator');

const db = require('./../db.js');

var expressLayouts = require('express-ejs-layouts');
// const { Router } = require('express');

router.use(expressLayouts);
//route 라우트
router.get('/', (req, res) => {
    db.getAllMemos((rows) => {
        res.render('main', {
            rows: rows
        })
    })
})
router.get('/login', (req, res) => {
    res.render('./sub/login');
})
router.get('/join', (req, res) => {
    res.render('./sub/mem1');
})
router.get('/join1', (req, res) => {
    res.render('./sub/mem2');
})
router.get('/intro', (req, res) => {
    res.render('./sub/sub_intro');
})
router.get('/intro_all', (req, res) => {
    res.render('./sub/alaska_all');
})
router.get('/intro_noted', (req, res) => {
    res.render('./sub/sub_intro_noted');
})
router.get('/weather_trip', (req, res) => {
    res.render('./sub/sub_weather_trip');
})
router.get('/partner_trip', (req, res) => {
    res.render('./sub/sub_partner_trip');
})
router.get('/thema_trip', (req, res) => {
    res.render('./sub/sub_thema_trip');
})
router.get('/info_trip', (req, res) => {
    res.render('./sub/alaska_trip_info');
})


// 공지사항 부르기
router.get('/notice', (req, res) => {
    db.getAllNotice((rows) => {
        res.render('./sub/alaska_notice', {
            rows: rows
        })
    });
});


//공지사항 글쓰기 부르기
router.get('/alaska_notice_write', (req, res) => {
    db.getAllNotice((rows) => {
        res.render('./sub/alaska_notice_write', {
            rows: rows
        });
    });
});

// 공지사항 작성하는거 
router.post('/aNotice',
    [check('content').isLength({
        min: 1,
        max: 6000
    })],
    function (req, res, next) {
        let errs = validationResult(req);
        console.log(errs);
        if (errs['errors'].length > 0) {
            res.render('alaska_notice_write', {
                errs: errs['errors']
            });
        } else {
            let param = JSON.parse(JSON.stringify(req.body));
            let writer = param['writer'];
            let pass = param['pass'];
            let title = param['title'];
            let content = param['content'];
            db.insertNotice(writer, pass, title, content, () => {
                res.redirect('/notice');
            });
        }
    });

//공지사항 상세페이지
router.get('/notice_page', (req, res) => {
    let id = req.query.id;
    db.getNoticeById(id, (row) => {
        if (typeof id == 'undefined' || row.length <= 0) {
            res.status(404).json({
                error: 'undefined memo'
            })

        } else {
            res.render('./sub/alaska_notice_page', {
                row: row[0]
            })
        }
    })
});

// 수정페이지(공지사항)
router.get('/notice_NewWrite', (req, res) => {
    res.render('./sub/alaska_notice_NewWrite');
});

// 수정페이지로 넘어가는거(공지사항)
router.get('/NewNotice', (req, res) => {
    let id = req.query.id;
    db.getNoticeById(id, (row) => {
        if (typeof id == 'undefined' || row.length <= 0) {
            res.status(404).json({
                error: 'undefined memo'
            });
        } else {
            res.render('./sub/alaska_notice_NewWrite', {
                row: row[0]
            });
        }
    });
});

//수정한거 보내기(공지사항)
router.post('/NewNotice', [check('content').isLength({
    min: 1,
    max: 6000
})], (req, res) => {
    let errs = validationResult(req);
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param['id'];
    let writer = param['writer'];
    let pass = param['pass'];
    let title = param['title'];
    let content = param['content'];
    if (errs['errors'].length > 0) {
        db.updateNoticeById(id, (row) => {
            res.render('alaska_notice_NewWrite', {
                row: row[0],
                errs: errs['errors']
            })
        })
    } else {
        db.updateNoticeById(id, writer, pass, title, content, () => {
            res.redirect('/notice');
        })
    }
});

// 공지사항 삭제
router.get('/deleteNotice', (req, res) => {
    let id = req.query.id;
    db.deleteNoticeById(id, () => {
        res.redirect('/notice');
    });
});







// 여행문의 부르는거
router.get('/alaska_Q&A', (req, res) => {
    db.getAllQna((rows) => {
        res.render('./sub/alaska_Q&A', {
            rows: rows
        });
    });
});

// 여행문의 글쓰기 부르는거
router.get('/alaska_Q&A_write', (req, res) => {
    db.getAllQna((rows) => {
        res.render('./sub/alaska_Q&A_write', {
            rows: rows
        });
    });
})

// 여행문의 작성하는거
router.post('/aQna',
    [check('content').isLength({
        min: 1,
        max: 3000
    })],
    function (req, res, next) {
        let errs = validationResult(req);
        console.log(errs);
        if (errs['errors'].length > 0) { //에러출력
            res.render('alaska_Q&A_write', {
                errs: errs['errors']
            });
        } else {
            let param = JSON.parse(JSON.stringify(req.body));
            let writer = param['writer'];
            let pass = param['pass'];
            let title = param['title'];
            let content = param['content'];
            db.insertQna(writer, pass, title, content, () => {
                res.redirect('/alaska_Q&A');
            });
        }
    });


// 여행문의 상세페이지 불러오는거
router.get('/qna_page', (req, res) => {
    let id = req.query.id;
    db.getQnaById(id, (row) => {
        if (typeof id == 'undefined' || row.length <= 0) {
            res.status(404).json({
                error: 'undefined alaska'
            })
        } else {
            res.render('./sub/alaska_Q&A_page', {
                row: row[0]
            });
        }
    })
});


//수정페이지(여행문의)
router.get('/Q&A_newWrite', (req, res) => {
    res.render('./sub/alaska_Q&A_newWrite');
});

//수정페이지로 넘어가는거
router.get('/newQna', (req, res) => {
    let id = req.query.id;
    db.getQnaById(id, (row) => { // 이쪽은 id값과 일치하는 row만 불러오는 id 값을 가지고오기
        if (typeof id == 'undefined' || row.length <= 0) {
            res.status(404).json({
                error: 'undefined memo'
            });
        } else {
            res.render('./sub/alaska_Q&A_newWrite', {
                row: row[0]
            });
        }
    });
});

//수정한거 보내기(여행문의)
router.post('/newQna', [check('content').isLength({
    min: 1,
    max: 3000
})], (req, res) => {
    let errs = validationResult(req);
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param['id'];
    let writer = param['writer'];
    let pass = param['pass'];
    let title = param['title'];
    let content = param['content'];
    if (errs['errors'].length > 0) {
        db.updateQnaById(id, (row) => {
            res.render('alaska_Q&A_newWrite', {
                row: row[0],
                errs: errs['errors']
            })
        })
    } else {
        db.updateQnaById(id, writer, pass, title, content, () => {
            res.redirect('/alaska_Q&A');
        })
    }
});


//여행문의 삭제
router.get('/deleteQna', (req, res) => {
    let id = req.query.id;
    db.deleteQnaById(id, () => {
        res.redirect('/alaska_Q&A');
    });
});






// 여행후기 목록페이지 부르기
router.get('/trip_review', (req, res) => {
    db.getAllReview((rows) => {
        res.render('./sub/alaska_trip_review', {
            rows: rows
        });
    });
});

// 여행후기 작성페이지 부르는거
router.get('/trip_review_write', (req, res) => {
    db.getAllReview((rows) => {
        res.render('./sub/alaska_trip_review_write', {
            rows: rows
        });
    });
});

// 여행후기 작성하는거
router.post('/aReview',
    [check('content').isLength({
        min: 1,
        max: 6000
    })],
    function (req, res, next) {
        let errs = validationResult(req);
        console.log(errs);
        if (errs['errors'].length > 0) {
            res.render('alaska_trip_review_write', {
                errs: errs['errors']
            });
        } else {
            let param = JSON.parse(JSON.stringify(req.body));
            let writer = param['writer'];
            let pass = param['pass'];
            let title = param['title'];
            let content = param['content'];
            db.insertReview(writer, pass, title, content, () => {
                res.redirect('/trip_review');
            });
        }
    });

//여행후기 상세페이지 불러오기
router.get('/trip_review_page', (req, res) => {
    let id = req.query.id;
    db.getReivewById(id, (row) => {
        if (typeof id == 'undefined' || row.length <= 0) {
            res.status(404).json({
                error: 'undefined alaska'
            })
        } else {
            res.render('./sub/alaska_trip_review_page', {
                row: row[0]
            });
        }
    })
});

// 수정하는 페이지(여행후기)
router.get('/review_Newwrite', (req, res) => {
    res.render('./sub/alaska_trip_review_Newwrite');
});

//수정페이지로 넘어가는거(여행후기)
router.get('/newReview', (req, res) => {
    let id = req.query.id;
    db.getReivewById(id, (row) => {
        if (typeof id == 'undefined' || row.length <= 0) {
            res.status(404).json({
                error: 'undefined alaska'
            });
        } else {
            res.render('./sub/alaska_trip_review_Newwrite', {
                row: row[0]
            });
        }
    });
});

//수정한거 보내기(여행후기)
router.post('/newReview', [check('content').isLength({
    min: 1,
    max: 6000
})], (req, res) => {
    let errs = validationResult(req);
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param['id'];
    let writer = param['writer'];
    let pass = param['pass'];
    let title = param['title'];
    let content = param['content'];
    if (errs['errors'].length > 0) {
        db.updateReviewById(id, (row) => {
            res.render('alaska_trip_review_Newwrite', {
                row: row[0],
                errs: errs['errors']
            })
        })
    } else {
        db.updateReviewById(id, writer, pass, title, content, () => {
            res.redirect('/trip_review');
        })
    }
});

//여행후기 삭제
router.get('/deleteReview', (req, res) => {
    let id = req.query.id;
    db.deleteReviewById(id, () => {
        res.redirect('/trip_review');
    });
});




router.get('/youtube', (req, res) => {
    res.render('./sub/sub_commu_yotube');
})



router.get('/weather_trip_more', (req, res) => {
    res.render('./sub/sub_weather_trip_more');
})
router.get('/partner_trip_more', (req, res) => {
    res.render('./sub/sub_partner_trip_more');
})


router.get('/newM', (req, res) => {
    res.render('./sub/newM')
})






module.exports = router;