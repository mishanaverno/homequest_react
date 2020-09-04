export const dashboard = {
    "code": 200,
    "msg": "Hero element found!",
    "data": {
        "id": 1,
        "login": "mike",
        "name": "Michael",
        "avatar": "/misha.jpg",
        "style": 5,
        "gangs": [
            {
                "id": 1,
                "name": "First Gang",
                "quests": [
                    {
                        "id": 1,
                        "customer_id": 3,
                        "performer_id": 1,
                        "title": "quest1",
                        "description": "test",
                        "reward": 10,
                        "state": "progress",
                        "created_at": "2020-08-12 16:52:30",
                        "updated_at": "2020-08-12 17:38:44",
                        "gang_id": 1,
                        "customer_name": "Alisa",
                        "customer_avatar": "/alisa.jpg",
                        "performer_name": "Michael",
                        "performer_avatar": "/misha.jpg"
                    },
                    {
                        "id": 2,
                        "customer_id": 3,
                        "performer_id": 1,
                        "title": "quest2",
                        "description": "test",
                        "reward": 10,
                        "state": "complete",
                        "created_at": "2020-08-12 16:52:35",
                        "updated_at": "2020-08-12 19:49:03",
                        "gang_id": 1,
                        "customer_name": "Alisa",
                        "customer_avatar": "/alisa.jpg",
                        "performer_name": "Michael",
                        "performer_avatar": "/misha.jpg"
                    },
                    {
                        "id": 3,
                        "customer_id": 2,
                        "performer_id": 1,
                        "title": "quest3",
                        "description": "test",
                        "reward": 10,
                        "state": "complete",
                        "created_at": "2020-08-12 16:52:43",
                        "updated_at": "2020-08-12 17:42:03",
                        "gang_id": 1,
                        "customer_name": "Bob",
                        "customer_avatar": "/bob.jpg",
                        "performer_name": "Michael",
                        "performer_avatar": "/misha.jpg"
                    },
                    {
                        "id": 4,
                        "customer_id": 2,
                        "performer_id": 1,
                        "title": "quest4",
                        "description": "test",
                        "reward": 10,
                        "state": "pending",
                        "created_at": "2020-08-12 16:53:21",
                        "updated_at": "2020-08-12 17:46:25",
                        "gang_id": 1,
                        "customer_name": "Bob",
                        "customer_avatar": "/bob.jpg",
                        "performer_name": 'Michael',
                        "performer_avatar": '/misha.jpg'
                    },
                    {
                        "id": 5,
                        "customer_id": 1,
                        "performer_id": null,
                        "title": "quest5",
                        "description": "test",
                        "reward": 10,
                        "state": "open",
                        "created_at": "2020-08-12 16:54:53",
                        "updated_at": "2020-08-12 16:54:53",
                        "gang_id": 1,
                        "customer_name": "Michael",
                        "customer_avatar": "/misha.jpg",
                        "performer_name": null,
                        "performer_avatar": null
                    },
                    {
                        "id": 6,
                        "customer_id": 1,
                        "performer_id": null,
                        "title": "My quest",
                        "description": "test",
                        "reward": 10,
                        "state": "open",
                        "created_at": "2020-08-12 20:26:00",
                        "updated_at": "2020-08-12 20:26:00",
                        "gang_id": 1,
                        "customer_name": "Michael",
                        "customer_avatar": "/misha.jpg",
                        "performer_name": null,
                        "performer_avatar": null
                    },
                    {
                        "id": 7,
                        "customer_id": 3,
                        "performer_id": null,
                        "title": "My quest",
                        "description": "test",
                        "reward": 75,
                        "state": "open",
                        "created_at": "2020-08-20 20:42:53",
                        "updated_at": "2020-08-20 20:42:53",
                        "gang_id": 1,
                        "customer_name": "Alisa",
                        "customer_avatar": "/alisa.jpg",
                        "performer_name": null,
                        "performer_avatar": null
                    },
                    {
                        "id": 8,
                        "customer_id": 3,
                        "performer_id": null,
                        "title": "My quest",
                        "description": "test",
                        "reward": 85,
                        "state": "open",
                        "created_at": "2020-08-20 20:45:13",
                        "updated_at": "2020-08-20 20:45:13",
                        "gang_id": 1,
                        "customer_name": "Alisa",
                        "customer_avatar": "/alisa.jpg",
                        "performer_name": null,
                        "performer_avatar": null
                    },
                    {
                        "id": 9,
                        "customer_id": 1,
                        "performer_id": null,
                        "title": "Mike quest",
                        "description": "test",
                        "reward": 95,
                        "state": "open",
                        "created_at": "2020-08-20 20:52:44",
                        "updated_at": "2020-08-20 20:52:44",
                        "gang_id": 1,
                        "customer_name": "Michael",
                        "customer_avatar": "/misha.jpg",
                        "performer_name": null,
                        "performer_avatar": null
                    }
                ]
            }
        ]
    }
};
export const notAuthorized = {
    "code": 403,
    "msg": "Not athorized",
    "data": null
};
export const authorized = {
    "code": 200,
    "msg": "Login success",
    "data": "033946a3c0efc166c3fd900fe328aa78"
};