import { ChatProps, UserProps } from '../../../@types/chat-service';

export const users: UserProps[] = [
    {
        name: 'Dr. Smith',
        username: '@drsmith',
        avatar: '/static/images/avatar/1.jpg',
        online: true,
    },
    {
        name: 'John Doe',
        username: '@john',
        avatar: '/static/images/avatar/2.jpg',
        online: true,
    },
    {
        name: 'Jane Roe',
        username: '@jane',
        avatar: '/static/images/avatar/3.jpg',
        online: false,
    },
];

export const chats: ChatProps[] = [
    {
        id: '1',
        sender: users[0],
        messages: [
            {
                id: '1',
                content: 'Hi Dr. Smith, I have been feeling under the weather lately.',
                timestamp: 'Monday 9:00am',
                sender: 'You',
            },
            {
                id: '2',
                content: 'Hello John, I am sorry to hear that. Can you describe your symptoms?',
                timestamp: 'Monday 9:10am',
                sender: users[0],
            },
            {
                id: '3',
                timestamp: 'Monday 9:15am',
                sender: 'You',
                content: 'I have a persistent cough and occasional fever.',
            },
            {
                id: '4',
                timestamp: 'Monday 9:20am',
                sender: users[0],
                content: 'I see. How long have you been experiencing these symptoms?',
            },
            {
                id: '5',
                timestamp: 'Monday 9:25am',
                sender: 'You',
                content: 'It started about a week ago.',
            },
            {
                id: '6',
                content: 'I recommend you to come in for a check-up so we can run some tests.',
                timestamp: 'Monday 9:30am',
                sender: users[0],
            },
        ],
    },
    {
        id: '2',
        sender: users[1],
        messages: [
            {
                id: '1',
                content: 'Hi Dr. Smith, I am experiencing severe headaches.',
                timestamp: 'Tuesday 10:00am',
                sender: 'You',
            },
            {
                id: '2',
                content: 'Hello Jane, I am sorry to hear that. Have you noticed any other symptoms?',
                timestamp: 'Tuesday 10:05am',
                sender: users[0],
            },
            {
                id: '3',
                content: 'Just the headaches, but they are quite debilitating.',
                timestamp: 'Tuesday 10:10am',
                sender: 'You',
            },
            {
                id: '4',
                content: 'I understand. How long have you had these headaches?',
                timestamp: 'Tuesday 10:15am',
                sender: users[0],
            },
            {
                id: '5',
                content: 'For the past three days.',
                timestamp: 'Tuesday 10:20am',
                sender: 'You',
            },
            {
                id: '6',
                content: 'Please come in for an examination at your earliest convenience.',
                timestamp: 'Tuesday 10:25am',
                sender: users[0],
            },
        ],
    },
];
