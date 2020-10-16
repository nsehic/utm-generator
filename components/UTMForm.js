import React, { useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';

export default function UTMForm() {
    const [handleText, setHandleText] = useState('sample-handle');
    const [sourceText, setSourceText] = useState('newsletter');
    const [mediumText, setMediumText] = useState('email');
    const [contentText, setContentText] = useState('');
    const [campaignText, setCampaignText] = useState('20202110_savvyshopperedm');
    const [outputText, setOutputText] = useState('');
    const [typeSelect, setTypeSelect] = useState('product');
    const baseUrl = 'https://www.rejectshop.com.au';

    const types = [
        {
            handle: 'blog',
            name: 'Blog'
        },
        {
            handle: 'standard',
            name: 'Standard'
        },
        {
            handle: 'product',
            name: 'Product'
        },
        {
            handle: 'collection',
            name: 'Collection'
        }
    ];

    useEffect(() => {
        switch(typeSelect) {
            case 'blog':
                setOutputText(`${baseUrl}/blog/${handleText}?utm_source=${sourceText}&utm_medium=${mediumText}&utm_content=${contentText}&utm_campaign=${campaignText}&barcode=%%customer_barcode%%`);
                break;
            case 'standard':
                setOutputText(`${baseUrl}/${handleText}?utm_source=${sourceText}&utm_medium=${mediumText}&utm_content=${contentText}&utm_campaign=${campaignText}&barcode=%%customer_barcode%%`);
                break;
            case 'product':
                setOutputText(`${baseUrl}/p/${handleText}?utm_source=${sourceText}&utm_medium=${mediumText}&utm_content=${contentText}&utm_campaign=${campaignText}&barcode=%%customer_barcode%%`);
                break;
            case 'collection':
                setOutputText(`${baseUrl}/c/${handleText}?utm_source=${sourceText}&utm_medium=${mediumText}&utm_content=${contentText}&utm_campaign=${campaignText}&barcode=%%customer_barcode%%`);
                break;
        }
    });


    
    return(
        <form className='UTMForm'>
            <input type='text' placeholder='Handle' value={handleText} onChange={(e) => setHandleText(e.target.value)}/>
            <select onChange={(e) => setTypeSelect(e.target.value)} value={typeSelect}>
                {types.map(type => (
                    <option key={type.handle} value={type.handle}>{type.name}</option>
                ))}
            </select>
            <input type='text' placeholder='Source' value={sourceText} onChange={(e) => setSourceText(e.target.value)}/>
            <input type='text' placeholder='Medium' value={mediumText} onChange={(e) => setMediumText(e.target.value)}/>
            <input type='text' placeholder='Content' value={contentText} onChange={(e) => setContentText(e.target.value)}/>
            <input type='text' placeholder='Campaign' value={campaignText} onChange={(e) => setCampaignText(e.target.value)}/>
            
            <textarea className='output-text' onClick={() => copy(outputText)} value={outputText}></textarea>

        </form>
    );
}
