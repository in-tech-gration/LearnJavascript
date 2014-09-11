// METHOD #1

app.all( '*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// METHOD #2: USING A (GENERAL) ROUTER

var router = express.Router();

router.use(function(req,res,next){
	res.header( "Access-Control-Allow-Origin", "*" );
	res.header( "Access-Control-Allow-Headers", "X-Requested-With" );
	next();
});

