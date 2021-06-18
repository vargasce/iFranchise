#!/usr/bin/python
# -*- coding: UTF-8 -*-
import json
import trackApi

if __name__ == '__main__':
    apiKey = "you api Key"
    tracker = trackApi.TrackingApi(apiKey)
    # tracker.sandbox = True
    postData = [{"tracking_number": "EA152563254CN", "courier": "china-ems"}, {"tracking_number": "EA152563254CN", "courier": "china-ems"}]
    postData = json.dumps(postData)
    # Get realtime tracking results of a single tracking
    # post = {"tracking_number": "UB209300714LV", "courier": "cainiao"}
    # result = tracker.doRequest("realtime", json.dumps(post), "POST")
    # print(json.loads(result.decode('utf-8')))

    # count
    # count = "count?courier=1&limit=100&created_at_min=1521314361&created_at_max=1541314361"
    # result = tracker.doRequest(count)
    # print(json.loads(result.decode('utf-8')))

    # # Get tracking results of a  tracking or List all trackings
    # get = "get?page=1&limit=100&created_at_min=1521314361&created_at_max=1541314361"
    # result = tracker.doRequest(get)
    # print(json.loads(result.decode('utf-8')))

    # # Update Tracking item
    # result = tracker.doRequest("modifyinfo", postData, "PUT")
    # print(json.loads(result.decode('utf-8')))

    # # archive
    # result = tracker.doRequest("archive", postData, "POST")
    # print(json.loads(result.decode('utf-8')))

    # # Delete tracking item
    # result = tracker.doRequest("delete", postData, "DELETE")
    # print(json.loads(result.decode('utf-8')))

    # # create  tracking number
    # result = tracker.doRequest("create", postData, "POST")
    # print(json.loads(result.decode('utf-8')))

    # # manual update
    # result = tracker.doRequest("manualupdate", postData, "POST")
    # print(json.loads(result.decode('utf-8')))

    # # remote tracking
    # result = tracker.doRequest("remote", postData, "POST")
    # print(json.loads(result.decode('utf-8')))

    # # Get cost time iterm results
    # result = tracker.doRequest("transittime", postData, "POST")
    # print(json.loads(result.decode('utf-8')))

    # # detect a carriers by tracking number
    # post = { "tracking_number": 'EA152563254CN' }
    # result = tracker.doRequest("detect", post, "POST")
    # print(json.loads(result.decode('utf-8')))

    # # get all carriers
    # result = tracker.doRequest("carriers", postData, "POST")
    # print(json.loads(result.decode('utf-8')))

    # # Get status number
    # status = "status?tracking_number=EA152563254CN"
    # result = tracker.doRequest(status)
    # print(json.loads(result.decode('utf-8')))

    # # Set number not update
    # result = tracker.doRequest("notupdate", postData, "POST")
    # print(json.loads(result.decode('utf-8')))

    # # Modify courier code
    # post = {"tracking_number": "EA152563254CN", "courier": "china-ems", "new_express": "china-post"}
    # post = json.dumps(post)
    # result = tracker.doRequest("modifycourier", post, "PUT")
    # print(json.loads(result.decode('utf-8')))


