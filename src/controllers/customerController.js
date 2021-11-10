const controller = {};

controller.list = (req,res) =>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM customers', (err, rows) =>{
            if(err) {
                res.json(err);
            }
            res.render('customers',{
                data: rows
            });
        });
    });
};

module.exports = controller;