
type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

interface Gallery extends Base {
    [x: string]: TypedObject;
    title: string;
    images: Image[];
    description: string;
}

interface Page extends Base {
    [x: string]: TypedObject;
    title: string;
    mainImage: {
        asset: {url: string};
    };
    body: [object];
}

interface Character extends Base {
    [x: string]: TypedObject;
    title: string;
    series: string;
    mainImage: {
        asset: {url: string};
    };
    slug: {current: string;};
    body: [object];
}

interface Character extends Base {
    [x: string]: TypedObject;
    title: string;
    series: string;
    mainImage: {
        asset: {url: string};
    };
    body: [object];
}

interface Post extends Base {
    [x: string]: TypedObject;
    title: string;
    author: {
        [x: string]: any;
        name: string;
        image: string;
    };
    description: string;
    mainImage: {
        asset: {url: string};
    };
    slug: {current: string;};
    body: [object];
    categories: Category[];
}

interface Author extends Base {
    bio: Block[];
    image: Image;
    name: string;
    slug: Slug;
}

interface Image {
    _type: "Image";
    asset: Reference;
}

interface Reference {
    _ref: string;
    _type: "reference";
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Block {
    _key: string;
    _type: "block" | "image" | "video";
    children?: Span[];
    markDefs?: any[];
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    list?: "bullet" | "number";
    level?: number;
    listItem?: "bullet" | "number";
    isPlaceholder?: boolean;
    text?: string;
    asset?: Reference;
    // Image specific properties
    caption?: string;
    alt?: string;
    // Video specific properties
    url?: string;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
}

interface Image extends Block {
    _type: "image";
    asset: Reference;
    caption?: string;
    alt?: string;
}

interface Video extends Block {
    _type: "video";
    url: string;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface Category extends Base {
    description: string;
    title: string;
}

interface MainImage {
    _type: "image";
    asset: Reference;
}

interface Title {
    _type: "string";
    current: string;
}

interface Comment extends Base {
    author: string;
    text: string;
    post: Reference;
    approved: boolean;
}