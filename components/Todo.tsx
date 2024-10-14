// @ts-ignore
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';


const TodoList: React.FC = () => {
    const [tasks, setTasks] = useState<any[]>([]);
    const [newTask, setNewTask] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('https://random-data-api.com/api/v3/projects/557f1c01-ec87-497d-b2b1-b95fe4216790?api_key=7zjGlPMCunvMQ8AZRm7S4w');
                const json = await response.json();
                setTasks(json.tasks);
            } catch (e) {
                setError('Failed to fetch tasks');
            }
        };
        fetchTasks();

        return () => {

        };
    }, []);

    const addTask = () => {
        if (!newTask) {
            setError('Task cannot be empty');
            return;
        }
        setTasks([...tasks, { id: tasks.length + 1, name: newTask }]);
        setNewTask('');
        setError(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo List</Text>
            <TextInput
                style={styles.input}
                value={newTask}
                onChangeText={setNewTask}
                placeholder="Add a new task"
            />
            <Button title="Add Task" onPress={addTask} />
            {error && <Text style={styles.error}>{error}</Text>}
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Text style={styles.task}>{item.name}</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    input: { borderWidth: 1, padding: 10, marginBottom: 10 },
    task: { fontSize: 16, padding: 10 },
    error: { color: 'red', marginTop: 10 },
});

export default TodoList;
