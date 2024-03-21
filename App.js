import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

const ProfileScreen = () => {
  const student = {
    name: "Mosito Molapo",
    studentNumber: "901016534",
    profilePicture: require("./assets/picture_profile.jpg"),
    currentSemester: "  4",
    semesterGrades: [
      { subject: "Software Modelling", grade: "A" },
      { subject: "Database System", grade: "B" },
      { subject: "Probability and Statistics", grade: "C" },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={student.profilePicture} style={styles.profilePicture} />
        <Text style={styles.studentName}>{student.name}</Text>
        <Text style={styles.studentNumber}>
          Student Number: {student.studentNumber}
        </Text>
        <Text style={styles.currentSemester}>
          Current Semester: {student.currentSemester}
        </Text>
      </View>
      <View style={styles.gradesContainer}>
        <Text style={styles.heading}>Semester Grades:</Text>
        {student.semesterGrades.map((item, index) => (
          <View key={index} style={styles.gradeItem}>
            <Text style={styles.subject}>{item.subject}</Text>
            <Text style={styles.grade}>{item.grade}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  studentName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  studentNumber: {
    fontSize: 16,
    marginBottom: 5,
  },
  currentSemester: {
    fontSize: 16,
    marginRight: 50,
  },
  gradesContainer: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  gradeItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  subject: {
    fontSize: 16,
  },
  grade: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
