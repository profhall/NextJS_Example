import Cors from 'micro-cors'
import {gql, ApolloServer} from 'apollo-server-micro'
import videos from '../../db/vimeo'

export const config = {
    api:{
        bodyParser: false
    }
}
const typeDefs = gql`
type Video {
    id: ID
    title: String
    description: String
    url: String
    upload_date: String
    thumbnail_large: String
}

    type Query {
        getVids: [Video]
    }
 `  
    const resolvers = {
        Query: {
            getVids: () => videos,
           
        }
    }

    const cors = Cors()


    const apolloServer = new ApolloServer ({
        typeDefs,
        resolvers,
        context: ({ req})=>{

        },
        introspection:true,
        playground:true,
    })


    const serverStart = apolloServer.start();

    export default cors(async(req,res)=>{
        if(req.method === 'OPTIONS'){
            res.end()
            return false;
        }
        await serverStart; 
        await apolloServer.createHandler({path:'/api/graphql'})(req,res);
    })

