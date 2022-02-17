export default class API {
    static getCategories() {
        return [
            {
                title: 'Art',
                description: 'Description for art',
                slug: 'art'
            },
            {
                title: 'Design',
                description: 'Description for design',
                slug: 'design'
            },
            {
                title: 'Music',
                description: 'Description for music',
                slug: 'music'
            },
            {
                title: 'Fashion',
                description: 'Description for fashion',
                slug: 'fashion'
            }
        ]
    }

    static getContent(category) {
        return {
            title: 'Example',
            description: 'Description'
        }
    }
}