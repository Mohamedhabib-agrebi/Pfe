const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,__dirname+ '/../client/public/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "--" +'haboub' +file.originalname.split('.').pop());
    }
})
const fileFilter = (req, file, cb) => {
    if((file.mimetype).includes('jpeg') || (file.mimetype).includes('png') || (file.mimetype).includes('jpg')){
        cb(null, true);
    } else{
        cb(null, false);
    }
};
let upload = multer({ 
    storage: storage,
     limits : {fileSize : 3000000},
    fileFilter
});

module.exports = upload.single('image')
