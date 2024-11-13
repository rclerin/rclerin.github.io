import pouvoirsUniversel from '../json/pouvoirsUniversel.json';
import pouvoirsExclusif from '../json/pouvoirsExclusif.json';
import pouvoirsArtisan from '../json/pouvoirsArtisan.json';
import pouvoirsBarbare from '../json/pouvoirsBarbare.json';
import pouvoirsBarde from '../json/pouvoirsBarde.json';
import pouvoirsDruide from '../json/pouvoirsDruide.json';
import pouvoirsGuerrier from '../json/pouvoirsGuerrier.json';
import pouvoirsMage from '../json/pouvoirsMage.json';
import pouvoirsPaladin from '../json/pouvoirsPaladin.json';
import pouvoirsPretre from '../json/pouvoirsPretre.json';
import pouvoirsRanger from '../json/pouvoirsRanger.json';
import pouvoirsVoleur from '../json/pouvoirsVoleur.json';
import pouvoirsWarlock from '../json/pouvoirsWarlock.json';

export async function getPouvoirsUniversels() {
    return pouvoirsUniversel;
}

export async function getPouvoirsExclusifs() {
    return pouvoirsExclusif;
}

export async function getPouvoirsParClasse(classeId) {
    switch(classeId) {
        case '3':
            return pouvoirsArtisan;
        case '4':
            return pouvoirsBarbare;
        case '5':
            return pouvoirsBarde;
        case '6':
            return pouvoirsDruide;
        case '7':
            return pouvoirsGuerrier;
        case '8':
            return pouvoirsMage;
        case '9':
            return pouvoirsPaladin;
        case '10':
            return pouvoirsPretre;
        case '11':
            return pouvoirsRanger;
        case '12':
            return pouvoirsVoleur;
        case '13':
            return pouvoirsWarlock;
        default:
            return pouvoirsUniversel;
    }
}
