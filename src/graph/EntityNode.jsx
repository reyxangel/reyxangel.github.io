export default function EntityNode({ data }) {

    return (

        <div
            style={{

                background:"#141414",

                color:"white",

                padding:"14px",

                borderRadius:"14px",

                border:"1px solid #444",

                width:"220px"

            }}
        >

            <small>

                {data.type}

            </small>

            <h3>

                {data.title}

            </h3>

            <p>

                {data.year}

            </p>

        </div>

    );

}