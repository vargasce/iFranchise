const {Tracking} = require("./tracking");
const apiKey = 'you api key';
const tracker = new Tracking(apiKey);

async function getData(url, data, method) {
    let res = await tracker.doRequest(url, data, method);
    return res;
}


////////  测试开始 //////////

//count
count = 'count?courier=1&limit=100&created_at_min=1521314361&created_at_max=1541314361'
getData(count).then(r => {
    console.log(r)
});

//

// // Get tracking results of a  tracking or List all trackings
// get = 'get?page=1&limit=100&created_at_min=1521314361&created_at_max=1541314361'
// getData(get)


// post_data = [{ "tracking_number": 'EA152563254CN', "courier_code": 'china-ems' }, { "tracking_number": 'EA152563254CN', "courier_code": 'china-ems' }]
// Update Tracking item
// getData('modifyinfo', post_data, 'PUT')

//
// archive
// getData('archive', post_data, 'POST')

//
// // Delete tracking item
// getData('delete', post_data, 'DELETE')

//
// // create  tracking number
// getData('create', post_data, 'POST')

//
// // manual update
// getData('manualupdate', post_data, 'POST')

//
// // remote tracking
// getData('remote', post_data, 'POST')

//
// // Get cost time iterm results
// getData('transittime', post_data, 'POST')

//
// // detect a carriers by tracking number
// post = { "tracking_number": 'EA152563254CN' }
// getData('detect', post, 'POST')

//
// // get all carriers
// getData('courier', post_data, 'POST')

//
// // Get status number
// status = 'status?tracking_number=EA152563254CN'
// getData(status)

//
// // Set number not update
// getData('notupdate', post_data, 'POST')

//
// // Modify courier code
// post = { "tracking_number": 'EA152563254CN', "courier_code": 'china-ems', "new_courier_code": 'china-post' }
// getData('modifycarrier', post, 'PUT')
//
// Get user info
// getData('getuserinfo')
//
// // air real time track
// getData('aircargo', post_data, 'POST')
////////  测试结束 //////////
