import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, Alert, StyleSheet, SafeAreaView,
} from 'react-native';
import InfoCard from './src/components/InfoCard';
import MahasiswaScreen from './src/screens/MahasiswaScreen';

export default function App() {
  const [halaman, setHalaman] = useState('soal1');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setHalaman('soal1')}>
          <Text style={[styles.tab, halaman === 'soal1' && styles.tabAktif]}>
            Soal 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setHalaman('soal2')}>
          <Text style={[styles.tab, halaman === 'soal2' && styles.tabAktif]}>
            Soal 2
          </Text>
        </TouchableOpacity>
      </View>

      {halaman === 'soal1' ? (
        <View>
          <InfoCard
            title="Mengerjakan Laporan Praktikum"
            status="selesai"
            onPress={() => Alert.alert('Detail', 'Laporan praktikum sudah selesai')}
          />
          <InfoCard
            title="Membuat Aplikasi React Native"
            status="proses"
            onPress={() => Alert.alert('Detail', 'Aplikasi masih dalam proses')}
          />
        </View>
      ) : (
        <MahasiswaScreen />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2', padding: 16, paddingTop: 48 },
  tabs: { flexDirection: 'row', gap: 16, marginBottom: 16 },
  tab: { fontSize: 16, color: '#888' },
  tabAktif: { color: '#1976d2', fontWeight: 'bold' },
});
