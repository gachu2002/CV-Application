/* eslint-disable react/prop-types */

function Preview ({heading, content})
 {
    return (
        <section>
            <h3>{heading.name}</h3>
            <div>
                {content.map((field) => {
                    return (
                        <div key={field.name}>
                            <h4>{field.label}</h4>
                            <p>{field.value}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Preview;