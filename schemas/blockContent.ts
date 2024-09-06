export default {
    name: 'blockContent',
    title: 'Block Content',
    type: 'array',
    of: [
        {
            title: 'Block',
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H1', value: 'h1' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'H5', value: 'h5' },
                { title: 'H6', value: 'h6' },
                { title: 'Quote', value: 'blockquote' },
            ],
            lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Number', value: 'number' },
            ],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                    { title: 'Code', value: 'code' },
                    { title: 'Underline', value: 'underline' },
                    { title: 'Strike', value: 'strike' },
                    { title: 'Superscript', value: 'superscript' },
                    { title: 'Subscript', value: 'subscript' },
                ],
                annotations: [
                    {
                        name: 'link',
                        title: 'Link',
                        type: 'object',
                        fields: [
                       {
                                name: 'url',
                                title: 'URL',
                                type: 'url',
                            },
                           {
                                name: 'openInNewWindow',
                                title: 'Open in New Window',
                                type: 'boolean',
                            },
                        ],
                    },
                ],
            },
        },
        {
            type: 'image',
            options: { hotspot: true },
        },
        {
            type: 'video',
        },
    ],
}

function defineField(arg0: { name: string; title: string; type: string; styles: { title: string; value: string; }[]; marks: {}; }) {
    throw new Error("Function not implemented.");
}
