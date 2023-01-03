import { FlatList, ScrollView,Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import React ,{useState}from 'react'

const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width

const TodoApp = () => {
    const [input, setInput] = useState("")
    const [desc, setDesc] = useState("")
    const [priority, setPriority] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [showStatus, setShowStatus] = useState("")
    const [showForm, setshowForm] = useState(false)
    const [showDueDate, setShowDueDate] = useState("")
    const [showPriority, setShowPriority] = useState(false)
    const [searchText, setsearchText] = useState("")
    const [searchResults, setsearchResults] = useState([])
    const [completedTask, setcompletedTask] = useState([])
    // const [filter, setfilter] = useState(second)
    const [todoList, setTodoList] = useState([
        {"createdDate": "Tue Jan 03 2023 08:09:07","descExpanded":false, "desc": "Thsi is some description about ecommerce react nativ etask Thsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etask", "dueDate": "Tue Jan 03 2023 08:09:02 ", "id": 0.5241634597453948, "name": "React Native Task ", "priority": "High", "status": "pending"},
        {"createdDate": "Tue Jan 03 2023 08:09:07","descExpanded":false, "desc": "Thsi is some description about ecommerce react nativ etask", "dueDate": "Tue Jan 03 2023 08:09:02 ", "id": 0.5241634597453948, "name": "React Native Task ", "priority": "High", "status": "pending"},
        {"createdDate": "Tue Jan 03 2023 08:09:07","descExpanded":false, "desc": "Thsi is some description about ecommerce react nativ etask", "dueDate": "Tue Jan 03 2023 08:09:02 ", "id": 0.5241634597453948, "name": "React Native Task ", "priority": "High", "status": "completed"},
        {"createdDate": "Tue Jan 03 2023 08:09:07","descExpanded":false, "desc": "Thsi is some description about ecommerce react nativ etask", "dueDate": "Tue Jan 03 2023 08:09:02 ", "id": 0.5241634597453948, "name": "React Native Task ", "priority": "High", "status": "pending"},
        {"createdDate": "Tue Jan 03 2023 08:09:07","descExpanded":false, "desc": "Thsi is some description about ecommerce react nativ etask", "dueDate": "Tue Jan 03 2023 08:09:02 ", "id": 0.5241634597453948, "name": "React Native Task ", "priority": "High", "status": "pending"},
        {"createdDate": "Tue Jan 03 2023 08:09:07","descExpanded":false, "desc": "Thsi is some description about ecommerce react nativ etask", "dueDate": "Tue Jan 03 2023 08:09:02 ", "id": 0.5241634597453948, "name": "React Native Task ", "priority": "High", "status": "pending"},
        {"createdDate": "Tue Jan 03 2023 08:09:07","descExpanded":false, "desc": "Thsi is some description about ecommerce react nativ etask", "dueDate": "Tue Jan 03 2023 08:09:02 ", "id": 0.5241634597453948, "name": "React Native Task ", "priority": "High", "status": "pending"},
        {"createdDate": "Tue Jan 03 2023 08:09:07","descExpanded":false, "desc": "Thsi is some description about ecommerce react nativ etask", "dueDate": "Tue Jan 03 2023 08:09:02 ", "id": 0.5241634597453948, "name": "React Native Task ", "priority": "High", "status": "pending"},
        {"createdDate": "Tue Jan 03 2023 08:09:07","descExpanded":false, "desc": "Thsi is some description about ecommerce react nativ etask", "dueDate": "Tue Jan 03 2023 08:09:02 ", "id": 0.5241634597453948, "name": "React Native Task ", "priority": "High", "status": "pending"},
        {"createdDate": "Tue Jan 03 2023 08:09:07","descExpanded":false, "desc": "Thsi is some description about ecommerce react nativ etask", "dueDate": "Tue Jan 03 2023 08:09:02 ", "id": 0.5241634597453948, "name": "React Native Task ", "priority": "High", "status": "pending"},

    ])

    React.useEffect(() => {
        let complete=todoList.filter(item=>item.status==="completed")
        setcompletedTask(complete)
        
    }, [todoList.length])
    

    const handleAddTask=()=>{
        if(!input.length){
            alert("Please write Task")
        }else{

            const temp = todoList.slice(0)
            temp.push({
                name:input, 
                id:Math.random(todoList.length*Math.random()), 
                createdDate: String( new Date()),
                dueDate:dueDate,
                status:"pending",
                desc:desc,
                priority:priority
            })
            console.log(temp)
            setTodoList(temp)
            setDesc("")
            setDueDate("")
            setPriority("")
            setInput("")
        }
    }

    const handleSelectPriority=(val)=>{
        setPriority(val)
        setShowPriority(false)
    }

    const AddTodo =()=>{
        return(
            <View style={styles.form}>
                <Text style={styles.h1}>Add Todo</Text>
                <TextInput style={styles.input} placeholder="Enter Task Name" value={input} onChangeText={val=> setInput(val)} />
                <TextInput style={[styles.input,{height:100}]} value={desc}  placeholder="Enter Descriptions" onChangeText={val=> setDesc(val)} />
             

                   
                <TouchableOpacity style={[styles.input]} onPress={()=> setShowDueDate(!showDueDate)}> 
                    <Text style={[styles.cardText,{paddingTop:"5%",color:dueDate ?"#2596be":"gray"}]}>{dueDate||"Select Due Date"}</Text>
                </TouchableOpacity>
        
        
                <TouchableOpacity style={[styles.input]} onPress={()=> setShowPriority(!showPriority)}> 
                    <Text style={[styles.cardText,{paddingTop:"5%",color: priority?"#2596be":"gray"}]}>{priority||"Select Priority"}</Text>
                </TouchableOpacity>
           {!!showPriority&&   <View style={{width:"90%"}}>
                <TouchableOpacity style={styles.card} onPress={()=>handleSelectPriority("High")}> 
                    <Text style={styles.cardText}>High</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={()=>handleSelectPriority("Medium")}> 
                    <Text style={styles.cardText}>Medium</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={()=>handleSelectPriority("Low")}> 
                    <Text style={styles.cardText}>Low</Text>
                </TouchableOpacity>
              </View>}

             {!!showDueDate&& <DateTimePicker 
                is24Hour={true}
                value={new Date()}
                onChange={( event, Date) => {
                        const {  type,  nativeEvent: {timestamp}} = event;
                        {/* se/tDueDate(event.nativeEvent.timestamp) */}
                        console.log(Date)
                        setDueDate(String(Date).slice(0,String(Date).indexOf("GMT")))
                        setShowDueDate(false)
                        }

                    }
                minimumDate={new Date(1950, 0, 1)} 
                />}
                

                <TouchableOpacity style={styles.btn} onPress={()=> handleAddTask()}>
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const handleExpand=(item, index)=>{
        const list = todoList.slice(0)
        list[index].descExpanded= !list[index].descExpanded
        setTodoList(list)
    }

    const TodoCard =({item,index})=>{
        // console.log(item)
        const color={
            "high":"red",
            "medium":"orange",
            "low":"#2596be",
            "completed":"green",
            "inprogress":"blue",
            "pending":"orange"
        }
        return(
            <View style={styles.card}>
                <View style={{flexDirection:"row", alignItems:"center",  width:"100%", justifyContent:"space-between"}}>
                    <Text style={styles.h1}>{item.name}</Text>
                    <View>
                    <Text style={[styles.cardText, {fontWeight:"bold", textAlign:'right', color:color[item.priority.toLowerCase()]}]}>Priority :{item.priority}</Text>
                    <TouchableOpacity onPress={()=>setShowStatus(!showStatus)}>
                        <Text style={[styles.cardText, {fontWeight:"bold",textAlign:'right', color:color[item.status.toLowerCase()]}]}>Status :{item.status}</Text>
                    </TouchableOpacity>

                    </View>
                </View>

                <Text  style={styles.cardText2}>Assign Date: {item.createdDate}</Text>
                <Text  style={styles.cardText2}>Due Date: {item.dueDate}</Text>

                <Text  style={styles.cardText}>Details</Text>

                <Text onPress={()=>handleExpand(item,index)} style={styles.cardText2}>{item.descExpanded? item.desc:item.desc.length>200? `${item.desc.slice(0,200)}...`:item.desc}</Text>

            </View>
        )
    }
    const TodoList = ()=>{
        return(
            <View style={{minHeight:height, width:"100%", backgroundColor:'#c4c4c4', marginTop:'5%'}}>

        
             <View style={{flexDirection:"row", justifyContent:'space-between', alignItems:'center', backgroundColor:"#f3f3f3",paddingHorizontal:'2%' }}>
                <View  style={[styles.input,{width:width*0.70, height:50,  marginBottom:20 , flexDirection:'row', justifyContent:"space-between", alignItems:'center'}]} >
                    <TextInput value={searchText} placeholder="Search Here..."/>
                    <TouchableOpacity style={[styles.btn,{width:80, marginRight:-4, marginTop:0, height:40}]}>
                        <Text style={styles.btnText}>Search</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnOutline}>
                    <Text style={[styles.btnText, { color:"#2596be", fontSize:16}]}>Filter</Text>
                </TouchableOpacity>
             </View>
             {todoList.map((item,index)=> TodoCard({item,index}))}
            </View>
        )
    }

    const searchTask = ()=>{

    }
  return (
 
        <ScrollView nestedScrollEnabled>
      <View style={styles.container}>
        
        <View style={styles.header}>
            <View>
                <Text style={styles.title}>TodoApp</Text>
                <Text>Score {completedTask.length}/{todoList.length}</Text>

            </View>
            <TouchableOpacity onPress={()=>setshowForm(!showForm)} style={[styles.btn,{width:100, height:60}]}>
            <Text style={styles.btnText}>{ showForm?'View Task' :'Add Task'}</Text>
            </TouchableOpacity>
        </View>
      {!!showForm? AddTodo(): TodoList()}
      {/* {TodoList()} */}
    </View>
        </ScrollView>
  )
}

export default TodoApp

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:"2%",
        height:60,
       
        width:"100%",
        alignItems:'center'
},
    container:{
        alignItems:'center',
        width:"100%",
        minHeight:height,
        backgroundColor:'#f2f2f2'
    },
    title:{
       color:"#1f2226",
        fontSize:22,
        paddingTop:20
    },
    h1:{
       color:"#1f2226",
        fontSize:18,
        fontWeight:'bold'
    },

    form:{
        paddingHorizontal:'2%',
        paddingVertical:'4%',
        borderWidth:1,
        borderColor:"#2596be",
        borderRadius:10,
        alignItems:'center',
        width:"90%",
        marginTop:20,
        justifyContent:'center',
        minHeight:200,

    },
    input:{
       color:"#1f2226",
        borderColor:"#2596be",
        borderRadius:10,
        borderWidth:1,
        paddingHorizontal:"2%",
        height:60,
        marginTop:20,
        width:"90%",
        fontSize:16
    },
    btn:{
        backgroundColor:"#2596be",
        color:"#fff",
        borderRadius:10,
        paddingHorizontal:"4%",
        paddingVertical:"2%",
        width:"90%",
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        height:40,
    },
    btnOutline:{
        borderColor:"#2596be",
        // color:"#fff",
        borderRadius:10,
        paddingHorizontal:"4%",
        paddingVertical:"2%",
        borderWidth:1,
        width:"25%",
        alignItems:'center',
        justifyContent:'center',
        height:48,
    },
    
    btnText:{
        color:"white",
        fontSize:14
    },
    card:{
        elevation:4,
        backgroundColor:"#f2f2f2",
        paddingHorizontal:"4%",
        paddingVertical:"4%",
        // borderWidth:1,
        // borderBottomWidth:0,
        // borderBottomColor:"#d9d9d9",
        marginTop:1,
        width:"100%",
        // height:100,
        // alignItems:'center',
        justifyContent:"center"
    },
    cardText:{
       color:"#1f2226",
        fontSize:16,
        textAlign:"left",
        marginTop:10
    },
    cardText2:{
        fontSize:14,
        color:'gray'
    }


})