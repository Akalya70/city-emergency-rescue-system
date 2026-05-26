package com.emergency.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emergency.model.Emergency;
import com.emergency.repository.EmergencyRepository;

@Service
public class EmergencyService {

    @Autowired
    private EmergencyRepository emergencyRepository;

    // ✅ Add emergency (default = Pending)
    public Emergency addEmergency(Emergency emergency) {
        emergency.setStatus("PENDING");
        return emergencyRepository.save(emergency);
    }

    // ✅ Get all emergencies
    public List<Emergency> getAllEmergencies() {
        return emergencyRepository.findAll();
    }

    // ✅ Update emergency safely
    public Emergency updateEmergency(Long id, String status, String assignedTo) {

        Emergency emergency = emergencyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Emergency not found with id: " + id));

        if (status != null && !status.isEmpty()) {
            emergency.setStatus(status);
        }

        if (assignedTo != null && !assignedTo.isEmpty()) {
            emergency.setAssignedTo(assignedTo);
        }

        return emergencyRepository.save(emergency);
    }

    // ✅ Delete emergency safely
    public void deleteEmergency(Long id) {

        if (!emergencyRepository.existsById(id)) {
            throw new RuntimeException("Emergency not found with id: " + id);
        }

        emergencyRepository.deleteById(id);
    }
}