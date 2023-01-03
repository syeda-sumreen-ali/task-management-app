import {
  FlatList,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import moment from "moment"


const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const COLORS={
    danger:"#ff6030",
    warning:"yellow",
    success:"green",
    primary:'#2596be',
    txt:'#1f2226',
    high: "#ff6030",
    medium: 'orange',
    white:"#fff",
    low: '#2596be',
    completed: 'green',
    inprogress: 'blue',
    pending: 'orange',
    light:'#f2f2f2'
}

const TodoApp = () => {
  const [input, setInput] = useState('');
  const [desc, setDesc] = useState('');
  const [priority, setPriority] = useState('');
  const [dueDate, setDueDate] = useState('');

  const [showStatus, setShowStatus] = useState('');
  const [showForm, setshowForm] = useState(false);
  const [showDueDate, setShowDueDate] = useState('');
  const [showPriority, setShowPriority] = useState(false);
  const [showFilterModal, setShowfilterModal] = useState(false);
  const [showSortModal, setSortModal] = useState(false);

  
  const [searchText, setsearchText] = useState('');
  const [searchResults, setsearchResults] = useState([]);
  const [completedTask, setcompletedTask] = useState([]);
  const [selectedFilter, setselectedFilter] = useState([])
  const [filter, setfilter] = useState({
    statusFilter:[
        {type:"pending", selected:false},
        {type:"in progress", selected:false},
        {type:"completed", selected:false},
        {type:"cancelled", selected:false},
    ],
    priorityFilter:[
        {type:"low", selected:false},
        {type:"medium", selected:false},
        {type:"high", selected:false}
    ]
})

  // const [filter, setfilter] = useState(second)
  const [todoList, setTodoList] = useState([
    {
      createdDate: 'Tue Jan 03 2023 08:09:07',
      descExpanded: false,
      desc: 'Thsi is some description about ecommerce react nativ etask Thsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etaskThsi is some description about ecommerce react nativ etask',
      dueDate: 'Tue Jan 03 2023 08:09:02 ',
      id: 0.5241634597453948,
      name: 'React Native Task ',
      priority: 'High',
      status: 'pending',
    },
    {
      createdDate: 'Tue Jan 03 2023 08:09:07',
      descExpanded: false,
      desc: 'Thsi is some description about ecommerce react nativ etask',
      dueDate: 'Tue Jan 03 2023 08:09:02 ',
      id: 0.5241634597453948,
      name: 'React Native Task ',
      priority: 'High',
      status: 'pending',
    },
    {
      createdDate: 'Tue Jan 03 2023 08:09:07',
      descExpanded: false,
      desc: 'Thsi is some description about ecommerce react nativ etask',
      dueDate: 'Tue Jan 03 2023 08:09:02 ',
      id: 0.5241634597453948,
      name: 'React Native Task ',
      priority: 'High',
      status: 'completed',
    },
    {
      createdDate: 'Tue Jan 03 2023 08:09:07',
      descExpanded: false,
      desc: 'Thsi is some description about ecommerce react nativ etask',
      dueDate: 'Tue Jan 03 2023 08:09:02 ',
      id: 0.5241634597453948,
      name: 'React Native Task ',
      priority: 'High',
      status: 'pending',
    },
    {
      createdDate: 'Tue Jan 03 2023 08:09:07',
      descExpanded: false,
      desc: 'Thsi is some description about ecommerce react nativ etask',
      dueDate: 'Tue Jan 03 2023 08:09:02 ',
      id: 0.5241634597453948,
      name: 'React Native Task ',
      priority: 'High',
      status: 'pending',
    },
    {
      createdDate: 'Tue Jan 03 2023 08:09:07',
      descExpanded: false,
      desc: 'Thsi is some description about ecommerce react nativ etask',
      dueDate: 'Tue Jan 03 2023 08:09:02 ',
      id: 0.5241634597453948,
      name: 'React Native Task ',
      priority: 'High',
      status: 'pending',
    },
    {
      createdDate: 'Tue Jan 03 2023 08:09:07',
      descExpanded: false,
      desc: 'Thsi is some description about ecommerce react nativ etask',
      dueDate: 'Tue Jan 03 2023 08:09:02 ',
      id: 0.5241634597453948,
      name: 'React Native Task ',
      priority: 'High',
      status: 'pending',
    },
    {
      createdDate: 'Tue Jan 03 2023 08:09:07',
      descExpanded: false,
      desc: 'Thsi is some description about ecommerce react nativ etask',
      dueDate: 'Tue Jan 03 2023 08:09:02 ',
      id: 0.5241634597453948,
      name: 'React Native Task ',
      priority: 'High',
      status: 'pending',
    },
    {
      createdDate: 'Tue Jan 03 2023 08:09:07',
      descExpanded: false,
      desc: 'Thsi is some description about ecommerce react nativ etask',
      dueDate: 'Tue Jan 03 2023 08:09:02 ',
      id: 0.5241634597453948,
      name: 'React Native Task ',
      priority: 'High',
      status: 'pending',
    },
    {
      createdDate: 'Tue Jan 03 2023 08:09:07',
      descExpanded: false,
      desc: 'Thsi is some description about ecommerce react nativ etask',
      dueDate: 'Tue Jan 03 2023 08:09:02 ',
      id: 0.5241634597453948,
      name: 'React Native Task ',
      priority: 'High',
      status: 'pending',
    },
  ]);

  React.useEffect(() => {}, []);

  React.useEffect(() => {
    let complete = todoList.filter(item => item.status === 'completed');
    setcompletedTask(complete);
  }, [todoList.length]);

  const handleAddTask = () => {
    if (!input.length) {
      alert('Please write Task');
    } else {
      const temp = todoList.slice(0);
      temp.push({
        name: input,
        id: Math.random(todoList.length * Math.random()),
        createdDate: String(new Date()),
        dueDate: dueDate,
        status: 'pending',
        desc: desc,
        priority: priority,
      });
      console.log(temp);
      setTodoList(temp);
      setDesc('');
      setDueDate('');
      setPriority('');
      setInput('');
    }
  };

  const handleSelectPriority = val => {
    setPriority(val);
    setShowPriority(false);
  };

  const AddTodo = () => {
    return (
      <View style={styles.form}>
        <Text style={styles.h1}>Add Todo</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Task Name"
          value={input}
          onChangeText={val => setInput(val)}
        />
        <TextInput
          style={[styles.input, {height: 100}]}
          value={desc}
          placeholder="Enter Descriptions"
          onChangeText={val => setDesc(val)}
        />

        <TouchableOpacity
          style={[styles.input]}
          onPress={() => setShowDueDate(!showDueDate)}>
          <Text
            style={[
              styles.cardText,
              {paddingTop: '5%', color: dueDate ? COLORS.txt : 'gray'},
            ]}>
            {dueDate || 'Select Due Date'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.input]}
          onPress={() => setShowPriority(!showPriority)}>
          <Text
            style={[
              styles.cardText,
              {paddingTop: '5%', color: priority ? COLORS.txt: 'gray'},
            ]}>
            {priority || 'Select Priority'}
          </Text>
        </TouchableOpacity>
        {!!showPriority && (
          <View style={{width: '90%'}}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleSelectPriority('High')}>
              <Text style={styles.cardText}>High</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleSelectPriority('Medium')}>
              <Text style={styles.cardText}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleSelectPriority('Low')}>
              <Text style={styles.cardText}>Low</Text>
            </TouchableOpacity>
          </View>
        )}

        {!!showDueDate && (
          <DateTimePicker
            is24Hour={true}
            value={new Date()}
            onChange={(event, Date) => {
              const {
                type,
                nativeEvent: {timestamp},
              } = event;
              {
                /* se/tDueDate(event.nativeEvent.timestamp) */
              }
              console.log(Date);
              setDueDate(String(Date).slice(0, String(Date).indexOf('GMT')));
              setShowDueDate(false);
            }}
            minimumDate={new Date(1950, 0, 1)}
          />
        )}

        <TouchableOpacity style={styles.btn} onPress={() => handleAddTask()}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleExpand = (item, index) => {
    const list = todoList.slice(0);
    list[index].descExpanded = !list[index].descExpanded;
    setTodoList(list);
  };

 const handleFilterSelection =(type, index)=>{
        let temp = Object.assign({}, filter)
        let selectedFilterTemp= selectedFilter.slice(0)
        temp[type][index].selected= !temp[type][index].selected

        //find item in selected filter
        let find= selectedFilterTemp.find(item=> item ===  temp[type][index].type)
        console.log(find)
        if(temp[type][index].selected && !find){
            selectedFilterTemp.push(temp[type][index].type)
        }
        else if(!temp[type][index].selected && find){
            selectedFilterTemp=selectedFilter.filter(item=> item !== temp[type][index].type )
        }
        setselectedFilter(selectedFilterTemp)
        setfilter(temp)
 }
 const removeFilterItem= (name,index)=>{

    let temp= selectedFilter.filter(item=> item !==name)
    setselectedFilter(temp)
    let tempFilter= Object.assign({},filter)
    for (const key in filter.priority) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            if(element.type ===name){

            }
            
        }
    }
 }

  const filterModal=()=>{
    return(
        <View style={styles.modal}>
            <Text style={styles.h1}>Priority</Text>
            <View style={{flexDirection:'row'}}>

                {filter.priorityFilter.map((item, index)=>(
                    <TouchableOpacity onPress={()=>handleFilterSelection('priorityFilter',index)}>
                        <View style={styles.tag}>
                        <View style={styles.checkbox}>
                            <FontAwesome name={"check"} size={18} color={!item.selected?COLORS.white:COLORS.primary}/>
                        </View>
                        <Text style={[styles.cardText2,{ marginLeft:10}]}>{item.type}</Text>
                    </View>   
                        
                    </TouchableOpacity>
                
                ))}
            </View>
            <Text style={[styles.h1, {marginTop:20, marginBottom:10}]}>Status</Text>
            <View style={{flexDirection:'row' , flexWrap:'wrap'}}>

            {filter.statusFilter.map((item, index)=>(
                <TouchableOpacity onPress={()=>handleFilterSelection('statusFilter',index)}>
            <View style={styles.tag}>
                <View style={styles.checkbox}>
                    <FontAwesome name={"check"} size={18} color={!item.selected?COLORS.white:COLORS.primary}/>
                </View>
                <Text style={[styles.cardText2,{ marginLeft:10}]}>{item.type}</Text>
            </View> 
            </TouchableOpacity>    
            ))}

            </View>
        </View>
    )
  }

  const TodoCard = ({item, index}) => {
    return (
      <View style={styles.card}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            width: '100%',
            justifyContent: 'space-between',
          }}>
      
      <View>
      <Text style={[styles.h1,{marginBottom:10, color:COLORS.primary}]}>{item.name}</Text>
        <Text style={styles.cardText2}>Assign Date: {moment(item.createdDate).format("ddd MMM DD YYYY")}</Text>
        <Text style={styles.cardText2}>Due Date:{moment(item.createdDate).format("ddd MMM DD YYYY")}</Text>
      </View>
          <View>
            <View style={{flexDirection:"row" , alignItems:"center", justifyContent:"flex-end"}}>

          <TouchableOpacity>
                <FontAwesome name="trash" color={"#ff6030"} size={25} style={{alignSelf:"flex-end", marginRight:14}}/>
            </TouchableOpacity>  
            <TouchableOpacity>
                <FontAwesome name="edit" color={"#2596be"} size={25} style={{alignSelf:"flex-end"}}/>
            </TouchableOpacity>
            </View>
            <Text
              style={[
                styles.cardText2,
                {
                    marginTop:10,
                 // fontWeight: 'bold',
                  textAlign: 'right',
                  color: COLORS[item.priority.toLowerCase()],
                },
              ]}>
              Priority : {item.priority}
            </Text>
            <TouchableOpacity onPress={() => setShowStatus(!showStatus)}>
              <Text
                style={[
                  styles.cardText2,
                  {
       //             fontWeight: 'bold',
                    textAlign: 'right',
                    color: COLORS[item.status.toLowerCase()],
                  },
                ]}>
                Status : {item.status}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      
        <Text style={[styles.cardText,{marginTop:10, marginBottom:5}]}>Details</Text>

        <Text
          onPress={() => handleExpand(item, index)}
          style={styles.cardText2}>
          {item.descExpanded
            ? item.desc
            : item.desc.length > 200
            ? `${item.desc.slice(0, 200)}...`
            : item.desc}
        </Text>
      </View>
    );
  };
  const TodoList = () => {
    return (
      <View
        style={{
          minHeight: height,
          width: '100%',
          backgroundColor: '#c4c4c4',
          marginTop: '5%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#f3f3f3',
            paddingHorizontal: '2%',
          }}>
          <View
            style={[
              styles.input,
              {
                width: width * 0.75,
                height: 50,
                marginBottom: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            ]}>
            <TextInput value={searchText} placeholder="Search Here..." />
            <TouchableOpacity
              style={[
                styles.btn,
                {width: 50, marginRight: -4, marginTop: 0, height: 40},
              ]}>
              <AntDesign name="search1" color={'#fff'} size={22} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <MaterialCommunityIcons name="sort" color={COLORS.primary} size={25} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setShowfilterModal(!showFilterModal)}>
            <AntDesign name="filter" color={COLORS.primary} size={25} />
          </TouchableOpacity>
        </View>
              {!!showFilterModal && filterModal()}
           
            
        <View style={{flexDirection:"row", flexWrap:'wrap', padding:"3%", backgroundColor:COLORS.light}}>
        {selectedFilter.map((item,index)=>(
                <View style={{flexDirection:'row'}}>

                
                    <TouchableOpacity onPress={()=>removeFilterItem(item,index)}>
                        <View style={[styles.tag, {backgroundColor:COLORS.primary, margin:5, borderRadius:4}]}>
                        <Text style={[styles.cardText2,{ 
                            marginHorizontal:10, 
                            
                            color:COLORS.white}]}>{item}</Text>
                        <View style={styles.checkbox}>
                            <FontAwesome name={"close"} size={18} color={COLORS.white}/>
                        </View>
                    </View>   
                        
                    </TouchableOpacity>
             
            </View> 
              ))}
        </View>
        {todoList.map((item, index) => TodoCard({item, index}))}
      </View>
    );
  };

  const searchTask = () => {};
  return (
    <ScrollView nestedScrollEnabled>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>TodoApp</Text>
            <Text>
              Score {completedTask.length}/{todoList.length}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => setshowForm(!showForm)}
            style={[styles.btn, {width: 100, height: 60}]}>
            <Text style={styles.btnText}>
              {showForm ? 'View Task' : 'Add Task'}
            </Text>
          </TouchableOpacity>
        </View>
        {!!showForm ? AddTodo() : TodoList()}
        {/* {TodoList()} */}
      </View>
    </ScrollView>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    height: 60,

    width: '100%',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    width: '100%',
    minHeight: height,
    backgroundColor: COLORS.light,
  },
  title: {
    color: '#1f2226',
    fontSize: 22,
    paddingTop: 20,
  },
  h1: {
    color: '#1f2226',
    fontSize: 19,
    // fontWeight: 'bold',
  },
  modal:{
    backgroundColor:COLORS.white,
    padding:'5%',
  },
  tag:{ 
    flexDirection:'row',
    alignItems:'center',
    padding:10
},
  form: {
    paddingHorizontal: '2%',
    paddingVertical: '4%',
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
    marginTop: 20,
    justifyContent: 'center',
    minHeight: 200,
  },
  input: {
    color: '#1f2226',
    borderColor: COLORS.primary,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: '2%',
    height: 60,
    marginTop: 20,
    width: '90%',
    fontSize: 16,
  },
  btn: {
    backgroundColor: COLORS.primary,
    color: '#fff',
    borderRadius: 10,
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: 40,
  },
  btnOutline: {
    borderColor: COLORS.primary,
    // color:"#fff",
    borderRadius: 10,
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    borderWidth: 1,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
  },

  btnText: {
    color: 'white',
    fontSize: 15,
  },
  card: {
    elevation: 4,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: '4%',
    paddingVertical: '4%',
    // borderWidth:1,
    // borderBottomWidth:0,
    // borderBottomColor:"#d9d9d9",
    marginTop: 1,
    width: '100%',
    // height:100,
    // alignItems:'center',
    justifyContent: 'center',
  },
  cardText: {
    color: '#1f2226',
    fontSize: 18,
    textAlign: 'left',
    // marginTop: 5,
  },
  cardText2: {
    fontSize: 16,
    color: 'gray',
  },

  checkbox:{
    borderWidth:2,
    borderRadius:5,
    borderColor:COLORS.primary
  }
});
