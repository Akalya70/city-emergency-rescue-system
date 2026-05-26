package com.emergency.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.emergency.model.Emergency;
import com.emergency.service.EmergencyService;

@RestController
@RequestMapping("/api/emergency")
@CrossOrigin(origins = "http://localhost:3000")
public class EmergencyController {

    @Autowired
    private EmergencyService emergencyService;

    // ✅ Add emergency (Citizen)
    @PostMapping("/add")
    public Emergency addEmergency(@RequestBody Emergency emergency) {
        return emergencyService.addEmergency(emergency);
    }

    // ✅ Get all emergencies (Admin Dashboard)
    @GetMapping("/all")
    public List<Emergency> getAllEmergencies() {
        return emergencyService.getAllEmergencies();
    }

    // ✅ Update status (Admin assigns / resolves)
   @PutMapping("/update/{id}")
public Emergency updateStatus(

        @PathVariable Long id,

        @RequestParam String status,

        @RequestParam(required = false)
        String assignedTo

) {

    return emergencyService.updateEmergency(
            id,
            status,
            assignedTo
    );
}

    // ✅ Delete emergency
    @DeleteMapping("/delete/{id}")
    public String deleteEmergency(@PathVariable Long id) {
        emergencyService.deleteEmergency(id);
        return "Deleted Successfully";
    }
}