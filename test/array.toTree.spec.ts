import { data2Tree, userList, list, userListCondition, listCondition } from 'src/app/adapter6/toTreeAdaptor';
const listResult = [
  {
    title: '梦想的学院',
    children: [
      {
        title: '一年级',
        children: [
          {
            title: '1班',
            children: [
              {
                college: '梦想的学院',
                grade: '一年级',
                clazz: '1班'
              }
            ]
          }
        ]
      },
      {
        title: '二年级',
        children: [
          {
            title: '1班',
            children: [
              {
                college: '梦想的学院',
                grade: '二年级',
                clazz: '1班'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: '嗷嗷叫学院',
    children: [
      {
        title: '二年级',
        children: [
          {
            title: '1班',
            children: [
              {
                college: '嗷嗷叫学院',
                grade: '二年级',
                clazz: '1班',
                id: 'xxx'
              }
            ]
          }
        ]
      },
      {
        title: '一年级',
        children: [
          {
            title: '1班',
            children: [
              {
                college: '嗷嗷叫学院',
                grade: '一年级',
                clazz: '1班',
                id: 'biubiubiu'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: '慢羊羊村大学',
    children: [
      {
        title: '一年级',
        children: [
          {
            title: '1班',
            children: [
              {
                college: '慢羊羊村大学',
                grade: '一年级',
                clazz: '1班'
              },
              {
                college: '慢羊羊村大学',
                grade: '一年级',
                clazz: '1班'
              }
            ]
          }
        ]
      }
    ]
  }
];
const userListResult = [
  {
    title: '四川',
    children: [
      {
        title: '成都',
        children: [
          {
            title: '高新区',
            children: [
              {
                name: 'user1',
                age: 18,
                province: '四川',
                city: '成都',
                district: '高新区'
              }
            ]
          },
          {
            title: '天府新区',
            children: [
              {
                name: 'user2',
                age: 19,
                province: '四川',
                city: '成都',
                district: '天府新区'
              }
            ]
          }
        ]
      },
      {
        title: '南充',
        children: [
          {
            title: '顺庆区',
            children: [
              {
                name: 'user3',
                age: 20,
                province: '四川',
                city: '南充',
                district: '顺庆区'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: '江苏',
    children: [
      {
        title: '南京',
        children: [
          {
            title: '鼓楼区',
            children: [
              {
                name: 'user4',
                age: 22,
                province: '江苏',
                city: '南京',
                district: '鼓楼区'
              }
            ]
          },
          {
            title: '玄武区',
            children: [
              {
                name: 'users',
                age: 21,
                province: '江苏',
                city: '南京',
                district: '玄武区'
              }
            ]
          }
        ]
      },
      {
        title: '镇江',
        children: [
          {
            title: '京口区',
            children: [
              {
                name: 'user6',
                age: 21,
                province: '江苏',
                city: '镇江',
                district: '京口区'
              }
            ]
          }
        ]
      }
    ]
  }
];
type uniformList = Partial<typeof userList & typeof list>;

describe.each([
  [userList, userListCondition, userListResult],
  [list, listCondition, listResult]
])('test %o transform to  %o', (origin, condition, result) => {
  it('should transform correctly', () => {
    const res = data2Tree<uniformList, string>(origin, condition);
    expect(res).toEqual(result);
  });
});
