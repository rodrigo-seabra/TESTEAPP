import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import CustomAlert from '../Components/CustomAlert';

export default function SignUpScreen() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [phone, setPhone] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    async function RealizaCadastro() {
        Keyboard.dismiss();
        await fetch('https://fakestoreapi.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: email,
                    username: username,
                    password: password,
                    name: {
                        firstname: name,
                        lastname: lastname,
                    },
                    address: {
                        city: city,
                        street: street,
                        number: number,
                        zipcode: zipcode,
                        geolocation: {
                            lat: '-37.3159',
                            long: '81.1496'
                        }
                    },
                    phone: phone,
                }
            )
        }).then(res => res.json())
            .then(json => {
                setAlertMessage(json.id ? 'Cadastro realizado com sucesso!' : 'Erro ao cadastrar. Tente novamente.');
                setAlertType(json.id ? 'success' : 'error');
                setAlertVisible(true);
                setEmail('');
                setStreet('');
                setLastname('');
                setName('');
                setPhone('');
                setPassword('');
                setNumber('');
                setZipcode('');
                setCity('');
                setUsername('');         
            })
            .catch(err => {
                setAlertMessage('Erro ao cadastrar. Tente novamente.');
                setAlertType('error');
                setAlertVisible(true);
            });
    };

    function closeAlert() {
        setAlertVisible(false);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
                {alertVisible && (
                <CustomAlert
                    visible={alertVisible}
                    message={alertMessage}
                    type={alertType}
                    onClose={closeAlert}
                />
            )}
            <Image source={require("../../assets/LogoAPP.png")} style={styles.img} />
            <View style={styles.inputRow}>
                <View style={styles.inputViewHalf}>
                    <TextInput
                        inputMode='text'
                        style={styles.inputText}
                        placeholder="Nome"
                        placeholderTextColor="#fff"
                        TextInput={name}
                        onChangeText={(digatado) => setName(digatado)}
                    />
                </View>
                <View style={styles.inputViewHalf}>
                    <TextInput
                        inputMode='text'
                        style={styles.inputText}
                        placeholder="Sobrenome"
                        placeholderTextColor="#fff"
                        TextInput={lastname}
                        onChangeText={(digatado) => setLastname(digatado)}
                    />
                </View>
            </View>

            <View style={styles.inputView}>
                <TextInput
                    inputMode='email'
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#fff"
                    TextInput={email}
                    onChangeText={(digatado) => setEmail(digatado)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    inputMode='text'
                    style={styles.inputText}
                    placeholder="Cidade"
                    placeholderTextColor="#fff"
                    TextInput={city}
                    onChangeText={(digatado) => setCity(digatado)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    inputMode='text'
                    style={styles.inputText}
                    placeholder="Rua"
                    placeholderTextColor="#fff"
                    TextInput={street}
                    onChangeText={(digatado) => setStreet(digatado)}
                />
            </View>
            <View style={styles.inputRow}>
                <View style={styles.inputViewHalf}>
                    <TextInput
                        inputMode='numeric'
                        style={styles.inputText}
                        placeholder="Número"
                        placeholderTextColor="#fff"
                        TextInput={number}
                        onChangeText={(digatado) => setNumber(digatado)}
                    />
                </View>
                <View style={styles.inputViewHalf}>
                    <TextInput
                        inputMode='text'
                        style={styles.inputText}
                        placeholder="CEP"
                        placeholderTextColor="#fff"
                        TextInput={zipcode}
                        onChangeText={(digatado) => setZipcode(digatado)}
                    />
                </View>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    inputMode='numeric'
                    style={styles.inputText}
                    placeholder="Telefone"
                    placeholderTextColor="#fff"
                    TextInput={phone}
                    onChangeText={(digatado) => setPhone(digatado)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    inputMode='text'
                    style={styles.inputText}
                    placeholder="Nome de usuário"
                    placeholderTextColor="#fff"
                    TextInput={username}
                    onChangeText={(digatado) => setUsername(digatado)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    inputMode='text'
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Senha"
                    placeholderTextColor="#fff"
                    TextInput={password}
                    onChangeText={(digatado) => setPassword(digatado)}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={RealizaCadastro}>
                <Text style={styles.loginText}>CADASTRAR</Text>
            </TouchableOpacity>
            <Modal
                transparent={true}
                visible={alertVisible}
                animationType='fade'
                onRequestClose={() => setAlertVisible(false)}
            >
                <TouchableWithoutFeedback onPress={closeAlert}>
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContent}>
                            <CustomAlert
                                message={alertMessage}
                                type={alertType}
                                onClose={closeAlert}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>



        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        width: '100%',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
        marginBottom: 20,
    },
    inputViewHalf: {
        width: '48%', // Usamos 48% em vez de 50% para deixar um pequeno espaço entre os campos
        backgroundColor: '#696969',
        borderRadius: 5,
        height: 60,
        paddingHorizontal: 20,
    },
    inputView: {
        width: '85%',
        backgroundColor: '#696969',
        borderRadius: 5,
        height: 60,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 65,
        color: '#fff',

    },
    loginBtn: {
        width: '85%',
        backgroundColor: "#32CD32",
        borderRadius: 5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 100,
    },
    loginText: {
        color: 'white',
    },
    img: {
        width: "95%",
        height: "20%",
        marginTop: 55,
    },
    msgErro: {
        fontWeight: '500',
        fontSize: 24,
        color: 'red'
    },
    msgSucesso:
    {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 26,
        color: '#32CD32'
    }
});
