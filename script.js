var penampung_json_1;
var penampung_json_2;
var penampung_json_3;
var penampung_json_4;
var penampung_data_waktu;
const randomFraction = Math.random();
const randomValue = 1000;//Math.floor(randomFraction * (5000 - 2000 + 1)) + 2000;

var suhu_atas = 0;
var suhu_tengah = 0;
var suhu_bawah = 0;
var suhu_luar = 0;
var suhu_depan = 0;
var suhu_belakang = 0;
var suhu_greenhouse = 0;
var kelembapan_atas = 0;
var kelembapan_tengah = 0;
var kelembapan_bawah = 0;
var kelembapan_luar = 0;
var kelembapan_depan = 0;
var kelembapan_belakang = 0;
var kelembapan_greenhouse = 0;
var data_HI_atas = 0;
var data_HI_tengah = 0;
var data_HI_bawah = 0;
var data_HI_luar = 0;
var data_HI_depan = 0;
var data_HI_belakang = 0;
var data_HI_greenhouse = 0;
var ppm_gas_atas = 0;
var ppm_gas_tengah = 0;
var ppm_gas_bawah = 0;
var kecepatan_angin = 0;
var kecepatan_angin_atas = 0;
var kecepatan_angin_tengah = 0;
var kecepatan_angin_bawah = 0;
var intensitas_cahaya_atas = 0;
var intensitas_cahaya_tengah = 0;
var intensitas_cahaya_bawah = 0;
var liter_tong_atas = 0.00;
var liter_tong_bawah = 0.00;
var persen_air_atas = 0.00;
var persen_air_bawah = 0.00;
var kecepatan_minum_atas = 0.00;
var kecepatan_minum_bawah = 0.00;
var nomor_perangkat;
var indikator_ultrasonik = 0;
var intensitas_cahaya;
var jarak_ultrasonik;
var ult;
var tinggi_air_1;
var tinggi_air_2;
var indikator_p1 = 0;
var indikator_p2 = 0;
var indikator_p3 = 0;
var indikator_p4 = 0;
var indikator_p5 = 0;
var indikator_p6 = 0;
var target_heat_index = 155;
var target_suhu_atas_maksimal = 33;
var kipas_1 = 0;
var kipas_2 = 0;
var kipas_3 = 0;
var kipas_4 = 0;
var kipas_5 = 0;
var kipas_6 = 0;
var kipas_7 = 0;
var kipas_8 = 0;
var kipas_9 = 0;
var kipas_10 = 0;
var rpm_kipas;
var grafik_waktu;
var grafik_suhu_atas;
var grafik_suhu_luar;
var grafik_kelembapan_atas;
var voltage = 0;
var current = 0;
var power = 0;
var energy = 0;
var frequency = 0;
var pf = 0;
var jam = 0;
var lampu_luar = 0;
var kode_cuaca = 0;
var teks_cuaca = "";
var indikator_cuaca = 0;
var tanggal_masuk_ayam;
var tanggal_masuk_ayam_hari;
var tanggal_masuk_ayam_bulan;
var tanggal_masuk_ayam_tahun;
var mode_kandang = 1;
var usia_ayam = 0;
var target_suhu;
var suhu_minimal;
var suhu_maksimal;
var kipas_relay_1;
var kipas_relay_2;
var kipas_relay_3;
var kipas_relay_4;
var kipas_relay_5;
var waktu_hidup = 0;
var waktu_mati = 0;
var status_timer = 0;
var detail_kipas = "---";
var debug_155 = "---";
var jumlah_ayam_awal = 0;
var jumlah_ayam_mati = 0;
var jumlah_pakan_sak = 0;
var bobot_rata_rata = 0;
var harga_kontrak_ayam = 0;
var harga_bibit_ayam = 0;
var harga_obat_ayam = 0;
var harga_pakan_kg = 0;
var epr_jumlah_ayam_mati;
var epr_jumlah_pakan_sak;

setInterval(data_thingspeak,randomValue);
setInterval(eksekutor,100);
setInterval(wkt_on, 1000);

function toggleSidebar() {
    const sidebar = document.getElementById("mySidebar");
    const overlay = document.getElementById("overlay");
    const menuBtn = document.getElementById("menuBtn");
    const isOpen = sidebar.style.width === "250px";

    if (isOpen) {
      sidebar.style.width = "0";
      overlay.classList.remove("active");
      menuBtn.classList.remove("active");
    } else {
      sidebar.style.width = "250px";
      overlay.classList.add("active");
      menuBtn.classList.add("active");
    }
  }

function data_thingspeak(){
    const url = 'https://api.thingspeak.com/channels/2172969/feeds.json?results=1';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const fieldData_1 = data.feeds[0].field1;
                const fieldData_2 = data.feeds[0].field2;
                const fieldData_3 = data.feeds[0].field3;
                const fieldData_4 = data.feeds[0].field4;
                const lastUpdateTime = data.feeds[0].created_at;
                var json_chart = '{"gsa":[250,257,259,262,268,278,289,299,302,311,317,322,327,333,337,325,320,310,301,292,281,270,267,261,258],"gwk":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"gka":[850,857,859,762,268,278,289,299,302,311,317,322,327,333,337,325,320,310,301,292,281,270,267,261,258]}'
                var objek1 = JSON.parse(fieldData_1);
                var objek2 = JSON.parse(fieldData_2);
                var objek3 = JSON.parse(fieldData_3);
                var objek4 = JSON.parse(fieldData_4);
                penampung_json_1 = objek1;
                penampung_json_2 = objek2;
                penampung_json_3 = objek3;
                penampung_json_4 = objek4;
                penampung_data_waktu = lastUpdateTime;
                //penguraiJson(1,fieldData_1,1);
                //penguraiJson(1,fieldData_2,2);
                //penguraiJson(1,fieldData_3,3);
                //penguraiJson(1,fieldData_4,4);
                //document.getElementById('messages').innerHTML = 'field1 : ' + fieldData_1 + ', field2 : ' + fieldData_2 + ', field3 : ' + fieldData_3 + ', field4 : ' + fieldData_4;
                var loading_1 = document.getElementById("loading_1");
                loading_1.style.display = "none";
                eksekutor();
            })
            //.catch(error => console.error('Error fetching data:', error));           
}

function eksekutor(){
    updateTime();
    
}

function updateTime() {
    const now = new Date();
    const waktu_thingspeak = new Date(penampung_data_waktu);
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    const dayOfWeek = days[now.getDay()];
    const dayOfMonth = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());

    const currentDate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
    const currentTime = `${hours}:${minutes}:${seconds}`;
    const startDate = new Date(tanggal_masuk_ayam);
    startDate.setHours(startDate.getHours());
    const differenceInMilliseconds = now - startDate;
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

    const waktu_online = now - waktu_thingspeak;
    waktu_online2 = Math.floor(waktu_online / 1000);

    document.getElementById('current-date').textContent = currentDate;
    document.getElementById('current-time').textContent = currentTime;
    
}

function formatTime(time) {
    return (time < 10 ? '0' : '') + time;
}

function wkt_on(){
    const now = new Date();
    const waktu_thingspeak = new Date(penampung_data_waktu);
    const waktu_online = Math.floor((now - waktu_thingspeak) / 1000);

    var onl = document.getElementById('ind_online');
    document.getElementById('data-container').innerHTML = waktu_online;            
    
    if(waktu_online<30){
        onl.style.backgroundColor = "rgb(59, 225, 89)";
    }else{
        onl.style.backgroundColor = "red";
    }
}

function mapNilai(nilai, dariMin, dariMax, keMin, keMax) {
    return (nilai - dariMin) * (keMax - keMin) / (dariMax - dariMin) + keMin;
}
