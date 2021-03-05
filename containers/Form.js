import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';
import Message from '../components/Message';
import copy from 'copy-to-clipboard';
import { v4 as uuid } from 'uuid';

const BASE_URL = 'https://www.rejectshop.com.au';


const formatDate = (dt) => {
    const year = dt.getFullYear();
    const month = dt.getMonth() + 1 < 10 ? `0${dt.getMonth()+1}` : dt.getMonth();
    const date = dt.getDate() < 10 ? `0${dt.getDate()}` : dt.getDate();

    return `${year}${month}${date}`;
}

const isEmpty = string => string.length === 0;

export default function Form() {
    const [handleText, setHandleText] = useState('');
    const [sourceText, setSourceText] = useState('newsletter');
    const [mediumText, setMediumText] = useState('email');
    const [contentText, setContentText] = useState('');
    const [campaignText, setCampaignText] = useState('');
    const [typeSelect, setTypeSelect] = useState('collection');
    const [isEmail, setIsEmail] = useState(false);
    const [messages, setMessages] = useState([]);
    const [submitDisabled, setSubmitDisabled] = useState(true);    

    useEffect(() => {
        if(mediumText === 'email' && sourceText === 'newsletter') {
            setCampaignText(`${formatDate(new Date())}_savvyshopperedm`);
            setIsEmail(true);
        } else {
            setCampaignText('');
            setIsEmail(false);
        }
    }, [mediumText, sourceText]);

    useEffect(() => {
        if(isEmpty(handleText) || isEmpty(sourceText) || isEmpty(mediumText) || isEmpty(contentText) || isEmpty(campaignText)) {
            setSubmitDisabled(true);
        } else {
            setSubmitDisabled(false);            
        }
    }, [handleText, sourceText, mediumText, contentText, campaignText]);



    const formConfig = [
        {
            id: 'select-field-type',
            label: 'Type',
            type: 'select',
            value: typeSelect,
            options: [
                {
                    handle: 'blog',
                    name: 'Blog',
                    path: '/blog/'
                },
                {
                    handle: 'standard',
                    name: 'Standard',
                    path: '/'
                },
                {
                    handle: 'product',
                    name: 'Product',
                    path: '/p/'
                },
                {
                    handle: 'collection',
                    name: 'Collection',
                    path: '/c/'
                },
                {
                    handle: 'event-landing',
                    name: 'Event Landing Page',
                    path: '/e/l/'
                },
                {
                    handle: 'category-landing',
                    name: 'Category Landing Page',
                    path: '/c/l/'
                }
            ],
            update: e => setTypeSelect(e.target.value)
        },
        {
            id: 'text-field-handle',
            label: 'Handle',
            type: 'text',
            value: handleText,
            update: e => setHandleText(e.target.value),
        },
        {
            id: 'text-field-source',
            label: 'Source',
            type: 'text',
            value: sourceText,
            update: e => setSourceText(e.target.value)
        },
        {
            id: 'text-field-medium',
            label: 'Medium',
            type: 'text',
            value: mediumText,
            update: e => setMediumText(e.target.value)
        },
        {
            id: 'text-field-content',
            label: 'Content',
            type: 'text',
            value: contentText,
            update: e => setContentText(e.target.value)
        },
        {
            id: 'text-field-campaign',
            label: 'Campaign',
            type: 'text',
            value: campaignText,
            update: e => setCampaignText(e.target.value)
        }
    ];

    const getDocumentPath = (fieldId, handle) => {
        const field = formConfig.find(field => field.id === fieldId);
        return field.options.find(option => option.handle === handle).path;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        copy(`${BASE_URL}${getDocumentPath('select-field-type', typeSelect)}${handleText}?utm_source=${sourceText}&utm_medium=${mediumText}&utm_content=${contentText}&utm_campaign=${campaignText}${isEmail ? '&barcode=%%customer_barcode%%' : ''}`);
        setMessages(prevMessages => [{
            id: uuid(),
            value: 'Link has been successfully copied to the clipboard'
        }, ...prevMessages]);
    }

    const removeMessage = (id) => {
        setMessages(prevMessages => prevMessages.filter(message => message.id !== id));
    }


    return (
        <>
        <form className='form-group' onSubmit={handleSubmit}>
        
            { formConfig.map(field => (
                <InputField
                    list={field.options || null}
                    value={field.value}
                    label={field.label}
                    type={field.type}
                    key={field.id}
                    onChange={field.update}
                />
            ))}

            <SubmitButton value="Generate & Copy Link" disabled={submitDisabled}/>
            

            <div className='message-list'>
                { messages.map(message => (
                    <Message key={message.id} text={message.value} id={message.id} onExpire={removeMessage} />
                ))}
            </div>
        </form>
        </>
    );
}
