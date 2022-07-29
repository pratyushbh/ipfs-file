import {create} from 'ipfs-http-client';
export default function IPFS(){
    let hash;
    const ipfs = create({
        host:"ipfs.infura.io",
        port:5001,
        protocol:'https'
      });
    const  AddData= (data)=>{
        const results=  ipfs.add(data).then((result)=>{
            return result.path;
        });
        hash=results;
        return results
    }
    console.log(hash);
    const getData= async ()=>{
        let results= await ipfs.get(hash)
        for await (data of results){
            console.log(Buffer.from(data).toString());
        }
    }
    return [ipfs,AddData];
}
