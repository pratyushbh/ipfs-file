import {create} from 'ipfs-http-client';
let hash={
    hash:'no Hash'
}
function setHash(callback){
    callback();
}
export default function IPFS(){
    const ipfs = create({
        host:"ipfs.infura.io",
        port:5001,
        protocol:'https'
      });
    const  AddData= (data)=>{
        const results=  ipfs.add(data).then((result)=>{
            setHash(()=>{hash.hash=result.path})
            return result.path;
        });
        console.log(hash.hash);
        return results
    }
    console.log(hash.hash);
    const getData= async ()=>{
        let results= await ipfs.get(hash)
        for await (data of results){
            console.log(Buffer.from(data).toString());
        }
    }
    return [ipfs,AddData];
}