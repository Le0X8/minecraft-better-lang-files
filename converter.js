const fs = require('fs');

const langs = fs.readdirSync('./lf/');
const langMeta = JSON.parse(fs.readFileSync('./pack.mcmeta').toString()).language;

const langData = (() => {
    var rt = {};
    langs.forEach(lang => {
        var langName = lang.split('.')[0];
        rt[langName] = {
            name: langMeta[langName].name,
            region: langMeta[langName].region,
            data: {}
        };
        var langDataObj = JSON.parse(fs.readFileSync('./lf/' + langName + '.json').toString());
        Object.keys(langDataObj).forEach(ldo => {
            var cats = `${ldo}.$`.split('.');
            for (var i = 0; i < cats.length; i++) {
                switch (i) {
                    case 0:
                        if (!rt[langName].data[cats[0]]) rt[langName].data[cats[0]] = {};
                        if (!cats[i + 1]) { rt[langName].data[cats[0]] = langDataObj[ldo]; return; };
                        break;
                    case 1:
                        if (!rt[langName].data[cats[0]][cats[1]]) rt[langName].data[cats[0]][cats[1]] = {};
                        if (!cats[i + 1]) { rt[langName].data[cats[0]][cats[1]] = langDataObj[ldo]; return; };
                        break;
                    case 2:
                        if (!rt[langName].data[cats[0]][cats[1]][cats[2]]) rt[langName].data[cats[0]][cats[1]][cats[2]] = {};
                        if (!cats[i + 1]) { rt[langName].data[cats[0]][cats[1]][cats[2]] = langDataObj[ldo]; return; };
                        break;
                    case 3:
                        if (!rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]]) rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]] = {};
                        if (!cats[i + 1]) { rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]] = langDataObj[ldo]; return; };
                        break;
                    case 4:
                        if (!rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]][cats[4]]) rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]][cats[4]] = {};
                        if (!cats[i + 1]) { rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]][cats[4]] = langDataObj[ldo]; return; };
                        break;
                    case 5:
                        if (!rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]][cats[4]][cats[5]]) rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]][cats[4]][cats[5]] = {};
                        if (!cats[i + 1]) { rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]][cats[4]][cats[5]] = langDataObj[ldo]; return; };
                        break;
                    case 6:
                        if (!rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]][cats[4]][cats[5]][cats[6]]) rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]][cats[4]][cats[5]][cats[6]] = {};
                        if (!cats[i + 1]) { rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]][cats[4]][cats[5]][cats[6]] = langDataObj[ldo]; return; };
                        break;
                    case 7:
                        if (!rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]][cats[4]][cats[5]][cats[6]][cats[7]]) rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]][cats[4]][cats[5]][cats[6]][cats[7]] = {};
                        if (!cats[i + 1]) { rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]][cats[4]][cats[5]][cats[6]][cats[7]] = langDataObj[ldo]; return; };
                        break;
                    case 8:
                        if (!rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]][cats[4]][cats[5]][cats[6]][cats[7]][cats[8]]) rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]][cats[4]][cats[5]][cats[6]][cats[7]][cats[8]] = {};
                        if (!cats[i + 1]) { rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]][cats[4]][cats[5]][cats[6]][cats[7]][cats[8]] = langDataObj[ldo]; return; };
                        break;
                    case 9:
                        if (!rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]][cats[4]][cats[5]][cats[6]][cats[7]][cats[8]][cats[9]]) rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]][cats[4]][cats[5]][cats[6]][cats[7]][cats[8]][cats[9]] = {};
                        if (!cats[i + 1]) { rt[langName].data[cats[0]][cats[1]][cats[2]][cats[3]][cats[4]][cats[5]][cats[6]][cats[7]][cats[8]][cats[9]] = langDataObj[ldo]; return; };
                        break;
                    default:
                        break;
                }

            };
        });
    });
    return rt;
})();

// Save files
Object.keys(langData).forEach(lang => {
    const thisLang = langData[lang];
    fs.writeFileSync('./ready/ ' + process.argv[2] + '/min/' + lang + '.min.json', JSON.stringify(thisLang));
    fs.writeFileSync('./ready/ ' + process.argv[2] + '/' + lang + '.json', JSON.stringify(thisLang, undefined, 4));
});