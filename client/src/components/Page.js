import React from 'react'
import PageParagraphs from './PageParagraphs'

const Page = ({pageContent}) => {
    
console.log("page content, pages array: ", pageContent)

    const paragraphs = pageContent.pageText.map((paragraph) => {
        return <PageParagraphs paragraph={paragraph}/>
    })

    

    return (
        <div class="storyPage">
        
            <div class="storyLeft">
                <h3>{pageContent.pageHeading}</h3>
                {paragraphs}
            </div>
            <div class="storyRight">
                <img src={pageContent.pageImageUrl} alt={pageContent.pageImageAlt} />
            </div>
        </div>

    )

}

export default Page;