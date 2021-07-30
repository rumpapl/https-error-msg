import React, { useEffect, useState } from 'react';


const ErrorMsg = (props) => {
    const [errorMsg, setErrorMsg] = useState('');
    useEffect(() => {

        if (props.statusCode) {
            if (props.statusCode === 400) {
                setErrorMsg('400 Bad Request')
            }
            else if (props.statusCode === 401) {
                setErrorMsg('401 Unauthorized (*Provide a valid username and password)')
            }
            else if (props.statusCode === 403) {
                setErrorMsg('403 Forbidden (*Lack of permission to access the requested resource)')
            }
            else if (props.statusCode === 404) {
                setErrorMsg('404 Not Found')
            }
            else if (props.statusCode === 405) {
                setErrorMsg('Method Not Allowed (*Tried to use an HTTP method that the resource does not allow)')
            }
            else if (props.statusCode === 406) {
                setErrorMsg('406 Not Acceptable')
            }
            else if (props.statusCode === 409) {
                setErrorMsg('409 Conflict')
            }
            else if (props.statusCode === 412) {
                setErrorMsg('412 Precondition Failed')
            }
            else if (props.statusCode === 415) {
                setErrorMsg('415 Unsupported Media Type')
            }
            else if (props.statusCode === 500) {
                setErrorMsg('500 Internal Server Error (*Server misconfiguration or missing packages )')
            }
            else if (props.statusCode === 502) {
                setErrorMsg('502 Bad Gateway (*The server is a gateway or proxy server, and is not receiving a valid response from the backend servers that should actually fulfill the request.)')
            }
            else if (props.statusCode === 503) {
                setErrorMsg('503 Service Unavailable')
            }
            else if (props.statusCode === 505) {
                setErrorMsg('505 HTTP Version Not Supported')
            }
            else if (props.statusCode === 507) {
                setErrorMsg('507 Insufficient Storage (WebDAV)')
            }
            else if (props.statusCode === 508) {
                setErrorMsg('508 Loop Detected (WebDAV)')
            }
            else if (props.statusCode === 509) {
                setErrorMsg('509 Bandwidth Limit Exceeded (Apache)')
            }
            else if (props.statusCode === 511) {
                setErrorMsg('511 Network Authentication Required')
            }
            else if (props.statusCode === 203) {
                setErrorMsg('203 Non-Authoritative Information')
            }
            else if (props.statusCode === 204) {
                setErrorMsg('204 No Content (*The REST API declines to send back any status message or representation in the response message’s body)')
            }
            else {
                setErrorMsg(' Unknown Error with Status Code(' + props.statusCode + ')')
            }
        }


    })

    return (
        <div>
            <span>{errorMsg}</span>
        </div>
    )
}

export default ErrorMsg
