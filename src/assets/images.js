game.images._createColoredPattern = function (_config, _colour1, _colour2) {

    let _image = mge.image.create()
    let _configCopy = structuredClone(_config)

    _configCopy._p[0]._fs[1] = _colour1
    _configCopy._p[1]._fs[1] = _colour2

    _image.config = _configCopy
    _image.load()

    return mge._canvas._renderContext.createPattern(_image._bitmap, 'repeat')

}

game.images.init = function () {
    /////////////////////////
    // IMAGES
    /////////////////////////
    game.images.logoDilpleu = mge.image.create()
    game.images.logoDilpleu.config = {"_s":{"_w":400,"_h":400},"_p":[{"_fs":["C","#a301e6"],"_ss":["#000000","5","round","round"],"_gp":[],"_c":[["M","60","170"],["Q","75","70","200","60"],["Q","317","70","350","170"],["Q","310","130","280","165"],["Q","240","130","205","165"],["Q","170","130","135","165"],["Q","96","130","60","170"]],"_t":[8,8,8,"","","","",""]},{"_fs":["N",""],"_ss":["#000000","5","round","round"],"_gp":[],"_c":[["M","205","165"],["L","205","275"],["M","60","193"],["Q","100","191","105","230"],["Q","100","268","60","266"],["L","60","193"],["M","153","215"],["Q","144","281","167","275"],["M","185","355"],["L","185","291"],["Q","223","287","220","310"],["Q","223","335","185","330"],["M","315","254"],["Q","312","293","330","293"],["Q","354","293","350","255"]],"_t":[8,8,8,"","","","",""]},{"_fs":["N",""],"_ss":["#a301e6","5","round","round"],"_gp":[],"_c":[["M","120","275"],["Q","111","312","135","310"],["M","245","250"],["Q","239","314","260","310"],["M","295","250"],["Q","264","251","262","233"],["Q","264","210","282","210"],["Q","305","210","303","232"],["L","263","232"],["M","120","260"],["C","120","260","2"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.logoDilpleu.scale = 0.3
    game.images.logoDilpleu.load()

    game.images.playerBody = mge.image.create()
    game.images.playerBody.config = {"_s":{"_w":300,"_h":350},"_p":[{"_fs":["RG","110","175","0","150","175","133"],"_ss":["#cb5252","5","round","round"],"_gp":[[0,"#f5c6c6"],[1,"#e66465"]],"_c":[["M","15","124"],["Q","31","72","73","70"],["Q","118","72","113","110"],["L","111","212"],["L","117","213"],["Q","122","183","135","170"],["Q","122","168","115","101"],["Q","115","69","157","66"],["L","241","62"],["Q","294","69","252","138"],["Q","340","237","242","280"],["Q","167","301","133","259"],["Q","124","290","77","286"],["Q","3","289","4","249"],["Q","3","226","38","210"],["L","37","157"],["Q","12","151","15","124"]],"_t":[8,8,8,"","","","",""]},{"_fs":["N",""],"_ss":["#b64343","15","round","round"],"_gp":[],"_c":[["M","51","126"],["L","77","107"],["L","73","247"],["M","42","249"],["L","101","246"],["M","160","143"],["L","154","103"],["L","234","98"],["L","191","163"],["Q","269","161","252","228"],["Q","201","284","159","227"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.playerBody.scale = 0.2
    game.images.playerBody.load()

    game.images.pi = mge.image.create()
    game.images.pi.config = {"_s":{"_w":100,"_h":100},"_p":[{"_fs":["C","#030303"],"_ss":["#f50505","0","round","round"],"_gp":[],"_c":[["M","7","38"],["Q","15","15","26","15"],["L","85","15"],["L","85","27"],["L","66","27"],["Q","59","97","83","65"],["Q","53","125","56","27"],["L","37","27"],["Q","33","98","18","87"],["Q","27","60","28","27"],["Q","17","26","7","38"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#ffffff"],"_ss":["#000000","2","round","round"],"_gp":[],"_c":[["C","48","21","12"],["M","41","11"],["Q","41","6","45","3"],["M","48","8"],["Q","48","5","51","3"],["M","53","9"],["Q","53","6","57","5"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#000000"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["C","48","24","3"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.pi.scale = 0.8
    game.images.pi.load()

    game.images.openEye = mge.image.create()
    game.images.openEye.config = {"_s":{"_w":130,"_h":140},"_p":[{"_fs":["C","#ffffff"],"_ss":["#000000","5","round","round"],"_gp":[],"_c":[["C","60","70","45"],["M","75","25"],["Q","80","16","102","11"],["M","85","32"],["Q","86","25","108","21"],["M","92","38"],["Q","100","33","114","34"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#000000"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["C","45","80","15"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.openEye.scale = 0.2
    game.images.openEye.load()

    game.images.closeEye = mge.image.create()
    game.images.closeEye.config = {"_s":{"_w":130,"_h":140},"_p":[{"_fs":["C","#ffffff"],"_ss":["#000000","5","round","round"],"_gp":[],"_c":[["C","60","70","45"],["M","25","100"],["Q","11","99","5","110"],["M","35","110"],["Q","19","111","12","125"],["M","50","115"],["Q","40","114","35","130"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.closeEye.scale = 0.2
    game.images.closeEye.load()

    game.images.legsIdle = mge.image.create()
    game.images.legsIdle.config = {"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","30","31","32","68"],["L","14","66"],["M","98","3"],["Q","103","31","96","67"],["L","117","64"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.legsIdle.scale = 0.2
    game.images.legsIdle.load()

    game.images.legsWalk1 = mge.image.create()
    game.images.legsWalk1.config = {"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","34","31","32","68"],["L","51","66"],["M","98","3"],["Q","132","31","92","55"],["L","109","65"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.legsWalk1.scale = 0.2
    game.images.legsWalk1.load()

    game.images.legsWalk2 = mge.image.create()
    game.images.legsWalk2.config = {"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","24","31","13","65"],["L","30","69"],["M","98","3"],["Q","103","31","108","67"],["L","119","64"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.legsWalk2.scale = 0.2
    game.images.legsWalk2.load()

    game.images.legsWalk3 = mge.image.create()
    game.images.legsWalk3.config = {"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","61","24","19","56"],["L","36","64"],["M","98","3"],["Q","99","31","97","69"],["L","114","69"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.legsWalk3.scale = 0.2
    game.images.legsWalk3.load()

    game.images.legsWalk4 = mge.image.create()
    game.images.legsWalk4.config = {"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","39","24","48","71"],["L","62","66"],["M","97","3"],["Q","93","31","89","59"],["L","103","69"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.legsWalk4.scale = 0.2
    game.images.legsWalk4.load()

    game.images.numberLand = mge.image.create()
    game.images.numberLand.config = {"_s":{"_w":200,"_h":100},"_p":[{"_fs":["C","#9bae8f"],"_ss":["#417029","2","round","round"],"_gp":[],"_c":[["R","2","2","196","38"],["R","95","40","9","58"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#417029"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["M","0","0"]],"_t":["11","23","25","bold","Arial","left","middle","NUMBERLAND"]}]}
    game.images.numberLand.load()

    /////////////////////////
    // BACKGROUNDS
    /////////////////////////
    game.images.violetBkg1 = mge.image.create()
    game.images.violetBkg1.config = {"_s":{"_w":1300,"_h":1500},"_p":[{"_fs":["C","#c8a2e2"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["M","0","1125"],["L","250","1050"],["L","1000","1200"],["L","1300","1125"],["L","1300","1500"],["L","0","1500"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.violetBkg1.load()
    game.patterns.violetBkg1 = mge._canvas._renderContext.createPattern(game.images.violetBkg1._bitmap, 'repeat')

    game.images.violetBkg2 = mge.image.create()
    game.images.violetBkg2.config = {"_s":{"_w":1300,"_h":1500},"_p":[{"_fs":["C","#a26ac8"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["M","0","1200"],["L","131","1250"],["L","1000","1100"],["L","1300","1200"],["L","1300","1500"],["L","0","1500"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.violetBkg2.load()
    game.patterns.violetBkg2 = mge._canvas._renderContext.createPattern(game.images.violetBkg2._bitmap, 'repeat')

    /////////////////////////
    // TILES
    /////////////////////////
    //let _triangles = {"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#5d2c77","0","round","round"],"_gp":[],"_c":[["M","0","0"],["L","30","0"],["L","30","30"]],"_t":[8,8,8,"","","","",""]}]}
    //let _rectangles = {"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","5","5","20","20"]],"_t":[8,8,8,"","","","",""]}]}
    let _circle = {"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["C","15","15","5"]],"_t":[8,8,8,"","","","",""]}]}
    //let _losange = {"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["M","15","0"],["L","30","15"],["L","15","30"],["L","0","15"]],"_t":[8,8,8,"","","","",""]}]}
    //let _diagonal = {"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["M","12","0"],["L","18","0"],["L","30","12"],["L","30","18"],["M","0","12"],["L","0","18"],["L","12","30"],["L","18","30"]],"_t":[8,8,8,"","","","",""]}]}
    //let _inclinedBLock = {"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["M","12","0"],["L","18","0"],["L","30","12"],["L","30","18"],["M","0","12"],["L","0","18"],["L","12","30"],["L","18","30"],["M","0","12"],["L","12","0"],["L","18","0"],["L","0","18"]],"_t":[8,8,8,"","","","",""]}]}
    let _block = {"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","3"],["R","0","15","30","3"],["R","0","0","3","15"],["R","15","15","3","15"]],"_t":[8,8,8,"","","","",""]}]}
    //let _beziers1 = {"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#5d2c77","0","round","round"],"_gp":[],"_c":[["M","0","10"],["B","20","-10","10","35","30","10"],["L","30","20"],["B","10","40","20","-5","0","20"]],"_t":[8,8,8,"","","","",""]}]}
    //let _beziers2 = {"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#5d2c77","0","round","round"],"_gp":[],"_c":[["M","0","12"],["B","20","-25","8","30","30","12"],["L","30","17"],["B","12","55","20","1","0","17"]],"_t":[8,8,8,"","","","",""]}]}

    //game.patterns.violetBlockLosangeBeziers1 = game.images._createColoredPattern(_beziers1,'#5d2c77','#582970')
    //game.patterns.violetBlockBeziers2 = game.images._createColoredPattern(_beziers2,'#5d2c77','#582970')
    game.patterns.violetBlockCircle = game.images._createColoredPattern(_circle,'#582970','#c8a2e2')
    game.patterns.violetBlock = game.images._createColoredPattern(_block,'#c8a2e2','#582970')

    //game.patterns.blueBlockDiagonal = game.images._createColoredPattern(_diagonal,'#5a97c8','#6aa4d2')
    
}

// STYLE 1: 2 triangles
//  game.images.level1BlockGreat.config = {"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#5d2c77","0","round","round"],"_gp":[],"_c":[["M","0","0"],["L","30","0"],["L","30","30"]],"_t":[8,8,8,"","","","",""]}]}
// STYLE 2: 1 rectangle dans un autre
//  game.images.level1BlockGreat.config = {"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","5","5","20","20"]],"_t":[8,8,8,"","","","",""]}]}
// STYLE 3: 1 cercle dans rectangle
// game.images.level1BlockGreat.config = {"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["C","15","15","5"]],"_t":[8,8,8,"","","","",""]}]}
// STYLE 4: Losanges
//game.images.level1BlockGreat.config = {"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["M","15","0"],["L","30","15"],["L","15","30"],["L","0","15"]],"_t":[8,8,8,"","","","",""]}]}
// STYLE 5: Diagonales
//game.images.level1BlockGreat.config ={"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["M","12","0"],["L","18","0"],["L","30","12"],["L","30","18"],["M","0","12"],["L","0","18"],["L","12","30"],["L","18","30"]],"_t":[8,8,8,"","","","",""]}]}
// STYLE 6: Briques inclinées
//game.images.level1BlockGreat.config ={"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["M","12","0"],["L","18","0"],["L","30","12"],["L","30","18"],["M","0","12"],["L","0","18"],["L","12","30"],["L","18","30"],["M","0","12"],["L","12","0"],["L","18","0"],["L","0","18"]],"_t":[8,8,8,"","","","",""]}]}
// STYLE 7: Briques normales
//game.images.level1BlockGreat.config ={"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","3"],["R","0","15","30","3"],["R","0","0","3","15"],["R","15","15","3","15"]],"_t":[8,8,8,"","","","",""]}]}
// STYLE 8: Vagues de Beziers
//game.images.level1BlockGreat.config ={"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#5d2c77","0","round","round"],"_gp":[],"_c":[["M","0","10"],["B","20","-10","10","35","30","10"],["L","30","20"],["B","10","40","20","-5","0","20"]],"_t":[8,8,8,"","","","",""]}]}
// STYLE 9: Vagues de Beziers 2
//game.images.level1BlockGreat.config ={"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#5d2c77","0","round","round"],"_gp":[],"_c":[["M","0","12"],["B","20","-25","8","30","30","12"],["L","30","17"],["B","12","55","20","1","0","17"]],"_t":[8,8,8,"","","","",""]}]}
