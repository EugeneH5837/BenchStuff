FROM openjdk:8-jdk-alpine
RUN addgroup -S spring && adduesr -S spring -G spring
USER spring:spring
COPY ./build/libs/demo-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
EXPOSE 8081