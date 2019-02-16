package com.meubem.core.repo;

import com.meubem.core.model.Question;
import org.springframework.data.repository.CrudRepository;

public interface QuestionRepository extends CrudRepository<Question, Long> {
}
