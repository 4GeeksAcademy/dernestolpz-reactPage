import React from 'react';

export const Card = () => {

    const products = [
        {

            title: 'Sauvage Eau de Parfum',
            description: 'Sauvage Eau de Parfum by Dior is a fragrance from the Oriental Fougere olfactory family for men. Sauvage Eau de Parfum was launched in 2018. The nose behind this fragrance is François Demachy. The top note is bergamot; the heart notes are Sichuan pepper, lavender, star anise, and nutmeg; the base notes are ambroxan and vanilla.',
            image: 'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw5becafc8/Y0785220/Y0785220_F078522009_E01_ZHC.jpg?sw=1800&sh=1200',
        },
        {

            title: 'BLEU DE CHANEL',
            description: 'Bleu de Chanel Eau de Parfum by Chanel is a fragrance from the Woody Aromatic olfactory family for men. Bleu de Chanel Eau de Parfum was launched in 2014. The nose behind this fragrance is Jacques Polge. The top notes are grapefruit, lemon, mint, pink pepper, bergamot, aldehydes, and coriander; the heart notes are ginger, nutmeg, jasmine, and melon; the base notes are incense, amber, cedar, sandalwood, patchouli, amberwood, and labdanum.',
            image: 'https://media.douglas.es/medias/kMvrCE544728-0-global.jpg?context=bWFzdGVyfGltYWdlc3w0MjI2OHxpbWFnZS9qcGVnfGFEVTVMMmcxWVM4MU1URTFPRGc0TVRreU56RTVPQzlyVFhaeVEwVTFORFEzTWpoZk1GOW5iRzlpWVd3dWFuQm58YzRjYTdjYzQ1NjA5ZjkzMjRiYzZlODljN2YzY2VmMDc0NWI1MDg2YTg5ZDgwZTEyMWQ2OWRmYjliYjZmOGU0ZQ&grid=true&imPolicy=grayScaled&imdensity=1&imwidth=775',
        },
        {

            title: 'PLATINUM ÉGOÏSTE',
            description: 'Egoiste Platinum by Chanel is a fragrance from the Musk Woody Floral olfactory family for men. Egoiste Platinum was launched in 1993. The nose behind this fragrance is Jacques Polge. The top notes are lavender, rosemary, neroli, and petitgrain; the heart notes are geranium, clary sage, galbanum, and jasmine; the base notes are oakmoss, vetiver, cedar, sandalwood, and amber.',
            image: 'https://media.douglas.es/medias/Y0ruJm528190-0-global.jpg?context=bWFzdGVyfGltYWdlc3w0MDEyMXxpbWFnZS9qcGVnfGFEQTNMMmd4TkM4MU1URTFPRGcyTmpnMU16a3hPQzlaTUhKMVNtMDFNamd4T1RCZk1GOW5iRzlpWVd3dWFuQm58ODhjZTVjNDFkYzgxODlkYWU1OGVmYTdjNjAxZDdjMjUwN2U4NjNlMTFjYTE0NzhkMDc1YzhlYmU1ZjQ2YzM1MQ&grid=true&imPolicy=grayScaled&imdensity=1&imwidth=775',
        },
        {

            title: 'ALLURE HOMME SPORT',
            description: 'Allure Homme Sport by Chanel is a fragrance from the Woody Spicy olfactory family for men. Allure Homme Sport was launched in 2004. The nose behind this fragrance is Jacques Polge. The top notes are orange, marine notes, aldehydes, and red mandarin; the heart notes are pepper, neroli, and cedar; the base notes are vanilla, tonka bean, white musk, amber, vetiver, and elemi resin.',
            image: 'https://media.douglas.es/medias/DIpExU659033-0-global.jpg?context=bWFzdGVyfGltYWdlc3wzODI2M3xpbWFnZS9qcGVnfGFERmtMMmcxWWk4MU1URXpPRGM0TURFMk9ESXlNaTlFU1hCRmVGVTJOVGt3TXpOZk1GOW5iRzlpWVd3dWFuQm58OGI3YTdkYmQ4YWZkMTJkNTY1YTBiYjlmZjhmODRmYjBmMDM3YjU5NGNjZWU0ODVlNTQyMzI3MjBkYWZjYTRkNA&grid=true&imPolicy=grayScaled&imdensity=1&imwidth=775',
        },
    ];

    return (
        <>
            {products.map((card, index) => (
                <div key={`${card.name}-${index}`} className="col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={card.image} alt="Card image" />
                        <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">{card.description}</p>
                            <a href="#" className="btn btn-primary">More Info</a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};
