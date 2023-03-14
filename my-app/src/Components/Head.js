import React, { Fragment } from 'react'

const Head = (props) => {
    document.title = props.title;
    document.querySelector('meta[name="description"]').setAttribute('content', props.description)
    React.useEffect(() => {

    }, [props])

  return (
    <></>
  )
}

export default Head;